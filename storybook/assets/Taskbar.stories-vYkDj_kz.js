import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{t as n}from"./Icon-54pilQ-2.js";import{t as r}from"./Icon-Bk7pSsi0.js";import{g as i,h as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f;e((()=>{r(),i(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Taskbar`,component:a,tags:[`autodocs`],args:{apps:[{id:`files`,name:`Files`,glyph:`folder`,appClass:`site`,running:!0,onOpen:c()},{id:`terminal`,name:`Terminal`,glyph:`terminal`,appClass:`language`},{id:`chart`,name:`Reports`,glyph:`chart`,appClass:`library`,running:!0}],clock:`09:41`,tray:(0,o.jsx)(n,{glyph:`display`,size:16})}},d={play:async({canvas:e,args:t})=>{await l.click(e.getByRole(`button`,{name:`Files`})),s(t.apps[0]?.onOpen).toHaveBeenCalledTimes(1)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Files"
    }));
    expect(args.apps[0]?.onOpen).toHaveBeenCalledTimes(1);
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};