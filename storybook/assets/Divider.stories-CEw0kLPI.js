import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,ft as a,jt as o,k as s,pt as c}from"./iframe-BbNStJEX.js";var l,u,d,f,p,m,h;e((()=>{i(),o(),c(),l=n(),{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Divider`,component:a,tags:[`autodocs`]},f={args:{orientation:`horizontal`,inset:0},play:({canvas:e})=>{u(e.getByRole(`separator`)).toHaveAttribute(`aria-orientation`,`horizontal`)},render:e=>(0,l.jsx)(`div`,{style:{width:420},children:(0,l.jsx)(a,{...e})})},p={render:()=>(0,l.jsxs)(s,{gap:3,attributes:{style:{width:420}},children:[(0,l.jsx)(t,{size:`11`,tone:`label`,children:`Above the line`}),(0,l.jsx)(a,{}),(0,l.jsx)(t,{size:`11`,tone:`label`,children:`Below the line, and the same line inset by 16`}),(0,l.jsx)(a,{inset:16})]})},m={play:({canvas:e})=>{for(let t of e.getAllByRole(`separator`))u(t).toHaveAttribute(`aria-orientation`,`vertical`)},render:()=>(0,l.jsxs)(r,{gap:3,align:`stretch`,attributes:{style:{height:64}},children:[(0,l.jsx)(t,{size:`11`,tone:`label`,children:`Sidebar`}),(0,l.jsx)(a,{orientation:`vertical`}),(0,l.jsx)(t,{size:`11`,tone:`label`,children:`Content`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    inset: 0
  },
  // A separator says which way it runs, so it is not read as a stray element.
  play: ({
    canvas
  }) => {
    expect(canvas.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  },
  render: args => <div style={{
    width: 420
  }}>
      <Divider {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3} attributes={{
    style: {
      width: 420
    }
  }}>
      <Text size="11" tone="label">
        Above the line
      </Text>
      <Divider />
      <Text size="11" tone="label">
        Below the line, and the same line inset by 16
      </Text>
      <Divider inset={16} />
    </Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    for (const rule of canvas.getAllByRole("separator")) {
      expect(rule).toHaveAttribute("aria-orientation", "vertical");
    }
  },
  render: () => <Inline gap={3} align="stretch" attributes={{
    style: {
      height: 64
    }
  }}>
      <Text size="11" tone="label">
        Sidebar
      </Text>
      <Divider orientation="vertical" />
      <Text size="11" tone="label">
        Content
      </Text>
    </Inline>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Horizontal`,`Vertical`]}))();export{p as Horizontal,f as Playground,m as Vertical,h as __namedExportsOrder,d as default};