# metaphor-ui-site

The documentation site for [metaphor-ui](https://github.com/BabaC0des/metaphor):
operating system interfaces in the browser, five design languages from one
component tree.

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

While `metaphor-ui` is unpublished, `package.json` links it to a sibling
checkout:

```json
"metaphor-ui": "link:../metaphor/packages/metaphor-ui"
```

Once it is on npm that line becomes a version, `"metaphor-ui": "^0.1.0"`, and
the two alias rules in `vite.config.mts` come out. Nothing else changes.

## Commands

| Command          | What it does             |
| ---------------- | ------------------------ |
| `pnpm dev`       | The site on 5173         |
| `pnpm build`     | Static files into `dist` |
| `pnpm typecheck` | Types                    |
| `pnpm lint`      | Format and JavaScript    |

`PAGES_BASE=/metaphor-ui-site/ pnpm build` sets the path prefix a GitHub Pages
project site is served from.
