import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import ColumnForm from "./ColumnForm.jsx";

import products from "./products.json";

class App extends React.Component {
  columns = Object.keys(products[0]);
  columnsToIgnore = [
    "Category",
    "ReorderLevel",
    "SupplierID",
    "CategoryID",
    "QuantityPerUnit",
    "UnitPrice",
    "UnitsOnOrder"
  ];

  state = {
    columns: [...this.columns],
    openForm: false,
    data: [...products],
    editID: null
  };

  toggleDialog = () => {
    this.setState({
      openForm: !this.state.openForm
    });
  };

  addNewColumn = () => {
    this.setState({ openForm: true });
  };

  handleSubmit = event => {
    const str = Object.values(event)[0];
    const columnName = str.replace(/\s+/g, "");
    this.setState({
      data: this.state.data.map(item => {
        item[columnName] = "add value please";
        return item;
      }),
      columns: [...this.state.columns, columnName],
      openForm: false
    });
  };

  handleCancelEdit = () => {
    this.setState({ openForm: false });
  };

  rowClick = event => {
    this.setState({
      editID: event.dataItem.ProductID
    });
  };

  itemChange = event => {
    const inEditID = event.dataItem.ProductID;
    const data = this.state.data.map(item =>
      item.ProductID === inEditID
        ? { ...item, [event.field]: event.value }
        : item
    );
    this.setState({ data });
  };

  closeEdit = event => {
    if (event.target === event.currentTarget) {
      this.setState({ editID: null });
    }
  };

  addRecord = () => {
    const { data } = this.state;
    const newRecord = { ProductID: data.length + 1 };

    this.setState({
      data: [newRecord, ...data],
      editID: newRecord.ProductID
    });
  };

  render() {
    return (
      <>
        <Grid
          style={{ height: "400px" }}
          data={this.state.data.map(item => ({
            ...item,
            inEdit: item.ProductID === this.state.editID
          }))}
          editField="inEdit"
          onRowClick={this.rowClick}
          onItemChange={this.itemChange}
        >
          <GridToolbar>
            <div onClick={this.closeEdit}>
              <Button
                title="Add new row"
                className="k-button k-primary"
                onClick={this.addRecord}
                style={{ marginRight: "10px" }}
              >
                Add New Row
              </Button>
              <Button
                title="Add new column"
                className="k-button k-primary"
                onClick={this.addNewColumn}
              >
                Add New Column
              </Button>
            </div>
          </GridToolbar>
          {this.state.columns.map(c => {
            let width = "wrap";
            let field = c;
            let title = c;
            let editable = true;
            let editor;

            if (this.columnsToIgnore.includes(c)) {
              return;
            }
            if (c == "ProductID") {
              width = "40px";
              title = "ID";
              editable = false;
            }
            if (c == "UnitsInStock") {
              editor = "numeric";
            }

            if (c == "Discontinued") {
              editor = "boolean";
            }

            return (
              <Column
                field={field}
                width={width}
                title={title}
                editor={editor}
                editable={editable}
              />
            );
          })}
        </Grid>
        {this.state.openForm && (
          <ColumnForm
            cancelEdit={this.handleCancelEdit}
            onSubmit={this.handleSubmit}
          />
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("my-app"));
