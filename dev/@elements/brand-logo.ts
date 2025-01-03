import { dstring, val } from "@cyftech/signal";
import { Child, Component, m } from "@mufw/maya";

type BrandLogoProps = {
  logoSrc: string;
  logoHref: string;
  logoSize?: number;
  labelComponent?: Child;
};

export const BrandLogo: Component<BrandLogoProps> = ({
  logoSrc,
  logoHref,
  logoSize,
  labelComponent,
}) => {
  const size = dstring`${() => val(logoSize) || 32}`;
  return m.A({
    class: "space-mono link black flex items-center justify-start",
    href: logoHref,
    children: [
      m.Img({
        src: logoSrc,
        height: size,
        width: size,
      }),
      m.If({
        condition: labelComponent,
        whenTruthy: () => labelComponent as Child,
      }),
    ],
  });
};
