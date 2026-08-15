import { Preview } from "../Preview";
import { slug, storybookFor } from "../catalog";
import type { Entry } from "../catalog";

type Props = { entry: Entry; previous?: Entry | undefined; next?: Entry | undefined };

export function Component({ entry, previous, next }: Props) {
  return (
    <>
      <p className="crumb">{entry.group}</p>
      <h1>{entry.name}</h1>
      <p className="lede">{entry.says}</p>

      <Preview tall>{entry.shows}</Preview>

      <h2>Props and examples</h2>
      <p className="lede">
        The props table is generated from the component&rsquo;s types file, and every example on it
        runs as a test in a real browser. Both live in the Storybook rather than being copied here,
        so there is one description of each component and not two.
      </p>

      <p>
        <a className="button" href={storybookFor(entry.name)}>
          Open {entry.name} in the Storybook
        </a>
      </p>

      <nav className="step-nav" aria-label="Neighbouring components">
        {previous ? (
          <a href={`#/components/${slug(previous.name)}`}>
            <span>Previous</span>
            {previous.name}
          </a>
        ) : (
          <span />
        )}

        {next ? (
          <a className="step-next" href={`#/components/${slug(next.name)}`}>
            <span>Next</span>
            {next.name}
          </a>
        ) : null}
      </nav>
    </>
  );
}
