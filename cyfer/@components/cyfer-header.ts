import { Component, m } from "@ckzero/maya/web";
import { Header } from "../@elements";
import cyferLogo from "../@assets/images/cyfer-logo.png";

export const CyferHeader = Component(() => {
  const endpoint = document.location.hash;
  console.log(endpoint);
  return Header({
    logoHref: "/",
    logoSrc: cyferLogo,
    logoSize: 56,
    logoLabelComponent: m.A({
      class: "ml2 link black no-underline",
      href: "/",
      children: [
        m.Div({
          class: `f4`,
          innerText: "CYFER",
        }),
        m.Div({
          class: `f4`,
          innerText: "TECH",
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
  });
});
