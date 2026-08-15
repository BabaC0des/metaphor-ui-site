import { Preview } from "../Preview";
import { storybookFor } from "../catalog";
import type { Entry } from "../catalog";

export function Component({ entry }: { entry: Entry }) {
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
    </>
  );
}
