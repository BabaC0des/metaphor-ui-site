import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{t as r}from"./Icon-54pilQ-2.js";import{t as i}from"./Icon-Bk7pSsi0.js";import{D as a,E as o,a as s,jt as c,o as l}from"./iframe-BbNStJEX.js";var u,d,f,p,m,h;e((()=>{i(),o(),c(),l(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Widget`,component:s,tags:[`autodocs`],args:{title:`Weather`,trailing:(0,u.jsx)(r,{glyph:`contrast`,size:16})}},p={render:e=>(0,u.jsx)(s,{...e,children:(0,u.jsx)(t,{size:`32`,children:`18°`})})},m={play:({canvas:e})=>{let[t,n]=[e.getByText(`18°`),e.getByText(/Clear, then rain/)];d(t.closest(`div`)?.parentElement).toHaveStyle({width:`148px`}),d(n.closest(`div`)?.parentElement).toHaveStyle({width:`312px`})},render:e=>(0,u.jsxs)(a,{gap:3,align:`start`,children:[(0,u.jsx)(s,{...e,size:`small`,children:(0,u.jsx)(t,{size:`32`,children:`18°`})}),(0,u.jsx)(s,{...e,size:`medium`,title:`This week`,children:(0,u.jsx)(t,{size:`12`,tone:`label`,children:`Clear, then rain from Thursday.`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Widget {...args}>
      <Text size="32">18°</Text>
    </Widget>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  // Fixed shapes, so widgets line up with each other on the desktop.
  play: ({
    canvas
  }) => {
    const [small, medium] = [canvas.getByText("18°"), canvas.getByText(/Clear, then rain/)];
    expect(small.closest("div")?.parentElement).toHaveStyle({
      width: "148px"
    });
    expect(medium.closest("div")?.parentElement).toHaveStyle({
      width: "312px"
    });
  },
  render: args => <Inline gap={3} align="start">
      <Widget {...args} size="small">
        <Text size="32">18°</Text>
      </Widget>
      <Widget {...args} size="medium" title="This week">
        <Text size="12" tone="label">
          Clear, then rain from Thursday.
        </Text>
      </Widget>
    </Inline>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Sizes`]}))();export{p as Playground,m as Sizes,h as __namedExportsOrder,f as default};