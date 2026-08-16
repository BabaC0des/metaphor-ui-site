import { useEffect, useMemo, useRef, useState } from "react";
import { SystemProvider } from "metaphor-ui";
import type { Mode, Skin } from "metaphor-ui";
import { CATALOG, GROUPS, slug } from "./catalog";
import { GuisePicker, Mark, ModeButton } from "./Chrome";
import { Component } from "./pages/Component";
import { Installation } from "./pages/Installation";
import { Overview } from "./pages/Overview";
import { Principles } from "./pages/Principles";
import { Tokens } from "./pages/Tokens";

const PAGES = [
  { id: "overview", title: "Overview" },
  { id: "installation", title: "Installation" },
  { id: "principles", title: "Our principles" },
  { id: "tokens", title: "Design tokens" },
] as const;

const route = () => window.location.hash.replace(/^#\/?/, "") || "overview";

/**
 * The shell is documentation furniture. It does not dress itself in the library:
 * a page wearing the thing it documents makes the specimen and the shelf
 * indistinguishable, and with five design languages on one switch it would make
 * the switch meaningless.
 *
 * Being furniture is not the same as having no voice. The headings are set in
 * the monospace an operating system ships, the scale is fixed, and the only
 * accent is ink. Nothing here borrows the system blue that every framework
 * default reaches for.
 */
export function App() {
  const [at, setAt] = useState(route);
  const [skin, setSkin] = useState<Skin>("macos");
  const [mode, setMode] = useState<Mode>("light");
  const [query, setQuery] = useState("");
  const [drawer, setDrawer] = useState(false);
  const search = useRef<HTMLInputElement | null>(null);
  const main = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const listen = () => setAt(route());
    window.addEventListener("hashchange", listen);
    return () => window.removeEventListener("hashchange", listen);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    main.current?.scrollTo(0, 0);
    setDrawer(false);
  }, [at]);

  /* The one shortcut worth having on a page with forty five links in a list. */
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key !== "k" || !(event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      setDrawer(true);
      window.setTimeout(() => search.current?.focus(), 0);
    };

    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);

  const found = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return CATALOG;
    return CATALOG.filter(
      (entry) =>
        entry.name.toLowerCase().includes(needle) || entry.says.toLowerCase().includes(needle),
    );
  }, [query]);

  const order = CATALOG.map((one) => slug(one.name));
  const here = order.indexOf(at.replace("components/", ""));
  const entry = here >= 0 && at.startsWith("components/") ? CATALOG[here] : undefined;

  const nav = (
    <>
      <label className="search">
        <span className="sr">Search components</span>
        <input
          ref={search}
          type="search"
          placeholder="Search components"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <kbd aria-hidden="true">⌘K</kbd>
      </label>

      <p className="side-group">Getting started</p>
      <ul className="side-list">
        {PAGES.map((page) => (
          <li key={page.id}>
            <a className={at === page.id ? "on" : ""} href={`#/${page.id}`}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>

      {GROUPS.map((group) => {
        const inGroup = found.filter((one) => one.group === group);
        if (inGroup.length === 0) return null;

        return (
          <div key={group}>
            <p className="side-group">{group}</p>
            <ul className="side-list">
              {inGroup.map((one) => (
                <li key={one.name}>
                  <a
                    className={at === `components/${slug(one.name)}` ? "on" : ""}
                    href={`#/components/${slug(one.name)}`}
                  >
                    {one.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );

  return (
    <SystemProvider key={`${skin}-${mode}`} defaultSkin={skin} defaultMode={mode}>
      <div className="shell">
        <header className="top">
          <button
            type="button"
            className="control control-square only-narrow"
            aria-expanded={drawer}
            aria-label="Menu"
            onClick={() => setDrawer(!drawer)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </button>

          <a className="brand" href="#/overview">
            <span className="brand-mark">
              <Mark shape="brand" />
            </span>
            <span className="brand-name">metaphor-ui</span>
          </a>

          <nav className="top-nav" aria-label="Sections">
            {/* A component page is documentation, so the tab stays marked there. */}
            <a className={at === "installation" ? "" : "on"} href="#/overview">
              Documentation
            </a>
            <a className={at === "installation" ? "on" : ""} href="#/installation">
              Installation
            </a>
            <a href="./storybook/">Storybook</a>
          </nav>

          <div className="top-tools">
            <GuisePicker skin={skin} onPick={setSkin} />
            <ModeButton mode={mode} onToggle={() => setMode(mode === "dark" ? "light" : "dark")} />
          </div>
        </header>

        <div className="body">
          <aside className="side">{nav}</aside>

          {drawer ? (
            <>
              <button
                type="button"
                className="scrim"
                aria-label="Close the menu"
                onClick={() => setDrawer(false)}
              />
              <div className="drawer">{nav}</div>
            </>
          ) : null}

          <main className="main" ref={main}>
            {entry ? (
              <Component entry={entry} previous={CATALOG[here - 1]} next={CATALOG[here + 1]} />
            ) : at === "installation" ? (
              <Installation />
            ) : at === "principles" ? (
              <Principles />
            ) : at === "tokens" ? (
              <Tokens />
            ) : (
              <Overview entries={found} />
            )}
          </main>
        </div>
      </div>
    </SystemProvider>
  );
}
