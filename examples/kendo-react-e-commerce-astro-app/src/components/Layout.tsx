import { LayoutProps } from "../data/types";

export const Layout = (props: LayoutProps) => {
  return <div className="kr-layout k-pb-15 k-pr-15 k-pl-15">
    {props.children}
  </div>;
};
