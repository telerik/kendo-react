import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { CellRender, RowRender } from './renderers';
import './styles.css';

const EDIT_FIELD = 'inEdit';
const DATA_KEY_FIELD = 'ProductID';
const App = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [originalData, setOriginalData] = React.useState(sampleProducts);
  const [changes, setChanges] = React.useState(false);
  const [dirty, setDirty] = React.useState({});
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
    setOriginalData(sampleProducts);
    setChanges(false);
    setDirty({});
  };

  const cancelChanges = () => {
    setData(sampleProducts);
    setChanges(false);
    setDirty({});
  };

  const itemChange = (event) => {
    let field = event.field || '';
    event.dataItem[field] = event.value;
    let isDirty = true;
    let newData = data.map((item) => {
      if (item[DATA_KEY_FIELD] === event.dataItem[DATA_KEY_FIELD]) {
        item[field] = event.value;
        let originalItem = originalData.find(
          (i) => i.ProductID == event.dataItem[DATA_KEY_FIELD]
        );
        if (originalItem) {
          isDirty = originalItem[field] != event.value;
        }
      }

      return item;
    });

    let newDirty = { ...dirty };
    newDirty[event.dataItem[DATA_KEY_FIELD]] = {
      ...dirty[event.dataItem[DATA_KEY_FIELD]],
      [field]: isDirty,
    };
    setDirty(newDirty);
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
      data={data.map((item) => {
        item.dirty = dirty[item[DATA_KEY_FIELD]];
        return item;
      })}
      dataItemKey={DATA_KEY_FIELD}
      rowHeight={50}
      onItemChange={itemChange}
      cellRender={customCellRender}
      rowRender={customRowRender}
      editField={EDIT_FIELD}
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

ReactDOM.render(<App />, document.querySelector('my-app'));
