# metaphor-ui-site

The documentation site for `metaphor-ui`: operating system interfaces in the
browser, five design languages from one component tree.

Live at [babac0des.github.io/metaphor-ui-site](https://babac0des.github.io/metaphor-ui-site/).

The site is deliberately plain. It does not dress itself in the library, because
a documentation page wearing the thing it documents makes it impossible to tell
the specimen from the shelf. The library appears inside the preview cards, each
on its own screen, and nowhere else.

## Running it

```bash
pnpm install && pnpm dev
```

The library is consumed as the built package, the same files npm hands over,
rather than as the source next door. Build it once before starting:

```bash
pnpm --dir ../metaphor build
```

## Where the library comes from

The library lives in a checkout of its own and is not published yet, so
`package.json` links it to a sibling folder:

```json
"metaphor-ui": "link:../metaphor/packages/metaphor-ui"
```

Once it is on npm that line becomes a version, `"metaphor-ui": "^0.1.0"`, and
the two alias rules in `vite.config.mts` come out. Nothing else changes.

That link is also why this repository has no continuous integration and why the
published site is built here rather than by a workflow: a checkout on its own
cannot resolve a path that only exists on this machine.

## Commands

| Command              | What it does                                        |
| -------------------- | --------------------------------------------------- |
| `pnpm dev`           | The site on 5173                                    |
| `pnpm build`         | Static files into `dist`                            |
| `pnpm build:pages`   | The site plus the Storybook into `.pages`           |
| `pnpm preview:pages` | The same without the prefix, served on 6008         |
| `pnpm deploy`        | Build and publish `.pages` to the `gh-pages` branch |
| `pnpm typecheck`     | Types                                               |
| `pnpm lint`          | Format and JavaScript                               |

## What goes online

`pnpm build:pages` produces two things under one prefix:

```
/metaphor-ui-site/            this site
/metaphor-ui-site/storybook/  the Storybook, and the wiki inside it
```

Both are compiled output. The library's repository stays private; what travels
is the bundle npm would hand over, with no source maps.

`pnpm deploy` pushes that folder to the `gh-pages` branch, which is what GitHub
Pages serves. The branch holds build output only and is force pushed, so never
edit it by hand.
