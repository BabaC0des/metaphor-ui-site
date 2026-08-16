import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{D as n,Dt as r,E as i,Ot as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d;e((()=>{a(),i(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Avatar`,component:r,tags:[`autodocs`],args:{name:`Ada Lovelace`}},l={play:({canvas:e})=>{s(e.getByText(`AL`)).toBeInTheDocument()}},u={play:({canvas:e})=>{s(e.getAllByText(`AL`)).toHaveLength(3),s(e.getByText(`G`)).toBeInTheDocument()},render:e=>(0,o.jsxs)(n,{gap:3,align:`center`,children:[(0,o.jsx)(r,{...e,size:32}),(0,o.jsx)(r,{...e,size:48}),(0,o.jsx)(r,{...e,name:`Guest`}),(0,o.jsx)(r,{...e,square:!0})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    expect(canvas.getByText("AL")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  // One word gives one initial, two or more give the first and the last.
  play: ({
    canvas
  }) => {
    expect(canvas.getAllByText("AL")).toHaveLength(3);
    expect(canvas.getByText("G")).toBeInTheDocument();
  },
  render: args => <Inline gap={3} align="center">
      <Avatar {...args} size={32} />
      <Avatar {...args} size={48} />
      <Avatar {...args} name="Guest" />
      <Avatar {...args} square />
    </Inline>
}`,...u.parameters?.docs?.source},description:{story:`One word gives one initial. Two or more give the first and the last.`,...u.parameters?.docs?.description}}},d=[`Playground`,`Fallbacks`]}))();export{u as Fallbacks,l as Playground,d as __namedExportsOrder,c as default};