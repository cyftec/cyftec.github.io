import { m } from "@mufw/maya";
import { Header, ViewFrame } from "../elements";
import { SRC } from "../../constants/asset-sources";

export const CyferHeader = () => {
  const endpoint = document.location.hash;
  return ViewFrame({
    classNames: "sticky top-0",
    contentClassNames: "z-max bg-pale",
    children: Header({
      logoHref: "/",
      logoSrc: SRC.ASSETS.LOGOS.CYFER,
      logoSize: 56,
      logoLabelComponent: m.A({
        class: "ml2 link black no-underline",
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
      links: [
        {
          isSelected: endpoint === "#products",
          href: "/#products",
          label: "Products",
        },
        {
          isSelected: endpoint === "#blogs",
          href: "/#blogs",
          label: "Blogs",
        },
        {
          isSelected: endpoint === "#about-us",
          href: "/#about-us",
          label: "About Us",
        },
      ],
      rightmostComponent: m.A({
        class: "ml4",
        target: "_blank",
        href: SRC.LINKS.CYFER.GITHUB,
        children: [
          m.Img({
            class: "ba b--none br-100",
            src: SRC.LINKS.LOGOS.GITHUB,
            height: "40",
            width: "40",
          }),
        ],
      }),
    }),
  });
};
