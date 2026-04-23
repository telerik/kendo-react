import * as React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';

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
        avoidLinks={true}
        paperSize="A4"
        margin="2cm"
        ref={pdfExportComponent}
      >
        This is <a href="http://www.telerik.com/kendo-react-ui">a non-clickable link</a>.
      </PDFExport>
    </div>
    );
}

export default App;
