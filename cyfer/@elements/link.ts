import { Component, m } from "@ckzero/maya/web";

type LinkProps = {
  classNames?: string;
  colorCss?: string;
  target?: string;
  isSelected?: boolean;
  href: string;
  label: string;
};

export const Link = Component<LinkProps>(
  ({ classNames, colorCss, target, isSelected, href, label }) =>
    m.A({
      class: () =>
        `link underline ${colorCss?.value || "red"} ${
          classNames?.value || ""
        } ${isSelected?.value ? `bg-${colorCss?.value || "red"}` : ""}`,
      target: target?.value || "",
      href: href.value,
      innerText: label.value,
    })
);
