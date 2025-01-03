import { Component, m } from "@mufw/maya";

type BreadcrumbsProps = {
  children: any;
};

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ children }) =>
  m.Div({
    class: "flex items-center",
    children: children.value,
  });
