import{i as e}from"./preload-helper-CmbjvaKP.js";import{t}from"./Text-_7g-ueY5.js";import{t as n}from"./jsx-runtime-Dm36vQ7d.js";import{D as r,E as i,ct as a,jt as o,lt as s}from"./iframe-BbNStJEX.js";var c,l,u,d,f,p,m,h;e((()=>{i(),o(),s(),c=n(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Dot`,component:a,tags:[`autodocs`]},d=[`language`,`library`,`site`,`spatial`,`running`],f={args:{appClass:`language`,size:7}},p={play:({canvasElement:e})=>{let t=[...e.querySelectorAll(`[aria-hidden='true']`)],n=t.map(e=>getComputedStyle(e).backgroundColor);l(t).toHaveLength(d.length),l(new Set(n).size).toBe(d.length)},render:()=>(0,c.jsx)(r,{gap:5,children:d.map(e=>(0,c.jsxs)(r,{gap:1,children:[(0,c.jsx)(a,{appClass:e}),(0,c.jsx)(t,{size:`11`,children:e})]},e))})},m={render:()=>(0,c.jsx)(r,{gap:4,children:[6,7,8].map(e=>(0,c.jsxs)(r,{gap:1,children:[(0,c.jsx)(a,{appClass:`library`,size:e}),(0,c.jsxs)(t,{size:`11`,tone:`label`,children:[e,` px`]})]},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    appClass: "language",
    size: 7
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  /*
   * The dot is decoration and is hidden, so what it marks has to say so in
   * words as well. The five classes are five different colours, which is the
   * one thing worth checking: a colour that repeats carries no class.
   */
  play: ({
    canvasElement
  }) => {
    const dots = [...canvasElement.querySelectorAll("[aria-hidden='true']")];
    const colours = dots.map(dot => getComputedStyle(dot).backgroundColor);
    expect(dots).toHaveLength(CLASSES.length);
    expect(new Set(colours).size).toBe(CLASSES.length);
  },
  render: () => <Inline gap={5}>
      {CLASSES.map(appClass => <Inline key={appClass} gap={1}>
          <Dot appClass={appClass} />
          <Text size="11">{appClass}</Text>
        </Inline>)}
    </Inline>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Inline gap={4}>
      {([6, 7, 8] as const).map(size => <Inline key={size} gap={1}>
          <Dot appClass="library" size={size} />
          <Text size="11" tone="label">
            {size} px
          </Text>
        </Inline>)}
    </Inline>
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Classes`,`Sizes`]}))();export{p as Classes,f as Playground,m as Sizes,h as __namedExportsOrder,u as default};