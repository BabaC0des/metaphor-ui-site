const CODE = `import { Screen, SystemProvider, Window } from "metaphor-ui";
import "metaphor-ui/metaphor.css";

export function App() {
  return (
    <SystemProvider defaultSkin="macos" defaultMode="light">
      <Screen>
        <Window title="Documents" width={420}>
          <Window.Body>Anything at all.</Window.Body>
        </Window>
      </Screen>
    </SystemProvider>
  );
}`;

export function Installation() {
  return (
    <>
      <p className="crumb">Getting started</p>
      <h1>Installation</h1>
      <p className="lede">
        One package and one stylesheet. React 19 and a bundler that understands CSS modules, which
        means Vite, Next or an equivalent.
      </p>

      <pre className="code">
        <code>pnpm add metaphor-ui</code>
      </pre>

      <h2>The smallest thing that renders</h2>
      <pre className="code">
        <code>{CODE}</code>
      </pre>

      <h2>The two switches</h2>
      <p className="lede">
        <code>SystemProvider</code> holds which design language and which mode are running.{" "}
        <code>Screen</code> writes them onto the tree as <code>data-os</code> and{" "}
        <code>data-mode</code>. Every rule in every stylesheet hangs off those two attributes, so
        changing either one re-skins everything below without a component knowing which system it is
        in.
      </p>
      <p className="lede">
        An overlay is portalled out of the tree and therefore out of reach of those attributes.{" "}
        <code>Dialog</code> and <code>Menu</code> restate them at the top of the portal through{" "}
        <code>SkinBoundary</code>, and an overlay of your own should do the same.
      </p>

      <h2>What you get</h2>
      <ul className="plain">
        <li>41 components, from Text to the boot picker.</li>
        <li>103 design tokens as CSS custom properties, generated rather than typed.</li>
        <li>Light and dark, tokenised apart rather than derived from each other.</li>
        <li>No content: no copy, no brand, no personal data. Everything arrives as a prop.</li>
      </ul>
    </>
  );
}
