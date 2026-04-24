import * as React from 'react';
import { Sankey, SankeyHandle, SankeyOptions } from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { data } from './data';

const App: React.FC = () => {
    const sankey = React.useRef<SankeyHandle>(null);

    const onCustomPDFExport = React.useCallback(() => {
        const visual = sankey.current!.exportVisual({
            width: 600,
            height: 200,
            options: {
                labels: {
                    color: 'red'
                },
                legend: {
                    visible: false
                }
            } as SankeyOptions
        });

        exportPDF(visual, {
            paperSize: 'A4',
            margin: { top: '2cm', left: '1cm', right: '1cm', bottom: '2cm' },
            landscape: true
        }).then(function (result) {
            saveAs(result, 'sankey.pdf');
        });
    }, []);

    return (
        <>
            <Button onClick={onCustomPDFExport}>Export</Button>
            <Sankey
                ref={sankey}
                style={{ maxWidth: 700, height: 250, margin: 'auto' }}
                data={data}
                links={{
                    colorType: 'source'
                }}
            />
        </>
    );
};

export default App;
