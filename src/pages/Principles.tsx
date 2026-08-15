const RULES = [
  {
    title: "No component knows content",
    body: "No project name, no person, no address. Content arrives as a prop, and hard-coded copy inside a component is a defect.",
  },
  {
    title: "No component knows its operating system",
    body: "Except at counted, documented places. Everything else comes from tokens. There are five such places and they are written down.",
  },
  {
    title: "Behaviour and appearance live apart",
    body: "Logic in the tsx, appearance in the module.css. Inline styles only for values computed at runtime, which is position and order.",
  },
  {
    title: "Content lives in exactly one place",
    body: "Typed, in one file. All five surfaces read the same one.",
  },
  {
    title: "Flow screens are not library",
    body: "Boot picker, self test, sign-in and desktop live in the application that uses the library, not in the library.",
  },
  {
    title: "Tokens are generated, not typed",
    body: "A value written by hand twice will drift apart. The custom properties come out of the design file by script.",
  },
];

export function Principles() {
  return (
    <>
      <p className="crumb">Getting started</p>
      <h1>Our principles</h1>
      <p className="lede">Six rules. A component that breaks one of them is wrong, not the rule.</p>

      <ol className="rules">
        {RULES.map((rule, at) => (
          <li key={rule.title}>
            <span className="rules-count">{String(at + 1).padStart(2, "0")}</span>
            <div>
              <h3>{rule.title}</h3>
              <p>{rule.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2>Where the design lives</h2>
      <p className="lede">
        The source of truth is a Penpot file of 21 sheets: a token table, a rules sheet, sixteen
        component sheets, a types sheet and a running list of what is still open. Every shape in it
        is bound to a token rather than to a hex value, and the CSS custom properties in the package
        are generated from those tokens.
      </p>
    </>
  );
}
