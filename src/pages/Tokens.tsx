import { Preview } from "../Preview";

const COLOUR = [
  { name: "--mt-surface-base", says: "The ground behind everything" },
  { name: "--mt-surface-raised", says: "A window, a card, a menu" },
  { name: "--mt-surface-chrome", says: "A titlebar, a system bar" },
  { name: "--mt-surface-sunken", says: "A trough, a sidebar" },
  { name: "--mt-color-content", says: "Reading text" },
  { name: "--mt-color-label", says: "A label beside something" },
  { name: "--mt-color-muted", says: "Disabled, and text on dark ground" },
  { name: "--mt-accent", says: "The one thing per screen worth pressing" },
];

const RADII = [
  { name: "--mt-radius-window", says: "A window and a sheet" },
  { name: "--mt-radius-control", says: "A button, a field, a tab strip" },
  { name: "--mt-radius-tile", says: "An application tile" },
];

const SIZES = ["32", "25", "18", "14", "12", "11", "10"] as const;
const SPACE = [1, 2, 3, 4, 5, 6] as const;

/**
 * The page reads the tokens out of the running document rather than out of a
 * table typed here. That way it cannot fall out of step with the stylesheet,
 * and it changes with the two switches in the header like everything else.
 */
export function Tokens() {
  return (
    <>
      <p className="crumb">Getting started</p>
      <h1>Design tokens</h1>
      <p className="lede">
        103 tokens, exported from the design file and generated into custom properties. A component
        reads them and nothing else, which is what lets one tree serve five design languages.
      </p>

      <h2>Colour</h2>
      <div className="swatches">
        {COLOUR.map((token) => (
          <div key={token.name} className="swatch">
            <Preview>
              <span className="chip" style={{ background: `var(${token.name})` }} />
            </Preview>
            <code>{token.name}</code>
            <p>{token.says}</p>
          </div>
        ))}
      </div>

      <h2>Radius</h2>
      <p className="lede">
        The three that resolve per design language. Everything else is one value everywhere.
      </p>
      <div className="swatches">
        {RADII.map((token) => (
          <div key={token.name} className="swatch">
            <Preview>
              <span className="chip chip-frame" style={{ borderRadius: `var(${token.name})` }} />
            </Preview>
            <code>{token.name}</code>
            <p>{token.says}</p>
          </div>
        ))}
      </div>

      <h2>Typography</h2>
      <Preview tall>
        <div className="scale">
          {SIZES.map((size) => (
            <p key={size} style={{ fontSize: `var(--mt-size-${size})`, margin: 0 }}>
              Aa <span className="scale-name">--mt-size-{size}</span>
            </p>
          ))}
        </div>
      </Preview>

      <h2>Spacing</h2>
      <Preview>
        <div className="steps">
          {SPACE.map((step) => (
            <span key={step} className="step">
              <span style={{ width: `var(--mt-space-${step})` }} />
              <em>{step}</em>
            </span>
          ))}
        </div>
      </Preview>
    </>
  );
}
