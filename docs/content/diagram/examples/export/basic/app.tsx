import * as React from 'react';
import { Diagram } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { Button } from '@progress/kendo-react-buttons';
import { exportImage, exportPDF, exportSVG } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { shapes, connections } from './data';

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);
    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    const exportToPDF = () => {
        const visual = diagramRef.current?.exportVisual();
        if (!visual) {
            return;
        }
        exportPDF(visual).then((result) => {
            saveAs(result, 'diagram.pdf');
        });
    };

    const exportToImage = () => {
        const visual = diagramRef.current?.exportVisual();
        if (!visual) {
            return;
        }
        exportImage(visual).then((result) => {
            saveAs(result, 'diagram.png');
        });
    };

    const exportToSvg = () => {
        const visual = diagramRef.current?.exportVisual();
        if (!visual) {
            return;
        }
        exportSVG(visual).then((result) => {
            saveAs(result, 'diagram.svg');
        });
    };

    return (
        <div>
            <div
                className="button-container example-config"
                style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
            >
                <Button onClick={exportToPDF}>Export Diagram to PDF</Button>
                <Button onClick={exportToImage}>Export Diagram to Image</Button>
                <Button onClick={exportToSvg}>Export Diagram to SVG</Button>
            </div>
            <Diagram ref={diagramRef} shapes={shapes} connections={connections} style={{ height: 385 }} />
        </div>
    );
};

export default App;
