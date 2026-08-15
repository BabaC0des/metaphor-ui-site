import { useEffect, useMemo, useState } from "react";
import { SystemProvider } from "metaphor-ui";
import type { Mode, Skin } from "metaphor-ui";
import { CATALOG, GROUPS, slug } from "./catalog";
import { Preview } from "./Preview";
import { Component } from "./pages/Component";
import { Installation } from "./pages/Installation";
import { Overview } from "./pages/Overview";
import { Principles } from "./pages/Principles";
import { Tokens } from "./pages/Tokens";

const SKINS: { id: Skin; label: string }[] = [
  { id: "macos", label: "macOS" },
  { id: "fluent", label: "Windows 11" },
  { id: "adwaita", label: "Fedora" },
  { id: "ios", label: "iOS" },
  { id: "oneui", label: "One UI" },
];

const PAGES = [
  { id: "overview", title: "Overview", group: "Getting started" },
  { id: "installation", title: "Installation", group: "Getting started" },
  { id: "principles", title: "Our principles", group: "Getting started" },
  { id: "tokens", title: "Design tokens", group: "Getting started" },
] as const;

const route = () => window.location.hash.replace(/^#\/?/, "") || "overview";

/**
 * The shell is documentation furniture, deliberately plain: a quiet sidebar, a
 * quiet header, and a reading column. The library never dresses this page. It
 * appears inside the preview cards and nowhere else, so what the reader is
 * looking at is always unambiguous.
 */
export function App() {
  const [at, setAt] = useState(route);
  const [skin, setSkin] = useState<Skin>("macos");
  const [mode, setMode] = useState<Mode>("light");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const listen = () => setAt(route());
    window.addEventListener("hashchange", listen);
    return () => window.removeEventListener("hashchange", listen);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    document.querySelector("main")?.scrollTo(0, 0);
  }, [at]);

  const found = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return CATALOG;
    return CATALOG.filter(
      (entry) =>
        entry.name.toLowerCase().includes(needle) || entry.says.toLowerCase().includes(needle),
    );
  }, [query]);

  const entry = CATALOG.find((one) => `components/${slug(one.name)}` === at);

  return (
    <SystemProvider key={`${skin}-${mode}`} defaultSkin={skin} defaultMode={mode}>
      <div className="shell">
        <header className="top">
          <a className="brand" href="#/overview">
            <span className="brand-mark" aria-hidden="true" />
            metaphor-ui
          </a>

          <nav className="top-nav" aria-label="Sections">
            <a className={at === "overview" ? "on" : ""} href="#/overview">
              Documentation
            </a>
            <a href="#/installation">Installation</a>
            <a href="./storybook/">Storybook</a>
          </nav>

          <div className="top-tools">
            <label className="picker">
              <span className="sr">Design language</span>
              <select value={skin} onChange={(event) => setSkin(event.target.value as Skin)}>
                {SKINS.map((one) => (
                  <option key={one.id} value={one.id}>
                    {one.label}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className="ghost"
              aria-pressed={mode === "dark"}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? "Light" : "Dark"}
            </button>

            <a className="ghost" href="https://github.com/BabaC0des/metaphor">
              GitHub
            </a>
          </div>
        </header>

        <div className="body">
          <aside className="side">
            <label className="search">
              <span className="sr">Search components</span>
              <input
                type="search"
                placeholder="Search components"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
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
          </aside>

          <main className="main">
            {entry ? (
              <Component entry={entry} />
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

export { Preview };
