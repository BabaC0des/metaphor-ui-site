import{i as e,s as t}from"./preload-helper-CmbjvaKP.js";import{t as n}from"./react-6kYSJpRc.js";import{t as r}from"./Text-_7g-ueY5.js";import{t as i}from"./jsx-runtime-Dm36vQ7d.js";import{D as a,E as o,H as s,U as c,jt as l,k as u}from"./iframe-BbNStJEX.js";var d,f,p,m,h,g,_,v,y,b,x;e((()=>{d=t(n(),1),o(),l(),c(),f=i(),{expect:p,fn:m,userEvent:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Radio`,component:s,tags:[`autodocs`]},_=({label:e,children:t})=>(0,f.jsxs)(a,{gap:3,children:[(0,f.jsx)(r,{size:`11`,tone:`label`,weight:600,attributes:{style:{width:92}},children:e}),t]}),v={args:{onChange:m()},play:async({canvas:e,args:t})=>{let n=e.getByRole(`radio`);await h.click(n),p(n).toHaveAttribute(`aria-checked`,`true`),p(t.onChange).toHaveBeenCalledWith(!0)}},y={render:()=>(0,f.jsxs)(u,{gap:3,children:[(0,f.jsx)(_,{label:`off`,children:(0,f.jsx)(s,{})}),(0,f.jsx)(_,{label:`on`,children:(0,f.jsx)(s,{defaultChecked:!0})}),(0,f.jsx)(_,{label:`disabled`,children:(0,f.jsx)(s,{disabled:!0})}),(0,f.jsx)(_,{label:`disabled on`,children:(0,f.jsx)(s,{disabled:!0,defaultChecked:!0})})]})},b={play:async({canvas:e})=>{let t=e.getAllByRole(`radio`);await h.click(t[2]),p(t[2]).toHaveAttribute(`aria-checked`,`true`),p(t[0]).toHaveAttribute(`aria-checked`,`false`)},render:()=>{let[e,t]=(0,d.useState)(`one`);return(0,f.jsx)(u,{gap:3,children:[`one`,`two`,`three`].map(n=>(0,f.jsx)(s,{name:`sample`,label:`Choice ${n}`,checked:e===n,onChange:()=>t(n)},n))})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    const dial = canvas.getByRole("radio");
    await userEvent.click(dial);
    expect(dial).toHaveAttribute("aria-checked", "true");
    expect(args.onChange).toHaveBeenCalledWith(true);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3}>
      <Row label="off">
        <Radio />
      </Row>
      <Row label="on">
        <Radio defaultChecked />
      </Row>
      <Row label="disabled">
        <Radio disabled />
      </Row>
      <Row label="disabled on">
        <Radio disabled defaultChecked />
      </Row>
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const dials = canvas.getAllByRole("radio");
    await userEvent.click(dials[2]!);
    expect(dials[2]).toHaveAttribute("aria-checked", "true");
    expect(dials[0]).toHaveAttribute("aria-checked", "false");
  },
  render: () => {
    const [chosen, setChosen] = useState("one");
    return <Stack gap={3}>
        {["one", "two", "three"].map(id => <Radio key={id} name="sample" label={\`Choice \${id}\`} checked={chosen === id} onChange={() => setChosen(id)} />)}
      </Stack>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Exclusive by name: the group holds the choice, the dial only reports it.`,...b.parameters?.docs?.description}}},x=[`Playground`,`States`,`Group`]}))();export{b as Group,v as Playground,y as States,x as __namedExportsOrder,g as default};