import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{et as n,tt as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l,u,d;e((()=>{r(),i=t(),{expect:a,fn:o,screen:s,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Menu`,component:n,tags:[`autodocs`],args:{items:[{id:`new`,label:`New window`,shortcut:`N`,onSelect:o()},{id:`open`,label:`Open`,glyph:`folder`,shortcut:`O`},{id:`rule`},{id:`grid`,label:`Show as grid`,checked:!0},{id:`list`,label:`Show as list`},{id:`rule-2`},{id:`trash`,label:`Move to trash`,glyph:`trash`,disabled:!0}],label:`File`}},u={render:e=>(0,i.jsx)(n,{...e}),play:async({canvas:e,args:t})=>{let n=e.getByRole(`button`,{name:`File`});await c.pointer({keys:`[MouseLeft>]`,target:n});let r=s.getAllByRole(`menuitem`);a(r).toHaveLength(5),a(r.at(-1)).toHaveAttribute(`data-disabled`),await c.click(s.getByRole(`menuitem`,{name:/New window/})),a(t.items[0]?.onSelect).toHaveBeenCalledTimes(1),a(s.queryByRole(`menu`)).toBeNull()}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Menu {...args} />,
  /*
   * Radix opens a menu on the pointer going down rather than on the click, so
   * the trigger is pressed the way a pointer would press it. The two separators
   * are not items, and the disabled row is not reachable.
   */
  play: async ({
    canvas,
    args
  }) => {
    const trigger = canvas.getByRole("button", {
      name: "File"
    });
    await userEvent.pointer({
      keys: "[MouseLeft>]",
      target: trigger
    });

    // The panel is portalled out of the story, so it is looked up on the screen.
    const items = screen.getAllByRole("menuitem");
    expect(items).toHaveLength(5);
    expect(items.at(-1)).toHaveAttribute("data-disabled");
    await userEvent.click(screen.getByRole("menuitem", {
      name: /New window/
    }));
    expect(args.items[0]?.onSelect).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("menu")).toBeNull();
  }
}`,...u.parameters?.docs?.source},description:{story:`Open it and use the arrow keys, then type a letter. Both come from Radix.`,...u.parameters?.docs?.description}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};