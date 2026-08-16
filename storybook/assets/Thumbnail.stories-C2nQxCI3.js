import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{D as n,E as r,J as i,Y as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p,m;e((()=>{r(),a(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Thumbnail`,component:i,tags:[`autodocs`],args:{src:`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22120%22%20height%3D%22120%22%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22%25235d7f6f%22%2F%3E%3C%2Fsvg%3E`,alt:`A plain green field`}},d={play:({canvas:e})=>{s(e.getByAltText(`A plain green field`)).toBeInTheDocument(),s(e.queryByRole(`button`)).toBeNull()}},f={args:{onOpen:c()},play:async({canvas:e,args:t})=>{await l.click(e.getByRole(`button`)),s(t.onOpen).toHaveBeenCalledTimes(1)}},p={render:e=>(0,o.jsxs)(n,{gap:3,align:`center`,children:[(0,o.jsx)(i,{...e,ratio:`square`}),(0,o.jsx)(i,{...e,ratio:`landscape`}),(0,o.jsx)(i,{...e,ratio:`portrait`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    expect(canvas.getByAltText("A plain green field")).toBeInTheDocument();
    expect(canvas.queryByRole("button")).toBeNull();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onOpen: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button"));
    expect(args.onOpen).toHaveBeenCalledTimes(1);
  }
}`,...f.parameters?.docs?.source},description:{story:`With an onOpen the frame becomes a control, the same rule Tile follows.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={3} align="center">
      <Thumbnail {...args} ratio="square" />
      <Thumbnail {...args} ratio="landscape" />
      <Thumbnail {...args} ratio="portrait" />
    </Inline>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Openable`,`Ratios`]}))();export{f as Openable,d as Playground,p as Ratios,m as __namedExportsOrder,u as default};