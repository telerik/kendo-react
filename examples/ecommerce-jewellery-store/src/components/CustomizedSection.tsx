import { SectionProps } from "../data/types";

export const CustomSection = (props: SectionProps) => {
  return <section className="custom-section">
    {props.children}
  </section>
};