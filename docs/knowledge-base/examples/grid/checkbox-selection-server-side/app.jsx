import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: { data: [], total: 0 },
      dataState: { take: 10, skip: 0 },
      selectedIds: []
    };
  }

  dataStateChange = (e) => {
    this.setState({
      ...this.state,
      dataState: e.data
    });
  }

  selectionChange = (event) => {
    if (!event.dataItem.selected) {
      let ids = this.state.selectedIds
      if (ids.indexOf(event.dataItem.ProductID) === -1) {
        ids.push(event.dataItem.ProductID)
      }
      this.setState({ selectedIds: ids })
    } else {
      let ids = this.state.selectedIds
      let index = ids.indexOf(event.dataItem.ProductID)
      ids.splice(index, 1)
      this.setState({ selectedIds: ids })
    }
  }

  headerSelectionChange = (event) => {
    const checked = event.syntheticEvent.target.checked;
    if (checked) {
      let ids = this.state.selectedIds
      this.state.products.data.forEach(item => {
        if (ids.indexOf(item.ProductID) === -1) {
          ids.push(item.ProductID)
        }
      })
      this.setState({ selectedIds: ids })
    } else {
      let ids = this.state.selectedIds
      this.state.products.data.forEach(item => {
        let index = ids.indexOf(item.ProductID)
        ids.splice(index, 1)
      })
      this.setState({ selectedIds: ids })
    }
  }

  dataRecieved = (products) => {
    let data = products.data.map(dataItem => Object.assign({ selected: false }, dataItem))
    this.setState({
      ...this.state,
      products: products
    });
  }

  render() {
    return (
      <div>
        <Grid
          sortable={true}
          pageable={true}
          selectedField="selected"
          onSelectionChange={this.selectionChange}
          onHeaderSelectionChange={this.headerSelectionChange}
          {...this.state.dataState}
          total={this.state.products.total}
          data={this.state.products.data.map(item => {
            if (this.state.selectedIds.indexOf(item.ProductID) >= 0) {
              item.selected = true
            } else {
              item.selected = false
            }
            return item
          })}
          onDataStateChange={this.dataStateChange}
        >
          <Column
            field="selected"
            width="70px"
            headerSelectionValue={
              this.state.products.data[0] !== undefined && this.state.products.data.findIndex(dataItem => dataItem.selected === false) === -1
            } />
          <Column field="ProductID" filter="numeric" title="Id" />
          <Column field="ProductName" title="Name" />
          <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
          <Column field="UnitsInStock" filter="numeric" title="In stock" />
        </Grid>

        <ProductsLoader
          dataState={this.state.dataState}
          onDataRecieved={this.dataRecieved}
        />
      </div>
    );
  }
}

export default App;