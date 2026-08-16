import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{Ct as r,D as i,E as a,jt as o,k as s,wt as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_,v,y;e((()=>{a(),o(),c(),l=n(),{expect:u,fn:d,userEvent:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Button`,component:r,tags:[`autodocs`],args:{children:`Primary action`,onClick:d()}},m=[`filled`,`outline`,`quiet`],h={play:async({canvas:e,args:t})=>{let n=e.getByRole(`button`,{name:`Primary action`});await f.click(n),u(t.onClick).toHaveBeenCalledTimes(1)}},g={play:({canvas:e})=>{let t=e.getAllByRole(`button`,{name:`Primary action`}).at(-1);u(t).toBeDisabled()},render:e=>(0,l.jsxs)(s,{gap:3,children:[m.map(n=>(0,l.jsxs)(i,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:64}},children:n}),(0,l.jsx)(r,{...e,variant:n}),(0,l.jsx)(r,{...e,variant:n,icon:`folder`})]},n)),(0,l.jsxs)(i,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:64}},children:`disabled`}),(0,l.jsx)(r,{...e,disabled:!0}),(0,l.jsx)(r,{...e,disabled:!0,icon:`folder`})]})]})},_={render:e=>(0,l.jsxs)(i,{gap:3,children:[(0,l.jsx)(r,{...e,size:`medium`}),(0,l.jsx)(r,{...e,size:`small`}),(0,l.jsx)(t,{size:`11`,tone:`label`,children:`34 and 28`})]})},v={name:`Without a handler`,render:()=>(0,l.jsx)(r,{variant:`outline`,children:`Primary action`}),play:({canvas:e})=>{u(e.queryByRole(`button`)).toBeNull(),u(e.getByText(`Primary action`).tagName).toBe(`SPAN`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    const button = canvas.getByRole("button", {
      name: "Primary action"
    });
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    const disabled = canvas.getAllByRole("button", {
      name: "Primary action"
    }).at(-1);
    expect(disabled).toBeDisabled();
  },
  render: args => <Stack gap={3}>
      {VARIANTS.map(variant => <Inline key={variant} gap={3}>
          <Text size="11" tone="label" weight={600} attributes={{
        style: {
          width: 64
        }
      }}>
            {variant}
          </Text>
          <Button {...args} variant={variant} />
          <Button {...args} variant={variant} icon="folder" />
        </Inline>)}
      <Inline gap={3}>
        <Text size="11" tone="label" weight={600} attributes={{
        style: {
          width: 64
        }
      }}>
          disabled
        </Text>
        <Button {...args} disabled />
        <Button {...args} disabled icon="folder" />
      </Inline>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={3}>
      <Button {...args} size="medium" />
      <Button {...args} size="small" />
      <Text size="11" tone="label">
        34 and 28
      </Text>
    </Inline>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Without a handler",
  render: () => <Button variant="outline">Primary action</Button>,
  play: ({
    canvas
  }) => {
    expect(canvas.queryByRole("button")).toBeNull();
    expect(canvas.getByText("Primary action").tagName).toBe("SPAN");
  }
}`,...v.parameters?.docs?.source},description:{story:`Without a handler it is a label: no role, no focus, no pointer.`,...v.parameters?.docs?.description}}},y=[`Playground`,`Variants`,`Sizes`,`WithoutAHandler`]}))();export{h as Playground,_ as Sizes,g as Variants,v as WithoutAHandler,y as __namedExportsOrder,p as default};