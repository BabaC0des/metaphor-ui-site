import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{N as n,P as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c;e((()=>{r(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/SelfTestTable`,component:n,tags:[`autodocs`],args:{rows:[{id:`memory`,name:`Memory`,state:`pass`,detail:`16 GB`},{id:`storage`,name:`Storage`,state:`pass`,detail:`512 GB`},{id:`display`,name:`Display`,state:`running`,detail:`2560 by 1440`},{id:`network`,name:`Network`,state:`fail`,detail:`No route`},{id:`audio`,name:`Audio`,state:`skip`}]}},s={play:({canvas:e})=>{a(e.getAllByRole(`row`)).toHaveLength(5),a(e.getByRole(`row`,{name:/Network/})).toHaveTextContent(`failed`),a(e.getByRole(`row`,{name:/Audio/})).toHaveTextContent(`skipped`)},render:e=>(0,i.jsx)(`div`,{style:{width:420},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  // The state is a word, not only a colour, so it can be read out loud.
  play: ({
    canvas
  }) => {
    expect(canvas.getAllByRole("row")).toHaveLength(5);
    expect(canvas.getByRole("row", {
      name: /Network/
    })).toHaveTextContent("failed");
    expect(canvas.getByRole("row", {
      name: /Audio/
    })).toHaveTextContent("skipped");
  },
  render: args => <div style={{
    width: 420
  }}>
      <SelfTestTable {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Playground`]}))();export{s as Playground,c as __namedExportsOrder,o as default};