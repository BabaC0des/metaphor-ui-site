import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const library = path.join(root, "../metaphor");

/*
 * What the published site is: this site at the root of the project folder and
 * the Storybook under /storybook, which is where the header and every component
 * page already point. Both are built with the same prefix, because a project
 * site is served from a folder named after the repository rather than from the
 * root of the host.
 */
const base = process.env.PAGES_BASE ?? "/metaphor-ui-site/";
const out = path.join(root, ".pages");

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

await run("pnpm", ["run", "build"], { cwd: root, env: { ...process.env, PAGES_BASE: base } });
await cp(path.join(root, "dist"), out, { recursive: true });

/*
 * The Storybook is built out of the library checkout next door and only its
 * output travels. The library stays private, so what goes online is the same
 * bundle npm would hand over, never the repository.
 */
await run("pnpm", ["--filter", "@metaphor/docs", "exec", "storybook", "build", "-o", "dist"], {
  cwd: library,
  env: { ...process.env, PAGES_BASE: `${base}storybook/` },
});
await cp(path.join(library, "apps/docs/dist"), path.join(out, "storybook"), { recursive: true });

/* Without this, GitHub Pages hides every folder whose name starts with one. */
await writeFile(path.join(out, ".nojekyll"), "");

console.log(`built ${out} for ${base}`);
