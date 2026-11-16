/**
 * Gera as versões responsivas de uma foto em public/images/:
 *   <nome>-800.webp e <nome>-1600.webp
 *
 * Uso:  node scripts/optimize-images.mjs <foto-original> <nome>
 * Ex.:  node scripts/optimize-images.mjs ~/Downloads/croissant.jpg croissant
 *
 * Requer o ffmpeg instalado e disponível no PATH.
 * Depois, confira em src/data/site.ts se width/height batem com a proporção impressa aqui.
 */
import { execFileSync } from "node:child_process";
import path from "node:path";

const WIDTHS = [800, 1600];
const QUALITY = 72;

const [input, name] = process.argv.slice(2);
if (!input || !name) {
  console.error("Uso: node scripts/optimize-images.mjs <foto-original> <nome>");
  process.exit(1);
}

const outDir = path.resolve(import.meta.dirname, "..", "public", "images");

for (const w of WIDTHS) {
  const out = path.join(outDir, `${name}-${w}.webp`);
  execFileSync("ffmpeg", [
    "-loglevel", "error", "-y", "-i", input,
    "-vf", `scale='min(${w},iw)':-2`,
    "-c:v", "libwebp", "-quality", String(QUALITY), "-compression_level", "6",
    out,
  ]);
  const dims = execFileSync("ffprobe", [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height", "-of", "csv=p=0", out,
  ]).toString().trim();
  console.log(`${path.basename(out)}  ${dims.replace(",", "x")}`);
}
