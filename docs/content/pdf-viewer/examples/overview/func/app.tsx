import * as React from 'react';
import { PDFViewer } from '@progress/kendo-react-pdf-viewer';
import { SampleFileBase64 } from './shared-pv-base64Sample';

function App() {
    return <PDFViewer data={SampleFileBase64} style={{ height: 615 }} />;
}

export default App;
