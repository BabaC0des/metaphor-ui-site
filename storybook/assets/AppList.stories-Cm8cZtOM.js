import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{At as n,kt as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),{expect:a,fn:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/AppList`,component:r,tags:[`autodocs`],args:{apps:[{id:`files`,name:`Files`,glyph:`folder`,appClass:`site`,running:!0},{id:`terminal`,name:`Terminal`,glyph:`terminal`,appClass:`language`},{id:`photos`,name:`Photos`,glyph:`image`,appClass:`spatial`},{id:`mail`,name:`Mail`,glyph:`mail`,appClass:`library`,running:!0}],defaultValue:`terminal`,label:`Applications`,onChange:o()}},l={play:async({canvas:e,args:t})=>{let n=e.getAllByRole(`option`);a(n[1]).toHaveAttribute(`aria-selected`,`true`),await s.click(n[3]),a(n[3]).toHaveAttribute(`aria-selected`,`true`),a(t.onChange).toHaveBeenCalledWith(`mail`)},render:e=>(0,i.jsx)(`div`,{style:{width:220},children:(0,i.jsx)(r,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // A listbox, because choosing a row changes what is shown beside it.
  play: async ({
    canvas,
    args
  }) => {
    const rows = canvas.getAllByRole("option");
    expect(rows[1]).toHaveAttribute("aria-selected", "true");
    await userEvent.click(rows[3]!);
    expect(rows[3]).toHaveAttribute("aria-selected", "true");
    expect(args.onChange).toHaveBeenCalledWith("mail");
  },
  render: args => <div style={{
    width: 220
  }}>
      <AppList {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Playground`]}))();export{l as Playground,u as __namedExportsOrder,c as default};