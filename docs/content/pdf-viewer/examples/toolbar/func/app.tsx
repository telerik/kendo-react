import * as React from 'react';
import { PDFViewer, PDFViewerTool } from '@progress/kendo-react-pdf-viewer';
import { SampleFileBase64 } from './shared-pv-base64Sample';

const tools: PDFViewerTool[] = [
    'pager',
    'spacer',
    'zoomInOut',
    'zoom',
    'selection',
    'spacer',
    'search',
    'open',
    'download',
    'print'
];

function App() {
    return <PDFViewer data={SampleFileBase64} style={{ height: 500 }} tools={tools} />;
}

export default App;
