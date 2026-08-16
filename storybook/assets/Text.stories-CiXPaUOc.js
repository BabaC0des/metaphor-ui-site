import{i as e}from"./preload-helper-CmbjvaKP.js";import{n as t,t as n}from"./Text-_7g-ueY5.js";import{t as r}from"./jsx-runtime-Dm36vQ7d.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),i=r(),{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Text`,component:n,tags:[`autodocs`]},s=[`10`,`11`,`12`,`14`,`18`,`25`,`32`],c=[`content`,`label`,`muted`],l={display:`flex`,flexDirection:`column`,gap:12},u={args:{children:`First line of content`,size:`12`,tone:`content`,weight:400},play:({canvas:e})=>{a(e.getByText(`First line of content`)).toHaveStyle({fontSize:`12px`})}},d={render:()=>(0,i.jsx)(`div`,{style:l,children:s.map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:24},children:[(0,i.jsx)(`span`,{style:{width:320},children:(0,i.jsx)(n,{size:e,children:`First line of content`})}),(0,i.jsxs)(n,{size:`11`,tone:`label`,children:[`size.`,e]})]},e))})},f={parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,i.jsx)(`div`,{style:l,children:c.map(e=>(0,i.jsxs)(n,{size:`14`,tone:e,children:[`Sample content, tone `,e]},e))})},p={render:()=>(0,i.jsx)(`div`,{style:l,children:[400,500,600,700].map(e=>(0,i.jsxs)(n,{size:`14`,weight:e,children:[`Sample content at `,e]},e))})},m={play:({canvas:e})=>{let t=e.getByText(/A line long enough/);a(t).toHaveStyle({textOverflow:`ellipsis`,whiteSpace:`nowrap`}),a(t.scrollWidth).toBeGreaterThan(t.clientWidth)},render:()=>(0,i.jsx)(`div`,{style:{width:220},children:(0,i.jsx)(n,{truncate:!0,children:`A line long enough that it has to end in an ellipsis somewhere`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "First line of content",
    size: "12",
    tone: "content",
    weight: 400
  },
  // Seven sizes and three tones, and no way to reach a value outside them.
  play: ({
    canvas
  }) => {
    expect(canvas.getByText("First line of content")).toHaveStyle({
      fontSize: "12px"
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      {SIZES.map(size => <div key={size} style={{
      display: "flex",
      alignItems: "baseline",
      gap: 24
    }}>
          {/* A fixed column, so the marks read as a list rather than a staircase. */}
          <span style={{
        width: 320
      }}>
            <Text size={size}>First line of content</Text>
          </span>
          <Text size="11" tone="label">
            size.{size}
          </Text>
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // The story exists to show what the muted tone looks like, and the muted tone
  // is 1.74:1 on light ground. That is a finding against the token, recorded on
  // the progress page, not something a story can fix by not showing it.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: "color-contrast",
          enabled: false
        }]
      }
    }
  },
  render: () => <div style={column}>
      {TONES.map(tone => <Text key={tone} size="14" tone={tone}>
          Sample content, tone {tone}
        </Text>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={column}>
      {([400, 500, 600, 700] as const).map(weight => <Text key={weight} size="14" weight={weight}>
          Sample content at {weight}
        </Text>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    const line = canvas.getByText(/A line long enough/);
    expect(line).toHaveStyle({
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    });
    expect(line.scrollWidth).toBeGreaterThan(line.clientWidth);
  },
  render: () => <div style={{
    width: 220
  }}>
      <Text truncate>A line long enough that it has to end in an ellipsis somewhere</Text>
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Sizes`,`Tones`,`Weights`,`Truncated`]}))();export{u as Playground,d as Sizes,f as Tones,m as Truncated,p as Weights,h as __namedExportsOrder,o as default};