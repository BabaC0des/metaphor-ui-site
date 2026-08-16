import{i as e,s as t}from"./preload-helper-CmbjvaKP.js";import{t as n}from"./react-6kYSJpRc.js";import{t as r}from"./jsx-runtime-Dm36vQ7d.js";import{Ct as i,St as a,ht as o,mt as s}from"./iframe-BbNStJEX.js";function c({title:e,description:t}){let[n,r]=(0,l.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{onClick:()=>r(!0),children:`Open the dialog`}),(0,u.jsx)(s,{open:n,onClose:()=>r(!1),title:e,...t===void 0?null:{description:t},actions:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{variant:`outline`,onClick:()=>r(!1),children:`Keep`}),(0,u.jsx)(i,{onClick:()=>r(!1),children:`Discard`})]})})]})}var l,u,d,f,p,m,h,g,_;e((()=>{l=t(n(),1),a(),o(),u=r(),{expect:d,screen:f,userEvent:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Dialog`,component:s,tags:[`autodocs`],args:{title:`Discard the draft?`,description:`The text has not been saved. This cannot be undone.`,open:!0}},h={render:e=>(0,u.jsx)(c,{title:e.title,...e.description?{description:e.description}:null}),play:async({canvas:e})=>{d(f.queryByRole(`dialog`)).toBeNull(),await p.click(e.getByRole(`button`,{name:`Open the dialog`})),d(f.getByRole(`dialog`)).toBeInTheDocument(),await p.keyboard(`{Escape}`),d(f.queryByRole(`dialog`)).toBeNull()}},g={tags:[`!autodocs`],play:()=>{let e=f.getByRole(`dialog`,{name:`Discard the draft?`});d(e).toHaveAccessibleDescription(`The text has not been saved. This cannot be undone.`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Gate title={args.title} {...args.description ? {
    description: args.description
  } : null} />,
  // Opening, then Escape. Both belong to Radix and both have to keep working.
  play: async ({
    canvas
  }) => {
    expect(screen.queryByRole("dialog")).toBeNull();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open the dialog"
    }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  // Radix names the sheet from its own Title, which is why the title is not a
  // Text passed through asChild: Text has no id for aria-labelledby to reach.
  // The sheet is portalled out of the story, so it is looked up on the screen.
  play: () => {
    const sheet = screen.getByRole("dialog", {
      name: "Discard the draft?"
    });
    expect(sheet).toHaveAccessibleDescription("The text has not been saved. This cannot be undone.");
  }
}`,...g.parameters?.docs?.source},description:{story:`The sheet as it stands. Escape and the backdrop both call onClose.

It is kept off the documentation page and lives on the canvas alone. A sheet
covers the window it is in, and args on a documentation page do not change,
so an open one there would sit over the whole page with no way to shut it.`,...g.parameters?.docs?.description}}},_=[`FromAButton`,`Playground`]}))();export{h as FromAButton,g as Playground,_ as __namedExportsOrder,m as default};