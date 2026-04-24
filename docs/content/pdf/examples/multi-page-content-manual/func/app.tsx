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
        forcePageBreak=".page-break"
        ref={pdfExportComponent}
      >
        {/* For details see:
              http://www.telerik.com/kendo-react-ui/components/drawing/drawing-dom/#toc-dimensions-and-css-units */}
        <div style={{ width: "595px", height: "420px" }}>
          <h3>Page 1</h3>
          <p>
            Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu vulputate at aliquam nunc tempor. In commodo scelerisque enim, eget sodales lorem condimentum rutrum. Phasellus sem metus, ultricies at commodo in, tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget libero lacus, ut sollicitudin ante. Nam odio quam, suscipit a fringilla eget, dignissim nec arcu. Donec tristique arcu ut sapien elementum pellentesque.
          </p>

          <h3 className="page-break">Page 2</h3>
          <p>
            Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu vulputate at aliquam nunc tempor. In commodo scelerisque enim, eget sodales lorem condimentum rutrum. Phasellus sem metus, ultricies at commodo in, tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget libero lacus, ut sollicitudin ante. Nam odio quam, suscipit a fringilla eget, dignissim nec arcu. Donec tristique arcu ut sapien elementum pellentesque.
          </p>
        </div>
      </PDFExport>
    </div>
    );
}

export default App;
