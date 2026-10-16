/** Contracts reviewed against docs.perfectcorp.com on 2026-10-16.
 * Contract tests use controlled responses; they are not evidence of a live API run.
 */
import type { FileUploadResponse, VtoRequest, VtoResult } from "../types";

export interface LiveTransportConfig {
  apiKey: string;
  baseUrl?: string;
  timeoutMs?: number;
  pollIntervalMs?: number;
  maxPollAttempts?: number;
  fetchImpl?: typeof fetch;
}
function record(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : {};
}
function publicUrl(value: unknown): string {
  if (typeof value !== "string") throw new Error("YouCam: URL de résultat absente.");
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("YouCam: URL HTTPS requise.");
  return value;
}
function sourceField(image: string, prefix: "src" | "ref"): Record<string, string> {
  if (image.startsWith("youcam-file://")) {
    const id = image.slice("youcam-file://".length);
    if (!id) throw new Error("YouCam: file_id vide.");
    return { [`${prefix}_file_id`]: id };
  }
  return { [`${prefix}_file_url`]: publicUrl(image) };
}

export class YouCamLiveTransport {
  private readonly baseUrl: string;
  private readonly fetcher: typeof fetch;
  constructor(private readonly config: LiveTransportConfig) {
    if (!config.apiKey.trim()) throw new Error("Clé API YouCam manquante.");
    this.baseUrl = config.baseUrl || "https://yce-api-01.makeupar.com";
    if (new URL(this.baseUrl).protocol !== "https:") throw new Error("YouCam: serveur HTTPS requis.");
    this.fetcher = config.fetchImpl || fetch;
  }
  private async request(path: string, body?: unknown): Promise<Record<string, unknown>> {
    const response = await this.fetcher(`${this.baseUrl}${path}`, {
      method: body === undefined ? "GET" : "POST",
      headers: { Authorization: `Bearer ${this.config.apiKey}`, Accept: "application/json", ...(body === undefined ? {} : { "Content-Type": "application/json" }) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      signal: AbortSignal.timeout(this.config.timeoutMs || 20000),
    });
    if (!response.ok) {
      const error = record(await response.json().catch(() => null));
      const detail = [error.error_code, error.error].filter((value): value is string => typeof value === "string").join(" · ")
        .replaceAll(this.config.apiKey, "[redacted-key]").replace(/https?:\/\/\S+/g, "[redacted-url]").slice(0, 240);
      throw new Error(`YouCam: HTTP ${response.status}${detail ? " · " + detail : ""}. Aucun repli en simulation.`);
    }
    const envelope = record(await response.json());
    if (typeof envelope.status === "number" && envelope.status !== 200) throw new Error(`YouCam: statut applicatif ${envelope.status}.`);
    const data = record(envelope.data);
    if (!Object.keys(data).length) throw new Error("YouCam: enveloppe data absente.");
    return data;
  }
  async upload(file: { buffer?: Buffer | Uint8Array; base64?: string; fileName: string; mimeType?: string }): Promise<FileUploadResponse> {
    const bytes = file.buffer ? Uint8Array.from(file.buffer) : file.base64 ? Uint8Array.from(Buffer.from(file.base64, "base64")) : null;
    if (!bytes?.length) throw new Error("YouCam: fichier vide.");
    const mime = file.mimeType || "image/jpeg";
    if (!["image/jpeg", "image/png", "image/webp"].includes(mime)) throw new Error("YouCam: format de fichier non pris en charge.");
    const data = await this.request("/s2s/v2.0/file", { files: [{ content_type: mime, file_name: file.fileName, file_size: bytes.byteLength }] });
    const entry = record(Array.isArray(data.files) ? data.files[0] : null);
    const upload = record(Array.isArray(entry.requests) ? entry.requests[0] : null);
    if (typeof entry.file_id !== "string" || !entry.file_id || upload.method !== "PUT") throw new Error("YouCam: contrat de téléversement invalide.");
    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(record(upload.headers))) {
      if (typeof value !== "string" && typeof value !== "number") throw new Error("YouCam: en-tête upload invalide.");
      // An API bearer token must never be forwarded to the presigned storage host.
      if (key.toLowerCase() === "authorization") throw new Error("YouCam: en-tête upload interdit.");
      headers[key] = String(value);
    }
    const response = await this.fetcher(publicUrl(upload.url), { method: "PUT", headers, body: new Blob([bytes], { type: mime }), signal: AbortSignal.timeout(this.config.timeoutMs || 20000) });
    if (!response.ok) throw new Error(`YouCam: échec transfert fichier HTTP ${response.status}.`);
    return { state: "LIVE_YOUCAM", fileId: entry.file_id, fileUrl: `youcam-file://${entry.file_id}`, fileName: file.fileName, fileSize: bytes.byteLength, uploadedAt: new Date().toISOString() };
  }
  async tryOn(input: VtoRequest): Promise<VtoResult> {
    const category = ({ tops: "upper_body", bottoms: "lower_body", dresses: "full_body", outerwear: "outer", suits: "full_body" } as const)[input.category as "tops" | "bottoms" | "dresses" | "outerwear" | "suits"];
    if (!category) throw new Error("Les accessoires sont disponibles en simulation uniquement ; leur contrat live reste à intégrer.");
    if (!input.garmentImageUrl) throw new Error("YouCam: image du vêtement requise.");
    const start = Date.now();
    const data = await this.request("/s2s/v2.0/task/cloth-v4", { ...sourceField(input.userImageUrl, "src"), ...sourceField(input.garmentImageUrl, "ref"), garment_category: category });
    if (typeof data.task_id !== "string" || !data.task_id) throw new Error("YouCam: task_id absent.");
    const taskId = data.task_id;
    for (let attempt = 0; attempt < (this.config.maxPollAttempts ?? 18); attempt++) {
      if (attempt > 0) await new Promise(resolve => setTimeout(resolve, this.config.pollIntervalMs ?? 10000));
      const task = await this.request(`/s2s/v2.0/task/cloth-v4/${encodeURIComponent(taskId)}`);
      if (task.task_status === "error" || task.task_status === "failed" || task.error) throw new Error("YouCam: la tâche VTO a échoué. Aucun résultat simulé substitué.");
      if (task.task_status !== "success") continue;
      const outputImageUrl = publicUrl(record(task.results).url);
      return {
        state: "LIVE_YOUCAM", taskId, status: "SUCCESS", userImageUrl: input.userImageUrl, garmentImageUrl: input.garmentImageUrl, outputImageUrl, category: input.category,
        // The documented Clothes API does not return fidelity, fit or harmony scores.
        tryOnFidelityScore: null, fitMatchScore: null, skinToneHarmonyScore: null,
        fitAdvice: "Rendu YouCam reçu. Aucune mesure de taille ou de fit n’est renvoyée par cette API.",
        fabricDrapeAssessment: "Examinez le drapé dans l’image générée ; aucun score de matière n’est fourni.",
        executionTimeMs: Date.now() - start,
        metadata: { endpoint: "cloth-v4", scoreSource: "not_provided", unsupportedControls: ["fitMode", "size", "colorHex"] },
      };
    }
    throw new Error("YouCam: délai de polling dépassé ; aucune nouvelle tâche créée automatiquement.");
  }
}
