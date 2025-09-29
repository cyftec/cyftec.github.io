import { tmpl } from "@cyftech/signal";
import { component, m } from "@mufw/maya";
import { Divider } from "./divider";
import { Link } from "./link";
import { TitledList } from "./titled-list";
import { ViewFrame } from "./view-frame";
import { SRC } from "../../constants/asset-sources";

type FooterProps = {
  relativePathToRoot: string;
  colorCss?: string;
};

export const Footer = component<FooterProps>(
  ({ relativePathToRoot, colorCss }) =>
    ViewFrame({
      classNames: "bg-pale-dark",
      contentClassNames: "flex items-start justify-between ph3 pv4",
      children: [
        m.Div({
          class: "flex flex-column items-stretch justify-between",
          children: [
            m.Span({
              class: "mt4 pt3 mb0",
              children: [
                m.Span({
                  children: "This site is created using ",
                }),
                Link({
                  colorCss: colorCss,
                  classNames: "underline",
                  href: "maya",
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
              linkColorCss: colorCss,
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
              linkColorCss: colorCss,
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
                  linkColorCss: colorCss,
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
    })
);
