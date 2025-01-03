import { Child, ChildrenProp, Component, m } from "@mufw/maya";
import { Link } from "./link";
import { dstring, val } from "@cyftech/signal";

type TitledListProps = {
  classNames?: string;
  titleClassNames?: string;
  itemClassNames?: string;
  header: string;
  justifyRight?: boolean;
  links: { label: string; href: string }[];
  linkColorCss?: string;
  bottomComponent?: ChildrenProp;
};

export const TitledList: Component<TitledListProps> = ({
  classNames,
  titleClassNames,
  itemClassNames,
  header,
  justifyRight,
  links,
  linkColorCss,
  bottomComponent,
}) =>
  m.Div({
    class: dstring`${() => (val(justifyRight) ? "tr" : "")} ${classNames}`,
    children: [
      m.P({
        class: dstring`space-mono mt0 f3 lh-solid ${titleClassNames}`,
        children: header,
      }),
      m.Div(
        m.For({
          items: links,
          map: (link) =>
            m.Div({
              class: itemClassNames,
              children: [
                Link({
                  colorCss: linkColorCss,
                  href: link.href,
                  label: link.label,
                }),
              ],
            }),
        })
      ),
      m.If({
        condition: bottomComponent,
        whenTruthy: () => bottomComponent as Child,
      }),
    ],
  });
