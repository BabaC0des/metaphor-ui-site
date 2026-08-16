import{i as e}from"./preload-helper-CmbjvaKP.js";import{at as t,it as n}from"./iframe-BbNStJEX.js";var r,i,a,o,s,c,l;e((()=>{t(),{expect:r,fn:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/GestureBar`,component:n,tags:[`autodocs`]},s={play:({canvas:e})=>{r(e.queryByRole(`button`)).toBeNull()}},c={args:{onHome:i()},play:async({canvas:e,args:t})=>{await a.click(e.getByRole(`button`,{name:`Home`})),r(t.onHome).toHaveBeenCalledTimes(1)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: ({
    canvas
  }) => {
    expect(canvas.queryByRole("button")).toBeNull();
  }
}`,...s.parameters?.docs?.source},description:{story:`Decoration. Nothing is in the tab order.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onHome: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: "Home"
    }));
    expect(args.onHome).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source},description:{story:`A control, because there is something for it to do.`,...c.parameters?.docs?.description}}},l=[`Playground`,`Pressable`]}))();export{s as Playground,c as Pressable,l as __namedExportsOrder,o as default};