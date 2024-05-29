import * as React from 'react';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { Checkbox } from '@progress/kendo-react-inputs';
import { ExtendedGridCell } from './ExtendedGridCell';

//Custom cell for displaying disabled Checkbox in view mode of the cell
const booleanCell = (props) => {
  const { dataItem } = props;
  let content = null;
  //Enabled Checkbox is rendered if the row is in edit mode
  if (dataItem.inEdit) {
    content = (
      <Checkbox
        value={dataItem[props.field]}
        onChange={(e) => {
          props.onChange({
            dataItem: props.dataItem,
            field: props.field,
            syntheticEvent: e.syntheticEvent,
            value: e.target.value,
          });
        }}
      ></Checkbox>
    );
  } else {
    //Disabled Checkbox for view mode
    content = (
      <Checkbox value={dataItem[props.field]} disabled={true}></Checkbox>
    );
  }

  //ExtendedGridCell re-uses the default rendering of the cells (keeping all class names, attributes, etc.), but allows passing custom content.
  return <ExtendedGridCell {...props} content={content} />;
};

const App = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [editID, setEditID] = React.useState(null);

  const rowClick = (event) => {
    setEditID(event.dataItem.ProductID);
  };

  const itemChange = (event) => {
    const inEditID = event.dataItem.ProductID;
    const field = event.field || '';
    const newData = data.map((item) =>
      item.ProductID === inEditID ? { ...item, [field]: event.value } : item
    );
    setData(newData);
  };

  const closeEdit = (event) => {
    if (event.target === event.currentTarget) {
      setEditID(null);
    }
  };

  const addRecord = () => {
    const newRecord = {
      ProductID: data.length + 1,
    };
    setData([newRecord, ...data]);
    setEditID(newRecord.ProductID);
  };

  return (
    <Grid
      style={{
        height: '420px',
      }}
      data={data.map((item) => ({
        ...item,
        inEdit: item.ProductID === editID,
      }))}
      editField="inEdit"
      onRowClick={rowClick}
      onItemChange={itemChange}
    >
      <GridToolbar>
        <div onClick={closeEdit}>
          <button
            title="Add new"
            className="k-button k-primary"
            onClick={addRecord}
          >
            Add new
          </button>
        </div>
      </GridToolbar>
      <Column field="ProductID" title="Id" width="50px" editable={false} />
      <Column field="ProductName" title="Name" />
      <Column
        field="FirstOrderedOn"
        title="First Ordered"
        editor="date"
        format="{0:d}"
      />
      <Column
        field="UnitsInStock"
        title="Units"
        width="150px"
        editor="numeric"
      />
      <Column
        field="Discontinued"
        title="Discontinued"
        editor="boolean"
        cell={booleanCell}
      />
    </Grid>
  );
};

export default App;