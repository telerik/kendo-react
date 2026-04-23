import * as React from 'react';
import { Sankey, SankeyHandle } from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { data } from './data';

const App: React.FC = () => {
    const sankey = React.useRef<SankeyHandle>(null);

    const onPDFExport = React.useCallback(() => {
        exportPDF(sankey.current!.exportVisual()).then(function (result) {
            saveAs(result, 'sankey.pdf');
        });
    }, []);

    return (
        <>
            <Button onClick={onPDFExport}>Export to PDF</Button>
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
