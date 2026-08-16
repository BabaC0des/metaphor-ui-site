import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{Ct as n,E as r,St as i,X as a,Z as o,k as s}from"./iframe-BbNStJEX.js";var c,l,u,d,f,p,m,h,g;e((()=>{i(),o(),r(),c=t(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Notification`,component:a,tags:[`autodocs`],args:{title:`Backup finished`,body:`Every file on the disk was copied. The next run starts in an hour.`,glyph:`folder`,time:`now`,onDismiss:u()}},p={play:async({canvas:e,args:t})=>{await d.click(e.getByRole(`button`,{name:`Dismiss`})),l(t.onDismiss).toHaveBeenCalledTimes(1)}},m={args:{live:!0},play:({canvas:e})=>{l(e.getByRole(`status`)).toHaveTextContent(`Backup finished`)}},h={render:e=>(0,c.jsxs)(s,{gap:3,children:[(0,c.jsx)(a,{...e}),(0,c.jsx)(a,{title:`Disk almost full`,glyph:`chart`,appClass:`library`,time:`09:41`}),(0,c.jsx)(a,{...e,title:`Update ready`,body:`Restart to finish installing.`,actions:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{size:`small`,variant:`outline`,onClick:()=>{},children:`Later`}),(0,c.jsx)(n,{size:`small`,onClick:()=>{},children:`Restart`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Dismiss"
    }));
    expect(args.onDismiss).toHaveBeenCalledTimes(1);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    live: true
  },
  play: ({
    canvas
  }) => {
    expect(canvas.getByRole("status")).toHaveTextContent("Backup finished");
  }
}`,...m.parameters?.docs?.source},description:{story:`Announced only when it is new. One already on screen has nothing to say.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Notification {...args} />
      <Notification title="Disk almost full" glyph="chart" appClass="library" time="09:41" />
      <Notification {...args} title="Update ready" body="Restart to finish installing." actions={<>
            <Button size="small" variant="outline" onClick={() => {}}>
              Later
            </Button>
            <Button size="small" onClick={() => {}}>
              Restart
            </Button>
          </>} />
    </Stack>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Live`,`Shapes`]}))();export{m as Live,p as Playground,h as Shapes,g as __namedExportsOrder,f as default};