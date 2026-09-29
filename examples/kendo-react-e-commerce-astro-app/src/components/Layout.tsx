import { LayoutProps } from "../data/types";

export const Layout = (props: LayoutProps) => {
  return <div className="app-layout">
    {props.children}
  </div>;
};
