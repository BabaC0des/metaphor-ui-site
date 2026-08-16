import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{A as r,D as i,O as a,S as o,jt as s,k as c,x as l}from"./iframe-BbNStJEX.js";var u,d,f,p,m,h,g,_,v;e((()=>{l(),s(),a(),r(),u=n(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Stack`,component:c,tags:[`autodocs`]},p=[1,2,3,4,5,6],m=(0,u.jsx)(o,{tone:`chrome`,radius:`control`,attributes:{style:{width:56,height:24}}}),h={args:{gap:3},render:e=>(0,u.jsxs)(c,{...e,children:[m,m,m]})},g={play:({canvasElement:e})=>{let t=[...e.querySelectorAll(`[class*='row']`)].map(e=>getComputedStyle(e).gap).filter(Boolean);d(new Set(t).size).toBeGreaterThanOrEqual(p.length)},render:()=>(0,u.jsx)(c,{gap:4,children:p.map(e=>(0,u.jsxs)(i,{gap:3,children:[(0,u.jsxs)(t,{size:`11`,tone:`label`,attributes:{style:{width:56}},children:[`space.`,e]}),(0,u.jsxs)(i,{gap:e,children:[m,m,m]})]},e))})},_={render:()=>(0,u.jsx)(i,{gap:2,wrap:!0,attributes:{style:{width:260}},children:Array.from({length:9},(e,t)=>(0,u.jsx)(`span`,{children:m},t))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 3
  },
  render: args => <Stack {...args}>
      {block}
      {block}
      {block}
    </Stack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  // Six steps, six different gaps, all of them off the spacing scale.
  play: ({
    canvasElement
  }) => {
    const rows = [...canvasElement.querySelectorAll("[class*='row']")];
    const gaps = rows.map(row => getComputedStyle(row).gap).filter(Boolean);
    expect(new Set(gaps).size).toBeGreaterThanOrEqual(GAPS.length);
  },
  render: () => <Stack gap={4}>
      {GAPS.map(gap => <Inline key={gap} gap={3}>
          <Text size="11" tone="label" attributes={{
        style: {
          width: 56
        }
      }}>
            space.{gap}
          </Text>
          <Inline gap={gap}>
            {block}
            {block}
            {block}
          </Inline>
        </Inline>)}
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Inline gap={2} wrap attributes={{
    style: {
      width: 260
    }
  }}>
      {Array.from({
      length: 9
    }, (_, index) =>
    // The blocks are all the same, the index is the only thing telling them apart.
    // oxlint-disable-next-line react/no-array-index-key
    <span key={index}>{block}</span>)}
    </Inline>
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Gaps`,`Wrapping`]}))();export{g as Gaps,h as Playground,_ as Wrapping,v as __namedExportsOrder,f as default};