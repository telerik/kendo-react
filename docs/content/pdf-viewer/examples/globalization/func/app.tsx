import * as React from 'react';
import { PDFViewer } from '@progress/kendo-react-pdf-viewer';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { SampleFileBase64 } from './shared-pv-base64Sample';
import esMessages from './es.json';
loadMessages(esMessages, 'es');

const App = () => {
    return (
        <LocalizationProvider language="es">
            <PDFViewer data={SampleFileBase64} style={{ height: 550 }} />
        </LocalizationProvider>
    );
};

export default App;
