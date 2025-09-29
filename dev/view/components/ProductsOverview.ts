import { m } from "@mufw/maya";
import { PRODUCTS_SHOWCASE } from "../../constants";
import { Button } from "../elements";

export const ProductsOverview = m.Div([
  m.Div({
    id: "products",
    class: "f2 space-mono lh-copy",
    children: [
      "# ",
      m.Span({
        class: "highlight",
        children: "&nbsp;products&nbsp;",
      }),
    ],
  }),
  m.Div({
    class: "pa5",
    children: [
      m.Div({
        class: "flex flex-wrap justify-between",
        children: m.For({
          subject: PRODUCTS_SHOWCASE.products,
          map: ({ title, subtitle, size, logoSrc, description }) =>
            m.Div({
              class: "w-45 mb4",
              children: [
                m.Div({
                  class: "flex items-center",
                  children: [
                    m.Img({
                      src: logoSrc,
                      height: `${size ?? 36}`,
                      width: `${size ?? 36}`,
                    }),
                    m.Div({
                      class: "ml3",
                      children: [
                        m.H3({ class: "ma0", children: title }),
                        m.Div({ class: "gray", children: subtitle }),
                      ],
                    }),
                  ],
                }),
                m.Div({
                  class: "mt3 silver",
                  children: m.For({
                    subject: description,
                    map: (para) =>
                      m.P({
                        class: "mt0 mb3",
                        children: para,
                      }),
                  }),
                }),
              ],
            }),
        }),
      }),
      Button({
        classNames: "mb4",
        href: "/products",
        label: "Check out all products",
      }),
    ],
  }),
]);
