import React, { useState } from 'react';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import ColumnForm from './ColumnForm.jsx';

import products from './shared-products.json';

const App = () => {
  const columns = Object.keys(products[0]);
  const columnsToIgnore = [
    'Category',
    'ReorderLevel',
    'SupplierID',
    'CategoryID',
    'QuantityPerUnit',
    'UnitPrice',
    'UnitsOnOrder',
  ];

  const [state, setState] = useState({
    columns: [...columns],
    openForm: false,
    data: [...products],
    editID: null,
  });

  const toggleDialog = () => {
    setState((prev) => ({ ...prev, openForm: !prev.openForm }));
  };

  const addNewColumn = () => {
    setState((prev) => ({ ...prev, openForm: true }));
  };

  const handleSubmit = (event) => {
    const str = Object.values(event)[0];
    const columnName = str.replace(/\s+/g, '');

    setState((prev) => ({
      data: prev.data.map((item) => {
        item[columnName] = 'add value please';
        return item;
      }),
      columns: [...prev.columns, columnName],
      openForm: false,
    }));
  };

  const handleCancelEdit = () => {
    setState((prev) => ({ ...prev, openForm: false }));
  };

  const rowClick = (event) => {
    setState((prev) => ({ ...prev, editID: event.dataItem.ProductID }));
  };

  const itemChange = (event) => {
    const inEditID = event.dataItem.ProductID;
    const updatedData = state.data.map((item) =>
      item.ProductID === inEditID
        ? { ...item, [event.field]: event.value }
        : item
    );

    setState((prev) => ({ ...prev, data: updatedData }));
  };

  const closeEdit = (event) => {
    if (event.target === event.currentTarget) {
      setState((prev) => ({ ...prev, editID: null }));
    }
  };

  const addRecord = () => {
    const newRecord = { ProductID: state.data.length + 1 };

    setState((prev) => ({
      ...prev,
      data: [newRecord, ...prev.data],
      editID: newRecord.ProductID,
    }));
  };

  return (
    <>
      <Grid
        style={{ height: '400px' }}
        data={state.data.map((item) => ({
          ...item,
          inEdit: item.ProductID === state.editID,
        }))}
        editField="inEdit"
        onRowClick={rowClick}
        onItemChange={itemChange}
      >
        <GridToolbar>
          <div onClick={closeEdit}>
            <Button
              title="Add new row"
              className="k-button k-primary"
              onClick={addRecord}
              style={{ marginRight: '10px' }}
            >
              Add New Row
            </Button>
            <Button
              title="Add new column"
              className="k-button k-primary"
              onClick={addNewColumn}
            >
              Add New Column
            </Button>
          </div>
        </GridToolbar>
        {state.columns.map((c) => {
          let width = 'wrap';
          let field = c;
          let title = c;
          let editable = true;
          let editor;

          if (columnsToIgnore.includes(c)) {
            return null;
          }
          if (c === 'ProductID') {
            width = '40px';
            title = 'ID';
            editable = false;
          }
          if (c === 'UnitsInStock') {
            editor = 'numeric';
          }

          if (c === 'Discontinued') {
            editor = 'boolean';
          }

          return (
            <Column
              key={field}
              field={field}
              width={width}
              title={title}
              editor={editor}
              editable={editable}
            />
          );
        })}
      </Grid>
      {state.openForm && (
        <ColumnForm cancelEdit={handleCancelEdit} onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default App;