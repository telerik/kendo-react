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
    const onRenderContent = React.useCallback((content: React.ReactElement<any>) => {
        return (
            <content.type {...content.props} style={{ ...content.props.styles, border: '1px solid red' }}>
                {content.props.children}
            </content.type>
        );
    }, []);

    return (
        <div>
            <PDFViewer
                data={SampleFileBase64}
                style={{ height: 600 }}
                onRenderContent={onRenderContent}
                tools={tools}
            />
        </div>
    );
}

export default App;
