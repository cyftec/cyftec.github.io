import { m } from "@mufw/maya";
import { derived } from "@cyftech/signal";
import { Footer, Header, ViewFrame } from "./@elements";
import { router } from "./@utils";

export default () =>
  m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [
          m.Title({
            children: "Cyfer Tech ™",
          }),
          m.Link({
            rel: "stylesheet",
            href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
          }),
          m.Link({
            rel: "stylesheet",
            href: "assets/styles.css",
          }),
          m.Link({
            rel: "icon",
            type: "image/x-icon",
            href: "assets/favicon.ico",
          }),
        ],
      }),
      m.Body({
        class: "bg-pale",
        children: [
          m.Script({
            src: "main.js",
            defer: true,
          }),
          m.Div({
            children: [
              ViewFrame({
                children: [
                  Header({
                    logoHref: "/",
                    logoSrc: "assets/images/cyfer-logo.png",
                    logoSize: 56,
                    logoLabelComponent: m.A({
                      class: "ml2 link black no-underline m:24px_3px_5px_0",
                      href: "/",
                      children: [
                        m.Div({
                          class: `f4`,
                          children: "CYFER",
                        }),
                        m.Div({
                          class: `f4`,
                          children: "TECH",
                        }),
                      ],
                    }),
                    links: derived(() => [
                      {
                        isSelected: router.hash.value === "#products",
                        href: "#products",
                        label: "Products",
                      },
                      {
                        isSelected: router.hash.value === "#blogs",
                        href: "#blogs",
                        label: "Blogs",
                      },
                      {
                        isSelected: router.hash.value === "#about-us",
                        href: "#about-us",
                        label: "About Us",
                      },
                    ]),
                    rightmostComponent: m.A({
                      class: "ml4",
                      href: "https://github.com/thecyfertech",
                      children: [
                        m.Img({
                          class: "ba b--none br-100",
                          src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                          height: "40",
                          width: "40",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              ViewFrame({
                classNames: "items-center justify-center",
                contentClassNames: "pa3",
                children: [
                  m.Div({
                    class: "mv6 pv4 w-50 center",
                    children: [
                      m.P({
                        class: "tc i space-mono f1",
                        children: `"don't be evil"`,
                      }),
                      m.P({
                        class: "tc nt3 f3 lh-copy",
                        children: `- an echo from the past`,
                      }),
                    ],
                  }),
                  m.Div({
                    children: [
                      m.P({
                        id: "products",
                        class: "f2 space-mono lh-copy",
                        children: "# products",
                      }),
                      m.P({
                        id: "blogs",
                        class: "f2 space-mono lh-copy",
                        children: "# blogs",
                      }),
                      m.Div({
                        children: [
                          m.P({
                            id: "about-us",
                            class: "f2 space-mono lh-copy",
                            children: "# about us",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Footer({
                relativePathToRoot: "",
              }),
            ],
          }),
        ],
      }),
    ],
  });
