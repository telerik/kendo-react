import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import EditForm from "./editForm.jsx";

import products from "./shared-products.json";

const EditCommandCell = props => {
  return (
    <td>
      <button
        className="k-button k-primary"
        onClick={() => props.enterEdit(props.dataItem)}
      >
        Edit
      </button>
    </td>
  );
};

class App extends React.Component {
  state = {
    openForm: false,
    editItem: {},
    data: [...products],
    result: process(products, {}),
    dataState: {}
  };

  enterEdit = item => {
    this.setState({
      openForm: true,
      editItem: item
    });
  };

  handleSubmit = event => {
    const newData = this.state.data.map((item, i) => {
      if (event.ProductID === item.ProductID) {
        item = { ...event };
      }
      return item;
    });
    this.setState({
      data: newData,
      result: process(newData, this.state.dataState),
      openForm: false
    });
  };

  handleCancelEdit = () => {
    this.setState({ openForm: false });
  };

  MyEditCommandCell = props => (
    <EditCommandCell {...props} enterEdit={this.enterEdit} />
  );

  render() {
    console.log(this.state.result);

    return (
      <>
        <Grid
          style={{ height: "520px" }}
          resizable={true}
          reorderable={true}
          filterable={true}
          sortable={true}
          pageable={{ pageSizes: true }}
          data={this.state.result}
          onDataStateChange={this.dataStateChange}
          {...this.state.dataState}
          onExpandChange={this.expandChange}
          expandField="expanded"
        >
          <Column
            field="ProductID"
            filterable={false}
            title="ID"
            width="50px"
          />
          <Column field="ProductName" title="Product Name" />
          <Column field="UnitPrice" title="Unit Price" filter="numeric" />
          <Column
            field="UnitsInStock"
            title="Units In Stock"
            filter="numeric"
          />

          <Column cell={this.MyEditCommandCell} filterable={false} />
        </Grid>
        {this.state.openForm && (
          <EditForm
            cancelEdit={this.handleCancelEdit}
            onSubmit={this.handleSubmit}
            item={this.state.editItem}
          />
        )}
      </>
    );
  }

  dataStateChange = event => {
    this.setState({
      result: process(this.state.data, event.dataState),
      dataState: event.dataState
    });
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
