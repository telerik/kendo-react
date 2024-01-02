import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import { isMobile } from 'react-device-detect';
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
  const onHeaderSelectionChange = React.useCallback((event) => {
    const checkboxElement = event.syntheticEvent.target;
    const checked = checkboxElement.checked;
    const newSelectedState = {};
    event.dataItems.forEach((item) => {
      newSelectedState[idGetter(item)] = checked;
    });
    setSelectedState(newSelectedState);
  }, []);
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
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={
          isMobile
            ? null
            : {
                enabled: true,
                drag: false,
                cell: false,
                mode: 'multiple',
              }
        }
        onSelectionChange={onSelectionChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
      >
        <Column
          field={SELECTED_FIELD}
          width="50px"
          headerSelectionValue={
            dataState.findIndex((item) => !selectedState[idGetter(item)]) === -1
          }
        />
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitsOnOrder" title="Units On Order" />
        <Column field="ReorderLevel" title="Reorder Level" />
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
