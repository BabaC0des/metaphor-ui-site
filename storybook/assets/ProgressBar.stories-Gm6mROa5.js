import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{E as n,G as r,W as i,k as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d;e((()=>{r(),n(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/ProgressBar`,component:i,tags:[`autodocs`],args:{value:62,label:`Checking memory`}},l={play:({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Checking memory`});s(t).toHaveAttribute(`aria-valuenow`,`62`)}},u={play:({canvas:e})=>{let t=e.getByRole(`progressbar`,{name:`Loading`});s(t).not.toHaveAttribute(`aria-valuenow`)},render:e=>(0,o.jsxs)(a,{gap:4,attributes:{style:{width:320}},children:[(0,o.jsx)(i,{...e,value:12}),(0,o.jsx)(i,{...e,value:62}),(0,o.jsx)(i,{...e,value:100}),(0,o.jsx)(i,{label:`Loading`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    const bar = canvas.getByRole("progressbar", {
      name: "Checking memory"
    });
    expect(bar).toHaveAttribute("aria-valuenow", "62");
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  // The running bar reports no value at all rather than a made up one.
  play: ({
    canvas
  }) => {
    const running = canvas.getByRole("progressbar", {
      name: "Loading"
    });
    expect(running).not.toHaveAttribute("aria-valuenow");
  },
  render: args => <Stack gap={4} attributes={{
    style: {
      width: 320
    }
  }}>
      <ProgressBar {...args} value={12} />
      <ProgressBar {...args} value={62} />
      <ProgressBar {...args} value={100} />
      <ProgressBar label="Loading" />
    </Stack>
}`,...u.parameters?.docs?.source},description:{story:`Without a value the bar runs, which is the honest answer to an unknown wait.`,...u.parameters?.docs?.description}}},d=[`Playground`,`Running`]}))();export{l as Playground,u as Running,d as __namedExportsOrder,c as default};