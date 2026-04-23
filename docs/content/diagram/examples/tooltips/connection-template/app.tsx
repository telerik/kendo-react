import * as React from 'react';
import { Diagram, DiagramConnectionTooltip, ConnectionDefaults, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';
import './styles.css';

const layout: DiagramLayout = {
    type: 'layered',
    subtype: 'down',
    horizontalSeparation: 100,
    verticalSeparation: 80
};

const connectionDefaults: ConnectionDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' },
    stroke: { color: '#4E4E4E', width: 2 },
    endCap: { type: 'ArrowEnd', fill: { color: '#4E4E4E' } }
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <div style={{ width: '100%', height: 550 }}>
            <div className="info-banner">Hover over the connections to see custom tooltip template.</div>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                connectionDefaults={connectionDefaults}
                layout={layout}
                zoom={0.8}
                style={{ width: '100%', height: 'calc(100% - 48px)' }}
            >
                <DiagramConnectionTooltip>
                    {(connection: any) => (
                        <div className="transfer-tooltip">
                            <strong>{connection.dataItem.transferType}</strong>
                            <div className="transfer-info">Amount: ${connection.dataItem.amount}</div>
                            <div className="transfer-info">
                                {connection.dataItem.frequency} • {connection.dataItem.status}
                            </div>
                        </div>
                    )}
                </DiagramConnectionTooltip>
            </Diagram>
        </div>
    );
};

export default App;
