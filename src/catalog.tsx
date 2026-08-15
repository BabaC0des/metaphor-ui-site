import {
  AppList,
  Avatar,
  BootEntry,
  Button,
  Checkbox,
  DataList,
  DesktopIcon,
  Dialog,
  Divider,
  Dock,
  Dot,
  Field,
  GestureBar,
  HomeGrid,
  Icon,
  Inline,
  Menu,
  MenuBar,
  Notification,
  PhotoStrip,
  ProgressBar,
  Radio,
  SearchField,
  Select,
  SelfTestTable,
  Slider,
  Stack,
  StatusBar,
  Surface,
  Switch,
  Tabs,
  Taskbar,
  Terminal,
  Text,
  Thumbnail,
  Tile,
  Toolbar,
  Tooltip,
  TopBar,
  Widget,
  Window,
} from "metaphor-ui";
import type { ReactNode } from "react";

export type Group = "Base" | "Controls" | "Window" | "Shell" | "Content";

export type Entry = {
  /** The name, and the last part of the address. */
  name: string;
  group: Group;
  /** One line, the way a reader scanning a grid needs it. */
  says: string;
  /** Rendered live in the card. Never a picture. */
  shows: ReactNode;
};

/** Flat colour rather than a photograph, so the site carries no asset. */
const field = (fill: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" fill="${fill}"/></svg>`,
  )}`;

const APPS = [
  {
    id: "files",
    name: "Files",
    glyph: "folder" as const,
    appClass: "site" as const,
    running: true,
  },
  { id: "shell", name: "Terminal", glyph: "terminal" as const, appClass: "language" as const },
  { id: "photos", name: "Photos", glyph: "image" as const, appClass: "spatial" as const },
];

export const CATALOG: Entry[] = [
  {
    name: "Text",
    group: "Base",
    says: "Every piece of text in the library. Seven sizes, three tones, four weights, and no way to reach a value outside them.",
    shows: (
      <Stack gap={1} align="center">
        <Text size="32">Aa Bb Cc</Text>
        <Text size="14" tone="label">
          label
        </Text>
        <Text size="12" tone="muted">
          muted
        </Text>
      </Stack>
    ),
  },
  {
    name: "Icon",
    group: "Base",
    says: "The drawn set. A name that is not in the union does not exist.",
    shows: (
      <Inline gap={4} wrap justify="center">
        {(
          ["document", "folder", "terminal", "mail", "image", "chart", "person", "search"] as const
        ).map((glyph) => (
          <Icon key={glyph} glyph={glyph} size={24} />
        ))}
      </Inline>
    ),
  },
  {
    name: "Surface",
    group: "Base",
    says: "Every plane, from the desktop behind everything to the dialog above it. Four tones, five elevations, three radii.",
    shows: (
      <Inline gap={3} align="center">
        <Surface tone="chrome" attributes={{ style: { width: 76, height: 76 } }} />
        <Surface tone="raised" elevation={2} attributes={{ style: { width: 76, height: 76 } }} />
        <Surface tone="sunken" attributes={{ style: { width: 76, height: 76 } }} />
      </Inline>
    ),
  },
  {
    name: "Divider",
    group: "Base",
    says: "The only hairline in the library, so a rule stays one pixel and one token everywhere.",
    shows: (
      <Stack gap={4} attributes={{ style: { width: 240 } }}>
        <Divider />
        <Divider inset={24} />
        <Divider />
      </Stack>
    ),
  },
  {
    name: "Dot",
    group: "Base",
    says: "Carries an application class as a colour. Decoration, and hidden from assistive technology.",
    shows: (
      <Stack gap={2}>
        {(["language", "library", "site", "spatial"] as const).map((appClass) => (
          <Inline key={appClass} gap={2} align="center">
            <Dot appClass={appClass} size={8} />
            <Text size="12" tone="label">
              {appClass}
            </Text>
          </Inline>
        ))}
      </Stack>
    ),
  },
  {
    name: "Stack",
    group: "Base",
    says: "Children in a column or a row, spaced from the scale and nowhere else.",
    shows: (
      <Inline gap={3} align="start">
        <Stack gap={2}>
          {[0, 1, 2].map((at) => (
            <Surface
              key={at}
              tone="chrome"
              radius="control"
              attributes={{ style: { width: 104, height: 22 } }}
            />
          ))}
        </Stack>
        <Stack gap={2}>
          {[0, 1].map((at) => (
            <Surface
              key={at}
              tone="sunken"
              radius="control"
              attributes={{ style: { width: 60, height: 34 } }}
            />
          ))}
        </Stack>
      </Inline>
    ),
  },

  {
    name: "Button",
    group: "Controls",
    says: "Three variants, two heights. Without a handler it renders as a span: a button that does nothing should not be announced as one.",
    shows: (
      <Stack gap={3} align="center">
        <Inline gap={2}>
          <Button onClick={() => {}}>Continue</Button>
          <Button variant="outline" onClick={() => {}}>
            Cancel
          </Button>
        </Inline>
        <Inline gap={2}>
          <Button size="small" variant="quiet" onClick={() => {}}>
            Learn more
          </Button>
          <Button size="small" disabled onClick={() => {}}>
            Disabled
          </Button>
        </Inline>
      </Stack>
    ),
  },
  {
    name: "Field",
    group: "Controls",
    says: "One line of text. Masking is left to the native password input, and the submit arrow exists only when there is something to submit.",
    shows: (
      <Stack gap={3} attributes={{ style: { width: 236 } }}>
        <Field placeholder="Account name" />
        <Field type="password" autofill defaultValue="123456789" />
      </Stack>
    ),
  },
  {
    name: "SearchField",
    group: "Controls",
    says: "A pill in every design language. It clears itself on Escape and never masks.",
    shows: (
      <Stack gap={3} align="start">
        <SearchField placeholder="Search" />
        <SearchField placeholder="Search" defaultValue="Terminal" />
      </Stack>
    ),
  },
  {
    name: "Switch",
    group: "Controls",
    says: "On and off, as a button with a switch role rather than a hidden checkbox.",
    shows: (
      <Stack gap={3} align="start">
        <Switch defaultChecked label="Reduce motion" />
        <Switch label="Show previews" />
      </Stack>
    ),
  },
  {
    name: "Checkbox",
    group: "Controls",
    says: "On, off and mixed. The mixed box reports itself as mixed rather than as off with a bar drawn.",
    shows: (
      <Stack gap={3} align="start">
        <Checkbox defaultChecked label="Show hidden files" />
        <Checkbox indeterminate label="Include folders" />
      </Stack>
    ),
  },
  {
    name: "Radio",
    group: "Controls",
    says: "Exclusive by name. The group holds the choice, the dial only reports it.",
    shows: (
      <Stack gap={3} align="start">
        <Radio defaultChecked name="when" label="Every hour" />
        <Radio name="when" label="Every day" />
      </Stack>
    ),
  },
  {
    name: "Slider",
    group: "Controls",
    says: "A native range with the filled track drawn over it, so dragging, the arrow keys and touch all come for free.",
    shows: (
      <Stack gap={4} attributes={{ style: { width: 236 } }}>
        <Slider defaultValue={24} label="Brightness" />
        <Slider defaultValue={62} label="Volume" />
        <Slider defaultValue={100} label="Contrast" />
      </Stack>
    ),
  },
  {
    name: "Select",
    group: "Controls",
    says: "The native list, because type-ahead and the touch conventions are worth borrowing rather than imitating.",
    shows: (
      <Stack gap={3}>
        <Select
          items={[
            { id: "one", label: "Every hour" },
            { id: "two", label: "Every day" },
          ]}
          defaultValue="one"
          label="Frequency"
        />
        <Select
          items={[{ id: "one", label: "Every hour" }]}
          placeholder="Pick one"
          defaultValue=""
          label="Empty"
        />
      </Stack>
    ),
  },
  {
    name: "Tabs",
    group: "Controls",
    says: "The arrow keys move the choice rather than the focus, and only the chosen tab is in the tab order.",
    shows: (
      <Tabs
        items={[
          { id: "all", label: "All" },
          { id: "recent", label: "Recent", badge: 3 },
        ]}
        label="Sections"
      />
    ),
  },
  {
    name: "Toolbar",
    group: "Controls",
    says: "Buttons and rules in one list, so their order stays with the caller. An entry without a glyph is a rule.",
    shows: (
      <Toolbar
        items={[
          { id: "doc", glyph: "document", label: "Document" },
          { id: "term", glyph: "terminal", label: "Terminal" },
          { id: "rule" },
          { id: "find", glyph: "search", label: "Search" },
        ]}
        label="Sample toolbar"
      />
    ),
  },
  {
    name: "Tooltip",
    group: "Controls",
    says: "Answers to focus as well as the pointer, and Escape dismisses it wherever the focus happens to be.",
    shows: (
      <Tooltip content="Short hint text">
        <Button variant="outline" onClick={() => {}}>
          Hover me
        </Button>
      </Tooltip>
    ),
  },

  {
    name: "Window",
    group: "Window",
    says: "The frame everything sits in. Dragging listens on the document, so the window follows a pointer that has left it.",
    shows: (
      <Window title="Notes" width={200}>
        <Window.Body padding={3}>
          <Text size="12" tone="label">
            A titlebar and a body.
          </Text>
        </Window.Body>
      </Window>
    ),
  },
  {
    name: "Dialog",
    group: "Window",
    says: "A sheet over a dimmed desktop. Radix carries the focus trap, the return of focus and the outside click.",
    shows: (
      <Surface tone="raised" radius="window" attributes={{ style: { padding: 16, width: 200 } }}>
        <Stack gap={2}>
          <Text size="14" weight={600}>
            Discard the draft?
          </Text>
          <Inline gap={2} justify="end">
            <Button size="small" variant="outline" onClick={() => {}}>
              Keep
            </Button>
            <Button size="small" onClick={() => {}}>
              Discard
            </Button>
          </Inline>
        </Stack>
      </Surface>
    ),
  },
  {
    name: "Menu",
    group: "Window",
    says: "Roving focus, typeahead and the outside click from Radix. The trigger belongs to the menu rather than being passed in.",
    shows: (
      <Menu
        label="File"
        items={[
          { id: "new", label: "New window", shortcut: "N" },
          { id: "open", label: "Open", shortcut: "O" },
          { id: "rule" },
          { id: "close", label: "Close" },
        ]}
      />
    ),
  },

  {
    name: "Screen",
    group: "Shell",
    says: "The ground everything sits on, and the element that carries the two attributes the tokens hang off.",
    shows: (
      <Surface
        tone="base"
        radius="window"
        attributes={{
          style: {
            width: 160,
            height: 90,
            background:
              "linear-gradient(155deg, var(--mt-class-spatial-bg), var(--mt-class-language-bg))",
          },
        }}
      />
    ),
  },
  {
    name: "MenuBar",
    group: "Shell",
    says: "The bar across the top on macOS. The clock arrives formatted: a bar does not decide what a time looks like.",
    shows: (
      <div style={{ width: 220 }}>
        <MenuBar appName="Finder" clock="09:41" />
      </div>
    ),
  },
  {
    name: "TopBar",
    group: "Shell",
    says: "The bar across the top on Adwaita, with the clock in the middle rather than on the trailing edge.",
    shows: (
      <div style={{ width: 220 }}>
        <TopBar leading="Activities" clock="09:41" />
      </div>
    ),
  },
  {
    name: "Taskbar",
    group: "Shell",
    says: "The bar across the bottom on Windows. Three equal columns, so the tiles stay centred on the screen.",
    shows: (
      <div style={{ width: 240 }}>
        <Taskbar apps={APPS} clock="09:41" />
      </div>
    ),
  },
  {
    name: "StatusBar",
    group: "Shell",
    says: "The thin bar at the top of a phone. The time leads and the indicators trail, the reverse of every desktop bar.",
    shows: (
      <div style={{ width: 200 }}>
        <StatusBar clock="09:41" indicators={<Icon glyph="display" size={16} />} />
      </div>
    ),
  },
  {
    name: "GestureBar",
    group: "Shell",
    says: "The pill at the bottom of a phone. A control only when it is given something to do.",
    shows: (
      <div style={{ width: 200 }}>
        <GestureBar />
      </div>
    ),
  },
  {
    name: "Dock",
    group: "Shell",
    says: "The row that floats above the desktop. The running mark is a dot under the tile, always drawn, so nothing shifts.",
    shows: <Dock apps={APPS} size={32} />,
  },
  {
    name: "DesktopIcon",
    group: "Shell",
    says: "A tile with its name under it. It opens on a single press: nobody double clicks a web page.",
    shows: (
      <Inline gap={2}>
        <DesktopIcon name="Documents" glyph="folder" onOpen={() => {}} />
        <DesktopIcon name="Photos" glyph="image" appClass="spatial" selected onOpen={() => {}} />
      </Inline>
    ),
  },
  {
    name: "HomeGrid",
    group: "Shell",
    says: "The home screen. The column count is a prop rather than a media query, because the phone here is a shape on a page.",
    shows: (
      <div style={{ width: 180 }}>
        <HomeGrid apps={APPS} columns={3} size={40} />
      </div>
    ),
  },

  {
    name: "Tile",
    group: "Content",
    says: "The coloured square an application wears. It holds the glyph and the two colours of its class, and no label.",
    shows: (
      <Inline gap={2}>
        <Tile glyph="folder" appClass="site" />
        <Tile glyph="terminal" appClass="language" />
      </Inline>
    ),
  },
  {
    name: "AppList",
    group: "Content",
    says: "Applications down a column. A listbox rather than a set of buttons: choosing a row is a choice, not an action.",
    shows: (
      <div style={{ width: 180 }}>
        <AppList apps={APPS} defaultValue="shell" label="Applications" />
      </div>
    ),
  },
  {
    name: "DataList",
    group: "Content",
    says: "Terms and their values. A description list rather than a table, because there is no second column to compare across.",
    shows: (
      <div style={{ width: 200 }}>
        <DataList
          rows={[
            { id: "memory", term: "Memory", value: "16 GB" },
            { id: "disk", term: "Storage", value: "512 GB" },
          ]}
        />
      </div>
    ),
  },
  {
    name: "Terminal",
    group: "Content",
    says: "The one surface that is dark in both modes. A terminal that turned white would stop reading as a terminal.",
    shows: (
      <div style={{ width: 220 }}>
        <Terminal
          lines={[
            { id: "1", kind: "command", path: "~", text: "build --release" },
            { id: "2", kind: "output", text: "Finished in 3.1s" },
          ]}
          caret
        />
      </div>
    ),
  },
  {
    name: "SelfTestTable",
    group: "Content",
    says: "A real table: three columns read across. The state is a word as well as a colour.",
    shows: (
      <div style={{ width: 220 }}>
        <SelfTestTable
          rows={[
            { id: "mem", name: "Memory", state: "pass", detail: "16 GB" },
            { id: "net", name: "Network", state: "fail", detail: "No route" },
          ]}
        />
      </div>
    ),
  },
  {
    name: "ProgressBar",
    group: "Content",
    says: "Without a value it runs on its own, rather than creeping to ninety and stopping.",
    shows: (
      <div style={{ width: 180 }}>
        <ProgressBar value={62} label="Checking memory" />
      </div>
    ),
  },
  {
    name: "Notification",
    group: "Content",
    says: "The card in the corner. Announced only when it is new: one already on screen at load has nothing to say.",
    shows: (
      <div style={{ width: 260 }}>
        <Notification
          title="Backup finished"
          body="Every file was copied."
          glyph="folder"
          time="now"
        />
      </div>
    ),
  },
  {
    name: "Widget",
    group: "Content",
    says: "Three fixed shapes rather than a width prop, so widgets line up with the ones beside them.",
    shows: (
      <Widget title="Weather">
        <Text size="32">18°</Text>
      </Widget>
    ),
  },
  {
    name: "Avatar",
    group: "Content",
    says: "A portrait, or at most two initials taken from the first and last word of the name.",
    shows: (
      <Inline gap={3} align="center">
        <Avatar name="Ada Lovelace" size={48} />
        <Avatar name="Guest" size={48} square />
      </Inline>
    ),
  },
  {
    name: "Thumbnail",
    group: "Content",
    says: "One picture in a frame of a known shape. The frame is sized rather than the image.",
    shows: (
      <Inline gap={2}>
        <Thumbnail src={field("#5d7f6f")} alt="" size={64} />
        <Thumbnail src={field("#6f5d7f")} alt="" size={64} ratio="portrait" />
      </Inline>
    ),
  },
  {
    name: "PhotoStrip",
    group: "Content",
    says: "A row that scrolls sideways rather than wrapping. A strip says there is more beside it.",
    shows: (
      <div style={{ width: 220 }}>
        <PhotoStrip
          photos={[
            { id: "a", src: field("#5d7f6f"), alt: "" },
            { id: "b", src: field("#7f6f5d"), alt: "" },
            { id: "c", src: field("#6f5d7f"), alt: "" },
          ]}
          size={72}
          label="Recent pictures"
        />
      </div>
    ),
  },
  {
    name: "BootEntry",
    group: "Content",
    says: "One line in the boot picker, filled rather than outlined: it is read from across the room.",
    shows: (
      <div style={{ width: 220 }}>
        <BootEntry name="Reference system" glyph="display" detail="Internal disk" selected />
      </div>
    ),
  },
];

export const GROUPS: Group[] = ["Base", "Controls", "Window", "Shell", "Content"];

export const slug = (name: string) => name.toLowerCase();

/** The Storybook page for a component, which is where its props table lives. */
export const storybookFor = (name: string) =>
  `./storybook/?path=/docs/components-${name.toLowerCase()}--docs`;

export { Dialog };
