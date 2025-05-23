import {
  Card,
} from "@progress/kendo-react-layout";
import React from "react";

interface SmallCardProps {
  topic: string;
  amount: string | number;
  percentage: number;
}

export default function SmallCard(props: SmallCardProps) {
const positive = props.percentage >= 0 ? true : false;
  return (
    <>
      <Card className="k-rounded-xxl k-gap-1.5 k-p-4 k-h-full">
        <div
          style={{ fontSize: "20px", letterSpacing: "wide" }}
          className={"k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-4"}
        >
          {props.topic}
        </div>
        <div
          style={{ fontSize: "24px", letterSpacing: "wide" }}
          className={"k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-6"}
        >
          {props.amount}
        </div>
        <div
          style={{ fontSize: "14px", letterSpacing: "wide" }}
          className={"k-pt-1px k-pb-1px k-pr-0 k-pl-0 k-gap-6"}
        >
          <span className={positive ? 'positive': 'negative'}>{positive && '+'}{props.percentage}%</span> than the last month
        </div>
      </Card>
    </>
  );
}
