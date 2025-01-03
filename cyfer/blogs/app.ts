import { m } from "@ckzero/maya/web";
import { Footer, Header, Navbar, TitledList, ViewFrame } from "../@elements";
import { CyferHeader } from "../@components";

export const App = () => {
  return m.Div({
    class: "bg-pale",
    children: [
      ViewFrame({
        classNames: "items-center justify-center",
        // contentClassNames: "pa3",
        children: [
          CyferHeader({}),
          m.Div({
            class: "mv6 pv4 w-50 center",
            children: [
              m.P({
                class: "tc i space-mono f1",
                innerText: `"don't be evil"`,
              }),
              m.P({
                class: "tc nt3 f3 lh-copy",
                innerText: `- an echo from the past`,
              }),
            ],
          }),
          m.Div({
            children: [
              m.P({
                id: "products",
                class: "f2 space-mono lh-copy",
                innerText: "# products",
              }),
              m.P({
                id: "blogs",
                class: "f2 space-mono lh-copy",
                innerText: "# blogs",
              }),
              m.Div({
                children: [
                  m.P({
                    id: "about-us",
                    class: "f2 space-mono lh-copy",
                    innerText: "# about us",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      Footer({}),
    ],
  });
};
