import "../styles.css"
import { LayoutProps } from "../data/types";

export const Layout = (props: LayoutProps) => {
  return <div className="layout">
    {props.children}
  </div>;
};
