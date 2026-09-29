import { SectionProps } from "../data/types";

export const CustomSection = (props: SectionProps) => {
  return <section className="app-section-grid">
    {props.children}
  </section>
};