import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{E as n,d as r,f as i,k as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Toolbar`,component:r,tags:[`autodocs`],args:{items:[{id:`terminal`,glyph:`terminal`,label:`Terminal`,onSelect:c()},{id:`grid`,glyph:`grid`,label:`Grid`},{id:`image`,glyph:`image`,label:`Image`},{id:`chart`,glyph:`chart`,label:`Chart`},{id:`rule`},{id:`search`,glyph:`search`,label:`Search`}],label:`Sample toolbar`}},d={play:async({canvas:e,args:t})=>{let n=e.getAllByRole(`button`);s(n).toHaveLength(5),await l.click(e.getByRole(`button`,{name:`Terminal`})),s(t.items[0]?.onSelect).toHaveBeenCalledTimes(1)}},f={render:e=>(0,o.jsxs)(a,{gap:3,children:[(0,o.jsx)(r,{...e,density:`regular`}),(0,o.jsx)(r,{...e,density:`compact`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // Five glyphs and one rule, and the rule is not a button.
  play: async ({
    canvas,
    args
  }) => {
    const buttons = canvas.getAllByRole("button");
    expect(buttons).toHaveLength(5);
    await userEvent.click(canvas.getByRole("button", {
      name: "Terminal"
    }));
    expect(args.items[0]?.onSelect).toHaveBeenCalledTimes(1);
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Toolbar {...args} density="regular" />
      <Toolbar {...args} density="compact" />
    </Stack>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Densities`]}))();export{f as Densities,d as Playground,p as __namedExportsOrder,u as default};