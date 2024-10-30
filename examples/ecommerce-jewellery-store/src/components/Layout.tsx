export type LayoutProps = {
    children: React.ReactNode
}


export const Layout = (props: LayoutProps) => {
  return <div className="kr-layout k-d-grid k-grid-cols-12 k-justify-content-center k-align-items-center" style={{
    padding: "0px 60px 60px 60px"
  }}>
    {props.children}
  </div>;
};
