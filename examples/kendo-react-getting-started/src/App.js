import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';
import categories from './categories.json';
import products from './products.json';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Window } from '@progress/kendo-react-dialogs';

class App extends Component {


  state = {
    dropdownlistCategory: null,
    gridDataState: {
      sort: [
        { field: "ProductName", dir: "asc" }
      ],
      skip: 0,
      take: 10
    },
    windowVisible: false,
    gridClickedRow: {}
  }

  handleDropDownChange = (e) => {
    let newDataState = { ...this.state.gridDataState }
    if (e.target.value.CategoryID !== null) {
      newDataState.filter = {
        logic: 'and',
        filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
      }
      newDataState.skip = 0
    } else {
      newDataState.filter = []
      newDataState.skip = 0
    }
    this.setState({
      dropdownlistCategory: e.target.value.CategoryID,
      gridDataState: newDataState
    });
  }

  handleGridDataStateChange = (e) => {
    this.setState({gridDataState: e.dataState});
  }

  handleGridRowClick = (e) => {
    this.setState({
        windowVisible: true,
        gridClickedRow: e.dataItem
    });
  }

  closeWindow = (e) => {
    this.setState({
        windowVisible: false
    });
  }

  render() {
    return (
      <div className="kendo-react-getting-started">
        <h1>Hello KendoReact!</h1>
        <p>
          <DropDownList
            data={categories}
            dataItemKey="CategoryID"
            textField="CategoryName"
            defaultItem={{CategoryID: null, CategoryName: "Product categories"}}
            onChange={this.handleDropDownChange}
            />
          &nbsp; Selected category ID: <strong>{this.state.dropdownlistCategory}</strong>
        </p>

        <Grid
          data={process(products, this.state.gridDataState)}
          {...this.state.gridDataState}
          style={{ height: "446px" }}
          pageable={true}
          sortable={true}
          onDataStateChange={this.handleGridDataStateChange}
          onRowClick={this.handleGridRowClick}>
          <GridColumn field="ProductName" title="Product Name" />
          <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
          <GridColumn field="UnitsInStock" title="Units in Stock" />
          <GridColumn field="Discontinued" cells={{ data: checkboxColumn }} />
        </Grid>

        {this.state.windowVisible &&
          <Window
            title="Product Details"
            onClose={this.closeWindow}
            height={250}>
            <dl>
              <dt>Product Name</dt>
              <dd>{this.state.gridClickedRow.ProductName}</dd>
              <dt>Product ID</dt>
              <dd>{this.state.gridClickedRow.ProductID}</dd>
              <dt>Quantity per Unit</dt>
              <dd>{this.state.gridClickedRow.QuantityPerUnit}</dd>
            </dl>
          </Window>
        }

      </div>
    );
  }
}

class checkboxColumn extends Component {
  render() {
    return (
        <td>
          <input type="checkbox" checked={this.props.dataItem[this.props.field]} disabled="disabled" />
        </td>
    );
  }
}

export default App;
