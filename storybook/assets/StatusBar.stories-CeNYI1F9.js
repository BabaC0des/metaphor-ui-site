import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{t as n}from"./Icon-54pilQ-2.js";import{t as r}from"./Icon-Bk7pSsi0.js";import{T as i,w as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u;e((()=>{r(),i(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/StatusBar`,component:a,tags:[`autodocs`],args:{clock:`09:41`,indicators:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{glyph:`contrast`,size:16}),(0,o.jsx)(n,{glyph:`display`,size:16})]})}},l={play:({canvas:e})=>{s(e.getByLabelText(`Status bar`)).toBeInTheDocument(),s(e.getByText(`09:41`)).toBeInTheDocument()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    expect(canvas.getByLabelText("Status bar")).toBeInTheDocument();
    expect(canvas.getByText("09:41")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};