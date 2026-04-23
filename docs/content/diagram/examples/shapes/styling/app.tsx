import * as React from 'react';
import { Diagram, ShapeDefaults } from '@progress/kendo-react-diagram';
import { shapes } from './data';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

const shapeDefaults: ShapeDefaults = {
    width: 120,
    height: 80,
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

    return <Diagram ref={diagramRef} shapes={shapes} shapeDefaults={shapeDefaults} style={{ height: 340 }} />;
};

export default App;
