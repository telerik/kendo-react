import * as React from 'react';
import {
  Grid,
  GridCellProps,
  GridColumn as Column,
  GridRowClickEvent,
  GridRowDoubleClickEvent,
  GridSortChangeEvent,
  GridCustomRowProps,
  GRID_COL_INDEX_ATTRIBUTE
} from '@progress/kendo-react-grid';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';
import { useInternationalization } from '@progress/kendo-react-intl';
import { SvgIcon } from '@progress/kendo-react-common';
import { convertDateFormat, getName, formatBytes } from '../helpers/helperMethods';

const DateCreatedCell  = (props: GridCellProps) => {
  const intl = useInternationalization();

  const field: string = props.field || '';
  const date: Date = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);

  return (
    <td
      {...{ [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex }}
      {...navigationAttributes}
    >
      {date === null ? '' : convertDateFormat(date, intl)}
    </td>
  );
};

const SizeCell = (props: GridCellProps) => {
  const size: number = props.dataItem[props.field || ''];
  const navigationAttributes = useTableKeyboardNavigation(props.id);

  return (
    <td
      {...{ [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex }}
      {...navigationAttributes}
    >
      {size === null ? '' : formatBytes(size)}
    </td>
  );
};

const NameCell = (props: GridCellProps) => {
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  const name = getName(props.dataItem.path);
  const { svgIcon } = props.dataItem.icon;

  return (
    <td
      {...{ [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex }}
      {...navigationAttributes}
    >
      <SvgIcon icon={svgIcon} />
      {name}
    </td>
  );
};

export const GridView = (props) => {
  const CustomRow = (rowProps: GridCustomRowProps) => {
    const handleRowContextMenu = (event: React.MouseEvent<HTMLTableRowElement>) => {
      event.preventDefault();
      handleContextMenu(event, rowProps);
    };

    return (
      <tr {...rowProps.trProps} onContextMenu={handleRowContextMenu}>
        {rowProps.children}
      </tr>
    );
  };

  const handleOnSortChange = (event: GridSortChangeEvent) => {
    props.onSortChange({
      sort: event.sort,
      event: event
    });
  };

  const handleSelectionChange = (event: GridRowClickEvent) => {
    props.onSelectionChange(event);
  };

  const handleMultipleSelection = (event) => {
    props.onMultipleSelection(event);
  };

  const handleDoubleClick = (event: GridRowDoubleClickEvent) => {
    props.onDoubleClick(event);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLTableRowElement>, rowProps: GridCustomRowProps) => {
    props.onContextMenu({
      dataItem: rowProps.dataItem,
      event: event
    });
  };

  return (
    <Grid
      data={props.data}
      rows={{ data: CustomRow }}
      className={'k-filemanager-grid k-grid-display-block k-editable'}
      style={{ height: '100%' }}
      navigatable={true}
      sortable={{
        allowUnsort: false
      }}
      sort={props.sort}
      selectable={{ enabled: true, cell: false, drag: true, mode: 'multiple' }}
      dataItemKey={props.dataItemKey}
      onRowClick={handleSelectionChange}
      onSelectionChange={handleMultipleSelection}
      onSortChange={handleOnSortChange}
      onRowDoubleClick={handleDoubleClick}
      >
      <Column field='path' title='Name' cells={{ data: NameCell }} />
      <Column field='dateCreated' title='Date Created' cells={{ data: DateCreatedCell }} />
      <Column field='size' title='Size' cells={{ data: SizeCell }} />
    </Grid>
  );
}
