import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,bt as a,jt as o,k as s,xt as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{i(),o(),c(),l=n(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Checkbox`,component:a,tags:[`autodocs`],args:{onChange:d()}},m=({label:e,children:n})=>(0,l.jsxs)(r,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:92}},children:e}),n]}),h={play:async({canvas:e,args:t})=>{let n=e.getByRole(`checkbox`);await f.click(n),u(n).toHaveAttribute(`aria-checked`,`true`),u(t.onChange).toHaveBeenCalledWith(!0)}},g={play:({canvas:e})=>{let t=e.getAllByRole(`checkbox`);u(t[2]).toHaveAttribute(`aria-checked`,`mixed`)},render:()=>(0,l.jsxs)(s,{gap:3,children:[(0,l.jsx)(m,{label:`off`,children:(0,l.jsx)(a,{})}),(0,l.jsx)(m,{label:`on`,children:(0,l.jsx)(a,{defaultChecked:!0})}),(0,l.jsx)(m,{label:`mixed`,children:(0,l.jsx)(a,{indeterminate:!0})}),(0,l.jsx)(m,{label:`disabled`,children:(0,l.jsx)(a,{disabled:!0})}),(0,l.jsx)(m,{label:`disabled on`,children:(0,l.jsx)(a,{disabled:!0,defaultChecked:!0})})]})},_={parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,l.jsxs)(s,{gap:3,children:[(0,l.jsx)(a,{label:`Show hidden files`}),(0,l.jsx)(a,{label:`Show hidden files`,defaultChecked:!0}),(0,l.jsx)(a,{label:`Show hidden files`,disabled:!0})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const control = canvas.getByRole("checkbox");
    await userEvent.click(control);
    expect(control).toHaveAttribute("aria-checked", "true");
    expect(args.onChange).toHaveBeenCalledWith(true);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // The mixed box reports itself as mixed rather than as off with a bar drawn.
  play: ({
    canvas
  }) => {
    const boxes = canvas.getAllByRole("checkbox");
    expect(boxes[2]).toHaveAttribute("aria-checked", "mixed");
  },
  render: () => <Stack gap={3}>
      <Row label="off">
        <Checkbox />
      </Row>
      <Row label="on">
        <Checkbox defaultChecked />
      </Row>
      <Row label="mixed">
        <Checkbox indeterminate />
      </Row>
      <Row label="disabled">
        <Checkbox disabled />
      </Row>
      <Row label="disabled on">
        <Checkbox disabled defaultChecked />
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
  render: () => <Stack gap={3}>
      <Checkbox label="Show hidden files" />
      <Checkbox label="Show hidden files" defaultChecked />
      <Checkbox label="Show hidden files" disabled />
    </Stack>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`States`,`WithLabel`]}))();export{h as Playground,g as States,_ as WithLabel,v as __namedExportsOrder,p as default};