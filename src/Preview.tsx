import type { ReactNode } from "react";
import { Screen } from "metaphor-ui";

/**
 * The stage a component stands on. It is a Screen, because that is the element
 * that carries the two attributes every token resolves against, and the dotted
 * ground behind it belongs to the site rather than to the library: it says
 * "this is a specimen" without dressing the specimen.
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
