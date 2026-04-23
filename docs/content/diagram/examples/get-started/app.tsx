import * as React from 'react';
import { Diagram } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);
    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);
    return (
        <Diagram
            ref={diagramRef}
            shapes={shapes}
            connections={connections}
            layout={{ type: 'tree' }}
            style={{ height: 430 }}
        />
    );
};

export default App;
