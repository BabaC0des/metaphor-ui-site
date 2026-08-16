import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{vt as n,yt as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DataList`,component:n,tags:[`autodocs`],args:{rows:[{id:`model`,term:`Model`,value:`Reference machine`},{id:`memory`,term:`Memory`,value:`16 GB`},{id:`storage`,term:`Storage`,value:`512 GB`},{id:`display`,term:`Display`,value:`2560 by 1440`}]}},s={play:({canvasElement:e})=>{a(e.querySelectorAll(`dt`)).toHaveLength(4),a(e.querySelector(`dt`)).toHaveTextContent(`Model`),a(e.querySelector(`dd`)).toHaveTextContent(`Reference machine`)},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(n,{...e})})},c={args:{striped:!0},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // A description list, so every term is a dt and its value the dd beside it.
  play: ({
    canvasElement
  }) => {
    expect(canvasElement.querySelectorAll("dt")).toHaveLength(4);
    expect(canvasElement.querySelector("dt")).toHaveTextContent("Model");
    expect(canvasElement.querySelector("dd")).toHaveTextContent("Reference machine");
  },
  render: args => <div style={{
    width: 320
  }}>
      <DataList {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    striped: true
  },
  render: args => <div style={{
    width: 320
  }}>
      <DataList {...args} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Stripes earn their place once the list is long enough to lose a row in.`,...c.parameters?.docs?.description}}},l=[`Playground`,`Striped`]}))();export{s as Playground,c as Striped,l as __namedExportsOrder,o as default};