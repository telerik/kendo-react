import React from 'react';
import ReactDOM from 'react-dom';
import { saveAs } from '@progress/kendo-file-saver';
import {
  drawDOM,
  exportPDF,
  DrawOptions,
  Group
} from '@progress/kendo-drawing';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';

class App extends React.Component {
  pdfExportComponent;
  grid;

  constructor(props) {
    super(props);
    this.state = {
      gridData: products,
      creator: 'KendoReact'
    };
  }

  render() {
    return (
      <div>
        <div className="example-config">
          <button className="k-button" onClick={this.exportPDFWithMethod}>
            Export with method
          </button>
        </div>

        <Grid style={{ maxHeight: '400px' }} data={this.state.gridData}>
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
      </div>
    );
  }

  PageTemplate = props => {
    console.log(props);
    return `<div style='position: absolute; left: 200px; top: 200px; padding: 10px; opacity: 0.3'><b>Creator: ${
      this.state.creator 
    } Watermark </b></div>`;
  };

  exportPDFWithMethod = () => {
    let gridElement = document.getElementsByClassName('k-grid')[0];
    drawDOM(gridElement, {
      paperSize: 'A3',
      margin: 100,
      template: this.PageTemplate
    })
      .then(group => {
        return exportPDF(group);
      })
      .then(dataUri => {
        saveAs(dataUri, 'scene.pdf');
        console.log(dataUri.split(';base64,')[1]);
      });
  };
}

ReactDOM.render(<App />, document.querySelector('my-app'));
