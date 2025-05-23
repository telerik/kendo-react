import { Card } from "@progress/kendo-react-layout";
import React from "react";
import { ArcGauge } from "@progress/kendo-react-gauges";
import { displayCurrencyValue } from "../data/currency-converter";

interface BudgetUtilizationProps {
  currency: string;
}

export default function BudgetUtilization(props: BudgetUtilizationProps) {
  const [value, ] = React.useState(50);

  const arcCenterRenderer = (value: number, color: string) => {
    return (
      <div style={{ color: color, fontSize: 28, fontWeight: 700 }}>
        {value}%
      </div>
    );
  };

  return (
    <Card className="k-p-4 k-gap-4 k-rounded-xxl k-gap-1.5 k-h-full">
      <div className={"k-d-grid k-gap-4"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
        >
          Budget Utilization
        </div>
        <div
          style={{
            fontSize: "16px",
            letterSpacing: "0.5px",
            fontWeight: "400",
          }}
        >
          50% of the Budget used{" "}
        </div>
      </div>
      <div className={"k-d-flex k-justify-content-center"}>
        <ArcGauge
          value={value}
          color={"#2196F3"}
          style={{ width: 252 }}
          arcCenterRender={arcCenterRenderer}
        />
      </div>
      <div className={"k-d-flex k-justify-content-center"}>
        <div className="k-d-flex">
          <div className="k-d-grid k-justify-content-center k-align-items-center">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0.5px",
              }}
            >
              {displayCurrencyValue(15000, props.currency)}
            </div>
            <div      style={{
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.25px",
              }}>Total budget</div>
          </div>
          <div className="separator"></div>
          <div style={{textAlign: 'right'}} className="k-d-grid k-justify-content-center">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "20px",
                letterSpacing: "0.5px",
              }}
            >
              {displayCurrencyValue(7500, props.currency)}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.25px",
              }}
            >Used budget</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
