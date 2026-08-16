import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,jt as a,k as o,ot as s,st as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{i(),a(),c(),l=n(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Field`,component:s,tags:[`autodocs`],args:{placeholder:`Search`,onSubmit:d(),onChange:d()}},m=({label:e,children:n})=>(0,l.jsxs)(r,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:72}},children:e}),n]}),h={play:async({canvas:e,args:t})=>{let n=e.getByPlaceholderText(`Search`);await f.type(n,`hello`),u(t.onChange).toHaveBeenLastCalledWith(`hello`),await f.keyboard(`{Enter}`),u(t.onSubmit).toHaveBeenCalledWith(`hello`)}},g={render:e=>(0,l.jsxs)(o,{gap:3,children:[(0,l.jsx)(m,{label:`rest`,children:(0,l.jsx)(s,{...e})}),(0,l.jsx)(m,{label:`filled`,children:(0,l.jsx)(s,{...e,autofill:!0,defaultValue:`A typed value`})}),(0,l.jsx)(m,{label:`invalid`,children:(0,l.jsx)(s,{...e,invalid:!0,autofill:!0,defaultValue:`Wrong`})}),(0,l.jsx)(m,{label:`disabled`,children:(0,l.jsx)(s,{...e,disabled:!0})})]})},_={play:({canvas:e})=>{for(let t of e.getAllByDisplayValue(`123456789`))u(t).toHaveAttribute(`type`,`password`)},render:e=>(0,l.jsxs)(o,{gap:3,children:[(0,l.jsx)(m,{label:`password`,children:(0,l.jsx)(s,{...e,type:`password`,autofill:!0,defaultValue:`123456789`})}),(0,l.jsx)(m,{label:`invalid`,children:(0,l.jsx)(s,{...e,type:`password`,invalid:!0,autofill:!0,defaultValue:`123456789`})})]})},v={render:()=>(0,l.jsx)(s,{placeholder:`Search`}),play:({canvas:e})=>{u(e.queryByRole(`button`)).toBeNull()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const input = canvas.getByPlaceholderText("Search");
    await userEvent.type(input, "hello");
    expect(args.onChange).toHaveBeenLastCalledWith("hello");
    await userEvent.keyboard("{Enter}");
    expect(args.onSubmit).toHaveBeenCalledWith("hello");
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Row label="rest">
        <Field {...args} />
      </Row>
      <Row label="filled">
        <Field {...args} autofill defaultValue="A typed value" />
      </Row>
      <Row label="invalid">
        <Field {...args} invalid autofill defaultValue="Wrong" />
      </Row>
      <Row label="disabled">
        <Field {...args} disabled />
      </Row>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    for (const input of canvas.getAllByDisplayValue("123456789")) {
      expect(input).toHaveAttribute("type", "password");
    }
  },
  render: args => <Stack gap={3}>
      <Row label="password">
        <Field {...args} type="password" autofill defaultValue="123456789" />
      </Row>
      <Row label="invalid">
        <Field {...args} type="password" invalid autofill defaultValue="123456789" />
      </Row>
    </Stack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Field placeholder="Search" />,
  play: ({
    canvas
  }) => {
    expect(canvas.queryByRole("button")).toBeNull();
  }
}`,...v.parameters?.docs?.source},description:{story:`Without onSubmit there is no arrow, the same way Button drops its role.`,...v.parameters?.docs?.description}}},y=[`Playground`,`States`,`Masked`,`WithoutSubmit`]}))();export{_ as Masked,h as Playground,g as States,v as WithoutSubmit,y as __namedExportsOrder,p as default};