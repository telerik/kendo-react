import "../styles.css"

export type LayoutProps = {
    children: React.ReactNode
}


export const Layout = (props: LayoutProps) => {
  return <div className="kr-layout k-pb-15 k-pr-15 k-pl-15">
    {props.children}
  </div>;
};
