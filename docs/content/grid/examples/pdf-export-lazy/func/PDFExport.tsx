import * as React from 'react';
import { GridPDFExport } from '@progress/kendo-react-pdf';

const PDFExport = ({ grid, data, exportPDF, exportCallback }) => {
    let gridPDFExport;
    React.useEffect(() => {
        gridPDFExport.save(data);
        setTimeout(()=> exportCallback(), 1);
    }, [exportPDF]);
    return (
      <GridPDFExport ref={(element) => { gridPDFExport = element; }} >
        {grid}
      </GridPDFExport>
    );
};

export default PDFExport;
