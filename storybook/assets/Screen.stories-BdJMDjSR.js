import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{B as r,V as i,i as a,jt as o,r as s}from"./iframe-BbNStJEX.js";var c,l,u,d,f,p;e((()=>{i(),o(),a(),c=n(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Screen`,component:r,tags:[`autodocs`],args:{full:!1}},d={play:({canvasElement:e})=>{let t=e.querySelector(`[data-os]`);l(t).toHaveAttribute(`data-os`,`macos`),l(t).toHaveAttribute(`data-mode`,`light`)},render:e=>(0,c.jsx)(r,{...e,attributes:{style:{height:280}},children:(0,c.jsx)(s,{title:`Notes`,width:280,draggable:!0,defaultPosition:{x:24,y:24},children:(0,c.jsx)(s.Body,{children:(0,c.jsx)(t,{size:`12`,tone:`label`,children:`Windows are positioned against the screen they sit in.`})})})})},f={args:{wallpaper:`linear-gradient(160deg, #2f4f43, #7fa08f)`},render:e=>(0,c.jsx)(r,{...e,attributes:{style:{height:280}}})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // The screen is where the two attributes the tokens hang off are written.
  play: ({
    canvasElement
  }) => {
    const screen = canvasElement.querySelector("[data-os]");
    expect(screen).toHaveAttribute("data-os", "macos");
    expect(screen).toHaveAttribute("data-mode", "light");
  },
  render: args => <Screen {...args} attributes={{
    style: {
      height: 280
    }
  }}>
      <Window title="Notes" width={280} draggable defaultPosition={{
      x: 24,
      y: 24
    }}>
        <Window.Body>
          <Text size="12" tone="label">
            Windows are positioned against the screen they sit in.
          </Text>
        </Window.Body>
      </Window>
    </Screen>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    wallpaper: "linear-gradient(160deg, #2f4f43, #7fa08f)"
  },
  render: args => <Screen {...args} attributes={{
    style: {
      height: 280
    }
  }} />
}`,...f.parameters?.docs?.source},description:{story:`Any CSS background works, so a gradient needs no image.`,...f.parameters?.docs?.description}}},p=[`Playground`,`WithWallpaper`]}))();export{d as Playground,f as WithWallpaper,p as __namedExportsOrder,u as default};