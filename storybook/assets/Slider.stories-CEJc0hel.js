import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,M as a,j as o,jt as s,k as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h,g,_;e((()=>{i(),s(),a(),l=n(),{expect:u,fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Slider`,component:o,tags:[`autodocs`],args:{label:`Volume`,onChange:d()}},p=({label:e,children:n})=>(0,l.jsxs)(r,{gap:3,children:[(0,l.jsx)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:72}},children:e}),n]}),m={args:{defaultValue:60},play:({canvas:e})=>{let t=e.getByRole(`slider`,{name:`Volume`});u(t).toHaveValue(`60`),u(t.style.getPropertyValue(`--mt-slider-filled`)).toBe(`60%`)}},h={render:e=>(0,l.jsxs)(c,{gap:3,children:[(0,l.jsx)(p,{label:`empty`,children:(0,l.jsx)(o,{...e,defaultValue:0})}),(0,l.jsx)(p,{label:`part way`,children:(0,l.jsx)(o,{...e,defaultValue:60})}),(0,l.jsx)(p,{label:`full`,children:(0,l.jsx)(o,{...e,defaultValue:100})}),(0,l.jsx)(p,{label:`disabled`,children:(0,l.jsx)(o,{...e,defaultValue:60,disabled:!0})})]})},g={args:{defaultValue:50,step:25}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 60
  },
  /*
   * The filled part of the track is the only thing this component draws, so
   * that is what is checked. Dragging and the arrow keys belong to the native
   * range and cannot be exercised with synthetic events anyway: the browser
   * only moves the thumb for a key press it trusts.
   */
  play: ({
    canvas
  }) => {
    const slider = canvas.getByRole("slider", {
      name: "Volume"
    });
    expect(slider).toHaveValue("60");
    expect(slider.style.getPropertyValue("--mt-slider-filled")).toBe("60%");
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Stack gap={3}>
      <Row label="empty">
        <Slider {...args} defaultValue={0} />
      </Row>
      <Row label="part way">
        <Slider {...args} defaultValue={60} />
      </Row>
      <Row label="full">
        <Slider {...args} defaultValue={100} />
      </Row>
      <Row label="disabled">
        <Slider {...args} defaultValue={60} disabled />
      </Row>
    </Stack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    step: 25
  }
}`,...g.parameters?.docs?.source},description:{story:`A step coarser than one makes the thumb snap, and the arrow keys jump.`,...g.parameters?.docs?.description}}},_=[`Playground`,`States`,`Stepped`]}))();export{m as Playground,h as States,g as Stepped,_ as __namedExportsOrder,f as default};