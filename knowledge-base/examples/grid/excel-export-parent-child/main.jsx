
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridDetailRow, GridToolbar } from '@progress/kendo-react-grid';

import { saveAs } from '@progress/kendo-file-saver';
import { ExcelExport, KendoOoxml } from '@progress/kendo-react-excel-export';


class DetailComponent extends GridDetailRow {
  render() {
    const data = this.props.dataItem.details;
    if (data) {
      return (
        <Grid data={data}>
          <Column field="ProductID" title="Product ID" width="120px" />
          <Column field="ProductName" title="Product Name" />
        </Grid>
      );
    }
    return (
      <div style={{ height: "50px", width: '100%' }}>
        <div style={{ position: 'absolute', width: '100%' }}>
          <div className="k-loading-image" />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  baseUrl = 'https://demos.telerik.com/kendo-ui/service-v4/odata/';
  init = { method: 'GET', accept: 'application/json', headers: {} };
  _export;
  export = () => {
    let workbook = this._export.workbookOptions()
    let rows = workbook.sheets[0].rows;
    let headerOptions = rows[0].cells[0];
    let data = this.state.categories;
    let count = 0;
    let allProducts = []
    fetch(this.baseUrl + `Products`, this.init)
      .then(response => response.json())
      .then(json => { allProducts = json.value }).then(() => {
        new Promise((resolve, reject) => {
          for (let idx = data.length - 1; idx >= 0; idx--) {
            let products = allProducts.filter(element => element.CategoryID === data[idx].CategoryID) // Get the Product for the current category
            for (let productIdx = products.length - 1; productIdx >= 0; productIdx--) {
              const product = products[productIdx];
              rows.splice(idx + 2, 0, { cells: [{}, { value: product.ProductID }, { value: product.ProductName }] }); // Add all products of the current category
            }
            // Add the header for every details Grid
            rows.splice(idx + 2, 0, {
              cells: [
                {},
                Object.assign({}, headerOptions, { value: 'Product ID' }),
                Object.assign({}, headerOptions, { value: 'Product Name' })
              ]
            });
            count++
            if (count >= data.length) {
              resolve(); // resolve the promise once all categories are added
            }
          }
        })
          .then(() => {
            new KendoOoxml.Workbook(workbook).toDataURL().then((dataUrl) => {
              saveAs(dataUrl, 'Categories.xlsx');
            });
          })
      })

  }

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
    this.expandChange = this.expandChange.bind(this);
  }

  expandChange(event) {
    event.dataItem.expanded = event.value;
    let categoryID = event.dataItem.CategoryID;
    this.setState({ ...this.state });

    if (!event.value || event.dataItem.details) {
      return;
    }

    fetch(this.baseUrl + `Products?\$filter=CategoryID%20eq%20` + categoryID, this.init)
      .then(response => response.json())
      .then(json => {
        let data = this.state.categories.slice();
        let index = data.findIndex(d => d.CategoryID === categoryID);
        data[index].details = json.value;
        this.setState({ categories: data });
      });
  }

  componentDidMount() {
    fetch(this.baseUrl + `Categories`, this.init)
      .then(response => response.json())
      .then(json => this.setState({ categories: json.value }));
  }

  render() {
    return (
      <div>
        <ExcelExport
          data={this.state.categories}
          ref={(exporter) => { this._export = exporter; }}
        >
          <Grid
            style={{ height: '550px' }}
            data={this.state.categories}
            detail={DetailComponent}
            expandField="expanded"
            onExpandChange={this.expandChange}
          >
            <GridToolbar>
              <button
                title="Export PDF"
                className="k-button k-primary"
                onClick={this.export}
              >
                Export to Excel
                        </button>
            </GridToolbar>
            <Column field="CategoryID" title="ID" width="50px" />
            <Column field="CategoryName" width="200px" title="Category Name" />
            <Column field="Description" />
          </Grid>
        </ExcelExport>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.querySelector('my-app'));
