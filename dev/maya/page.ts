import { m } from "@mufw/maya";
import { Footer, ViewFrame } from "../@elements";
import { MayaHeader } from "./@components";

export default m.Html({
  lang: "en",
  children: [
    m.Head({
      children: [
        m.Title({
          children: "Maya UI Library",
        }),
        m.Link({
          rel: "stylesheet",
          href: "https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css",
        }),
        m.Link({
          rel: "stylesheet",
          href: "../assets/styles.css",
        }),
      ],
    }),
    m.Body({
      children: [
        m.Script({
          src: "main.js",
          defer: true,
        }),
        m.Div({
          class: "bg-pale",
          children: [
            ViewFrame({
              children: [
                MayaHeader("../"),
                m.Div({
                  class: "pv3 ph5 flex-grow-1",
                  children: "Maya UI home page",
                }),
              ],
            }),
            Footer({
              colorCss: "purple",
              relativePathToRoot: "../",
            }),
          ],
        }),
      ],
    }),
  ],
});
