import * as React from 'react';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { CellRender, RowRender } from './renderers';
const EDIT_FIELD = 'inEdit';

const App = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [changes, setChanges] = React.useState(false);

  const enterEdit = (dataItem, field) => {
    const newData = data.map((item) => ({
      ...item,
      [EDIT_FIELD]: item.ProductID === dataItem.ProductID ? field : undefined,
    }));
    setData(newData);
  };

  const exitEdit = () => {
    const newData = data.map((item) => ({ ...item, [EDIT_FIELD]: undefined }));
    setData(newData);
  };

  const saveChanges = () => {
    sampleProducts.splice(0, sampleProducts.length, ...data);
    setChanges(false);
  };

  const cancelChanges = () => {
    setData(sampleProducts);
    setChanges(false);
  };

  const itemChange = (event) => {
    let field = event.field || '';
    event.dataItem[field] = event.value;
    let newData = data.map((item) => {
      if (item.ProductID === event.dataItem.ProductID) {
        item[field] = event.value;
      }

      return item;
    });
    setData(newData);
    setChanges(true);
  };

  const customCellRender = (td, props) => (
    <CellRender
      originalProps={props}
      td={td}
      enterEdit={enterEdit}
      editField={EDIT_FIELD}
    />
  );

  const customRowRender = (tr, props) => (
    <RowRender
      originalProps={props}
      tr={tr}
      exitEdit={exitEdit}
      editField={EDIT_FIELD}
    />
  );

  return (
    <Grid
      style={{
        height: '420px',
      }}
      data={data}
      dataItemKey={'ProductID'}
      rowHeight={50}
      onItemChange={itemChange}
      cellRender={customCellRender}
      rowRender={customRowRender}
      editField={EDIT_FIELD}
      navigatable={true}
    >
      <GridToolbar>
        <button
          title="Save Changes"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={saveChanges}
          disabled={!changes}
        >
          Save Changes
        </button>
        <button
          title="Cancel Changes"
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={cancelChanges}
          disabled={!changes}
        >
          Cancel Changes
        </button>
      </GridToolbar>
      <Column field="ProductID" title="Id" width="50px" editable={false} />
      <Column field="ProductName" title="Product Name" width="200px" />
      <Column field="UnitsInStock" title="Units In Stock" editor="numeric" />
      <Column
        field="FirstOrderedOn"
        title="First Ordered"
        editor="date"
        format="{0:d}"
        width="140px"
      />
      <Column field="Discontinued" editor="boolean" />
    </Grid>
  );
};

export default App;