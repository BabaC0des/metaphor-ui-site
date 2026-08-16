import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{Ct as n,D as r,E as i,St as a,c as o,s}from"./iframe-BbNStJEX.js";var c,l,u,d,f,p,m,h;e((()=>{a(),i(),o(),c=t(),{expect:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Tooltip`,component:s,tags:[`autodocs`],args:{content:`Short hint text`}},f=[`top`,`bottom`,`start`,`end`],p={render:e=>(0,c.jsx)(s,{...e,children:(0,c.jsx)(n,{onClick:()=>{},children:`Hover me`})}),play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Hover me`});l(e.queryByRole(`tooltip`)).toBeNull(),await u.hover(t),l(e.getByRole(`tooltip`)).toHaveTextContent(`Short hint text`),await u.keyboard(`{Escape}`),l(e.queryByRole(`tooltip`)).toBeNull()}},m={render:e=>(0,c.jsx)(r,{gap:5,attributes:{style:{padding:48}},children:f.map(t=>(0,c.jsx)(s,{...e,placement:t,children:(0,c.jsx)(n,{onClick:()=>{},children:t})},t))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button onClick={() => {}}>Hover me</Button>
    </Tooltip>,
  // Hover opens it, Escape closes it, and the hint names the button while it
  // is open. A tooltip that only the pointer can reach is not a tooltip.
  play: async ({
    canvas
  }) => {
    const button = canvas.getByRole("button", {
      name: "Hover me"
    });
    expect(canvas.queryByRole("tooltip")).toBeNull();
    await userEvent.hover(button);
    expect(canvas.getByRole("tooltip")).toHaveTextContent("Short hint text");
    await userEvent.keyboard("{Escape}");
    expect(canvas.queryByRole("tooltip")).toBeNull();
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={5} attributes={{
    style: {
      padding: 48
    }
  }}>
      {PLACEMENTS.map(placement => <Tooltip key={placement} {...args} placement={placement}>
          <Button onClick={() => {}}>{placement}</Button>
        </Tooltip>)}
    </Inline>
}`,...m.parameters?.docs?.source},description:{story:`Focus opens it as well, so the hint exists for anyone on a keyboard.`,...m.parameters?.docs?.description}}},h=[`Playground`,`Placements`]}))();export{m as Placements,p as Playground,h as __namedExportsOrder,d as default};