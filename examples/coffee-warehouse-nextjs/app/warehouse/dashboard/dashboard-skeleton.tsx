"use client";

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
            margin: "50px",
            background: "white",
          }}
        />
      <Skeleton
        shape={"rectangle"}
        style={{
          width: "100%",
          height: "500px",
          margin: "50px",
          background: "white",
        }}
      />
    </Fragment>
  );
}
