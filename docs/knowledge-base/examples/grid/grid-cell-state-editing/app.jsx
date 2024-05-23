import * as React from 'react';

import {
  Grid,
  GridColumn as Column,
  getSelectedState,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import products from './products.json';

import { NumericTextBox, Input } from '@progress/kendo-react-inputs';

const MyContext = React.createContext({
  enterEdit: null,
});

const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);

for (let i = 0; i < 500; i++) {
  products.push({
    ProductID: i + 78,
    ProductName: i + 'test',
    selected: false,
  });
}

const TextCell = (props) => {
  const currentContext = React.useContext(MyContext);
  const [value, setValue] = React.useState(props.dataItem[props.field]);
  const handleChange = (event) => {
    setValue(event.value);
  };

  const handleBlur = (event) => {
    props.onChange({
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: event.syntheticEvent,
      value: value,
    });
  };
  if (props.dataItem.inEdit) {
    return (
      <td
        style={props.style}
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
      >
        <Input value={value} onChange={handleChange} onBlur={handleBlur} />
      </td>
    );
  } else {
    return (
      <td
        style={props.style}
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
        onClick={() => currentContext.enterEdit(props.dataItem)}
      >
        {props.dataItem[props.field]}
      </td>
    );
  }
};

const NumberCell = (props) => {
  const currentContext = React.useContext(MyContext);
  const [value, setValue] = React.useState(props.dataItem[props.field]);
  const handleChange = (event) => {
    setValue(event.value);
  };

  const handleBlur = (event) => {
    props.onChange({
      dataItem: props.dataItem,
      field: props.field,
      syntheticEvent: event.syntheticEvent,
      value: value,
    });
  };
  if (props.dataItem.inEdit) {
    return (
      <td
        style={props.style}
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
      >
        <NumericTextBox
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </td>
    );
  } else {
    return (
      <td
        style={props.style}
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
        onClick={() => currentContext.enterEdit(props.dataItem)}
      >
        {props.dataItem[props.field]}
      </td>
    );
  }
};

const App = () => {
  const [data, setData] = React.useState(products);
  const [selectedState, setSelectedState] = React.useState({});

  const selectionChange = (event) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const itemChange = (event) => {
    const inEditID = event.dataItem.ProductID;
    const field = event.field || '';
    const newData = data.map((item) =>
      item.ProductID === inEditID ? { ...item, [field]: event.value } : item
    );
    setData(newData);
  };

  const headerSelectionChange = (event) => {
    const checked = event.syntheticEvent.target.checked;
    const newSelectedState = {};
    data.forEach((item) => {
      newSelectedState[idGetter(item)] = checked;
    });
    setSelectedState(newSelectedState);
  };

  const enterEdit = (dataItem) => {
    const inEditID = dataItem.ProductID;
    const newData = data.map((item) =>
      item.ProductID === inEditID
        ? { ...item, inEdit: true }
        : { ...item, inEdit: false }
    );
    setData(newData);
  };

  return (
    <div>
      <MyContext.Provider
        value={{
          enterEdit: enterEdit,
        }}
      >
        <Grid
          data={data.map((item) => ({
            ...item,
            [SELECTED_FIELD]: selectedState[idGetter(item)],
          }))}
          style={{
            height: '400px',
          }}
          dataItemKey={DATA_ITEM_KEY}
          selectedField={SELECTED_FIELD}
          selectable={{
            enabled: true,
            drag: false,
            cell: false,
          }}
          onSelectionChange={selectionChange}
          onHeaderSelectionChange={headerSelectionChange}
          editField="inEdit"
          onItemChange={itemChange}
        >
          <Column
            field="selected"
            width="50px"
            headerSelectionValue={
              data.findIndex((item) => !selectedState[idGetter(item)]) === -1
            }
          />
          <Column
            field="ProductName"
            title="Product Name"
            width="300px"
            cell={TextCell}
          />
          <Column
            field="UnitsInStock"
            title="Units In Stock"
            cell={NumberCell}
          />
          <Column
            field="UnitsOnOrder"
            title="Units On Order"
            cell={NumberCell}
          />
        </Grid>
      </MyContext.Provider>
    </div>
  );
};

export default App;
