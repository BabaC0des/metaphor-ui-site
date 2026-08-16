import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{D as n,E as r,_t as i,gt as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p;e((()=>{i(),r(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DesktopIcon`,component:a,tags:[`autodocs`],args:{name:`Documents`,glyph:`folder`,onOpen:c()}},d={play:async({canvas:e,args:t})=>{let n=e.getByRole(`button`,{name:`Documents`});s(n).toHaveAttribute(`aria-pressed`,`false`),await l.click(n),s(t.onOpen).toHaveBeenCalledTimes(1)}},f={render:e=>(0,o.jsxs)(n,{gap:2,align:`start`,children:[(0,o.jsx)(a,{...e}),(0,o.jsx)(a,{...e,selected:!0}),(0,o.jsx)(a,{...e,name:`A folder with a much longer name`,appClass:`library`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // One press, not two. The metaphor is a desktop, the visitor is on a website.
  play: async ({
    canvas,
    args
  }) => {
    const icon = canvas.getByRole("button", {
      name: "Documents"
    });
    expect(icon).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(icon);
    expect(args.onOpen).toHaveBeenCalledTimes(1);
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={2} align="start">
      <DesktopIcon {...args} />
      <DesktopIcon {...args} selected />
      <DesktopIcon {...args} name="A folder with a much longer name" appClass="library" />
    </Inline>
}`,...f.parameters?.docs?.source},description:{story:`A long name wraps onto a second line and stops there.`,...f.parameters?.docs?.description}}},p=[`Playground`,`States`]}))();export{d as Playground,f as States,p as __namedExportsOrder,u as default};