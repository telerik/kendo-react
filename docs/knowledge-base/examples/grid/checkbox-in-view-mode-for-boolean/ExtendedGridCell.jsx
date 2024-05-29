import * as React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import {
  GRID_COL_INDEX_ATTRIBUTE,
} from '@progress/kendo-react-grid';
import { classNames } from '@progress/kendo-react-common';

function getNestedValue(fieldName, dataItem) {
  const path = (fieldName || '').split('.');
  let data = dataItem;
  path.forEach((p) => {
    data = data ? data[p] : undefined;
  });

  return data;
}

export const ExtendedGridCell = (props) => {
  let defaultRendering = null;
  const intl = useInternationalization();
  const navigationAttributes = useTableKeyboardNavigation(props.id);

  const onContextMenu = React.useCallback(
    (event) => {
      if (props.onContextMenu) {
        props.onContextMenu.call(undefined, event, props.dataItem, props.field);
      }
    },
    [props.onContextMenu, props.dataItem, props.field]
  );
  let tdProps = null;
  let content = props.content;
  if (props.rowType === 'groupFooter') {
    tdProps = {
      onContextMenu: onContextMenu,
      className: props.className,
    };
    defaultRendering = <td {...tdProps} />;
  } else if (props.field !== undefined && props.rowType !== 'groupHeader') {
    const data = getNestedValue(props.field, props.dataItem);

    if (!content && data !== undefined && data !== null) {
      content = props.format
        ? intl.format(props.format, data)
        : data.toString();
    }

    const className = classNames('k-table-td', props.className, {
      'k-selected': props.isSelected,
    });

    tdProps = {
      onContextMenu: onContextMenu,
      colSpan: props.colSpan,
      style: props.style,
      className: className,
      role: 'gridcell',
      'aria-colindex': props.ariaColumnIndex,
      'aria-selected': props.isSelected,
      [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex,
      ...navigationAttributes,
    };

    defaultRendering = <td {...tdProps}>{content}</td>;
  }

  const rowTypeSetting = props.rowType || 'data';
  const customCells = props.cells;
  if (customCells && customCells[rowTypeSetting]) {
    const CustomCell = customCells[rowTypeSetting];
    return (
      <CustomCell {...props} tdProps={tdProps}>
        {content}
      </CustomCell>
    );
  }

  return props.render
    ? props.render.call(undefined, defaultRendering, props)
    : defaultRendering;
};
