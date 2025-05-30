import * as React from 'react';
import {
  Grid,
  GridCellProps,
  GridColumn as Column,
  GridRowClickEvent,
  GridRowDoubleClickEvent,
  GridSortChangeEvent,
  GRID_COL_INDEX_ATTRIBUTE,
  GridCustomRowProps
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
  const CustomRow = (props: GridCustomRowProps) => {
    const trProps = {
      onContextMenu: (event) => {
        event.preventDefault()
        handleContextMenu(event, props.dataItem);
      },
      ...props.trProps
    };
    return (
      <tr {...trProps}>
        {props.children}
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

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, dataItem) => {
    props.onContextMenu({
      dataItem: dataItem.dataItem,
      event: event
    });
  };

  return (
    <Grid
      data={props.data}
      dataItemKey={props.dataItemKey}
      autoProcessData={true}
      rows={{ data: CustomRow }}
      style={{ height: '100%' }}
      navigatable={true}
      sortable={{
        allowUnsort: false
      }}
      sort={props.sort}
      selectable={{ enabled: true, cell: false, drag: true, mode: 'multiple' }}
      className={'k-filemanager-grid k-grid-display-block k-editable'}
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
