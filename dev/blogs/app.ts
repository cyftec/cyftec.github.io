import { m } from "@mufw/maya";
import { CyferHeader } from "../@components";
import { Footer, ViewFrame } from "../@elements";

export const App = () => {
  return m.Div({
    class: "bg-pale",
    children: [
      ViewFrame({
        classNames: "items-center justify-center",
        // contentClassNames: "pa3",
        children: [
          CyferHeader(),
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
        relativePathToRoot: "../",
      }),
    ],
  });
};
