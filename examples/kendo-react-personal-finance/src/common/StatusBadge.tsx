import { Chip } from "@progress/kendo-react-buttons";
import React from "react";

export default function StatusBadge(props: any) {
  const statusClass = () => {
    switch (props.dataItem.orderStatus) {
      case "Pending":
        return "finance-status--pending";
      case "Published":
        return "finance-status--completed";
      case "Postponed":
        return "finance-status--over";
      default:
        return "finance-status--unknown";
    }
  };

  const { height, width } = props;
  return (
      <Chip
        text={props.dataItem.orderStatus}
        rounded={"large"}
        className={statusClass()}
        style={{ height: height, width: "fit-content" }}
      />
  );
}
