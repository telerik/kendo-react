import * as React from 'react';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';

import { classNames } from '@progress/kendo-react-common';
const TREELIST_COL_INDEX_ATTRIBUTE = 'data-grid-col-index';

function getNestedValue(fieldName, dataItem) {
  const path = (fieldName || '').split('.');
  let data = dataItem;
  path.forEach((p) => {
    data = data ? data[p] : undefined;
  });

  return data;
}
export const MyCustomTreeListTextEditor = (props) => {
  console.log(props);
  const onChange = React.useCallback(
    (event) => {
      if (props.onChange) {
        props.onChange({
          dataItem: props.dataItem,
          level: props.level,
          field: props.field,
          syntheticEvent: event,
          value: event.target.value,
        });
      }
    },
    [props.onChange, props.dataItem, props.level, props.field]
  );
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  const editCellClasses = classNames(
    {
      ['k-state-selected']: props.isSelected,
    },
    props.className
  );

  const defaultRendering = (
    <td
      style={props.style}
      className={editCellClasses}
      aria-colindex={props.ariaColumnIndex}
      aria-selected={props.isSelected}
      role={'gridcell'}
      {...navigationAttributes}
      {...{ [TREELIST_COL_INDEX_ATTRIBUTE]: props.colIndex }}
    >
      <input
        maxlength={props.maxLength}
        style={{ width: '100%' }}
        className="k-input"
        value={getNestedValue(props.field, props.dataItem) || ''}
        onChange={onChange}
      />
    </td>
  );

  return props.render
    ? props.render.call(undefined, defaultRendering, props)
    : defaultRendering;
};
