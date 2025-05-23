import React from "react";
import { displayCurrencyValue } from "../data/currency-converter";

export default function GridAmountCell(props: any, currency: string) {
    return (
      <td {...props.tdProps} colSpan={1} style={{}}>
            {displayCurrencyValue(props.dataItem.amount, currency)}
      </td>
    );
  }