import { Fragment } from "react";
import { Skeleton } from "@progress/kendo-react-indicators";

export default function DashBoardSkeleton() {
  return (
    <Fragment>
      <Skeleton
        shape={"rectangle"}
        className="dashboard-skeleton dashboard-skeleton--summary"
      />
      <Skeleton
        shape={"rectangle"}
        className="dashboard-skeleton dashboard-skeleton--details"
      />
    </Fragment>
  );
}
