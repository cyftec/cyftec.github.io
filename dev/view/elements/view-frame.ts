import { tmpl } from "@cyftech/signal";
import { Children, component, m } from "@mufw/maya";

type ViewFrameProps = {
  classNames?: string;
  contentClassNames?: string;
  children: Children;
};

export const ViewFrame = component<ViewFrameProps>(
  ({ classNames, contentClassNames, children }) => {
    return m.Div({
      class: tmpl`w-100 ph3 bg-pale ${classNames}`,
      children: [
        m.Div({
          class: tmpl`mw8 center ${contentClassNames}`,
          children,
        }),
      ],
    });
  }
);
