import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{i as r,n as i,r as a,t as o}from"./Icon-54pilQ-2.js";import{D as s,E as c,jt as l,k as u}from"./iframe-BbNStJEX.js";var d,f,p,m,h,g,_,v,y;e((()=>{c(),l(),i(),r(),d=n(),{expect:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/Icon`,component:o,tags:[`autodocs`]},m=Object.keys(a),h={args:{glyph:`folder`,size:24,tone:`label`}},g={name:`The set`,play:({canvasElement:e})=>{f(e.querySelectorAll(`svg`)).toHaveLength(m.length),f(m).toHaveLength(17)},render:()=>(0,d.jsx)(s,{gap:4,wrap:!0,align:`start`,children:m.map(e=>(0,d.jsxs)(u,{gap:1,align:`center`,attributes:{style:{width:88}},children:[(0,d.jsx)(o,{glyph:e}),(0,d.jsx)(t,{size:`11`,tone:`label`,children:e})]},e))})},_={render:()=>(0,d.jsx)(u,{gap:3,children:[24,20,16].map(e=>(0,d.jsxs)(s,{gap:3,align:`center`,children:[(0,d.jsxs)(t,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:40}},children:[e,` px`]}),m.map(t=>(0,d.jsx)(`span`,{style:{display:`flex`,justifyContent:`center`,width:32,height:24},children:(0,d.jsx)(o,{glyph:t,size:e})},t))]},e))})},v={render:()=>(0,d.jsx)(s,{gap:4,children:[`content`,`label`,`muted`].map(e=>(0,d.jsxs)(s,{gap:2,children:[(0,d.jsx)(o,{glyph:`terminal`,tone:e}),(0,d.jsx)(t,{size:`11`,tone:`label`,children:e})]},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: "folder",
    size: 24,
    tone: "label"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "The set",
  // The set is closed. A name that is not in the union does not exist, and the
  // count here is the count on the sheet.
  play: ({
    canvasElement
  }) => {
    expect(canvasElement.querySelectorAll("svg")).toHaveLength(NAMES.length);
    expect(NAMES).toHaveLength(17);
  },
  render: () => <Inline gap={4} wrap align="start">
      {NAMES.map(glyph => <Stack key={glyph} gap={1} align="center" attributes={{
      style: {
        width: 88
      }
    }}>
          <Icon glyph={glyph} />
          <Text size="11" tone="label">
            {glyph}
          </Text>
        </Stack>)}
    </Inline>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3}>
      {([24, 20, 16] as const).map(size => <Inline key={size} gap={3} align="center">
          <Text size="11" tone="label" weight={600} attributes={{
        style: {
          width: 40
        }
      }}>
            {size} px
          </Text>
          {NAMES.map(glyph => <span key={glyph} style={{
        display: "flex",
        justifyContent: "center",
        width: 32,
        height: 24
      }}>
              <Icon glyph={glyph} size={size} />
            </span>)}
        </Inline>)}
    </Stack>
}`,..._.parameters?.docs?.source},description:{story:`The whole set at all three sizes, so a glyph that thins out has nowhere to hide.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Inline gap={4}>
      {(["content", "label", "muted"] as const).map(tone => <Inline key={tone} gap={2}>
          <Icon glyph="terminal" tone={tone} />
          <Text size="11" tone="label">
            {tone}
          </Text>
        </Inline>)}
    </Inline>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`TheSet`,`Sizes`,`Tones`]}))();export{h as Playground,_ as Sizes,g as TheSet,v as Tones,y as __namedExportsOrder,p as default};