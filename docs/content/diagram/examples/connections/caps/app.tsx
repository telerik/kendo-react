import * as React from 'react';
import { Diagram, ShapeDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 100,
    height: 60
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
            style={{ height: 400 }}
        />
    );
};

export default App;
