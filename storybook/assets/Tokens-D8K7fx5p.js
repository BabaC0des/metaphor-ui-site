import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{a as n,o as r,v as i}from"./blocks-Cpnazih1.js";import{a,c as o,f as s,i as c,l,o as u,s as d,t as f}from"./Figures-CDO_uKMf.js";import{a as p,i as m,r as h,t as g}from"./TokenTable-CUnNOROo.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...i(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n,{title:`Wiki/Tokens`}),`
`,(0,y.jsx)(t.h1,{id:`tokens`,children:`Tokens`}),`
`,(0,y.jsxs)(t.p,{children:[`The tokens come out of Penpot. `,(0,y.jsx)(t.code,{children:`tools/generate-tokens.mjs`}),` turns them into one stylesheet
with four layers.`]}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Raw`}),`, `,(0,y.jsx)(t.code,{children:`--mt-raw-color-light-content`}),`. Every token, one to one, so nothing is lost.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Aliases`}),`, `,(0,y.jsx)(t.code,{children:`--mt-color-content`}),`. What components read. A token that comes as a light
and a dark half resolves per `,(0,y.jsx)(t.code,{children:`[data-mode]`}),`, a token that exists once passes through.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Design language aliases`}),`, `,(0,y.jsx)(t.code,{children:`--mt-radius-window`}),`, resolved per `,(0,y.jsx)(t.code,{children:`[data-os]`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Guise variables`}),`, `,(0,y.jsx)(t.code,{children:`--mt-controls-size`}),`, `,(0,y.jsx)(t.code,{children:`--mt-titlebar-title-align`}),`. Not Penpot
tokens: facts read off the component sheets that only have a value once a design
language has been chosen. They live on the screen rather than in a stylesheet so that a
window shown in a second guise inside another one wears its own.`]}),`
`]}),`
`,(0,y.jsx)(f,{}),`
`,(0,y.jsx)(t.h2,{id:`the-four-planes`,children:`The four planes`}),`
`,(0,y.jsx)(t.p,{children:`Everything sits on one of them, and they only mean anything next to each other.`}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t.h2,{id:`the-five-elevations`,children:`The five elevations`}),`
`,(0,y.jsx)(t.p,{children:`Both modes at once, because this is the one place where the comparison is the point. The
five steps measure 0, 1, 1, 1 and 2 out of 255 in dark against 0, 15, 27, 30 and 39 in
light. A shadow on a ground of rgb(5 7 6) has nowhere to go, and the row below is the
finding rather than a claim about it.`}),`
`,(0,y.jsx)(c,{}),`
`,(0,y.jsx)(t.h2,{id:`the-type-scale`,children:`The type scale`}),`
`,(0,y.jsx)(t.p,{children:`Seven sizes. There is no half step, and a component that wants one has to make its case on
the sheet first.`}),`
`,(0,y.jsx)(o,{}),`
`,(0,y.jsx)(t.h2,{id:`the-spacing-scale`,children:`The spacing scale`}),`
`,(0,y.jsx)(t.p,{children:`Six steps, and nothing between them.`}),`
`,(0,y.jsx)(d,{}),`
`,(0,y.jsx)(u,{}),`
`,(0,y.jsx)(t.h2,{id:`what-a-component-may-read`,children:`What a component may read`}),`
`,(0,y.jsx)(t.p,{children:`Every alias below, in both modes. The table is read out of the loaded stylesheet at
runtime, not from a list kept by hand, so an alias that stops resolving shows up here as
an empty cell.`}),`
`,(0,y.jsx)(g,{}),`
`,(0,y.jsx)(t.h2,{id:`what-changes-with-the-design-language`,children:`What changes with the design language`}),`
`,(0,y.jsx)(h,{}),`
`,(0,y.jsx)(t.h2,{id:`the-export-itself`,children:`The export itself`}),`
`,(0,y.jsxs)(t.p,{children:[`Straight from `,(0,y.jsx)(t.code,{children:`tokens.json`}),`, in the order Penpot delivered it. This is the raw layer, which
no component may read, so it is closed until somebody wants it.`]}),`
`,(0,y.jsx)(m,{group:`color`,says:`Colour`}),`
`,(0,y.jsx)(m,{group:`spacing`,says:`Spacing`}),`
`,(0,y.jsx)(m,{group:`fontSizes`,says:`Type sizes`}),`
`,(0,y.jsx)(m,{group:`fontWeights`,says:`Type weights`}),`
`,(0,y.jsx)(m,{group:`borderRadius`,says:`Radii`}),`
`,(0,y.jsx)(m,{group:`borderWidth`,says:`Border widths`}),`
`,(0,y.jsx)(m,{group:`shadow`,says:`Elevation`}),`
`,(0,y.jsx)(t.p,{children:`A Penpot shadow token keeps neither the unit nor the opacity. Both are taken from the
elevation shapes on sheet 25, where the design defines them, and the generator turns the
result into a CSS shadow.`})]})}function v(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),p(),l()}))();export{v as default};