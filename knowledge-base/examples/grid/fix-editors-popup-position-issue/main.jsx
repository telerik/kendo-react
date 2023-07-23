import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { MyCommandCell } from './myCommandCell';
import { DropDownCell } from './myDropDownCell';
import { insertItem, getItems, updateItem, deleteItem } from './services';
import { Popup, PopupPropsContext } from '@progress/kendo-react-popup';

const App = () => {
  const editField = 'inEdit';
  const [data, setData] = React.useState(sampleProducts);
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

  // modify the data in the store, db etc
  const remove = (dataItem) => {
    const newData = deleteItem(dataItem);
    setData(newData);
  };
  const add = (dataItem) => {
    dataItem.inEdit = true;
    const newData = insertItem(dataItem);
    setData(newData);
  };
  const update = (dataItem) => {
    dataItem.inEdit = false;
    const newData = updateItem(dataItem);
    setData(newData);
  };

  // Local state operations
  const discard = (dataItem) => {
    const newData = [...data];
    newData.splice(0, 1);
    setData(newData);
  };
  const cancel = (dataItem) => {
    const originalItem = getItems().find(
      (p) => p.ProductID === dataItem.ProductID
    );
    const newData = data.map((item) =>
      item.ProductID === originalItem.ProductID ? originalItem : item
    );
    setData(newData);
  };
  const enterEdit = (dataItem) => {
    let newData = data.map((item) =>
      item.ProductID === dataItem.ProductID
        ? {
            ...item,
            inEdit: true,
          }
        : item
    );
    setData(newData);
  };
  const itemChange = (event) => {
    const field = event.field || '';
    const newData = data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? {
            ...item,
            [field]: event.value,
          }
        : item
    );
    setData(newData);
  };
  const addNew = () => {
    const newDataItem = {
      inEdit: true,
      Discontinued: false,
      ProductID: new Date().getMilliseconds(),
    };
    setData([newDataItem, ...data]);
  };

  const gridRef = React.useRef(null);

  return (
    <PopupPropsContext.Provider
      value={(props) => {
        let scrollableContainer =
          gridRef?.current?.element.querySelector('.k-grid-content');
        if (scrollableContainer && scrollableContainer.contains(props.anchor)) {
          return { 
            //adding the existing props of the Popup
            ...props,
            //setting the appendTo to the Grid's scrollable container
            appendTo:
              gridRef?.current?.element.querySelector('.k-grid-content'),
          };
        } else {
          return { ...props };
        }
      }}
    >
      <Grid
        filterable={true}
        ref={gridRef}
        scrollable={true}
        style={{ height: '300px' }}
        data={data}
        onItemChange={itemChange}
        editField={editField}
        dataItemKey={'ProductID'}
      >
        <GridToolbar>
          <button
            title="Add new"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={addNew}
          >
            Add new
          </button>
        </GridToolbar>
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column field="ProductName" title="Product Name" />
        <Column
          field="FirstOrderedOn"
          title="First Ordered"
          editor="date"
          format="{0:d}"
        />
        <Column field="UnitsInStock" title="Units" editor="numeric" />
        <Column field="Discontinued" title="Discontinued" cell={DropDownCell} />
        <Column cell={CommandCell} width="240px" />
      </Grid>
    </PopupPropsContext.Provider>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
