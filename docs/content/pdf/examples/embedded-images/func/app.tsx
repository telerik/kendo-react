import * as React from 'react';
import { savePDF } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const image = React.useRef<HTMLImageElement | null>(null);
    return (
    <div>
      <div className="example-config">
        <Button type="button" onClick={() => {
          if (image.current) {
            savePDF(image.current);
          }
        }}>
          Export PDF with default resolution
        </Button>
        &nbsp;
        <Button type="button" onClick={() => {
          if (image.current) {
            savePDF(image.current, { imageResolution: 36 });
          }
        }}>
          Export PDF with 36 dpi
        </Button>
      </div>

      <img
        ref={image}
        src="https://c2.staticflickr.com/2/1574/25734996011_637430f5d8_c.jpg"
        alt="KendoReact PDF Generator embedded image"
        width="750px"
      />
    </div>
    );
}

export default App;
