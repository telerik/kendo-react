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
      <Card className="app-card app-card--compact">
        <div
          style={{ fontSize: "20px", letterSpacing: "wide" }}
          className="small-card__topic"
        >
          {props.topic}
        </div>
        <div
          style={{ fontSize: "24px", letterSpacing: "wide" }}
          className="small-card__amount"
        >
          {props.amount}
        </div>
        <div
          style={{ fontSize: "14px", letterSpacing: "wide" }}
          className="small-card__comparison"
        >
          <span className={positive ? 'positive': 'negative'}>{positive && '+'}{props.percentage}%</span> than the last month
        </div>
      </Card>
    </>
  );
}
