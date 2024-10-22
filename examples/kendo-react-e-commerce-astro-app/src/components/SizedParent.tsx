
import "../styles.css"
import { SizedParentProps } from "../data/types";

export const SizedParent = (props: SizedParentProps) => {
  return (
    <div className="kr-mw-1280 k-m-auto"
    >
      {props.children}
    </div>
  );
};
