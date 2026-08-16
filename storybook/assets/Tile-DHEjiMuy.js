import{i as e}from"./preload-helper-CmbjvaKP.js";import{n as t,t as n}from"./utilities-CZ3-bssY.js";import{t as r}from"./jsx-runtime-Dm36vQ7d.js";import{t as i}from"./Icon-54pilQ-2.js";import{t as a}from"./Icon-Bk7pSsi0.js";var o,s,c,l,u,d,f,p=e((()=>{o=`_root_m8u34_1`,s=`_button_m8u34_15`,c=`_language_m8u34_25`,l=`_library_m8u34_30`,u=`_site_m8u34_35`,d=`_spatial_m8u34_40`,f={root:o,button:s,language:c,library:l,site:u,spatial:d}}));function m({glyph:e,appClass:n=`site`,size:r=48,label:a,onOpen:o,className:s,attributes:c}){let l={width:r,height:r,...c?.style},u=t(f.root,f[n],s),d=(0,h.jsx)(i,{glyph:e,size:r>=44?24:20});return o?(0,h.jsx)(`button`,{type:`button`,"aria-label":a,onClick:o,...c,className:t(u,f.button),style:l,children:d}):(0,h.jsx)(`span`,{role:a===void 0?void 0:`img`,"aria-label":a,"aria-hidden":a===void 0,...c,className:u,style:l,children:d})}var h,g=e((()=>{n(),a(),p(),h=r(),m.__docgenInfo={description:`The coloured square an application wears in the dock, the taskbar, the home
grid and on the desktop. It holds the glyph and the two colours of its class,
and no label: the four places that show one disagree about where it goes.

The radius comes from radius.tile, so a tile is a squircle on iOS, a rounded
square on One UI and nearly square in Fluent without knowing any of that.

Without an onOpen it is not a control, so it renders as an image: something
that opens nothing should not be announced as a button. Without a label it is
decoration and is hidden, because the name is then already beside it.`,methods:[],displayName:`Tile`,props:{glyph:{required:!0,tsType:{name:`union`,raw:`| "document"
| "folder"
| "trash"
| "terminal"
| "mail"
| "image"
| "chevron"
| "close"
| "grid"
| "chart"
| "target"
| "contrast"
| "person"
| "display"
| "gnome"
| "windows"
| "search"`,elements:[{name:`literal`,value:`"document"`},{name:`literal`,value:`"folder"`},{name:`literal`,value:`"trash"`},{name:`literal`,value:`"terminal"`},{name:`literal`,value:`"mail"`},{name:`literal`,value:`"image"`},{name:`literal`,value:`"chevron"`},{name:`literal`,value:`"close"`},{name:`literal`,value:`"grid"`},{name:`literal`,value:`"chart"`},{name:`literal`,value:`"target"`},{name:`literal`,value:`"contrast"`},{name:`literal`,value:`"person"`},{name:`literal`,value:`"display"`},{name:`literal`,value:`"gnome"`},{name:`literal`,value:`"windows"`},{name:`literal`,value:`"search"`}]},description:`The glyph in the middle.`},appClass:{required:!1,tsType:{name:`union`,raw:`"language" | "library" | "site" | "spatial"`,elements:[{name:`literal`,value:`"language"`},{name:`literal`,value:`"library"`},{name:`literal`,value:`"site"`},{name:`literal`,value:`"spatial"`}]},description:`Decides the two colours and nothing else.`,defaultValue:{value:`"site"`,computed:!1}},size:{required:!1,tsType:{name:`number`},description:`Edge length in pixels. The glyph and the radius follow it.`,defaultValue:{value:`48`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`What the tile opens, for anyone who cannot see it.`},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Makes the tile a button. Without it the tile is decoration.`},className:{required:!1,tsType:{name:`string`},description:`Additional class name for the root element.`},attributes:{required:!1,tsType:{name:`intersection`,raw:`React.JSX.IntrinsicElements[TagName] & Partial<DataAttributes> & { style?: StyleAttribute }`,elements:[{name:`React.JSX.IntrinsicElements["button"]`,raw:`React.JSX.IntrinsicElements[TagName]`},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`literal`,value:"`data-${string}`"},{name:`union`,raw:`string | boolean | undefined`,elements:[{name:`string`},{name:`boolean`},{name:`undefined`}]}],raw:"Record<`data-${string}`, string | boolean | undefined>"}],raw:`Partial<DataAttributes>`},{name:`signature`,type:`object`,raw:`{ style?: StyleAttribute }`,signature:{properties:[{key:`style`,value:{name:`intersection`,raw:`React.CSSProperties & Partial<Record<CSSVariable, string | number>>`,elements:[{name:`ReactCSSProperties`,raw:`React.CSSProperties`},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`literal`,value:"`--mt-${string}`"},{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]}],raw:`Record<CSSVariable, string | number>`}],raw:`Partial<Record<CSSVariable, string | number>>`}],required:!1}}]}}]},description:`Additional attributes for the root element.`}}}}));export{g as n,m as t};