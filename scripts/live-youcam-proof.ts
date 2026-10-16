import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import nextEnv from "@next/env";
import { YouCamClient } from "../src/lib/youcam-client";

nextEnv.loadEnvConfig(process.cwd());
const folder = path.resolve("docs/live");
await fs.mkdir(folder, { recursive: true });
const reportPath = path.join(folder, "STATUS.json");
const keyPresent = !!process.env.YOUCAM_API_KEY?.trim();
const runRequested = process.argv.includes("--run");
const base = { checkedAt: new Date().toISOString(), testClass: "INTEGRATION_TEST", keyPresent, apiRequestsMade: false };
async function save(report: Record<string, unknown>) {
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
}
if (!keyPresent || !runRequested) {
  await save({ ...base, status: "BLOCKED", reason: !keyPresent ? "YOUCAM_API_KEY is not configured." : "Explicit --run is required to consume one provider task.", nextStep: "Configure the key privately in .env.local, check available units, then run npm run test:live -- --run." });
  process.exitCode = 2;
} else {
  // At most one task is created. Polling never submits a replacement task.
  let apiRequestCount = 0;
  const client = new YouCamClient({ fetchImpl: async (url, init) => { apiRequestCount++; return fetch(url, init); }, mode: "live_only", timeoutMs: 20000, maxPollAttempts: 18, pollIntervalMs: 10000 });
  try {
    const result = await client.tryOn({
      userImageUrl: process.env.YOUCAM_PROOF_USER_IMAGE_URL || "https://plugins-media.makeupar.com/strapi/assets/clothes_03_cccd5d4803.jpeg",
      garmentImageUrl: process.env.YOUCAM_PROOF_GARMENT_IMAGE_URL || "https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png",
      category: "dresses",
    });
    if (result.state !== "LIVE_YOUCAM" || result.status !== "SUCCESS") throw new Error("Live proof rejected a non-live or unsuccessful result.");
    const response = await fetch(result.outputImageUrl, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error("Could not retrieve the generated image.");
    const data = Buffer.from(await response.arrayBuffer());
    const png = data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    const jpeg = data[0] === 255 && data[1] === 216 && data[2] === 255;
    const webp = data.subarray(0, 4).toString() === "RIFF" && data.subarray(8, 12).toString() === "WEBP";
    if (!png && !jpeg && !webp) throw new Error("The returned resource is not a supported image.");
    const imageFile = "result." + (png ? "png" : jpeg ? "jpg" : "webp");
    await fs.writeFile(path.join(folder, imageFile), data);
    await save({ ...base, status: "PASS", apiRequestsMade: apiRequestCount > 0, apiRequestCount, taskCreations: 1, state: result.state, endpoint: "cloth-v4", taskIdHash: createHash("sha256").update(result.taskId).digest("hex"), resultFile: imageFile, resultSha256: createHash("sha256").update(data).digest("hex"), resultBytes: data.length, elapsedMs: result.executionTimeMs, visualReview: "NOT_VERIFIED", note: "A human or agent must inspect the saved image. This does not validate Skin AI, accessories or business gains." });
  } catch (error: unknown) {
    // Avoid printing response URLs, bearer tokens or opaque provider payloads.
    const message = error instanceof Error ? error.message : "Unknown error";
    await save({ ...base, status: "FAIL", apiRequestsMade: apiRequestCount > 0, apiRequestCount, error: message.replace(/https?:\/\/\S+/g, "[redacted-url]").replaceAll(process.env.YOUCAM_API_KEY || "\0", "[redacted-key]"), visualReview: "NOT_VERIFIED" });
    process.exitCode = 1;
  }
}
