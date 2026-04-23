import * as React from 'react';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';

import products from './products.json';

const App = () => {
    const pdfExportComponent = React.useRef<PDFExport>(null);

    const exportPDFWithMethod = () => {
        let element: any = document.querySelector('.k-grid') || document.body;
        savePDF(element, { paperSize: 'A4' });
    }
    const exportPDFWithComponent = () => {
        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    }

    return (
    <div>
      <div className="example-config">
        <Button type="button" onClick={exportPDFWithComponent}>Export to PDF with component</Button>
        &nbsp;
        <Button type="button" onClick={exportPDFWithMethod}>Export to PDF with method</Button>
      </div>

      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <Grid
          style={{ maxHeight: '400px' }}
          data={products}
        >
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
      </PDFExport>
    </div>
    );
}

export default App;
