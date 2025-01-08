import { m } from "@mufw/maya";
import { Footer, Navbar, TitledList, ViewFrame } from "../../@elements";
import { MayaHeader } from "../@components";

const navList = [
  {
    label: "1. Overview",
    nodes: [
      {
        label: "Getting familiar",
        href: "/",
      },
      {
        label: "Prerequisite",
        href: "/",
      },
      {
        label: "Installation",
        href: "/",
      },
      {
        label: "App structure",
        href: "/",
      },
      {
        label: "Brahma, Karma & Maya",
        href: "/",
      },
      {
        label: "Karma config",
        href: "/",
      },
    ],
  },
  {
    label: "2. Brahma (CLI)",
    nodes: [
      {
        label: "Why the CLI?",
        href: "/",
      },
      {
        label: "brahma create",
        href: "/",
      },
      {
        label: "brahma install",
        href: "/",
      },
      {
        label: "brahma add",
        href: "/",
      },
      {
        label: "brahma remove",
        href: "/",
      },
      {
        label: "brahma publish",
        href: "/",
      },
    ],
  },
  {
    label: "3. Maya",
    nodes: [
      {
        label: "Syntax",
        href: "/",
      },
      {
        label: "Overview",
        href: "/",
      },
      {
        label: "Element",
        href: "/",
      },
      {
        label: "component",
        href: "/",
      },
      {
        label: "Props",
        href: "/",
      },
      {
        label: "Page",
        href: "/",
      },
    ],
  },
  {
    label: "4. Signal",
    nodes: [
      {
        label: "What is signal?",
        href: "/",
      },
      {
        label: "Custom implementation",
        href: "/",
      },
      {
        label: "Effect",
        href: "/",
      },
      {
        label: "Derived signals",
        href: "/",
      },
      {
        label: "Signal for mutating list",
        href: "/",
      },
    ],
  },
  {
    label: "5. Toolbox",
    nodes: [
      {
        label: "Default HTML page",
        href: "/",
      },
      {
        label: "Router",
        href: "/",
      },
      {
        label: "UI toolkit",
        href: "/",
      },
    ],
  },
];

export default m.Html({
  lang: "en",
  children: [
    m.Head({
      children: [
        m.Title("Maya Docs"),
        m.Link({
          rel: "stylesheet",
          href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
        }),
        m.Link({
          rel: "stylesheet",
          href: "../../assets/styles.css",
        }),
      ],
    }),
    m.Body({
      children: [
        m.Script({
          src: "main.js",
          defer: "true",
        }),
        m.Div({
          class: "bg-pale",
          children: [
            ViewFrame({
              children: [
                MayaHeader("../../"),
                m.Div({
                  class: "flex mt3",
                  children: [
                    Navbar({
                      children: [
                        ...navList.map((nav) =>
                          TitledList({
                            classNames: "mb4 pb3",
                            titleClassNames: "f4",
                            itemClassNames: "mb2 pb1 f6",
                            linkColorCss: "purple",
                            header: nav.label,
                            links: nav.nodes.map(({ href, label }) => ({
                              href,
                              label,
                            })),
                          })
                        ),
                        m.P({
                          class: "gray f6",
                          children: "** end of list **",
                        }),
                      ],
                    }),
                    m.P({
                      class: "ph5 mt3 f5 gray flex-grow-1 space-mono",
                      children: "Docs  >  Overview  >  Getting familiar",
                    }),
                  ],
                }),
              ],
            }),
            Footer({
              colorCss: "purple",
              relativePathToRoot: "../../",
            }),
          ],
        }),
      ],
    }),
  ],
});
