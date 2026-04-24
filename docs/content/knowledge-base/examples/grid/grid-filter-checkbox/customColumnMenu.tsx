import React, { useMemo, useState } from 'react';
import {
  GridColumnMenuSort,
  GridColumnMenuItemGroup,
  GridColumnMenuItem,
  GridColumnMenuItemContent
} from '@progress/kendo-react-grid';
import { Label } from '@progress/kendo-react-labels';
import { Checkbox } from '@progress/kendo-react-inputs';

type CustomColumnMenuProps = any;

export const CustomColumnMenu = (props: CustomColumnMenuProps) => {
  const { data: sourceData = [] } = props;
  const [data, setData] = useState<any[]>(sourceData);
  const [columnsExpanded, setColumnsExpanded] = useState(true);

  const onToggleColumn = (item: any) => {
    setData((prev) =>
      prev.map((d) =>
        d.ProductID === item.ProductID ? { ...d, filterChecked: !d.filterChecked } : d
      )
    );
  };

  const onReset = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.onReset();
    if (props.onCloseMenu) props.onCloseMenu();
  };

  const onSubmit = (event?: React.SyntheticEvent) => {
    if (event) event.preventDefault();
    props.onColumnsSubmit(data);
    if (props.onCloseMenu) props.onCloseMenu();
  };

  const onMenuItemClick = () => {
    setColumnsExpanded((v) => !v);
  };

  const fieldName = props.field;

  const items = useMemo(
    () =>
      data.map((item, idx) => (
        <div key={idx} className="k-column-list-item">
          <span>
            <Checkbox
              id={`column-visiblity-show-${idx}`}
              readOnly
              checked={!!item.filterChecked}
              onClick={() => onToggleColumn(item)}
            >
              <Label
                editorId={`column-visiblity-show-${idx}`}
                className="k-checkbox-label"
                style={{ userSelect: 'none' }}
              >
                {item[fieldName]}
              </Label>
            </Checkbox>
          </span>
        </div>
      )),
    [data, fieldName]
  );

  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuItemGroup>
        <GridColumnMenuItem title="Products" iconClass="k-i-columns" onClick={onMenuItemClick} />
        <GridColumnMenuItemContent show={columnsExpanded}>
          <div className="k-column-list-wrapper">
            <form onSubmit={onSubmit} onReset={onReset}>
              <div className="k-column-list">{items}</div>
              <div className="k-columnmenu-actions">
                <button type="reset" className="k-button">
                  Reset
                </button>
                <button className="k-button k-primary">Save</button>
              </div>
            </form>
          </div>
        </GridColumnMenuItemContent>
      </GridColumnMenuItemGroup>
    </div>
  );
};
