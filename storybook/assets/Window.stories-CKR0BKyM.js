import{i as e,s as t}from"./preload-helper-CmbjvaKP.js";import{t as n}from"./react-6kYSJpRc.js";import{t as r}from"./Text-_7g-ueY5.js";import{t as i}from"./jsx-runtime-Dm36vQ7d.js";import{t as a}from"./Icon-54pilQ-2.js";import{t as o}from"./Icon-Bk7pSsi0.js";import{D as s,E as c,L as l,R as u,i as d,jt as f,k as p,r as m}from"./iframe-BbNStJEX.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{h=t(n(),1),o(),l(),c(),f(),d(),g=i(),{expect:_,userEvent:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Window`,component:m,tags:[`autodocs`],args:{title:`Documents`,width:420}},b=[`Recents`,`Documents`,`Downloads`,`Pictures`],x={play:({canvas:e})=>{_(e.getByRole(`region`,{name:`Documents`})).toBeInTheDocument()},render:e=>(0,g.jsx)(m,{...e,children:(0,g.jsx)(m.Body,{children:(0,g.jsx)(r,{size:`12`,tone:`label`,children:`A window holds a titlebar and a body and nothing else of its own.`})})})},S={render:()=>(0,g.jsxs)(m,{width:520,children:[(0,g.jsx)(m.Titlebar,{title:`Documents`,controls:(0,g.jsx)(m.Controls,{onClose:()=>{},onMinimise:()=>{},onZoom:()=>{}}),trailing:(0,g.jsx)(u,{placeholder:`Search`,attributes:{style:{width:140}}})}),(0,g.jsx)(m.Body,{children:(0,g.jsx)(r,{size:`12`,tone:`label`,children:`Only the controls you hand a callback are drawn.`})})]}),play:({canvas:e})=>{for(let t of[`Close`,`Minimise`,`Zoom`])_(e.getByRole(`button`,{name:t})).toBeInTheDocument()}},C={render:e=>(0,g.jsx)(m,{...e,width:520,height:260,children:(0,g.jsxs)(m.Split,{children:[(0,g.jsx)(m.Sidebar,{children:(0,g.jsx)(p,{gap:1,children:b.map(e=>(0,g.jsxs)(s,{gap:2,children:[(0,g.jsx)(a,{glyph:`folder`,size:16}),(0,g.jsx)(r,{size:`12`,children:e})]},e))})}),(0,g.jsx)(m.Body,{scroll:!0,children:(0,g.jsx)(r,{size:`12`,tone:`label`,children:`Split puts the sidebar beside the body. The window itself is a column.`})})]})})},w={play:async({canvas:e})=>{let t=e.getByRole(`region`,{name:`Behind`}),n=e.getByText(`Behind`);_(t).toHaveStyle({left:`0px`,top:`0px`}),await v.pointer([{keys:`[MouseLeft>]`,target:n,coords:{clientX:40,clientY:10}},{target:n,coords:{clientX:90,clientY:40}},{keys:`[/MouseLeft]`,target:n}]),_(t).toHaveStyle({left:`50px`,top:`30px`}),_(t).toHaveAttribute(`data-focused`,`true`),_(e.getByRole(`region`,{name:`In front`})).toHaveAttribute(`data-focused`,`false`)},render:()=>{let[e,t]=(0,h.useState)(`second`);return(0,g.jsxs)(`div`,{style:{position:`relative`,height:280},children:[(0,g.jsx)(m,{title:`Behind`,width:300,draggable:!0,defaultPosition:{x:0,y:0},focused:e===`first`,order:e===`first`?2:1,onRaise:()=>t(`first`),children:(0,g.jsx)(m.Body,{children:(0,g.jsx)(r,{size:`12`,tone:`label`,children:`Drag either titlebar. A pointer down raises the window.`})})}),(0,g.jsx)(m,{title:`In front`,width:300,draggable:!0,defaultPosition:{x:90,y:70},focused:e===`second`,order:e===`second`?2:1,onRaise:()=>t(`second`),children:(0,g.jsx)(m.Body,{children:(0,g.jsx)(r,{size:`12`,tone:`label`,children:`The front window is the one you touched last.`})})})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  // The window names itself from its title, so it is findable as a region.
  play: ({
    canvas
  }) => {
    expect(canvas.getByRole("region", {
      name: "Documents"
    })).toBeInTheDocument();
  },
  render: args => <Window {...args}>
      <Window.Body>
        <Text size="12" tone="label">
          A window holds a titlebar and a body and nothing else of its own.
        </Text>
      </Window.Body>
    </Window>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Window width={520}>
      <Window.Titlebar title="Documents" controls={<Window.Controls onClose={() => {}} onMinimise={() => {}} onZoom={() => {}} />} trailing={<SearchField placeholder="Search" attributes={{
      style: {
        width: 140
      }
    }} />} />
      <Window.Body>
        <Text size="12" tone="label">
          Only the controls you hand a callback are drawn.
        </Text>
      </Window.Body>
    </Window>,
  play: ({
    canvas
  }) => {
    for (const name of ["Close", "Minimise", "Zoom"]) {
      expect(canvas.getByRole("button", {
        name
      })).toBeInTheDocument();
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`The controls lead on macOS and iOS and trail everywhere else.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Window {...args} width={520} height={260}>
      <Window.Split>
        <Window.Sidebar>
          <Stack gap={1}>
            {PLACES.map(place => <Inline key={place} gap={2}>
                <Icon glyph="folder" size={16} />
                <Text size="12">{place}</Text>
              </Inline>)}
          </Stack>
        </Window.Sidebar>

        <Window.Body scroll>
          <Text size="12" tone="label">
            Split puts the sidebar beside the body. The window itself is a column.
          </Text>
        </Window.Body>
      </Window.Split>
    </Window>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  // Dragging is the one behaviour the window owns outright, so it is the one
  // worth driving with a pointer rather than describing.
  play: async ({
    canvas
  }) => {
    const behind = canvas.getByRole("region", {
      name: "Behind"
    });
    const handle = canvas.getByText("Behind");
    expect(behind).toHaveStyle({
      left: "0px",
      top: "0px"
    });
    await userEvent.pointer([{
      keys: "[MouseLeft>]",
      target: handle,
      coords: {
        clientX: 40,
        clientY: 10
      }
    }, {
      target: handle,
      coords: {
        clientX: 90,
        clientY: 40
      }
    }, {
      keys: "[/MouseLeft]",
      target: handle
    }]);
    expect(behind).toHaveStyle({
      left: "50px",
      top: "30px"
    });

    // The same pointer down raised it, so the other window is no longer front.
    expect(behind).toHaveAttribute("data-focused", "true");
    expect(canvas.getByRole("region", {
      name: "In front"
    })).toHaveAttribute("data-focused", "false");
  },
  render: () => {
    const [front, setFront] = useState("second");
    return <div style={{
      position: "relative",
      height: 280
    }}>
        <Window title="Behind" width={300} draggable defaultPosition={{
        x: 0,
        y: 0
      }} focused={front === "first"} order={front === "first" ? 2 : 1} onRaise={() => setFront("first")}>
          <Window.Body>
            <Text size="12" tone="label">
              Drag either titlebar. A pointer down raises the window.
            </Text>
          </Window.Body>
        </Window>

        <Window title="In front" width={300} draggable defaultPosition={{
        x: 90,
        y: 70
      }} focused={front === "second"} order={front === "second" ? 2 : 1} onRaise={() => setFront("second")}>
          <Window.Body>
            <Text size="12" tone="label">
              The front window is the one you touched last.
            </Text>
          </Window.Body>
        </Window>
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:`An unfocused window keeps its layout and loses its colour.`,...w.parameters?.docs?.description}}},T=[`Playground`,`WithControls`,`WithSidebar`,`Focus`]}))();export{w as Focus,x as Playground,S as WithControls,C as WithSidebar,T as __namedExportsOrder,y as default};