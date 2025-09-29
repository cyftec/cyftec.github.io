import { Children, component, m } from "@mufw/maya";
import { ViewFrame } from "../elements";
import { CyferHeader } from "./CyferHeader";
import { Footer } from "./Footer";
import { SRC } from "../../constants/asset-sources";

type PageProps = {
  title: string;
  app: Children;
};

export const Page = component<PageProps>(({ title, app: appChildElement }) => {
  return m.Html({
    lang: "en",
    children: [
      m.Head([
        m.Title(title),
        m.Link({
          rel: "stylesheet",
          href: SRC.ASSETS.STYLESHEET,
        }),
        m.Link({
          rel: "icon",
          type: "image/x-icon",
          href: SRC.ASSETS.FAVICON,
        }),
      ]),
      m.Body([
        m.Script({ src: "main.js", defer: true }),
        CyferHeader(),
        ViewFrame({
          children: appChildElement,
        }),
        Footer,
      ]),
    ],
  });
});
