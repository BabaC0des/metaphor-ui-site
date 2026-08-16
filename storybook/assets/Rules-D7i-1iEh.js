import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{t as r}from"./Tile-DHEjiMuy.js";import{Ct as i,D as a,Tt as o,k as s,kt as c,r as l,t as u}from"./iframe-BbNStJEX.js";import{a as d,o as f,v as p}from"./blocks-Cpnazih1.js";import{f as m,l as h,o as g,r as _,t as v}from"./Figures-CDO_uKMf.js";import{n as y,r as b,t as x}from"./Guises-Cz--oNEc.js";import{a as S,n as C}from"./TokenTable-CUnNOROo.js";function w(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...p(),...e.components};return l||E(`Window`,!1),l.Body||E(`Window.Body`,!0),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(d,{title:`Wiki/Rules`}),`
`,(0,D.jsx)(n.h1,{id:`separation-of-concerns`,children:`Separation of concerns`}),`
`,(0,D.jsxs)(n.p,{children:[`Six rules. A component that breaks one of them is wrong, not the rule. They are the same
six as on sheet `,(0,D.jsx)(n.code,{children:`01 Rules`}),` in Penpot and in the README.`]}),`
`,(0,D.jsx)(v,{}),`
`,(0,D.jsx)(n.h2,{id:`1-no-component-knows-content`,children:`1. No component knows content`}),`
`,(0,D.jsx)(n.p,{children:`No project name, no person, no address. Content arrives as a prop. Hard-coded copy inside a
component is a defect, and it is the reason the library can be read by someone who knows
nothing about the site it was built for.`}),`
`,(0,D.jsx)(_,{children:(0,D.jsxs)(a,{gap:4,wrap:!0,align:`center`,children:[(0,D.jsx)(l,{title:`Anything at all`,width:210,children:(0,D.jsx)(l.Body,{padding:3,children:(0,D.jsx)(t,{size:`12`,tone:`label`,children:(0,D.jsx)(n.p,{children:`The title is a prop.`})})})}),(0,D.jsx)(l,{title:`مرحبا`,width:210,children:(0,D.jsx)(l.Body,{padding:3,children:(0,D.jsx)(t,{size:`12`,tone:`label`,children:(0,D.jsx)(n.p,{children:`So is this one.`})})})})]})}),`
`,(0,D.jsx)(n.h2,{id:`2-no-component-knows-its-operating-system`,children:`2. No component knows its operating system`}),`
`,(0,D.jsxs)(n.p,{children:[`Except at counted places. There are `,(0,D.jsx)(n.strong,{children:`two`}),`, and they are the two that have to know:`]}),`
`,(0,D.jsxs)(n.ul,{children:[`
`,(0,D.jsxs)(n.li,{children:[(0,D.jsx)(n.code,{children:`Screen`}),`, which writes `,(0,D.jsx)(n.code,{children:`data-os`}),` and `,(0,D.jsx)(n.code,{children:`data-mode`}),` onto the tree.`]}),`
`,(0,D.jsxs)(n.li,{children:[(0,D.jsx)(n.code,{children:`SkinBoundary`}),`, which restates the same two attributes at the top of a portal, because a
portalled overlay has no ancestor to read them from.`]}),`
`]}),`
`,(0,D.jsxs)(n.p,{children:[`Everything else takes the difference from tokens. `,(0,D.jsx)(n.strong,{children:`No stylesheet in the library names an
operating system.`}),` Every value that differs between the guises is a custom property set on
the screen itself, listed in full on the Tokens page, and a custom property resolves against
the nearest ancestor that sets it, which is what lets one guise sit inside another:`]}),`
`,(0,D.jsx)(x,{}),`
`,(0,D.jsxs)(n.p,{children:[`This rule used to be written as five counted places, listing `,(0,D.jsx)(n.code,{children:`Window.Controls`}),` and
`,(0,D.jsx)(n.code,{children:`Window.Titlebar`}),` among them. Both were rewritten to read guise variables instead, and the
list came down with them. If a third place turns out to be necessary it belongs on sheet 01
first and in the code second.`]}),`
`,(0,D.jsx)(g,{}),`
`,(0,D.jsx)(n.h2,{id:`3-behaviour-and-appearance-live-apart`,children:`3. Behaviour and appearance live apart`}),`
`,(0,D.jsxs)(n.p,{children:[`Logic in the `,(0,D.jsx)(n.code,{children:`.tsx`}),`, appearance in the `,(0,D.jsx)(n.code,{children:`.module.css`}),`. Inline styles only for values that
come into being at runtime, which means position, size given by a caller, and stacking
order.`]}),`
`,(0,D.jsx)(n.p,{children:`A component that reaches for a colour in its TypeScript has taken a decision that belongs to
the design file.`}),`
`,(0,D.jsxs)(n.p,{children:[`The rule has a visible edge. `,(0,D.jsx)(n.code,{children:`Button`}),` decides in TypeScript whether it is a control at all,
because that is behaviour: handed no `,(0,D.jsx)(n.code,{children:`onClick`}),` it renders a `,(0,D.jsx)(n.code,{children:`span`}),`, since a button that does
nothing should not be announced as one. What it looks like in either case is not its
decision.`]}),`
`,(0,D.jsx)(_,{children:(0,D.jsxs)(a,{gap:5,align:`start`,children:[(0,D.jsxs)(s,{gap:2,align:`center`,children:[(0,D.jsx)(i,{onClick:()=>{},children:`Save`}),(0,D.jsx)(t,{size:`11`,tone:`label`,children:(0,D.jsx)(n.p,{children:`with onClick · <button>`})})]}),(0,D.jsxs)(s,{gap:2,align:`center`,children:[(0,D.jsx)(i,{children:`Save`}),(0,D.jsx)(t,{size:`11`,tone:`label`,children:(0,D.jsx)(n.p,{children:`without · <span>`})})]})]})}),`
`,(0,D.jsx)(n.p,{children:`Identical to look at, and that is the point: appearance did not change, only whether there
is a control there at all. A screen reader is told about the first one and not the second.`}),`
`,(0,D.jsx)(n.h2,{id:`4-content-lives-in-exactly-one-place`,children:`4. Content lives in exactly one place`}),`
`,(0,D.jsxs)(n.p,{children:[`Typed, in `,(0,D.jsx)(n.code,{children:`apps/site/content`}),`. All five surfaces read the same file, which is what makes
them five guises of one thing rather than five sites.`]}),`
`,(0,D.jsx)(n.p,{children:`One string, three places. Change it once and the window, the tile and the list row change
together, because none of them owns it.`}),`
`,(0,D.jsx)(_,{children:(0,D.jsxs)(a,{gap:4,align:`center`,wrap:!0,children:[(0,D.jsx)(l,{title:`Photographs`,width:200,children:(0,D.jsx)(l.Body,{padding:3,children:(0,D.jsx)(t,{size:`12`,tone:`label`,children:(0,D.jsx)(n.p,{children:`A window`})})})}),(0,D.jsxs)(s,{gap:2,align:`center`,children:[(0,D.jsx)(r,{glyph:`image`,appClass:`spatial`,size:48,label:`Photographs`}),(0,D.jsx)(t,{size:`11`,tone:`label`,children:(0,D.jsx)(n.p,{children:`Photographs`})})]}),(0,D.jsx)(`div`,{style:{width:200},children:(0,D.jsx)(c,{apps:[{id:`photos`,name:`Photographs`,glyph:`image`,appClass:`spatial`}],label:`Applications`})})]})}),`
`,(0,D.jsx)(n.h2,{id:`5-flow-screens-are-not-library`,children:`5. Flow screens are not library`}),`
`,(0,D.jsx)(n.p,{children:`Boot picker, self test, sign-in, first run and desktop live in the application. The library
gives them their parts and stays out of their sequence.`}),`
`,(0,D.jsx)(n.p,{children:`The test is simple: a part that would still make sense in somebody else's product belongs
here, and a screen that only makes sense in this one does not.`}),`
`,(0,D.jsxs)(n.p,{children:[(0,D.jsx)(n.code,{children:`BootEntry`}),` is a part, and it is here. The picker that stacks three of them, moves a
selection with the arrow keys and hands the choice to a start-up sequence is a screen, and
it is not.`]}),`
`,(0,D.jsx)(_,{children:(0,D.jsxs)(s,{gap:1,attributes:{style:{width:280}},children:[(0,D.jsx)(o,{name:`First system`,glyph:`display`,detail:`Internal disk`}),(0,D.jsx)(o,{name:`Second system`,glyph:`windows`,detail:`Internal disk`,selected:!0}),(0,D.jsx)(o,{name:`Third system`,glyph:`gnome`,detail:`External disk`})]})}),`
`,(0,D.jsx)(n.h2,{id:`6-tokens-are-generated-not-typed`,children:`6. Tokens are generated, not typed`}),`
`,(0,D.jsxs)(n.p,{children:[`A value written by hand twice will drift apart. The generator reads the Penpot export and
writes the CSS, and stylelint rejects a custom property that does not start with `,(0,D.jsx)(n.code,{children:`mt-`}),`.`]}),`
`,(0,D.jsx)(n.p,{children:`Six lines of it, read out of the stylesheet the browser has loaded rather than copied here:`}),`
`,(0,D.jsx)(C,{}),`
`,(0,D.jsxs)(n.p,{children:[`The raw layer, `,(0,D.jsx)(n.code,{children:`--mt-raw-*`}),`, is the export one to one. The alias layer is what components
read. A component that reaches for `,(0,D.jsx)(n.code,{children:`--mt-raw-anything`}),` has hard-coded a mode or a design
language, and the name says so out loud. That is the whole point of the namespace, and it is
why the rule can be checked by reading rather than by remembering.`]}),`
`,(0,D.jsx)(g,{}),`
`,(0,D.jsx)(n.h2,{id:`what-a-broken-rule-looks-like`,children:`What a broken rule looks like`}),`
`,(0,D.jsxs)(n.p,{children:[`Rule 2 was broken for a while and nobody saw it. A rule written as
`,(0,D.jsx)(n.code,{children:`[data-os="macos"] .close`}),` matches through `,(0,D.jsx)(n.strong,{children:`every`}),` ancestor, so a window shown in a second
guise inside a macOS screen wore macOS traffic lights while its label said Windows 11.`]}),`
`,(0,D.jsx)(n.p,{children:`The five-up is the figure that catches it, which is why it is on this page. Here it is
again, with a Windows 11 window nested inside a macOS one, which is the exact case that was
wrong:`}),`
`,(0,D.jsx)(y,{})]})}function T(e={}){let{wrapper:t}={...p(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(w,{...e})}):w(e)}function E(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var D;e((()=>{D=n(),m(),f(),b(),h(),S(),u()}))();export{T as default};