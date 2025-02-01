import { Child, component, m } from "@mufw/maya";
import { dprops } from "@cyftech/signal";
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

export const Header = component<HeaderProps>(
  ({
    logoSize,
    logoSrc,
    logoHref,
    logoLabelComponent,
    links,
    rightmostComponent,
  }) => {
    return m.Div({
      class: "pv3 bg-pale flex items-center justify-between",
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
            subject: links,
            itemKey: "label",
            n: rightmostComponent ? Infinity : -1,
            nthChild: rightmostComponent as Child,
            map: (link) => {
              const dlink = dprops(link);
              return Link({
                isSelected: dlink.isSelected,
                classNames: "ml3 pv1 ph2",
                colorCss: dlink.colorCss,
                href: dlink.href,
                label: dlink.label,
              });
            },
          }),
        }),
      ],
    });
  }
);
