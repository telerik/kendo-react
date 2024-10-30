export type SizedParentProps = {
  children: React.ReactNode;
};

export const SizedParent = (props: SizedParentProps) => {
  return (
    <div
      style={{
        maxWidth: "1280px",
      }}
    >
      {props.children}
    </div>
  );
};
