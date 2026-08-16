import{i as e}from"./preload-helper-CmbjvaKP.js";import{dt as t,ut as n}from"./iframe-BbNStJEX.js";var r,i,a,o,s,c;e((()=>{t(),{expect:r,fn:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Dock`,component:n,tags:[`autodocs`],args:{apps:[{id:`files`,name:`Files`,glyph:`folder`,appClass:`site`,running:!0,onOpen:i()},{id:`terminal`,name:`Terminal`,glyph:`terminal`,appClass:`language`},{id:`photos`,name:`Photos`,glyph:`image`,appClass:`spatial`,running:!0},{id:`mail`,name:`Mail`,glyph:`mail`,appClass:`library`},{id:`trash`,name:`Trash`,glyph:`trash`}]}},s={play:async({canvas:e,args:t})=>{r(e.getAllByRole(`button`)).toHaveLength(1),r(e.getAllByRole(`img`)).toHaveLength(4),await a.click(e.getByRole(`button`,{name:`Files`})),r(t.apps[0]?.onOpen).toHaveBeenCalledTimes(1)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // A tile that opens nothing is an image, not a button, so only the one with a
  // handler answers to a press.
  play: async ({
    canvas,
    args
  }) => {
    expect(canvas.getAllByRole("button")).toHaveLength(1);
    expect(canvas.getAllByRole("img")).toHaveLength(4);
    await userEvent.click(canvas.getByRole("button", {
      name: "Files"
    }));
    expect(args.apps[0]?.onOpen).toHaveBeenCalledTimes(1);
  }
}`,...s.parameters?.docs?.source}}},c=[`Playground`]}))();export{s as Playground,c as __namedExportsOrder,o as default};