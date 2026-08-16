import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{n,t as r}from"./Tile-DHEjiMuy.js";import{D as i,E as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{a(),n(),o=t(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u=[`language`,`library`,`site`,`spatial`],d={title:`Components/Tile`,component:r,tags:[`autodocs`],args:{glyph:`terminal`,label:`Terminal`}},f={play:async({canvas:e})=>{s(e.getByRole(`img`,{name:`Terminal`})).toBeInTheDocument(),s(e.queryByRole(`button`)).toBeNull()}},p={args:{onOpen:c()},play:async({canvas:e,args:t})=>{await l.click(e.getByRole(`button`,{name:`Terminal`})),s(t.onOpen).toHaveBeenCalledTimes(1)}},m={render:e=>(0,o.jsx)(i,{gap:3,children:u.map(t=>(0,o.jsx)(r,{...e,appClass:t},t))})},h={render:e=>(0,o.jsx)(i,{gap:3,align:`center`,children:[32,40,48,64].map(t=>(0,o.jsx)(r,{...e,size:t},t))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // Decoration by default, a control once it has been given something to open.
  play: async ({
    canvas
  }) => {
    expect(canvas.getByRole("img", {
      name: "Terminal"
    })).toBeInTheDocument();
    expect(canvas.queryByRole("button")).toBeNull();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onOpen: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Terminal"
    }));
    expect(args.onOpen).toHaveBeenCalledTimes(1);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={3}>
      {CLASSES.map(appClass => <Tile key={appClass} {...args} appClass={appClass} />)}
    </Inline>
}`,...m.parameters?.docs?.source},description:{story:`The class decides the two colours. Nothing else about the tile changes.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Inline gap={3} align="center">
      {[32, 40, 48, 64].map(size => <Tile key={size} {...args} size={size} />)}
    </Inline>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Openable`,`Classes`,`Sizes`]}))();export{m as Classes,p as Openable,f as Playground,h as Sizes,g as __namedExportsOrder,d as default};