import { dstring } from "@cyftech/signal";
import { ChildrenProp, Component, m } from "@mufw/maya";

type ViewFrameProps = {
  classNames?: string;
  contentClassNames?: string;
  children: ChildrenProp;
};

export const ViewFrame: Component<ViewFrameProps> = ({
  classNames,
  contentClassNames,
  children,
}) => {
  return m.Div({
    id: "view-frame",
    class: dstring`w-100 bg-pale ${classNames}`,
    children: [
      m.Div({
        class: dstring`mw8 center ${contentClassNames}`,
        children,
      }),
    ],
  });
};
