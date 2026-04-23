import * as React from 'react';
import { Diagram, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const forceLayout: DiagramLayout = {
    type: 'force',
    iterations: 200,
    nodeDistance: 50
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);
    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);
    return (
        <div style={{ width: '100%', height: 400 }}>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                layout={forceLayout}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default App;
