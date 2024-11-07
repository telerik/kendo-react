
import "../styles.css"
import { SizedParentProps } from "../data/types";

export const SizedParent = (props: SizedParentProps) => {
  return (
    <div className="kr-mw-1280"
    >
      {props.children}
    </div>
  );
};
