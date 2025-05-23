import React from "react";
import StatusBadge from "./StatusBadge";

export default function GridStatusBadge(props: any) {
  return (
    <td {...props.tdProps} colSpan={1} style={{}}>
      <StatusBadge dataItem={props.dataItem} />
    </td>
  );
}
