import { m } from "@ckzero/maya/web";
import { Header, Link } from "../../@elements";
import mayaLogo from "../../@assets/images/maya-logo.png";

export const MayaHeader = () => {
  const endpoint = document.location.pathname;
  console.log(endpoint);
  return Header({
    logoHref: "/maya",
    logoSrc: mayaLogo,
    logoSize: 36,
    logoLabelComponent: m.A({
      class: "ml3 link black no-underline",
      href: "/maya",
      children: [
        m.Div({
          class: `f4`,
          innerText: "MAYA",
        }),
        Link({
          classNames: `f7`,
          colorCss: "black",
          target: "_blank",
          href: "https://github.com/ckzer0/maya-deno",
          label: "0.1.8",
        }),
      ],
    }),
    links: [
      {
        isSelected: endpoint === "/maya/docs/",
        colorCss: "purple",
        href: "/maya/docs/",
        label: "Docs",
      },
      {
        isSelected: endpoint === "/maya/tutorial/",
        colorCss: "purple",
        href: "/maya/tutorial/",
        label: "Tutorial",
      },
      {
        isSelected: false,
        colorCss: "purple",
        href: "/blogs?tags=maya,brahma,signal",
        label: "Blogs",
      },
    ],
  });
};
