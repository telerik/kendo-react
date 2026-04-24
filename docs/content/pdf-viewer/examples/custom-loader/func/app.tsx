import * as React from 'react';
import { PDFViewer, PDFViewerTool } from '@progress/kendo-react-pdf-viewer';
import { Button } from '@progress/kendo-react-buttons';
import { SampleFileBase64 } from './shared-pv-base64SampleDark';

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
    const [data, setData] = React.useState<string | undefined>(undefined);

    const onRenderLoader = React.useCallback((loader: React.ReactElement<any> | null) => {
        return (
            loader && (
                <loader.type {...loader.props} style={{ ...loader.props.styles, backgroundColor: '#000' }}>
                    {loader.props.children}
                </loader.type>
            )
        );
    }, []);

    const changeContent = React.useCallback(() => {
        setData(SampleFileBase64);
    }, []);

    return (
        <div>
            <Button onClick={changeContent}>Load content</Button>
            <br />
            <br />
            <PDFViewer data={data} style={{ height: 650 }} onRenderLoader={onRenderLoader} tools={tools} />
        </div>
    );
}

export default App;
