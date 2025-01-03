import { dstring, val } from "@cyftech/signal";
import { Component, m } from "@mufw/maya";

type LinkProps = {
  classNames?: string;
  colorCss?: string;
  target?: string;
  isSelected?: boolean;
  href: string;
  label: string;
};

export const Link: Component<LinkProps> = ({
  classNames,
  colorCss,
  target,
  isSelected,
  href,
  label,
}) =>
  m.A({
    class: dstring`link underline ${() => val(colorCss) || "red"} ${() =>
      val(isSelected) ? `bg-${val(colorCss) || "red"}` : ""} ${classNames}`,
    target: target,
    href: href,
    children: label,
  });
