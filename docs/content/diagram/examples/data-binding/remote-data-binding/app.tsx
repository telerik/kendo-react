import * as React from 'react';
import { Diagram } from '@progress/kendo-react-diagram';
import { ConnectionOptions, ShapeOptions } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { WorkflowService, WorkflowData } from './workflow.service';

const service = new WorkflowService();
const layout = { type: 'tree', subtype: 'down', horizontalSeparation: 60, verticalSeparation: 80 } as const;
const connectionDefaults = {
    stroke: { color: '#666', width: 2 },
    endCap: { type: 'ArrowEnd', fill: { color: '#666' } }
} as const;

const App = () => {
    const [loading, setLoading] = React.useState(true);
    const [steps, setSteps] = React.useState<ShapeOptions[]>([]);
    const [connections, setConnections] = React.useState<ConnectionOptions[]>([]);
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        const subscription = service.getWorkflow().subscribe((data: WorkflowData) => {
            setSteps(data.steps);
            setConnections(data.connections);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    React.useEffect(() => {
        if (!loading && diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, [loading]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: 40, fontSize: 18, color: '#666' }}>
                <p>Loading workflow...</p>
            </div>
        );
    }

    return (
        <Diagram
            ref={diagramRef}
            shapes={steps}
            connections={connections}
            layout={layout}
            connectionDefaults={connectionDefaults}
            zoom={0.7}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 580 }}
        />
    );
};

export default App;
