import { derived } from "@cyftech/signal";
import { m } from "@mufw/maya";
import {
  AboutUs,
  BlogsOverview,
  Page,
  ProductsOverview,
} from "../libs/components";
import { Header, ViewFrame } from "../libs/elements";
import { router } from "../libs/utils";

export default Page({
  title: "Cyfer Tech ™",
  app: ViewFrame({
    classNames: "items-center justify-center",
    contentClassNames: "pa3",
    children: [
      m.Div({
        class: "mt5 mb6 pv4 w-50 center",
        children: [
          m.P({
            class: "tc i space-mono f1",
            children: `"don't be evil"`,
          }),
          m.P({
            class: "tc nt3 f3 lh-copy",
            children: `- more important before doing the right thing`,
          }),
        ],
      }),
      m.Div({
        children: [ProductsOverview, BlogsOverview, AboutUs],
      }),
    ],
  }),
});
