export type SectionProps = {
  children: React.ReactNode
}


export const CustomSection = (props: SectionProps) => {
  return <section className="k-d-grid k-grid-cols-12 k-col-span-12 k-justify-content-center k-align-items-center">
    {props.children}
  </section>
};
// k-d-grid k-grid-cols-12 k-col-span-12 k-justify-content-center