
import "../styles.css"
import { SizedParentProps } from "../data/types";

export const SizedParent = (props: SizedParentProps) => {
  return (
    <div className="app-constrained-content"
    >
      {props.children}
    </div>
  );
};
