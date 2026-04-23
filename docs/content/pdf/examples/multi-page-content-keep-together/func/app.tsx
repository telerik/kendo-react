import * as React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';

import Content from './content';

const App = () => {

    const pdfExportComponent = React.useRef<PDFExport>(null);

    return (
    <div>
      <div className="example-config">
        <Button type="button" onClick={() => {
          if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
          }
        }}>
          Export PDF
        </Button>
      </div>

      <PDFExport
        keepTogether="p"
        paperSize="A4"
        margin="2cm"
        ref={pdfExportComponent}
      >
        <Content />
      </PDFExport>
    </div>
    );

}

export default App;
