import { Fragment } from "react";
import { Skeleton } from "@progress/kendo-react-indicators";

export default function DashBoardSkeleton() {
  return (
    <Fragment>
        <Skeleton
          shape={"rectangle"}
          style={{
            width: "100%",
            height: "345px",
            margin: "var(--kendo-spacing-12)",
            background: "var(--kendo-color-surface-alt)",
          }}
        />
      <Skeleton
        shape={"rectangle"}
        style={{
          width: "100%",
          height: "500px",
          margin: "var(--kendo-spacing-12)",
          background: "var(--kendo-color-surface-alt)",
        }}
      />
    </Fragment>
  );
}
