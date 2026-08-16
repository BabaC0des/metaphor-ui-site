import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{K as n,q as r}from"./iframe-BbNStJEX.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{expect:a}=__STORYBOOK_MODULE_TEST__,o=e=>`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" fill="${e}"/></svg>`),s={title:`Components/PhotoStrip`,component:n,tags:[`autodocs`],args:{photos:[{id:`a`,src:o(`#5d7f6f`),alt:`A green field`},{id:`b`,src:o(`#7f6f5d`),alt:`A brown field`},{id:`c`,src:o(`#6f5d7f`),alt:`A violet field`},{id:`d`,src:o(`#5d6f7f`),alt:`A blue field`},{id:`e`,src:o(`#7f5d6f`),alt:`A red field`}],label:`Recent pictures`}},c={play:({canvas:e})=>{let t=e.getByRole(`group`,{name:`Recent pictures`});a(t).toHaveAttribute(`tabindex`,`0`),a(e.getAllByRole(`img`)).toHaveLength(5)},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(n,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  // The strip scrolls, so it is in the tab order. A region only a wheel can
  // move is closed to anyone on a keyboard.
  play: ({
    canvas
  }) => {
    const strip = canvas.getByRole("group", {
      name: "Recent pictures"
    });
    expect(strip).toHaveAttribute("tabindex", "0");
    expect(canvas.getAllByRole("img")).toHaveLength(5);
  },
  render: args => <div style={{
    width: 320
  }}>
      <PhotoStrip {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l=[`Playground`]}))();export{c as Playground,l as __namedExportsOrder,s as default};