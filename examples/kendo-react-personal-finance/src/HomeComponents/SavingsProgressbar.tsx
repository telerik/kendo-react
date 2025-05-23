import React from "react";
import { ProgressBar } from "@progress/kendo-react-progressbars";
import { displayCurrencyValue } from "../data/currency-converter";

interface SavingsProgressbarProps {
    title: string;
    value: number;
    savings: number;
    currency: string;
}

export default function SavingsProgressbar(props: SavingsProgressbarProps) {
    return (
        <>
        <div className="k-d-flex k-justify-content-between">
          <label>{props.title}</label>
          <span>
            {displayCurrencyValue(props.value, props.currency)}
          </span>
        </div>
        <ProgressBar value={props.value} max={props.savings} labelVisible={false}  />
        </>
    )
}