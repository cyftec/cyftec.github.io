import { m } from "@mufw/maya";
import { AboutUs, BlogsOverview, Page, ProductsOverview } from "../components";
import { ViewFrame } from "../elements";
import { MOTTO } from "../../constants";

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
            children: MOTTO.TAGLINE,
          }),
          m.P({
            class: "tc nt4 f3 lh-copy",
            children: `- ${MOTTO.SUBSCRIPT}`,
          }),
        ],
      }),
      m.Div({
        children: [ProductsOverview, BlogsOverview, AboutUs],
      }),
    ],
  }),
});
