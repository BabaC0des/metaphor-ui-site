import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/*
 * The site is served from a folder named after the repository on GitHub Pages
 * and from the root of the host anywhere else, so the prefix arrives as an
 * environment variable rather than being written down twice.
 */
/*
 * The library is consumed as the built package, the same files npm would hand
 * over, rather than as the source next door. Pointing at the source would drag
 * a second copy of the React types into this project and typecheck a package
 * that is not this project's to typecheck.
 */
const library = fileURLToPath(new URL("../metaphor/packages/metaphor-ui/dist", import.meta.url));

export default defineConfig({
  base: process.env.PAGES_BASE ?? "/",
  plugins: [react()],
  resolve: {
    /*
     * The library is a link to another checkout, so its import of React would
     * resolve to that checkout's copy and the app would run two Reacts. One is
     * the whole point of dedupe.
     */
    dedupe: ["react", "react-dom"],
    alias: [
      { find: /^metaphor-ui\/metaphor\.css$/, replacement: `${library}/metaphor.css` },
      { find: /^metaphor-ui$/, replacement: `${library}/index.js` },
    ],
  },
  build: { target: "es2022", cssMinify: "lightningcss" },
});
