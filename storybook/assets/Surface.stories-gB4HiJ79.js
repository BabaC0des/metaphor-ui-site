import{i as e,s as t}from"./preload-helper-CmbjvaKP.js";import{t as n}from"./react-6kYSJpRc.js";import{t as r}from"./Text-_7g-ueY5.js";import{t as i}from"./jsx-runtime-Dm36vQ7d.js";import{C as a,D as o,E as s,S as c,jt as l,k as u}from"./iframe-BbNStJEX.js";function d({label:e,children:t}){return(0,m.jsxs)(u,{gap:1,children:[(0,m.jsx)(r,{size:`11`,tone:`label`,weight:600,children:e}),t]})}function f({name:e}){let t=p.useRef(null),[n,i]=p.useState(``);return p.useEffect(()=>{t.current&&i(getComputedStyle(t.current).getPropertyValue(e).trim())},[e]),(0,m.jsx)(`span`,{ref:t,children:(0,m.jsx)(r,{size:`10`,tone:`label`,children:n||`none`})})}var p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{p=t(n(),1),s(),l(),a(),m=i(),{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Surface`,component:c,tags:[`autodocs`]},_=[`base`,`raised`,`chrome`,`sunken`],v=[`window`,`control`,`tile`,`none`],y=[0,1,2,3,4],b={width:160,height:96},x={args:{tone:`raised`,elevation:0,radius:`window`,border:!0},render:e=>(0,m.jsx)(c,{...e,attributes:{style:b}})},S={render:()=>(0,m.jsx)(o,{gap:3,align:`start`,wrap:!0,children:_.map(e=>(0,m.jsx)(d,{label:`surface.${e}`,children:(0,m.jsx)(c,{tone:e,attributes:{style:b}})},e))})},C={render:()=>(0,m.jsx)(o,{gap:3,align:`start`,wrap:!0,children:v.map(e=>(0,m.jsx)(d,{label:`radius.${e}`,children:(0,m.jsx)(c,{radius:e,attributes:{style:b}})},e))})},w={play:({canvasElement:e})=>{let t=[...e.querySelectorAll(`[class*='root']`)].map(e=>getComputedStyle(e).boxShadow).filter(e=>e!==`none`);h(new Set(t).size).toBe(t.length)},render:()=>(0,m.jsx)(o,{gap:4,align:`start`,wrap:!0,children:y.map(e=>(0,m.jsxs)(d,{label:`elevation.${e}`,children:[(0,m.jsx)(c,{elevation:e,attributes:{style:b}}),(0,m.jsx)(f,{name:`--mt-elevation-${e}`})]},e))})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tone: "raised",
    elevation: 0,
    radius: "window",
    border: true
  },
  render: args => <Surface {...args} attributes={{
    style: plate
  }} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Inline gap={3} align="start" wrap>
      {TONES.map(tone => <Sample key={tone} label={\`surface.\${tone}\`}>
          <Surface tone={tone} attributes={{
        style: plate
      }} />
        </Sample>)}
    </Inline>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Inline gap={3} align="start" wrap>
      {RADII.map(radius => <Sample key={radius} label={\`radius.\${radius}\`}>
          <Surface radius={radius} attributes={{
        style: plate
      }} />
        </Sample>)}
    </Inline>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // Five steps, and each one has to be a different shadow from the last.
  play: ({
    canvasElement
  }) => {
    const shadows = [...canvasElement.querySelectorAll("[class*='root']")].map(element => getComputedStyle(element).boxShadow).filter(shadow => shadow !== "none");
    expect(new Set(shadows).size).toBe(shadows.length);
  },
  render: () => <Inline gap={4} align="start" wrap>
      {ELEVATIONS.map(elevation => <Sample key={elevation} label={\`elevation.\${elevation}\`}>
          <Surface elevation={elevation} attributes={{
        style: plate
      }} />
          <Resolved name={\`--mt-elevation-\${elevation}\`} />
        </Sample>)}
    </Inline>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Tones`,`Radii`,`Elevations`]}))();export{w as Elevations,x as Playground,C as Radii,S as Tones,T as __namedExportsOrder,g as default};