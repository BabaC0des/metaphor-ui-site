import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{E as n,R as r,k as i,z as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p;e((()=>{n(),a(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/SearchField`,component:r,tags:[`autodocs`],args:{label:`Search the desktop`,onChange:c()}},d={play:async({canvas:e,args:t})=>{let n=e.getByRole(`searchbox`,{name:`Search the desktop`});s(e.queryByRole(`button`,{name:`Clear`})).toBeNull(),await l.type(n,`Terminal`),s(n).toHaveValue(`Terminal`),await l.click(e.getByRole(`button`,{name:`Clear`})),s(n).toHaveValue(``),s(t.onChange).toHaveBeenLastCalledWith(``),await l.type(n,`Files{Escape}`),s(n).toHaveValue(``)}},f={render:e=>(0,o.jsxs)(i,{gap:3,children:[(0,o.jsx)(r,{...e}),(0,o.jsx)(r,{...e,defaultValue:`Terminal`}),(0,o.jsx)(r,{...e,defaultValue:`Terminal`,disabled:!0})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // The clear button appears only once there is something to clear, and Escape
  // does the same job without the pointer.
  play: async ({
    canvas,
    args
  }) => {
    const input = canvas.getByRole("searchbox", {
      name: "Search the desktop"
    });
    expect(canvas.queryByRole("button", {
      name: "Clear"
    })).toBeNull();
    await userEvent.type(input, "Terminal");
    expect(input).toHaveValue("Terminal");
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear"
    }));
    expect(input).toHaveValue("");
    expect(args.onChange).toHaveBeenLastCalledWith("");
    await userEvent.type(input, "Files{Escape}");
    expect(input).toHaveValue("");
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <SearchField {...args} />
      <SearchField {...args} defaultValue="Terminal" />
      <SearchField {...args} defaultValue="Terminal" disabled />
    </Stack>
}`,...f.parameters?.docs?.source},description:{story:`The clear button only exists while there is something to clear.`,...f.parameters?.docs?.description}}},p=[`Playground`,`States`]}))();export{d as Playground,f as States,p as __namedExportsOrder,u as default};