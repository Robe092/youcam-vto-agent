import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { YouCamLiveTransport } from "../lib/youcam-live-transport";
import { YouCamClient } from "../lib/youcam-client";

const key = "contract-fixture-not-a-secret";
const input = { userImageUrl: "https://example.test/model.jpg", garmentImageUrl: "https://example.test/coat.jpg", category: "outerwear" as const, fitMode: "relaxed" as const, colorHex: "#111111", size: "L" };
const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

describe("YouCam native contracts: controlled responses, not a live proof", () => {
  it("uses native clothing fields and polling without invented scores", async () => {
    const calls: Array<{ url: string; init?: RequestInit }> = [];
    const responses = [json({ data: { task_id: "task/id" } }), json({ data: { task_status: "running" } }), json({ data: { task_status: "success", results: { url: "https://example.test/generated.jpg" } } })];
    const client = new YouCamClient({ apiKey: key, mode: "live_only", pollIntervalMs: 0, fetchImpl: async (url, init) => { calls.push({ url: String(url), init }); return responses.shift()!; } });
    const result = await client.tryOn(input);
    assert.deepEqual(JSON.parse(String(calls[0].init?.body)), { src_file_url: input.userImageUrl, ref_file_url: input.garmentImageUrl, garment_category: "outer" });
    assert.equal(calls[0].url, "https://yce-api-01.makeupar.com/s2s/v2.0/task/cloth-v4");
    assert.ok(calls[1].url.endsWith("/cloth-v4/task%2Fid"));
    assert.equal(result.state, "LIVE_YOUCAM"); assert.equal(result.outputImageUrl, "https://example.test/generated.jpg");
    assert.equal(result.fitMatchScore, null); assert.equal(result.skinToneHarmonyScore, null); assert.equal(result.tryOnFidelityScore, null);
  });
  it("does not substitute the input image for a missing generated result", async () => {
    let count = 0;
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async () => ++count === 1 ? json({ data: { task_id: "id" } }) : json({ data: { task_status: "success", results: {} } }) });
    await assert.rejects(transport.tryOn(input), /URL de résultat absente/);
  });
  it("fails closed in auto mode on invalid credentials", async () => {
    const client = new YouCamClient({ mode: "auto", apiKey: key, fetchImpl: async () => json({ error: "Unauthorized" }, 401) });
    await assert.rejects(client.tryOn(input), /HTTP 401/);
  });
  it("reports the provider refusal while redacting credentials and URLs", async () => {
    const client = new YouCamClient({ mode: "live_only", apiKey: key, fetchImpl: async () => json({ error_code: "CreditInsufficiency", error: "No credits: " + key + " https://example.test/private?token=hidden" }, 400) });
    await assert.rejects(client.tryOn(input), (error: unknown) => {
      assert.ok(error instanceof Error);
      assert.match(error.message, /CreditInsufficiency/);
      assert.ok(!error.message.includes(key));
      assert.ok(!error.message.includes("token=hidden"));
      return true;
    });
  });
  it("stops on task errors and a finite polling budget", async () => {
    for (const status of ["error", "running"]) {
      let count = 0;
      const transport = new YouCamLiveTransport({ apiKey: key, pollIntervalMs: 0, maxPollAttempts: 2, fetchImpl: async () => ++count === 1 ? json({ data: { task_id: "id" } }) : json({ data: { task_status: status } }) });
      await assert.rejects(transport.tryOn(input), status === "error" ? /tâche VTO a échoué/ : /polling dépassé/);
      assert.equal(count, status === "error" ? 2 : 3);
    }
  });
  it("uploads metadata then bytes, without forwarding the API token to storage", async () => {
    const calls: Array<{ init?: RequestInit }> = [];
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async (_url, init) => {
      calls.push({ init });
      return calls.length === 1 ? json({ data: { files: [{ file_id: "file/id", requests: [{ method: "PUT", url: "https://storage.example.test/upload", headers: { "Content-Type": "image/png" } }] }] } }) : new Response(null, { status: 200 });
    } });
    const result = await transport.upload({ buffer: new Uint8Array([1, 2, 3]), fileName: "test.png", mimeType: "image/png" });
    assert.deepEqual(JSON.parse(String(calls[0].init?.body)), { files: [{ content_type: "image/png", file_name: "test.png", file_size: 3 }] });
    assert.equal(calls[1].init?.method, "PUT");
    assert.equal(new Headers(calls[1].init?.headers).get("Authorization"), null);
    assert.deepEqual([...new Uint8Array(await (calls[1].init?.body as Blob).arrayBuffer())], [1, 2, 3]);
    assert.equal(result.fileUrl, "youcam-file://file/id"); assert.equal(result.state, "LIVE_YOUCAM");
  });
  it("supports file IDs and refuses unsupported accessories without a request", async () => {
    let count = 0;
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async (_url, init) => {
      count++;
      if (count === 1) { assert.equal(JSON.parse(String(init?.body)).src_file_id, "file/id"); return json({ data: { task_id: "id" } }); }
      return json({ data: { task_status: "success", results: { url: "https://example.test/output.jpg" } } });
    } });
    await transport.tryOn({ ...input, userImageUrl: "youcam-file://file/id" });
    await assert.rejects(transport.tryOn({ ...input, category: "jewelry" }), /accessoires/);
    assert.equal(count, 2);
  });
  it("does not claim live skin measurements from an unverified mapping", async () => {
    const client = new YouCamClient({ apiKey: key, mode: "live_only", fetchImpl: async () => { throw new Error("Must not consume a task"); } });
    await assert.rejects(client.analyzeSkin({ imageUrl: input.userImageUrl }), /Skin AI live non validé/);
  });
});
