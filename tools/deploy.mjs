import { execFile } from "node:child_process";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, ".pages");

const git = (args, cwd) => run("git", args, { cwd });

/*
 * The branch GitHub Pages serves holds build output and nothing else, so it is
 * written from scratch every time rather than kept in step with a history. Its
 * subject line carries the commit of `main` it was built from, which is the
 * only thing anybody would want to know while looking at it.
 */
const { stdout: sha } = await git(["rev-parse", "--short", "HEAD"], root);
const { stdout: remote } = await git(["remote", "get-url", "origin"], root);

await run("pnpm", ["run", "build:pages"], { cwd: root });

await git(["init", "-q", "-b", "gh-pages"], out);
await git(["add", "-A"], out);
await git(["commit", "-q", "-m", `site: build of ${sha.trim()}`], out);
await git(["push", "-q", "-f", remote.trim(), "gh-pages"], out);

console.log(`published build of ${sha.trim()} to gh-pages`);
