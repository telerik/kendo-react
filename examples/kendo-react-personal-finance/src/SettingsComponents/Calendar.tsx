import React from "react";
import { Calendar as KendoCalendar } from "@progress/kendo-react-dateinputs";
import { Card } from "@progress/kendo-react-layout";

export default function Calendar(props: any) {
  return (
    <Card className="app-card">
      <div className="app-card__content app-card__content--spacious">
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
          className="app-card__title"
        >
          Calendar
        </div>
      </div>

      <div className="app-center-grid">
        <KendoCalendar navigation={false} />
      </div>
    </Card>
  );
}
