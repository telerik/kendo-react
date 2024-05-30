
import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import calculateSize from 'calculate-size';

import products from './shared-products.json';

class App extends React.Component {
  state = {
    gridData: products
  }

  calculateWidth = (field) => {
    let maxWidth = 0;
    this.state.gridData.forEach(item => {
      const size = calculateSize(item[field], {
        font: 'Arial',
        fontSize: '16px'
      }) // pass the font properties based on the application
      if(size.width > maxWidth) {
        maxWidth = size.width
      }
    })
    return maxWidth
  }

  render() {
    return (
      <div>
        <Grid
          style={{ height: '400px' }}
          data={this.state.gridData}
        >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width={this.calculateWidth("ProductName")} />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
          <Column field="Discontinued" width="120px"
            cell={(props) => (
              <td>
                <input disabled type="checkbox" checked={props.dataItem[props.field]} />
              </td>
            )} />
        </Grid>
      </div>
    );
  }
}

export default App;