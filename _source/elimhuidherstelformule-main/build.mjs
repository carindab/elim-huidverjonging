/**
 * Dummy build voor Hostinger's Vite-deploy.
 *
 * Hostinger draait `npm run build` in deze map (_source/elimhuidherstelformule-main),
 * en serveert vervolgens `dist/`. Wij willen geen React/Vite app serveren, maar onze
 * statische landingspagina uit de repo-root. Dit script kopieert die bestanden naar
 * `dist/` zodat Hostinger ze ongewijzigd publiceert.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteRoot = __dirname;
const repoRoot = path.resolve(viteRoot, "..", "..");
const distDir = path.join(viteRoot, "dist");

const filesToCopy = ["index.html", "bedankt.html", "favicon.ico", ".htaccess", "CNAME"];
const dirsToCopy = ["css", "js", "assets"];

function rmDirSync(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function copyFile(from, to) {
  if (!fs.existsSync(from)) return false;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  return true;
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return false;
  fs.cpSync(from, to, { recursive: true, force: true });
  return true;
}

console.log("[elim-static-build] repoRoot:", repoRoot);
console.log("[elim-static-build] distDir :", distDir);

rmDirSync(distDir);
fs.mkdirSync(distDir, { recursive: true });

for (const file of filesToCopy) {
  const src = path.join(repoRoot, file);
  const dst = path.join(distDir, file);
  const ok = copyFile(src, dst);
  console.log(ok ? "  + " : "  - (overgeslagen) ", file);
}

for (const dir of dirsToCopy) {
  const src = path.join(repoRoot, dir);
  const dst = path.join(distDir, dir);
  const ok = copyDir(src, dst);
  console.log(ok ? "  + " : "  - (overgeslagen) ", dir + "/");
}

console.log("[elim-static-build] klaar — statische site staat in dist/");
