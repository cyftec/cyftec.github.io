import { Child, Component, m } from "@mufw/maya";
import { BrandLogo } from "./brand-logo";
import { Link } from "./link";

type HeaderProps = {
  logoSize: number;
  logoSrc: string;
  logoHref: string;
  logoLabelComponent?: Child;
  links: {
    isSelected: boolean;
    colorCss?: string;
    label: string;
    href: string;
  }[];
  rightmostComponent?: Child;
};

export const Header: Component<HeaderProps> = ({
  logoSize,
  logoSrc,
  logoHref,
  logoLabelComponent,
  links,
  rightmostComponent,
}) =>
  m.Div({
    class: "pa3 bg-pale sticky top-0 flex items-center justify-between",
    children: [
      BrandLogo({
        logoSize: logoSize,
        logoSrc: logoSrc,
        logoHref: logoHref,
        labelComponent: logoLabelComponent,
      }),
      m.Div({
        class: "flex items-center justify-end",
        children: m.For({
          items: links,
          n: rightmostComponent ? Infinity : -1,
          nthChild: () => rightmostComponent as Child,
          map: (link) =>
            Link({
              isSelected: link.isSelected,
              classNames: "ml3 pv1 ph2",
              colorCss: link.colorCss,
              href: link.href,
              label: link.label,
            }),
        }),
      }),
    ],
  });
