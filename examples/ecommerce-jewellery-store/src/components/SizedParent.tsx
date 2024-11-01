
import "../styles.css"


export type SizedParentProps = {
  children: React.ReactNode;
};

export const SizedParent = (props: SizedParentProps) => {
  return (
    <div className="kr-mw-1280"
    >
      {props.children}
    </div>
  );
};
