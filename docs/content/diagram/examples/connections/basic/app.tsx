import * as React from 'react';
import {
    Diagram,
    ShapeOptions,
    ConnectionOptions,
    ShapeDefaults,
    ConnectionDefaults,
    DiagramEditable
} from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { exclamationCircleIcon } from '@progress/kendo-svg-icons';
import { BORDER_COLORS, COLORS, TEXT_COLOR, type ColorKey, arrowCap, labelContent } from './diagram-data';
import './demo-styles.css';

const shapeDefaults: ShapeDefaults = {
    width: 200,
    height: 100,
    content: {
        color: TEXT_COLOR,
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '600'
    },
    stroke: {
        color: '#8A8A8A',
        width: 1
    }
};

const buildShapes = (): ShapeOptions[] => {
    const shapeData: Array<{ id: ColorKey; x: number; y: number; label: string }> = [
        { id: 'testing', x: 100, y: 100, label: 'Testing' },
        { id: 'deployment', x: 520, y: 160, label: 'Deployment' },
        { id: 'maintenance', x: 860, y: 160, label: 'Maintenance' },
        { id: 'development', x: 1240, y: 160, label: 'Development' },
        { id: 'design', x: 860, y: 320, label: 'Design' },
        { id: 'review', x: 220, y: 320, label: 'Code Review' }
    ];

    return shapeData.map(({ id, x, y, label }) => ({
        id,
        x,
        y,
        content: { text: label },
        fill: { color: COLORS[id] },
        stroke: { color: BORDER_COLORS[id], width: 2 }
    }));
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    const [cornerRadius, setCornerRadius] = React.useState(10);
    const [connectorOffset, setConnectorOffset] = React.useState(16);
    const [snapDistance, setSnapDistance] = React.useState(6);

    const [draftCornerRadius, setDraftCornerRadius] = React.useState(10);
    const [draftConnectorOffset, setDraftConnectorOffset] = React.useState(16);
    const [draftSnapDistance, setDraftSnapDistance] = React.useState(6);

    const shapes = React.useMemo(() => buildShapes(), []);

    const connectionDefaults: ConnectionDefaults = React.useMemo(
        () => ({
            selectable: true
        }),
        []
    );

    const editable = React.useMemo(
        (): DiagramEditable => ({
            drag: {
                snap: { size: snapDistance }
            }
        }),
        [snapDistance]
    );

    const connections = React.useMemo((): ConnectionOptions[] => {
        const colorMap = COLORS;

        return [
            {
                from: 'testing',
                to: 'deployment',
                type: 'cascading',
                fromConnector: 'right',
                stroke: { color: colorMap.testing, width: 3 },
                endCap: arrowCap(colorMap.testing),
                content: labelContent('All Tests Pass', {
                    fontWeight: '700',
                    background: 'white',
                    border: { color: colorMap.testing, width: 1 },
                    padding: 6,
                    position: 'inline'
                })
            },
            {
                from: 'deployment',
                to: 'maintenance',
                type: 'cascading',
                fromConnector: 'right',
                toConnector: 'left',
                stroke: { color: colorMap.deployment, width: 3 },
                endCap: arrowCap(colorMap.deployment),
                content: labelContent('Live', {
                    position: { vertical: 'bottom', horizontal: 'right' },
                    offset: connectorOffset
                })
            },
            {
                from: 'maintenance',
                to: 'development',
                type: 'cascading',
                fromConnector: 'right',
                toConnector: 'left',
                stroke: { color: colorMap.maintenance, width: 3, dashType: 'dash' },
                endCap: arrowCap(colorMap.maintenance),
                content: labelContent('Bug Fix', {
                    background: colorMap.maintenance,
                    padding: 4
                })
            },
            {
                from: 'design',
                to: 'development',
                type: 'cascading',
                fromConnector: 'right',
                toConnector: 'bottom',
                stroke: { color: colorMap.design, width: 3 },
                startCap: { type: 'ArrowEnd', fill: { color: colorMap.design } },
                endCap: arrowCap(colorMap.design),
                content: labelContent('Ready', { fontWeight: '700' })
            },
            {
                from: 'development',
                to: 'testing',
                type: 'polyline',
                fromConnector: 'top',
                toConnector: 'top',
                points: [
                    { x: 1340, y: 25 },
                    { x: 1040, y: 25 },
                    { x: 1040, y: 60 },
                    { x: 410, y: 60 },
                    { x: 410, y: 25 },
                    { x: 200, y: 25 }
                ],
                cornerRadius,
                stroke: { color: colorMap.development, width: 3, dashType: 'dash' },
                endCap: arrowCap(colorMap.development),
                content: labelContent('Submit for Testing', {
                    position: { vertical: 'top', horizontal: 'right' },
                    offset: connectorOffset,
                    background: colorMap.development,
                    padding: 4
                })
            },
            {
                from: 'testing',
                to: 'review',
                type: 'cascading',
                fromConnector: 'bottom',
                toConnector: 'top',
                cornerRadius,
                stroke: { color: colorMap.testing, width: 3 },
                startCap: {
                    type: 'FilledCircle',
                    fill: { color: colorMap.testing },
                    radius: 5
                },
                endCap: arrowCap(colorMap.testing),
                content: labelContent('Issues Found', {
                    fontStyle: 'italic',
                    background: colorMap.testing,
                    padding: 4,
                    position: 'inline'
                })
            },
            {
                from: 'review',
                to: 'deployment',
                type: 'cascading',
                fromConnector: 'right',
                toConnector: 'bottom',
                cornerRadius,
                stroke: { color: colorMap.review, width: 3, dashType: 'dot' },
                endCap: arrowCap(colorMap.review),
                content: labelContent('Passed', {
                    fontWeight: '700',
                    background: colorMap.review,
                    padding: 4,
                    position: 'inline'
                })
            }
        ];
    }, [connectorOffset, cornerRadius]);

    const updateDiagram = React.useCallback(() => {
        setCornerRadius(draftCornerRadius);
        setConnectorOffset(draftConnectorOffset);
        setSnapDistance(draftSnapDistance);
    }, [draftConnectorOffset, draftCornerRadius, draftSnapDistance]);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, [connections]);

    return (
        <div className="example-wrapper">
            <div className="configurator-panel">
                <div className="config-group">
                    <div className="config-control">
                        <span>Connection Corner Radius</span>
                        <div className="input-button-group">
                            <NumericTextBox
                                value={draftCornerRadius}
                                min={0}
                                max={50}
                                onChange={(event: NumericTextBoxChangeEvent) => setDraftCornerRadius(event.value ?? 0)}
                            />
                            <Button onClick={updateDiagram}>Set</Button>
                        </div>
                    </div>
                </div>

                <div className="config-group">
                    <div className="config-control">
                        <span>Connector Label Offset</span>
                        <div className="input-button-group">
                            <NumericTextBox
                                value={draftConnectorOffset}
                                min={0}
                                max={50}
                                onChange={(event: NumericTextBoxChangeEvent) => setDraftConnectorOffset(event.value ?? 0)}
                            />
                            <Button onClick={updateDiagram}>Set</Button>
                        </div>
                    </div>
                </div>

                <div className="config-group">
                    <div className="config-control">
                        <span className="label-with-icon">
                            Snap Distance
                            {' '}
                            <span title="Sets how close a connection point must be to snap into place while dragging. Higher values make snapping easier.">
                                <SvgIcon icon={exclamationCircleIcon} size="small" />
                            </span>
                        </span>
                        <div className="input-button-group">
                            <NumericTextBox
                                value={draftSnapDistance}
                                min={1}
                                max={50}
                                onChange={(event: NumericTextBoxChangeEvent) => setDraftSnapDistance(event.value ?? 1)}
                            />
                            <Button onClick={updateDiagram}>Set</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="diagram-panel">
                <Diagram
                    ref={diagramRef}
                    shapes={shapes}
                    connections={connections}
                    shapeDefaults={shapeDefaults}
                    connectionDefaults={connectionDefaults}
                    editable={editable}
                    style={{ height: 500 }}
                />
            </div>
        </div>
    );
};

export default App;
