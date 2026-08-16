import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{t as n}from"./Icon-54pilQ-2.js";import{t as r}from"./Icon-Bk7pSsi0.js";import{l as i,u as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f;e((()=>{r(),a(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/TopBar`,component:i,tags:[`autodocs`],args:{leading:`Activities`,onLeadingSelect:c(),clock:`09:41`,indicators:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{glyph:`display`,size:16}),(0,o.jsx)(n,{glyph:`person`,size:16})]})}},d={play:async({canvas:e,args:t})=>{await l.click(e.getByRole(`button`,{name:`Activities`})),s(t.onLeadingSelect).toHaveBeenCalledTimes(1),s(e.getByText(`09:41`)).toBeInTheDocument()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // The leading word is a control only when it has been handed something to do.
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Activities"
    }));
    expect(args.onLeadingSelect).toHaveBeenCalledTimes(1);
    expect(canvas.getByText("09:41")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};