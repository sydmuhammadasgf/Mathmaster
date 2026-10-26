// Vercel Serverless Function -> /api/chat
// Proxy gratis ke NVIDIA NIM. API key disimpan di Vercel (Environment Variables), bukan di HTML.
// Env: NVIDIA_API_KEY (wajib) | NVIDIA_MODEL, NVIDIA_MODEL_2, NVIDIA_BASE (opsional)

const DEFAULT_BASE = "https://integrate.api.nvidia.com/v1";
// Daftar model gratis NVIDIA sering berubah (model lama dijawab HTTP 410).
// Server ini mengambil daftar model yang hidup dari NVIDIA, lalu mencoba satu per satu.
// Mau paksa satu model? Isi variabel NVIDIA_MODEL di Vercel.
const FALLBACKS = ["google/gemma-4-31b-it", "openai/gpt-oss-20b", "meta/llama-3.3-70b-instruct", "nvidia/llama-3.3-nemotron-super-49b-v1.5"];
const SKIP = /embed|rerank|retriev|safety|guard|reward|parse|voice|speech|tts|asr|flux|diffusion|vision|-vl|omni|clip|riva|translate/i;
const PREFER = ["gemma-4", "gpt-oss-20b", "flash", "bolt", "llama-3.3-70b", "llama-3.1-70b", "mistral-small", "qwen", "gpt-oss-120b", "llama", "nemotron", "mistral", "glm", "deepseek"];
const MAX_TRIES = 6;
let cached = null, cachedAt = 0;

async function candidates(base, key) {
  const out = [];
  if (process.env.NVIDIA_MODEL) out.push(process.env.NVIDIA_MODEL);
  if (cached && Date.now() - cachedAt < 600000) out.push(cached);
  try {
    const r = await fetch(base + "/models", { headers: { authorization: "Bearer " + key } });
    if (r.ok) {
      const j = await r.json();
      const rank = id => { const i = PREFER.findIndex(p => id.toLowerCase().includes(p)); return i < 0 ? 99 : i; };
      const ids = (j.data || []).map(x => x && x.id).filter(id => typeof id === "string" && !SKIP.test(id));
      ids.sort((a, b) => rank(a) - rank(b));
      out.push(...ids.slice(0, 8));
    }
  } catch (e) {}
  out.push(...FALLBACKS);
  return [...new Set(out)].slice(0, MAX_TRIES);
}
const MAX_MSGS = 10, MAX_CHARS = 9000, MAX_SYS = 7000;

const hits = new Map();
function tooFast(ip) {
