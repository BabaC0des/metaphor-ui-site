import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,F as a,I as o,jt as s,k as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_;e((()=>{i(),s(),o(),l=n(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Select`,component:a,tags:[`autodocs`],args:{items:[{id:`one`,label:`Choice one`},{id:`two`,label:`Choice two`},{id:`three`,label:`Choice three`,disabled:!0}],label:`Choice`,onChange:d()}},m=({label:e,children:n})=>(0,l.jsxs)(r,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:92}},children:e}),n]}),h={args:{defaultValue:`one`},play:async({canvas:e,args:t})=>{let n=e.getByRole(`combobox`,{name:`Choice`});await f.selectOptions(n,`two`),u(n).toHaveValue(`two`),u(t.onChange).toHaveBeenCalledWith(`two`),u(e.getByRole(`option`,{name:`Choice three`})).toBeDisabled()}},g={render:e=>(0,l.jsxs)(c,{gap:3,children:[(0,l.jsx)(m,{label:`empty`,children:(0,l.jsx)(a,{...e,placeholder:`Pick one`,defaultValue:``})}),(0,l.jsx)(m,{label:`chosen`,children:(0,l.jsx)(a,{...e,defaultValue:`two`})}),(0,l.jsx)(m,{label:`disabled`,children:(0,l.jsx)(a,{...e,defaultValue:`one`,disabled:!0})})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "one"
  },
  play: async ({
    canvas,
    args
  }) => {
    const select = canvas.getByRole("combobox", {
      name: "Choice"
    });
    await userEvent.selectOptions(select, "two");
    expect(select).toHaveValue("two");
    expect(args.onChange).toHaveBeenCalledWith("two");
    expect(canvas.getByRole("option", {
      name: "Choice three"
    })).toBeDisabled();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Row label="empty">
        <Select {...args} placeholder="Pick one" defaultValue="" />
      </Row>
      <Row label="chosen">
        <Select {...args} defaultValue="two" />
      </Row>
      <Row label="disabled">
        <Select {...args} defaultValue="one" disabled />
      </Row>
    </Stack>
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`States`]}))();export{h as Playground,g as States,_ as __namedExportsOrder,p as default};