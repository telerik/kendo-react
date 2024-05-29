import * as React from "react";

import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";

import products from "./shared-products.json";

const ProductNameCell = ({ dataItem, field, rowType }) => {
  if (rowType === "groupHeader") {
    return null;
  }
  return <td style={{ color: "Blue" }}>{dataItem[field]}</td>;
};

const CategoryNameCell = ({ dataItem, rowType }) => {
  if (rowType === "groupHeader") {
    return null;
  }
  return (
    <td style={{ color: "#aaa" }}>
      {dataItem && dataItem.Category && dataItem.Category.CategoryName}
    </td>
  );
};

class App extends React.PureComponent {
  state = this.createAppState({
    take: 10,
    group: [{ field: "UnitsInStock" }]
  });

  render() {
    return (
      <Grid
        style={{ height: "520px" }}
        resizable={true}
        reorderable={true}
        filterable={true}
        sortable={true}
        pageable={{ pageSizes: true }}
        groupable={true}
        data={this.state.result}
        onDataStateChange={this.dataStateChange}
        {...this.state.dataState}
        onExpandChange={this.expandChange}
        expandField="expanded"
      >
        <Column field="ProductID" filterable={false} title="ID" width="50px" />
        <Column
          field="ProductName"
          title="Product Name"
          cell={ProductNameCell}
        />
        <Column field="UnitPrice" title="Unit Price" filter="numeric" />
        <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
        <Column
          field="Category.CategoryName"
          title="Category Name"
          cell={CategoryNameCell}
        />
      </Grid>
    );
  }

  createAppState(dataState) {
    return {
      result: process(products, dataState),
      dataState: dataState
    };
  }

  dataStateChange = event => {
    this.setState(this.createAppState(event.data));
  };

  expandChange = event => {
    event.dataItem[event.target.props.expandField] = event.value;
    this.setState({
      result: Object.assign({}, this.state.result),
      dataState: this.state.dataState
    });
  };
}

export default App;
