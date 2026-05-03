/**
 * Kopieert root bedankt.html + /css + /js naar Vite public/ zodat Hostinger (vite build → dist)
 * de bedankpagina meeneemt. Repo-layout: deze map is _source/elimhuidherstelformule-main/scripts/.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(viteRoot, "../..");
const publicDir = path.join(viteRoot, "public");

function cpFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function cpDir(from, to) {
  fs.cpSync(from, to, { recursive: true, force: true });
}

const bedanktSrc = path.join(repoRoot, "bedankt.html");
const cssSrc = path.join(repoRoot, "css");
const jsSrc = path.join(repoRoot, "js");

if (!fs.existsSync(bedanktSrc)) {
  console.error("sync-static-bedankt: bedankt.html niet gevonden op", bedanktSrc);
  process.exit(1);
}
if (!fs.existsSync(cssSrc) || !fs.existsSync(jsSrc)) {
  console.error("sync-static-bedankt: css/ of js/ ontbreekt op repo-root");
  process.exit(1);
}

cpFile(bedanktSrc, path.join(publicDir, "bedankt.html"));
cpDir(cssSrc, path.join(publicDir, "css"));
cpDir(jsSrc, path.join(publicDir, "js"));

console.log("sync-static-bedankt: bedankt.html, css/, js/ → public/");
