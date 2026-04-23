import * as React from 'react';
import { Diagram, DiagramNavigationOptions } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';
import './demo-styles.css';

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);
    const [smallStep, setSmallStep] = React.useState(1);
    const [largeStep, setLargeStep] = React.useState(5);

    const navigableOptions = React.useMemo(
        (): DiagramNavigationOptions => ({
            enabled: true,
            smallStep,
            largeStep
        }),
        [smallStep, largeStep]
    );

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <div className="example-wrapper">
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                navigable={navigableOptions}
                editable={true}
                zoomMin={0.5}
                zoomMax={1.5}
                zoom={0.9}
                style={{ height: 400 }}
            />
        </div>
    );
};

export default App;
