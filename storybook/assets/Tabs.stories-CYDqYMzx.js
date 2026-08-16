import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{E as n,_ as r,k as i,v as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p,m;e((()=>{n(),a(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Tabs`,component:r,tags:[`autodocs`],args:{items:[{id:`one`,label:`One`},{id:`two`,label:`Two`},{id:`three`,label:`Three`}],label:`Sample sections`,onChange:c()}},d={play:async({canvas:e,args:t})=>{let n=e.getAllByRole(`tab`);s(n[0]).toHaveAttribute(`aria-selected`,`true`),s(n[1]).toHaveAttribute(`tabindex`,`-1`),n[0].focus(),await l.keyboard(`{ArrowRight}`),s(n[1]).toHaveAttribute(`aria-selected`,`true`),s(t.onChange).toHaveBeenCalledWith(`two`),await l.keyboard(`{ArrowLeft}{ArrowLeft}`),s(n[2]).toHaveAttribute(`aria-selected`,`true`)}},f={render:e=>(0,o.jsxs)(i,{gap:3,children:[(0,o.jsx)(r,{...e,defaultValue:`one`}),(0,o.jsx)(r,{...e,defaultValue:`two`}),(0,o.jsx)(r,{...e,defaultValue:`three`})]})},p={args:{items:[{id:`one`,label:`One`,badge:3},{id:`two`,label:`Two`},{id:`three`,label:`Three`,badge:12}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // The arrow keys move the choice, not the focus, and only the chosen tab is
  // in the tab order. Both are what a tab strip is supposed to do.
  play: async ({
    canvas,
    args
  }) => {
    const tabs = canvas.getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("tabindex", "-1");
    tabs[0]!.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(args.onChange).toHaveBeenCalledWith("two");
    await userEvent.keyboard("{ArrowLeft}{ArrowLeft}");
    expect(tabs[2]).toHaveAttribute("aria-selected", "true");
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Tabs {...args} defaultValue="one" />
      <Tabs {...args} defaultValue="two" />
      <Tabs {...args} defaultValue="three" />
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "one",
      label: "One",
      badge: 3
    }, {
      id: "two",
      label: "Two"
    }, {
      id: "three",
      label: "Three",
      badge: 12
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:`A count rides along on the tab it belongs to.`,...p.parameters?.docs?.description}}},m=[`Playground`,`Positions`,`WithBadge`]}))();export{d as Playground,f as Positions,p as WithBadge,m as __namedExportsOrder,u as default};