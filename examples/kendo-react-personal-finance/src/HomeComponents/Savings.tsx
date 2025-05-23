import React from "react";
import { Card } from "@progress/kendo-react-layout";
import { displayCurrencyValue } from "../data/currency-converter";
import SavingsProgressBar from "./SavingsProgressbar";

interface SavingsProps {
  currency: string;
  savings: number;
}

export default function Savings(props: SavingsProps) {
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
            Savings
          </div>
          <div
            style={{
              fontSize: "16px",
              letterSpacing: "0.5px",
              fontWeight: "400",
            }}
          >
            {displayCurrencyValue(104500, props.currency)}
          </div>
        </div>

          <SavingsProgressBar
            currency={props.currency}
            savings={props.savings}
            value={3000}
            title={"Education"}
          />
          <SavingsProgressBar
            currency={props.currency}
            savings={props.savings}
            value={25000}
            title={"Dream Home"}
          />
          <SavingsProgressBar
            currency={props.currency}
            savings={props.savings}
            value={6500}
            title={"Car"}
          />
          <SavingsProgressBar
            currency={props.currency}
            savings={props.savings}
            value={20000}
            title={"Holidays"}
          />
          <SavingsProgressBar
            currency={props.currency}
            savings={props.savings}
            value={50000}
            title={"Health Care"}
          />
      </Card>
    );
}