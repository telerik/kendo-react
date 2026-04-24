import * as React from 'react';
import { PDFViewer, PDFViewerHandle, scrollToPage } from '@progress/kendo-react-pdf-viewer';
import { SampleFileBase64 } from './shared-pv-base64Sample';
import { Button } from '@progress/kendo-react-buttons';

function App() {
    const pdfRef = React.useRef<PDFViewerHandle | null>(null);
    const click = () => {
        scrollToPage(pdfRef.current!.element as HTMLElement, 3);
    };

    return (
        <div>
            <Button onClick={click} style={{ width: '100%', height: '50px' }}>
                Scroll to Page 3
            </Button>
            <PDFViewer
                ref={pdfRef}
                data={SampleFileBase64}
                style={{
                    height: 615
                }}
            />
        </div>
    );
}
export default App;
