import { Mark } from "../Chrome";
import { Preview } from "../Preview";
import { slug } from "../catalog";
import type { Entry } from "../catalog";

const START = [
  {
    title: "Installation",
    says: "The package and the stylesheet",
    href: "#/installation",
    mark: "page",
  },
  {
    title: "Our principles",
    says: "Six rules the library holds to",
    href: "#/principles",
    mark: "rules",
  },
  {
    title: "The Storybook",
    says: "Every component, and the wiki behind them",
    href: "./storybook/",
    mark: "code",
  },
] as const;

export function Overview({ entries }: { entries: Entry[] }) {
  return (
    <>
      <h1>Overview</h1>
      <p className="lede">
        metaphor-ui renders operating system interfaces in the browser. One component tree serves
        five design languages, macOS Aqua, Windows 11 Fluent, Fedora Adwaita, iOS and Samsung One
        UI, in light and in dark. Change the menu in the header and every card below changes with
        it.
      </p>

      <div className="start">
        {START.map((one) => (
          <a key={one.title} className="start-card" href={one.href}>
            <span className="start-mark">
              <Mark shape={one.mark} />
            </span>
            <span>
              <strong>{one.title}</strong>
              <em>{one.says}</em>
            </span>
          </a>
        ))}
      </div>

      <h2>Components</h2>

      {entries.length === 0 ? <p className="lede">Nothing matches that.</p> : null}

      <div className="grid">
        {entries.map((entry) => (
          <a key={entry.name} className="card" href={`#/components/${slug(entry.name)}`}>
            <Preview>{entry.shows}</Preview>
            <h3>{entry.name}</h3>
            <p>{entry.says}</p>
          </a>
        ))}
      </div>
    </>
  );
}
