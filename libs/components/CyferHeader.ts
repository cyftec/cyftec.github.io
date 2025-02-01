import { m } from "@mufw/maya";
import { Header, ViewFrame } from "../elements";

export const CyferHeader = () => {
  const endpoint = document.location.hash;
  return ViewFrame({
    classNames: "sticky top-0",
    contentClassNames: "z-max bg-pale",
    children: Header({
      logoHref: "/",
      logoSrc: "/assets/images/cyfer-logo.png",
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
        href: "https://github.com/thecyfertech",
        children: [
          m.Img({
            class: "ba b--none br-100",
            src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            height: "40",
            width: "40",
          }),
        ],
      }),
    }),
  });
};
