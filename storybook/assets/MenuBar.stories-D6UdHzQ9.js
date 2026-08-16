import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./jsx-runtime-Dm36vQ7d.js";import{t as n}from"./Icon-54pilQ-2.js";import{t as r}from"./Icon-Bk7pSsi0.js";import{$ as i,Q as a}from"./iframe-BbNStJEX.js";var o,s,c,l,u,d,f;e((()=>{r(),i(),o=t(),{expect:s,screen:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/MenuBar`,component:a,tags:[`autodocs`],args:{appName:`Finder`,menus:[{id:`file`,label:`File`,items:[{id:`new`,label:`New window`,shortcut:`N`},{id:`open`,label:`Open`,shortcut:`O`},{id:`rule`},{id:`close`,label:`Close`,shortcut:`W`}]},{id:`view`,label:`View`,items:[{id:`grid`,label:`As grid`,checked:!0},{id:`list`,label:`As list`}]}],clock:`09:41`,status:(0,o.jsx)(n,{glyph:`display`,size:16})}},d={play:async({canvas:e})=>{s(e.getByText(`Finder`)).toBeInTheDocument(),s(e.getByText(`09:41`)).toBeInTheDocument(),await l.pointer({keys:`[MouseLeft>]`,target:e.getByRole(`button`,{name:`File`})}),s(c.getByRole(`menuitem`,{name:/New window/})).toBeInTheDocument()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    expect(canvas.getByText("Finder")).toBeInTheDocument();
    expect(canvas.getByText("09:41")).toBeInTheDocument();
    await userEvent.pointer({
      keys: "[MouseLeft>]",
      target: canvas.getByRole("button", {
        name: "File"
      })
    });
    expect(screen.getByRole("menuitem", {
      name: /New window/
    })).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}},f=[`Playground`]}))();export{d as Playground,f as __namedExportsOrder,u as default};