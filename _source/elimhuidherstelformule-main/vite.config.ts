import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/** `crossorigin` op lokale script/link-tags breekt `file://`-open in sommige browsers. */
function stripCrossorigin(): Plugin {
  return {
    name: "strip-crossorigin-index",
    apply: "build",
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin(?:=["'][^"']*["'])?/gi, "");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Relatieve paden: `file://` lokaal én FTP naar Hostinger zonder pad-bugs.
  base: "./",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), stripCrossorigin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
