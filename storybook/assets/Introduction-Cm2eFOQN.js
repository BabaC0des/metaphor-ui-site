import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{a as n,o as r,v as i}from"./blocks-Cpnazih1.js";import{f as a,l as o,n as s,o as c,t as l}from"./Figures-CDO_uKMf.js";import{r as u,t as d}from"./Guises-Cz--oNEc.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{title:`Wiki/Introduction`}),`
`,(0,m.jsx)(t.h1,{id:`metaphor-ui`,children:`metaphor-ui`}),`
`,(0,m.jsx)(t.p,{children:`Operating system interfaces, in the browser. One component tree, five design languages, two
modes.`}),`
`,(0,m.jsx)(s,{}),`
`,(0,m.jsx)(l,{}),`
`,(0,m.jsx)(t.h2,{id:`the-whole-claim-on-one-line`,children:`The whole claim, on one line`}),`
`,(0,m.jsx)(t.p,{children:`The same window, the same field, the same checkbox and the same two tiles, five times.
Nothing branches on which system is running.`}),`
`,(0,m.jsx)(d,{}),`
`,(0,m.jsx)(t.p,{children:`What moved between the columns: the window controls, the radius of the frame, the radius of
a control, the radius of a tile, and where the title sits. That is the whole of it, and it
is enough, because it is the part a person recognises before they have read a word. Each
column sits on its own screen, and a screen is the element the tokens resolve against.`}),`
`,(0,m.jsxs)(t.p,{children:[`The two switches above the section drive every figure on this page, and each wiki page has
one such pair rather than one per figure. On a `,(0,m.jsx)(t.strong,{children:`component`}),` page the Storybook toolbar does
the same job for every story on it, so a component that looks right in one guise and wrong
in another is two clicks away rather than a rebuild away.`]}),`
`,(0,m.jsx)(c,{}),`
`,(0,m.jsx)(t.h2,{id:`getting-it`,children:`Getting it`}),`
`,(0,m.jsx)(t.p,{children:`One package and one stylesheet. React 19 and a bundler that understands CSS modules.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-bash`,children:`pnpm add metaphor-ui
`})}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-tsx`,children:`import { Screen, SystemProvider, Window, Button } from "metaphor-ui";
import "metaphor-ui/metaphor.css";

export function App() {
  return (
    <SystemProvider defaultSkin="macos" defaultMode="light">
      <Screen>
        <Window title="Documents" width={420}>
          <Window.Body padding={3}>
            <Button onClick={save}>Save</Button>
          </Window.Body>
        </Window>
      </Screen>
    </SystemProvider>
  );
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`Change `,(0,m.jsx)(t.code,{children:`defaultSkin`}),` to `,(0,m.jsx)(t.code,{children:`fluent`}),` and the same tree is a Windows 11 window with a Fluent
button in it. Nothing else in the file moves.`]}),`
`,(0,m.jsx)(t.h2,{id:`how-to-read-this-wiki`,children:`How to read this wiki`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Components`}),` are generated from the source. The props table on each page is read out of
that component's `,(0,m.jsx)(t.code,{children:`.types.ts`}),` file, which means the comment above a prop is its
documentation. There is no second copy to keep in sync.`]}),`
`,(0,m.jsx)(t.p,{children:`Every example on those pages is also a test. It runs in a real Chromium when the suite runs
and asserts what its component does, and axe checks it for accessibility. An example that
stops working stops the build.`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.strong,{children:`Rules`}),` is the short version of what the library refuses to do. `,(0,m.jsx)(t.strong,{children:`Tokens`}),` is what a
component is allowed to read. `,(0,m.jsx)(t.strong,{children:`Progress`}),` is what is built, what is next, and the findings
against the design that are waiting for a decision.`]}),`
`,(0,m.jsx)(t.h2,{id:`where-the-design-lives`,children:`Where the design lives`}),`
`,(0,m.jsx)(t.p,{children:`The source of truth is a Penpot file with 21 sheets: a token table, a rules sheet, sixteen
component sheets, a types sheet and a running list of what is still open. Every shape in it
is bound to a token rather than to a hex value.`}),`
`,(0,m.jsx)(t.p,{children:`The CSS custom properties in this repository are generated from those tokens by a script.
They are never typed by hand.`}),`
`,(0,m.jsx)(t.h2,{id:`layout-of-the-repository`,children:`Layout of the repository`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{children:`packages/metaphor-ui  the library: components, tokens, helpers
apps/site             the website that consumes the library
apps/home             the landing page
apps/docs             this wiki
`})})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),a(),r(),u(),o()}))();export{p as default};