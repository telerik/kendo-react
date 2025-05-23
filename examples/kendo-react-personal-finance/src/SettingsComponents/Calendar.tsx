import React from "react";
import { Calendar as KendoCalendar } from "@progress/kendo-react-dateinputs";
import { Card } from "@progress/kendo-react-layout";

export default function Calendar(props: any) {
  return (
    <Card className="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
      <div className={"k-d-grid k-gap-6"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="k-gap-2"
        >
          Calendar
        </div>
      </div>

      <div className="k-d-grid k-gap-6 k-justify-content-center k-align-items-center">
        <KendoCalendar navigation={false} />
      </div>
    </Card>
  );
}
