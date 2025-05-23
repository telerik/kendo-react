import { Chip } from "@progress/kendo-react-buttons";
import React from "react";

export default function StatusBadge(props: any) {
  const backgroundColor = () => {
    switch (props.dataItem.orderStatus) {
      case "Pending":
        return "#FFE19C";
      case "Published":
        return "#A7DB97";
      case "Postponed":
        return "#D77B8B";
      default:
        return "#CCCCCC"; // Gray for unknown status
    }
  };

  const { height, width } = props;
  return (
      <Chip
        text={props.dataItem.orderStatus}
        rounded={"large"}
        style={{ backgroundColor: backgroundColor(), color: "#121710", height: height, width: "fit-content" }}
      />
  );
}
