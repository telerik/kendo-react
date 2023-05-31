import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
  GridHeaderCell,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import products from './products.json';
const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

const App = () => {
  const [dataState, setDataState] = React.useState(
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
  const onSelectionChange = React.useCallback(
    (event) => {
      const newSelectedState = getSelectedState({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
      });
      setSelectedState(newSelectedState);
    },
    [selectedState]
  );
  

  const headerCellRender = (td, props) => {
    if (props.field == SELECTED_FIELD) {
      return <td {...td.props}></td>;
    }
    return td;
  };
  return (
    <div>
      <Grid
        data={dataState.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        style={{
          height: '400px',
        }}
        headerCellRender={headerCellRender}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          drag: false,
          cell: false,
          mode: 'multiple',
        }}
        onSelectionChange={onSelectionChange}
      >
        <Column
          field={SELECTED_FIELD}
          width="50px"
        ></Column>
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitsOnOrder" title="Units On Order" />
        <Column field="ReorderLevel" title="Reorder Level" />
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
