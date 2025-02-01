import { m, MHtmlElementGetter } from "@mufw/maya";
import { Page } from "../../libs/components";
import { Navbar, ViewFrame } from "../../libs/elements";
import { BLOGS } from "./@libs/content";
import { dstring } from "@cyftech/signal";

export default Page({
  title: "Blogs",
  app: ViewFrame({
    contentClassNames: "pt4 pb5",
    children: m.Div({
      class: "gray grid grid-col-2-5 gap2",
      children: [
        Navbar({
          classNames: "pa2 sticky top-55",
          children: m.For({
            items: [
              ...BLOGS.map((b) => b.title),
              ...BLOGS.map((b) => b.title),
              ...BLOGS.map((b) => b.title),
              ...BLOGS.map((b) => b.title),
            ],
            map: (title, i) =>
              m.Div({
                class: dstring`ba br3 pa3 mb3 ${
                  i === 4
                    ? "b--transparent b black"
                    : "b--near-white moon-gray shadow-hover"
                }`,
                children: title,
              }),
          }),
        }),
        m.Div({
          children: m.For({
            items: BLOGS[0].paras,
            n: 0,
            nthChild: m.H1({
              class: "mv0",
              children: BLOGS[0].title,
            }),
            map: (para) =>
              m.If({
                condition: para.startsWith("##"),
                isTruthy: m.H3({
                  class: "mt4 mb2",
                  children: para.replaceAll("##", ""),
                }),
                isFalsy: m.P({
                  class: "lh-copy",
                  children: para,
                }),
              }),
          }),
        }),
      ],
    }),
  }),
});
