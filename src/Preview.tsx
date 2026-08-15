import type { ReactNode } from "react";
import { Screen } from "metaphor-ui";

/**
 * The stage a component stands on. It is a Screen, because that is the element
 * every token resolves against.
 *
 * The dotted ground is only on the large stage of a component's own page. On a
 * grid card it was showing through ninety percent of the tile, which advertised
 * emptiness rather than scale.
 */
export function Preview({ children, tall = false }: { children: ReactNode; tall?: boolean }) {
  return (
    <div className={tall ? "preview preview-tall" : "preview"}>
      <Screen full={false} className="preview-screen">
        {children}
      </Screen>
    </div>
  );
}
