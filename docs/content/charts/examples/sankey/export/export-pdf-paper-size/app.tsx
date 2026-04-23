import * as React from 'react';
import { Sankey, SankeyHandle } from '@progress/kendo-react-charts';
import { Button } from '@progress/kendo-react-buttons';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { data } from './data';

// Converts mm to pixels @ 72 dpi
// See [Dimensions and CSS Units]({% slug dimensionscssunits_drawing %}).
function mmToPx(mm: number): number {
    return mm * 2.8347;
}

// Set page width to A4 minus 10mm margin on each side
const PAGE_WIDTH = mmToPx(210 - 20);

const App: React.FC = () => {
    const sankey = React.useRef<SankeyHandle>(null);

    const onPDFExport = React.useCallback(() => {
        const visual = sankey.current!.exportVisual({
            // Restrict with do page width during export
            width: PAGE_WIDTH
        });

        exportPDF(visual, {
            paperSize: 'A4',
            margin: '1cm'
        }).then(function (result) {
            saveAs(result, 'sankey-sized.pdf');
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
