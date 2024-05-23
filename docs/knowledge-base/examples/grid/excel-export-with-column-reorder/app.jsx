import * as React from 'react';
import {
  Grid,
  GRID_COL_INDEX_ATTRIBUTE,
  GridColumn as Column,
  GridToolbar,
  GridSelectionChangeEvent,
  GridKeyDownEvent,
  getSelectedState,
  getSelectedStateFromKeyDown,
  GridSelectableMode,
} from '@progress/kendo-react-grid';

import { getter } from '@progress/kendo-react-common';
import { process } from '@progress/kendo-data-query';
import {
  setExpandedState,
  setGroupIds,
} from '@progress/kendo-react-data-tools';
import {
  ExcelExport,
  ExcelExportColumn,
  ExcelExportColumnGroup,
} from '@progress/kendo-react-excel-export';
import products from './products.json';
const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);
const initialDataState = {
  take: 10,
  skip: 0,
  group: [
    {
      field: 'UnitsInStock',
    },
    {
      field: 'ProductName',
    },
  ],
};
const aggregates = [
  {
    field: 'UnitsInStock',
    aggregate: 'sum',
  },
  {
    field: 'UnitPrice',
    aggregate: 'average',
  },
];

const processWithGroups = (data, dataState) => {
  const groups = dataState.group;

  if (groups) {
    groups.map((group) => (group.aggregates = aggregates));
  }

  dataState.group = groups;
  const newDataState = process(data, dataState);
  setGroupIds({
    data: newDataState.data,
    group: dataState.group,
  });
  return newDataState;
};

const App = () => {
  const _export = React.useRef(null);
  const [selectedState, setSelectedState] = React.useState({});
  const [gridColumns, setGridColumns] = React.useState([]);
  const [dataState, setDataState] = React.useState(initialDataState);
  const [result, setResult] = React.useState(
    processWithGroups(products, initialDataState)
  );
  const [collapsedState, setCollapsedState] = React.useState([]);
  const gridRef = React.useRef();

  const dataStateChange = (event) => {
    const newDataState = processWithGroups(products, event.dataState);
    setResult(newDataState);
    setDataState(event.dataState);
  };
  const save = (component) => {
    const reorderedColumns = gridRef.current.columns.sort((a, b) => {
      return a.orderIndex - b.orderIndex;
    });

    const options = component.current.workbookOptions();
    const rows = options.sheets[0].rows;
    rows.forEach((row) => {
      if (row.type === 'group-header') {
        row.cells.forEach((cell) => {
          cell.value = cell.value;
        });
      }
    });
    component.current.save(options);
  };

  const excelExport = () => {
    if (_export.current) {
      save(_export);
    }
  };

  const onSelectionChange = (event) => {
    debugger;
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const onKeyDown = (event) => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const onDragChange = (event) => {
    setDragEnabled(event.value);
  };

  const expandChange = (event) => {
    const item = event.dataItem;

    if (item.groupId) {
      const newCollapsedIds = !event.value
        ? [...collapsedState, item.groupId]
        : collapsedState.filter((groupId) => groupId !== item.groupId);
      setCollapsedState(newCollapsedIds);
    }
  };

  const getCells = (columns, cellProps) => {
    let cells = [];
    columns.forEach((column) => {
      if (column.aggregate) {
        cells.push(
          <td>
            {cellProps.dataItem.aggregates[column.field][column.aggregate]}
          </td>
        );
      } else {
        cells.push(<td>&nbsp;</td>);
      }
    });
    return cells;
  };
  const CustomCell = (props) => {
    if (props.rowType == 'groupHeader') {
      return <React.Fragment></React.Fragment>;
    }
    return (
      <td
        className={
          props.isSelected
            ? props.className + ' k-state-selected'
            : props.className
        }
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
        {...{
          [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex,
        }}
        style={{ ...props.style, textAlign: 'right', color: 'green' }}
        onClick={() => alert('hai')}
      >
        {props.dataItem.items
          ? props.dataItem.items[0][props.field]
          : props.dataItem[props.field]}
      </td>
    );
  };
  const cellRender = (tdElement, cellProps) => {
    if (
      cellProps.rowType === 'groupHeader' &&
      tdElement &&
      tdElement.props.role != 'presentation'
    ) {
      const columns = [
        { field: 'UnitPrice', aggregate: 'average' },
        { field: 'UnitsInStock', aggregate: 'sum' },
        { field: 'CategoryName' },
      ];

      return (
        <>
          <td
            {...tdElement.props}
            colSpan={tdElement.props.colSpan - columns.length}
          ></td>
          {getCells(columns, cellProps)}
        </>
      );
    }
    if (cellProps.rowType === 'groupFooter') {
      if (cellProps.field === 'UnitPrice') {
        return (
          <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
            Average: {cellProps.dataItem.aggregates.UnitPrice.average}
          </td>
        );
      } else if (cellProps.field === 'UnitsInStock') {
        return (
          <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
            Sum: {cellProps.dataItem.aggregates.UnitsInStock.sum}
          </td>
        );
      }
    }

    return tdElement;
  };

  const setSelectedValue = (data) => {
    let newData = data.map((item) => {
      if (item.items) {
        return {
          ...item,
          items: setSelectedValue(item.items),
        };
      } else {
        return {
          ...item,
          ['selected']: selectedState[idGetter(item)],
        };
      }
    });
    return newData;
  };
  React.useEffect(() => {
    setGridColumns(gridRef.current.columns);
  }, []);
  const onColumnReorder = (ev) => {
    const reorderedColumns = ev.columns.sort((a, b) => {
      return a.orderIndex - b.orderIndex;
    });
    setGridColumns(reorderedColumns);
  };
  const newData = setExpandedState({
    data: setSelectedValue(result.data),
    collapsedIds: collapsedState,
  });
  return (
    <React.Fragment>
      <ExcelExport
        data={newData}
        ref={_export}
        group={dataState.group}
        columns={gridColumns}
      ></ExcelExport>
      <Grid
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          cell: true,
          drag: true,
          mode: 'multiple',
        }}
        onColumnReorder={onColumnReorder}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
        ref={gridRef}
        style={{
          height: '820px',
        }}
        resizable={true}
        reorderable={true}
        filterable={true}
        sortable={true}
        pageable={{
          pageSizes: true,
        }}
        groupable={{
          footer: 'visible',
        }}
        data={newData}
        onDataStateChange={dataStateChange}
        {...dataState}
        onExpandChange={expandChange}
        expandField="expanded"
        cellRender={cellRender}
      >
        <GridToolbar>
          <button
            title="Export Excel"
            className="k-button k-primary"
            onClick={excelExport}
          >
            Export to Excel
          </button>
        </GridToolbar>
        <Column
          field="ProductID"
          cell={CustomCell}
          locked={true}
          filterable={false}
          title="ID"
          width="50px"
        />
        <Column field="ProductName" cell={CustomCell} title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" filter="numeric" />
        <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
        <Column field="Category.CategoryName" title="Category Name" />
      </Grid>
    </React.Fragment>
  );
};

export default App;
