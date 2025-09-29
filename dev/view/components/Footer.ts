import { m } from "@mufw/maya";
import { Divider, Link, TitledList, ViewFrame } from "../elements";
import { SRC } from "../../constants/asset-sources";

export const Footer = ViewFrame({
  classNames: "bg-pale-dark",
  contentClassNames: "flex items-start justify-between pv4",
  children: [
    m.Div({
      class: "flex flex-column items-stretch justify-between",
      children: [
        m.Div({
          class: "flex",
          children: [
            m.A({
              class: "flex no-underline mr3",
              href: "/",
              children: [
                m.Img({
                  src: SRC.ASSETS.LOGOS.CYFER,
                  height: "32",
                  width: "32",
                }),
              ],
            }),
            m.Div({
              children: [
                m.P({
                  class: "ma0 f7",
                  children: "© 2025 Cyfer Tech.",
                }),
                m.P({
                  class: "mt1 f7",
                  children: "All rights reserved.",
                }),
              ],
            }),
          ],
        }),
        m.Span({
          class: "mt3 mb0",
          children: [
            m.Span({
              children: "This site is created using ",
            }),
            Link({
              classNames: "underline",
              target: "_blank",
              href: SRC.LINKS.CYFER.MAYA,
              label: "Maya",
            }),
            m.Span({
              children: ".",
            }),
          ],
        }),
      ],
    }),
    m.Div({
      class: "flex items-start justify-between",
      children: [
        TitledList({
          justifyRight: true,
          classNames: "pr3",
          itemClassNames: "mb3",
          header: "Company",
          links: [
            {
              label: "About us",
              href: "#about-us",
            },
            {
              label: "Blogs",
              href: "#blogs",
            },
            {
              label: "Team",
              href: "#about-us",
            },
            {
              label: "Career",
              href: "/careers",
            },
          ],
        }),
        Divider({ className: "mh4 ph2" }),
        TitledList({
          justifyRight: true,
          classNames: "pr3",
          itemClassNames: "mb3",
          header: "Products",
          links: [
            {
              label: "Maya",
              href: "/products/maya",
            },
            {
              label: "KarmaJs",
              href: "/karma",
            },
            {
              label: "Yajman",
              href: "/yajman",
            },
            {
              label: "Batua",
              href: "/batua",
            },
          ],
        }),
        Divider({ className: "mh4 ph2" }),
        m.Div({
          children: [
            TitledList({
              justifyRight: true,
              itemClassNames: "mb3",
              header: "Relations",
              links: [
                {
                  label: "Sponsor Us",
                  href: "/sponsor-us",
                },
                {
                  label: "FAQs",
                  href: "/faqs",
                },
                {
                  label: "Feedback",
                  href: "/feedback",
                },
              ],
              bottomComponent: m.Span({
                class: "flex items-center justify-end",
                children: [
                  m.A({
                    target: "_blank",
                    href: SRC.LINKS.CYFER.GITHUB,
                    children: [
                      m.Img({
                        class: "ba b--none br-100",
                        src: SRC.LINKS.LOGOS.GITHUB,
                        height: "32",
                        width: "32",
                      }),
                    ],
                  }),
                  m.A({
                    class: "ml3",
                    target: "_blank",
                    href: SRC.LINKS.CYFER.X,
                    children: [
                      m.Img({
                        class: "ba b--none br-100",
                        src: SRC.LINKS.LOGOS.X,
                        height: "24",
                        width: "24",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  ],
});
