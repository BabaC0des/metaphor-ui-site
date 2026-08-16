import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{m as n,p as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Terminal`,component:r,tags:[`autodocs`],args:{lines:[{id:`1`,kind:`command`,path:`~/work`,text:`build --release`},{id:`2`,kind:`output`,text:`Compiling 42 modules`},{id:`3`,kind:`output`,text:`Finished in 3.1s`},{id:`4`,kind:`command`,path:`~/work`,text:``}],title:`bash`,caret:!0}},s={play:({canvas:e})=>{a(e.getAllByText(`$`)).toHaveLength(2),a(e.getAllByText(`~/work`)).toHaveLength(2),a(e.getByText(`Finished in 3.1s`)).toBeInTheDocument()},render:e=>(0,i.jsx)(`div`,{style:{width:420},children:(0,i.jsx)(r,{...e})})},c={render:({lines:e})=>(0,i.jsx)(`div`,{style:{width:420},children:(0,i.jsx)(r,{lines:e,height:160,caret:!0})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // A command line carries the prompt and the path, an output line neither.
  play: ({
    canvas
  }) => {
    expect(canvas.getAllByText("$")).toHaveLength(2);
    expect(canvas.getAllByText("~/work")).toHaveLength(2);
    expect(canvas.getByText("Finished in 3.1s")).toBeInTheDocument();
  },
  render: args => <div style={{
    width: 420
  }}>
      <Terminal {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    lines
  }) => <div style={{
    width: 420
  }}>
      <Terminal lines={lines} height={160} caret />
    </div>
}`,...c.parameters?.docs?.source},description:{story:`Without a title there is no chrome, which suits a terminal inside a window.`,...c.parameters?.docs?.description}}},l=[`Playground`,`Bare`]}))();export{c as Bare,s as Playground,l as __namedExportsOrder,o as default};