import * as React from 'react';
import { Diagram } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { Button } from '@progress/kendo-react-buttons';

type ProcessStep = {
    id: string;
    content: { text: string };
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
    fill: { color: string };
};

type ProcessConnection = {
    from: string;
    to: string;
};

const initialProcessSteps: ProcessStep[] = [
    {
        id: 'start',
        content: { text: 'Start Process' },
        x: 100,
        y: 50,
        width: 110,
        height: 60,
        type: 'circle',
        fill: { color: '#4caf50' }
    },
    {
        id: 'step1',
        content: { text: 'Initial Review' },
        x: 100,
        y: 150,
        width: 110,
        height: 60,
        type: 'rectangle',
        fill: { color: '#2196f3' }
    },
    {
        id: 'end',
        content: { text: 'Complete' },
        x: 100,
        y: 250,
        width: 110,
        height: 60,
        type: 'circle',
        fill: { color: '#f44336' }
    }
];

const initialConnections: ProcessConnection[] = [
    { from: 'start', to: 'step1' },
    { from: 'step1', to: 'end' }
];

const colors = ['#2196f3', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#e91e63'];
const stepNames = ['Analysis', 'Validation', 'Processing', 'Quality Check', 'Final Review', 'Documentation'];

const App = () => {
    const [stepCounter, setStepCounter] = React.useState(2);
    const [processSteps, setProcessSteps] = React.useState<ProcessStep[]>(initialProcessSteps);
    const [connections, setConnections] = React.useState<ProcessConnection[]>(initialConnections);
    const diagramRef = React.useRef<DiagramWidget>(null);
    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    const addStep = () => {
        const colorIndex = (stepCounter - 1) % colors.length;
        const stepName = stepNames[(stepCounter - 1) % stepNames.length];

        const newStep: ProcessStep = {
            id: `step${stepCounter}`,
            content: { text: stepName },
            x: 100,
            y: 50,
            width: 110,
            height: 60,
            type: 'rectangle',
            fill: { color: colors[colorIndex] }
        };

        const current = [...processSteps];
        current.splice(current.length - 1, 0, newStep);

        const previousStep = current[current.length - 3];
        const endStep = current[current.length - 1];

        const nextConnections = connections.filter((conn) => conn.to !== 'end');
        nextConnections.push({ from: previousStep.id, to: newStep.id });
        nextConnections.push({ from: newStep.id, to: endStep.id });

        setProcessSteps(current);
        setConnections(nextConnections);
        setStepCounter((prev) => prev + 1);
    };

    const addConnection = () => {
        if (processSteps.length < 4) {
            return;
        }

        const availableSteps = processSteps.slice(1, -1);
        if (availableSteps.length < 2) {
            return;
        }

        let attempts = 0;
        let newConnection: ProcessConnection | null = null;

        while (attempts < 10 && !newConnection) {
            const sourceIndex = Math.floor(Math.random() * availableSteps.length);
            const targetIndex = Math.floor(Math.random() * availableSteps.length);

            if (sourceIndex !== targetIndex) {
                const source = availableSteps[sourceIndex].id;
                const target = availableSteps[targetIndex].id;

                const exists = connections.some(
                    (conn) =>
                        (conn.from === source && conn.to === target) || (conn.from === target && conn.to === source)
                );

                if (!exists) {
                    newConnection = { from: source, to: target };
                }
            }
            attempts++;
        }

        if (newConnection) {
            setConnections((prev) => [...prev, newConnection]);
        }
    };

    const removeLastStep = () => {
        if (processSteps.length <= 3) {
            return;
        }

        const current = [...processSteps];
        const stepToRemove = current[current.length - 2];
        current.splice(current.length - 2, 1);

        let nextConnections = connections.filter(
            (conn) => conn.from !== stepToRemove.id && conn.to !== stepToRemove.id
        );

        if (current.length >= 2) {
            const previousStep = current[current.length - 2];
            const endStep = current[current.length - 1];

            const connectionExists = nextConnections.some(
                (conn) => conn.from === previousStep.id && conn.to === endStep.id
            );

            if (!connectionExists) {
                nextConnections.push({ from: previousStep.id, to: endStep.id });
            }
        }

        setProcessSteps(current);
        setConnections(nextConnections);
    };

    const resetDiagram = () => {
        setStepCounter(2);
        setProcessSteps(initialProcessSteps);
        setConnections(initialConnections);
    };

    return (
        <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                <Button themeColor="primary" onClick={addStep}>
                    Add Process Step
                </Button>
                <Button themeColor="primary" onClick={addConnection} disabled={processSteps.length < 5}>
                    Add Connection
                </Button>
                <Button themeColor="error" onClick={removeLastStep} disabled={processSteps.length <= 3}>
                    Remove Last Step
                </Button>
                <Button onClick={resetDiagram}>Reset Diagram</Button>
            </div>

            <Diagram
                ref={diagramRef}
                shapes={processSteps as any}
                connections={connections as any}
                layout={{ type: 'tree', subtype: 'down', horizontalSeparation: 60, verticalSeparation: 40 }}
                connectionDefaults={{
                    stroke: { color: '#666', width: 2 },
                    endCap: { type: 'ArrowEnd', fill: { color: '#666' } }
                }}
                style={{ height: 350 }}
            />
        </div>
    );
};

export default App;
