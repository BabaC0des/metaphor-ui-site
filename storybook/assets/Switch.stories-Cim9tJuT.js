import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,b as a,jt as o,k as s,y as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{i(),o(),a(),l=n(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Switch`,component:c,tags:[`autodocs`],args:{onChange:d()}},m=({label:e,children:n})=>(0,l.jsxs)(r,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:72}},children:e}),n]}),h={play:async({canvas:e,args:t})=>{let n=e.getByRole(`switch`);u(n).toHaveAttribute(`aria-checked`,`false`),await f.click(n),u(n).toHaveAttribute(`aria-checked`,`true`),u(t.onChange).toHaveBeenCalledWith(!0)}},g={render:()=>(0,l.jsxs)(s,{gap:3,children:[(0,l.jsx)(m,{label:`off`,children:(0,l.jsx)(c,{})}),(0,l.jsx)(m,{label:`on`,children:(0,l.jsx)(c,{defaultChecked:!0})}),(0,l.jsx)(m,{label:`disabled`,children:(0,l.jsx)(c,{disabled:!0})}),(0,l.jsx)(m,{label:`disabled on`,children:(0,l.jsx)(c,{disabled:!0,defaultChecked:!0})})]})},_={parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},play:async({canvas:e})=>{let t=e.getAllByRole(`switch`)[0];await f.click(e.getAllByText(`Reduce motion`)[0]),u(t).toHaveAttribute(`aria-checked`,`true`)},render:()=>(0,l.jsxs)(s,{gap:3,children:[(0,l.jsx)(c,{label:`Reduce motion`}),(0,l.jsx)(c,{label:`Reduce motion`,defaultChecked:!0}),(0,l.jsx)(c,{label:`Reduce motion`,disabled:!0})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const control = canvas.getByRole("switch");
    expect(control).toHaveAttribute("aria-checked", "false");
    await userEvent.click(control);
    expect(control).toHaveAttribute("aria-checked", "true");
    expect(args.onChange).toHaveBeenCalledWith(true);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3}>
      <Row label="off">
        <Switch />
      </Row>
      <Row label="on">
        <Switch defaultChecked />
      </Row>
      <Row label="disabled">
        <Switch disabled />
      </Row>
      <Row label="disabled on">
        <Switch disabled defaultChecked />
      </Row>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  // The muted label belongs to a disabled control, and WCAG 1.4.3 exempts an
  // inactive component. The checker cannot see that the label and the button
  // belong together, so the rule is off here and nowhere else.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: "color-contrast",
          enabled: false
        }]
      }
    }
  },
  // The label is a real label element, so pressing the words works the switch.
  play: async ({
    canvas
  }) => {
    const control = canvas.getAllByRole("switch")[0];
    await userEvent.click(canvas.getAllByText("Reduce motion")[0]!);
    expect(control).toHaveAttribute("aria-checked", "true");
  },
  render: () => <Stack gap={3}>
      <Switch label="Reduce motion" />
      <Switch label="Reduce motion" defaultChecked />
      <Switch label="Reduce motion" disabled />
    </Stack>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`WithLabel`]}))();export{h as Playground,g as States,_ as WithLabel,v as __namedExportsOrder,p as default};