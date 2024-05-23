import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { MyCommandCell } from './myCommandCell';
import { insertItem, getItems, updateItem, deleteItem } from './services';

const editField = 'inEdit';
const App = () => {
  const [data, setData] = React.useState([]);
  const [disableAddButton, setDisableAddButton] = React.useState(false);

  React.useEffect(() => {
    let newItems = getItems();
    setData(newItems);
  }, []);

  // modify the data in the store, db etc
  const remove = (dataItem) => {
    const newData = [...deleteItem(dataItem)];
    setData(newData);
  };

  const add = (dataItem) => {
    dataItem.inEdit = true;
    const newData = insertItem(dataItem);
    setData(newData);
    setDisableAddButton(false);
  };

  const update = (dataItem) => {
    dataItem.inEdit = false;
    const newData = updateItem(dataItem);
    setData(newData);
    setDisableAddButton(false);
  };

  // Local state operations
  const discard = () => {
    const newData = [...data];
    newData.splice(0, 1);
    setData(newData);
    setDisableAddButton(false);
  };

  const cancel = (dataItem) => {
    const originalItem = getItems().find(
      (p) => p.ProductID === dataItem.ProductID
    );
    const newData = data.map((item) =>
      item.ProductID === originalItem.ProductID
        ? originalItem
        : { ...item, disableEdit: false }
    );
    setData(newData);
    setDisableAddButton(false);
  };

  const enterEdit = (dataItem) => {
    setData(
      data.map((item) =>
        item.ProductID === dataItem.ProductID
          ? {
              ...item,
              inEdit: true,
            }
          : { ...item, disableEdit: true }
      )
    );
    setDisableAddButton(true);
  };

  const itemChange = (event) => {
    const newData = data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? {
            ...item,
            [event.field || '']: event.value,
          }
        : item
    );
    setData(newData);
  };

  const addNew = () => {
    const newDataItem = {
      inEdit: true,
      Discontinued: false,
    };
    setData([newDataItem, ...data]);
    setDisableAddButton(true);
  };

  const CommandCell = (props) => (
    <MyCommandCell
      {...props}
      edit={enterEdit}
      remove={remove}
      add={add}
      discard={discard}
      update={update}
      cancel={cancel}
      editField={editField}
    />
  );

  return (
    <Grid
      style={{
        height: '420px',
      }}
      data={data}
      onItemChange={itemChange}
      editField={editField}
    >
      <GridToolbar>
        <button
          disabled={disableAddButton}
          title="Add new"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
          onClick={addNew}
        >
          Add new
        </button>
      </GridToolbar>
      <Column field="ProductID" title="Id" width="50px" editable={false} />
      <Column field="ProductName" title="Product Name" width="200px" />
      <Column
        field="FirstOrderedOn"
        title="First Ordered"
        editor="date"
        format="{0:d}"
        width="150px"
      />
      <Column
        field="UnitsInStock"
        title="Units"
        width="120px"
        editor="numeric"
      />
      <Column field="Discontinued" title="Discontinued" editor="boolean" />
      <Column cell={CommandCell} width="200px" />
    </Grid>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
