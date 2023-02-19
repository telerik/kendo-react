import * as React from "react";
import { Pager } from "@progress/kendo-react-data-tools";

export const TreeListPager = function(props) {
  return (
    <Pager
      {...props}
      previousNext={true}
      buttonCount={8}
      // Configure the Pager props here.
      // See example: https://www.telerik.com/kendo-react-ui/components/datatools/pager/
    />
  );
};
