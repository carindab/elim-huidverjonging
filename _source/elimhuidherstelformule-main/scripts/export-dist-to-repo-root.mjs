/**
 * Kopieert Vite `dist/` naar de repo-root (map "Elim landingpage huidverjonging").
 * Daardoor is `index.html` op projectniveau de React-build — niet de oude statische homepage.
 *
 * Gebruik: npm run build:root
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(viteRoot, "../..");
const dist = path.join(viteRoot, "dist");

if (!fs.existsSync(dist)) {
  console.error("export-dist-to-repo-root: dist/ ontbreekt. Eerst: npm run build");
  process.exit(1);
}

for (const name of fs.readdirSync(dist)) {
  const from = path.join(dist, name);
  const to = path.join(repoRoot, name);
  fs.cpSync(from, to, { recursive: true, force: true });
}

console.log("export-dist-to-repo-root: dist/ → repo-root (index.html + assets/ + …)");
