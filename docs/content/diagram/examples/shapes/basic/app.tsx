import * as React from 'react';
import { Diagram, ShapeDefaults } from '@progress/kendo-react-diagram';
import { shapes, connections } from './data';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

const shapeDefaults: ShapeDefaults = {
    content: { color: 'white', fontSize: 14, fontFamily: 'Arial' },
    stroke: { color: '#333', width: 2 },
    hover: { fill: { color: '#0056b3' } }
};

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
            shapeDefaults={shapeDefaults}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 350 }}
        />
    );
};

export default App;
