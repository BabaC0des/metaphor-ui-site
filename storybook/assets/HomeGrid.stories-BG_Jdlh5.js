import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{nt as n,rt as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{expect:a,fn:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/HomeGrid`,component:n,tags:[`autodocs`],args:{apps:[{id:`files`,name:`Files`,glyph:`folder`,appClass:`site`,onOpen:o()},{id:`terminal`,name:`Terminal`,glyph:`terminal`,appClass:`language`},{id:`photos`,name:`Photos`,glyph:`image`,appClass:`spatial`},{id:`mail`,name:`Mail`,glyph:`mail`,appClass:`library`},{id:`reports`,name:`Reports`,glyph:`chart`,appClass:`library`},{id:`notes`,name:`Notes`,glyph:`document`,appClass:`site`},{id:`maps`,name:`Maps`,glyph:`target`,appClass:`spatial`},{id:`people`,name:`People`,glyph:`person`,appClass:`language`}]}},l={play:async({canvas:e,args:t})=>{a(e.getByLabelText(`Home`).style.gridTemplateColumns).toBe(`repeat(4, 1fr)`),await s.click(e.getByRole(`button`,{name:`Files`})),a(t.apps[0]?.onOpen).toHaveBeenCalledTimes(1)},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(n,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // The column count is a prop rather than a media query, so it is checked on
  // the grid itself and not by measuring the window.
  play: async ({
    canvas,
    args
  }) => {
    expect(canvas.getByLabelText("Home").style.gridTemplateColumns).toBe("repeat(4, 1fr)");
    await userEvent.click(canvas.getByRole("button", {
      name: "Files"
    }));
    expect(args.apps[0]?.onOpen).toHaveBeenCalledTimes(1);
  },
  render: args => <div style={{
    width: 320
  }}>
      <HomeGrid {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};