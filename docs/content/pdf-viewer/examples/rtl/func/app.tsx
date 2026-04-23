import * as React from 'react';
import { PDFViewer } from '@progress/kendo-react-pdf-viewer';
import { SampleFileBase64 } from './shared-pv-base64Sample';

const App = () => {
    return (
        <div className="k-rtl">
            <PDFViewer data={SampleFileBase64} style={{ height: 550 }} />
        </div>
    );
};

export default App;
