"use client";

import { Loader } from "@progress/kendo-react-indicators";
import { Fragment } from "react";

export default function PlanningLoader() {
  return (
    <Fragment>
      <span>Loading Planning Data</span>
      <Loader size="large" type={'pulsing'} />
    </Fragment>
  );
}
