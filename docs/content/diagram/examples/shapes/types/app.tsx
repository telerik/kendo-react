import * as React from 'react';
import { Diagram, ShapeDefaults } from '@progress/kendo-react-diagram';
import { shapes } from './data';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

const shapeDefaults: ShapeDefaults = {
    width: 120,
    height: 80,
    stroke: {
        color: '#333',
        width: 2
    }
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
            zoomMin={0.5}
            zoomMax={1.5}
            shapeDefaults={shapeDefaults}
            style={{ height: 700 }}
        />
    );
};

export default App;
