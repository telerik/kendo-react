import * as React from 'react';
import { PDFViewer, PDFViewerTool } from '@progress/kendo-react-pdf-viewer';
import { Button, ToolbarProps } from '@progress/kendo-react-buttons';
import { SampleFileBase64 } from './shared-pv-base64Sample';
import { arrowRotateCwIcon } from '@progress/kendo-svg-icons';

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

const customTool = () => {
    const [selected, setSelected] = React.useState(false);

    return (
        <Button key="Custom" togglable={true} onClick={() => setSelected(!selected)}>
            Mark as read
        </Button>
    );
};

function App() {
    const onRenderToolbar = React.useCallback((toolbar: React.ReactElement<ToolbarProps>) => {
        const buttons = React.Children.toArray(toolbar.props.children);
        const zoom = buttons[tools.indexOf('zoom')];
        const zoomInOut = buttons[tools.indexOf('zoomInOut')];
        const spacer = buttons[tools.indexOf('spacer')];
        const printTool = buttons[tools.indexOf('print')];

        return (
            <toolbar.type {...toolbar.props}>
                {[
                    zoom,
                    zoomInOut,
                    spacer,
                    <React.Fragment key="secondSpacer">{spacer}</React.Fragment>, // wrap it in fragment to resolve keys duplication when multiple spacers are needed
                    printTool,
                    customTool(),
                    <Button key="Custom2" className="buttons-container-button" svgIcon={arrowRotateCwIcon} />
                ]}
            </toolbar.type>
        );
    }, []);

    return (
        <div>
            <PDFViewer
                data={SampleFileBase64}
                style={{ height: 600 }}
                tools={tools}
                onRenderToolbar={onRenderToolbar}
            />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        </div>
    );
}

export default App;
