import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{E as n,Et as r,Tt as i,k as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p;e((()=>{r(),n(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/BootEntry`,component:i,tags:[`autodocs`],args:{name:`Reference system`,glyph:`display`,detail:`Internal disk`,onSelect:c()}},d={play:async({canvas:e,args:t})=>{await l.click(e.getByRole(`button`,{name:/Reference system/})),s(t.onSelect).toHaveBeenCalledTimes(1)},render:e=>(0,o.jsx)(`div`,{style:{width:320},children:(0,o.jsx)(i,{...e})})},f={play:({canvas:e})=>{let t=e.getAllByRole(`button`);s(t[1]).toHaveAttribute(`aria-current`,`true`),s(t[0]).toHaveAttribute(`aria-current`,`false`)},render:e=>(0,o.jsxs)(a,{gap:1,attributes:{style:{width:320}},children:[(0,o.jsx)(i,{...e,name:`First system`,glyph:`display`,detail:`Internal disk`}),(0,o.jsx)(i,{...e,name:`Second system`,glyph:`windows`,detail:`Internal disk`,selected:!0}),(0,o.jsx)(i,{...e,name:`Third system`,glyph:`gnome`,detail:`External disk`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /Reference system/
    }));
    expect(args.onSelect).toHaveBeenCalledTimes(1);
  },
  render: args => <div style={{
    width: 320
  }}>
      <BootEntry {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // One entry is current. The others say so too, which is what lets a screen
  // reader tell you where the arrow keys are resting.
  play: ({
    canvas
  }) => {
    const entries = canvas.getAllByRole("button");
    expect(entries[1]).toHaveAttribute("aria-current", "true");
    expect(entries[0]).toHaveAttribute("aria-current", "false");
  },
  render: args => <Stack gap={1} attributes={{
    style: {
      width: 320
    }
  }}>
      <BootEntry {...args} name="First system" glyph="display" detail="Internal disk" />
      <BootEntry {...args} name="Second system" glyph="windows" detail="Internal disk" selected />
      <BootEntry {...args} name="Third system" glyph="gnome" detail="External disk" />
    </Stack>
}`,...f.parameters?.docs?.source},description:{story:`The picker, with the arrow keys resting on the second entry.`,...f.parameters?.docs?.description}}},p=[`Playground`,`Picker`]}))();export{f as Picker,d as Playground,p as __namedExportsOrder,u as default};