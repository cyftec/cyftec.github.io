import { m } from "@mufw/maya";
import { Footer, ViewFrame } from "../@elements";
import { MayaHeader } from "./@components";

export const App = () => {
  return m.Div({
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
  });
};
