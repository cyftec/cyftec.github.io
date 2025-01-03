import { dstring } from "@cyftech/signal";
import { Component, m } from "@mufw/maya";

type DividerProps = {
  className?: string;
};

export const Divider: Component<DividerProps> = ({ className }) =>
  m.Div({
    class: dstring`bl b--moon-gray min-vh-20 ${className}`,
  });
