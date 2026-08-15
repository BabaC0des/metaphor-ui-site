import { useEffect, useId, useRef, useState } from "react";
import type { Mode, Skin } from "metaphor-ui";

export const SKINS: { id: Skin; label: string }[] = [
  { id: "macos", label: "macOS" },
  { id: "fluent", label: "Windows 11" },
  { id: "adwaita", label: "Fedora" },
  { id: "ios", label: "iOS" },
  { id: "oneui", label: "One UI" },
];

/**
 * The mark is drawn here rather than imported. Three empty outlined boxes was
 * what stood in for icons before, and an empty box costs more credibility than
 * a missing one.
 */
export function Mark({ shape }: { shape: "brand" | "page" | "rules" | "code" }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {shape === "brand" ? (
        <>
          <rect x="3" y="4" width="18" height="16" rx="4" {...stroke} />
          <path d="M3 9h18" {...stroke} />
          <circle cx="6.5" cy="6.5" r="0.9" fill="currentColor" />
        </>
      ) : null}

      {shape === "page" ? (
        <>
          <path d="M6 3h8l4 4v14H6z" {...stroke} />
          <path d="M14 3v4h4" {...stroke} />
        </>
      ) : null}

      {shape === "rules" ? (
        <>
          <path d="M4 7h16M4 12h16M4 17h10" {...stroke} />
        </>
      ) : null}

      {shape === "code" ? (
        <>
          <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" {...stroke} />
        </>
      ) : null}
    </svg>
  );
}

/**
 * The guise picker, drawn rather than native. It is the main switch of the
 * whole site, and it was the one control in the header that had been left to
 * the operating system to draw, on a site about drawing operating systems.
 */
export function GuisePicker({ skin, onPick }: { skin: Skin; onPick: (next: Skin) => void }) {
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement | null>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;

    const away = (event: MouseEvent) => {
      if (!box.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  const current = SKINS.find((one) => one.id === skin);

  return (
    <div className="picker" ref={box}>
      <button
        type="button"
        className="control"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {current?.label ?? "System"}
        <span className="control-mark" aria-hidden="true" />
      </button>

      {open ? (
        <ul className="pop" id={id} role="listbox" aria-label="Design language">
          {SKINS.map((one) => (
            <li key={one.id}>
              <button
                type="button"
                role="option"
                aria-selected={one.id === skin}
                onClick={() => {
                  onPick(one.id);
                  setOpen(false);
                }}
              >
                <span className="pop-tick" aria-hidden="true">
                  {one.id === skin ? "✓" : ""}
                </span>
                {one.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ModeButton({ mode, onToggle }: { mode: Mode; onToggle: () => void }) {
  return (
    <button
      type="button"
      className="control control-square"
      aria-pressed={mode === "dark"}
      aria-label={mode === "dark" ? "Switch to light" : "Switch to dark"}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        {mode === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4.2" fill="currentColor" />
            <path
              d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </>
        ) : (
          <path
            d="M20 14.5A8.2 8.2 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        )}
      </svg>
    </button>
  );
}
