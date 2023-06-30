import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  GRID_COL_INDEX_ATTRIBUTE,
  Grid,
  GridColumn as Column,
  getSelectedState,
  getSelectedStateFromKeyDown,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import * as React from 'react';
import { useTableKeyboardNavigation } from '@progress/kendo-react-data-tools';

export const CustomCell = (props) => {
  const field = props.field || '';
  const value = props.dataItem[field];
  const navigationAttributes = useTableKeyboardNavigation(props.id);
  return (
    <td
      className={props.isSelected ? 'k-selected' : ''}
      colSpan={props.colSpan}
      role={'gridcell'}
      aria-colindex={props.ariaColumnIndex}
      aria-selected={props.isSelected}
      {...{ [GRID_COL_INDEX_ATTRIBUTE]: props.columnIndex }}
      {...navigationAttributes}
    >
      {value === null ? '' : props.dataItem[field].toString()}
    </td>
  );
};

const products = [
  { ProductID: 1, ProductName: 'Fish', UnitsInStock: 2, UnitPrice: 50 },
  { ProductID: 2, ProductName: 'Chips', UnitsInStock: 6, UnitPrice: 10 },
  { ProductID: 3, ProductName: 'Salsa', UnitsInStock: 10, UnitPrice: 20 },
  { ProductID: 4, ProductName: 'Steak', UnitsInStock: 20, UnitPrice: 65 },
];

const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

const App = () => {
  const [data, setData] = React.useState(
    products.map((dataItem) =>
      Object.assign(
        {
          selected: false,
        },
        dataItem
      )
    )
  );
  const [selectedState, setSelectedState] = React.useState({});
  const onSelectionChange = (event) => {
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

  return (
    <div>
      <Grid
        style={{
          height: '400px',
        }}
        data={data.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          cell: true,
        }}
        navigatable={true}
        onSelectionChange={onSelectionChange}
        onKeyDown={onKeyDown}
      >
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitPrice" title="UnitPrice" cell={CustomCell} />
      </Grid>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
