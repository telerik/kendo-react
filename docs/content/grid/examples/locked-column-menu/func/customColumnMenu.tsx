import * as React from "react";
import {
    GridColumnMenuSort,
    GridColumnMenuFilter,
    GridColumnMenuItemGroup,
    GridColumnMenuItem,
    GridColumnMenuItemContent,
    GridColumnMenuProps
} from "@progress/kendo-react-grid";

import { classNames } from "@progress/kendo-react-common";

interface CustomColumnMenuProps extends GridColumnMenuProps {
    onColumnLockToggle: (field: string, state: boolean) => void,
    locked: boolean
}

export const CustomColumnMenu = (props: CustomColumnMenuProps) => {
    const handleColumnToggle = state => {
        props.onColumnLockToggle(props.column.field || '', state);
        if (props.onCloseMenu) {
            props.onCloseMenu();
        }
    };

    return (
      <div>
        <GridColumnMenuSort {...props} />
        <GridColumnMenuFilter {...props} />
        <GridColumnMenuItemGroup>
          <GridColumnMenuItem
            title={"Pin Columns"}
            iconClass={"k-i-pin"}
            onClick={()=> null}
        />
          <GridColumnMenuItemContent show={true}>
            <div className={"k-column-list-wrapper"}>
              <div className={"k-column-list"}>
                <div
                  className={classNames("k-column-list-item", {
                                    "k-disabled": props.locked
                                })}
                  onClick={() => handleColumnToggle(true)}
                            >
                  <span className="k-icon k-i-lock" /> Lock Column
                </div>
                <div
                  className={classNames("k-column-list-item", {
                                    "k-disabled": !props.locked
                                })}
                  onClick={() => handleColumnToggle(false)}
                            >
                  <span className="k-icon k-i-unlock" /> Unlock Column
                </div>
              </div>
            </div>
          </GridColumnMenuItemContent>
        </GridColumnMenuItemGroup>
      </div>
    );
}
