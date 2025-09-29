import { tmpl } from "@cyftech/signal";
import { Children, component, m } from "@mufw/maya";

type NavbarProps = {
  classNames?: string;
  children: Children;
};

export const Navbar = component<NavbarProps>(({ classNames, children }) => {
  return m.Div({
    class: tmpl`dn db-ns overflow-y-scroll ${classNames}`,
    style: `
      scrollbar-color: #e8e8e8 #f2f1f0;
      scrollbar-width: thin;
    `,
    children,
  });
});
