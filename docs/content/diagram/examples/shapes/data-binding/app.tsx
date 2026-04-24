import * as React from 'react';
import { Diagram } from '@progress/kendo-react-diagram';
import { shapes, connections } from './data';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return <Diagram ref={diagramRef} shapes={shapes} connections={connections} style={{ height: 300 }} />;
};

export default App;
