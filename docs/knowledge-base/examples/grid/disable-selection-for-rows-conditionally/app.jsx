import * as React from 'react';
import {
  Grid,
  GridColumn as Column,
  getSelectedState,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import products from './products.json';
import { Checkbox } from '@progress/kendo-react-inputs';
const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

const ConditionalCellRender = (td, props) => {
  if (props.field == SELECTED_FIELD && props.dataItem.UnitsInStock < 20) {
    return (
      <td>
        <Checkbox disabled={true} />
      </td>
    );
  } else {
    return td;
  }
};

const App = () => {
  const [dataState, setDataState] = React.useState(
    products
      .map((dataItem) =>
        Object.assign(
          {
            selected: false,
          },
          dataItem
        )
      )
      .slice(0, 5)
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
      if (item.UnitsInStock >= 20) {
        newSelectedState[idGetter(item)] = checked;
      }
    });
    setSelectedState(newSelectedState);
  }, []);
  return (
    <div>
      <Grid
        cellRender={ConditionalCellRender}
        data={dataState.map((item) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        style={{
          height: '400px',
        }}
        dataItemKey={DATA_ITEM_KEY}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: false,
          drag: false, 
          cell: false,
          mode: 'multiple',
        }}
        onSelectionChange={onSelectionChange}
        onHeaderSelectionChange={onHeaderSelectionChange}
      >
        <Column
          field={SELECTED_FIELD}
          width="50px"
          headerSelectionValue={
            dataState.findIndex(
              (item) =>
                item.UnitsInStock >= 20 && !selectedState[idGetter(item)]
            ) === -1
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

export default App;