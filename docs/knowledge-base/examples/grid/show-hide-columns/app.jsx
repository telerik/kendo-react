
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import products from "./products.json";

class App extends React.Component {
  state = {
    columns: [
      { field: "ProductID", title: "ID", show: false },
      { field: "ProductName", title: "Name", show: true },
      { field: "Category.CategoryName", title: "Category Name", show: true },
      { field: "UnitPrice", title: "Price", show: true },
      { field: "UnitsInStock", title: "In Stock", show: true }
    ]
  };

  onChange = props => {
    const newState = [...this.state.columns];
    newState.map((c, i) => {
      if (c.field == props.currentTarget.id) {
        c.show = !c.show;
      }
    });
    console.log(newState);
    this.setState({ columns: newState });
  };

  render() {
    return (
      <>
        <h4>Show Columns</h4>
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ProductID"
          name="Product ID"
          defaultChecked={this.state.columns[0].show}
          onChange={this.onChange}
        />
        <label for="ProductID">Product ID</label>
        <br />
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ProductName"
          name="Product Name"
          defaultChecked={this.state.columns[1].show}
          onChange={this.onChange}
        />
        <label for="ProductName">Product Name</label>
        <br />
        <input
          className="custom-checkbox"
          type="checkbox"
          id="Category.CategoryName"
          name="Category Name"
          defaultChecked={this.state.columns[2].show}
          onChange={this.onChange}
        />
        <label for="Category.CategoryName">Category Name</label>
        <br />

        <Grid style={{ height: "400px" }} data={[...products]}>
          {this.state.columns.map((column, i) => {
            return (
              column.show && (
                <Column key={i} field={column.field} title={column.title} />
              )
            );
          })}
        </Grid>
      </>
    );
  }
}

export default App;
