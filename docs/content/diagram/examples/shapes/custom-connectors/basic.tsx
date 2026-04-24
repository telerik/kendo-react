import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function CustomConnectorsDemo() {
    const [shapes] = useState([
        {
            id: 'shape1',
            x: 50,
            y: 50,
            width: 130,
            height: 70,
            type: 'rectangle',
            text: 'Center Connectors',
            fill: { color: '#90CAF9' },
            stroke: { color: '#1976d2', width: 2 },
            connectors: [
                { name: 'top', position: [0.5, 0] },
                { name: 'right', position: [1, 0.5] },
                { name: 'bottom', position: [0.5, 1] },
                { name: 'left', position: [0, 0.5] },
            ],
        },
        {
            id: 'shape2',
            x: 250,
            y: 50,
            width: 130,
            height: 70,
            type: 'rectangle',
            text: 'Corner Connectors',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#388e3c', width: 2 },
            connectors: [
                { name: 'topLeft', position: [0, 0] },
                { name: 'topRight', position: [1, 0] },
                { name: 'bottomRight', position: [1, 1] },
                { name: 'bottomLeft', position: [0, 1] },
            ],
        },
        {
            id: 'shape3',
            x: 450,
            y: 50,
            width: 130,
            height: 70,
            type: 'rectangle',
            text: 'Custom Connectors',
            fill: { color: '#FFB74D' },
            stroke: { color: '#f57c00', width: 2 },
            connectors: [
                { name: 'custom1', position: [0.25, 0] },
                { name: 'custom2', position: [0.75, 0] },
                { name: 'custom3', position: [1, 0.5] },
                { name: 'custom4', position: [0.5, 1] },
            ],
        },
        {
            id: 'shape4',
            x: 250,
            y: 200,
            width: 130,
            height: 70,
            type: 'rectangle',
            text: 'Target Shape',
            fill: { color: '#B3E5FC' },
            stroke: { color: '#0277bd', width: 2 },
            connectors: [
                { name: 'top', position: [0.5, 0] },
                { name: 'bottom', position: [0.5, 1] },
                { name: 'left', position: [0, 0.5] },
                { name: 'right', position: [1, 0.5] },
            ],
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'shape1',
            to: 'shape4',
            fromConnector: 'bottom',
            toConnector: 'left',
            stroke: { color: '#1976d2', width: 2 },
        },
        {
            id: 'c2',
            from: 'shape2',
            to: 'shape4',
            fromConnector: 'bottom',
            toConnector: 'top',
            stroke: { color: '#388e3c', width: 2 },
        },
        {
            id: 'c3',
            from: 'shape3',
            to: 'shape4',
            fromConnector: 'bottomLeft',
            toConnector: 'right',
            stroke: { color: '#f57c00', width: 2 },
        },
    ];

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Shape Connectors</strong> — Different connector configurations on shapes. Connections use specific connectors to attach to shapes.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                zoom={0.9}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ height: 450 }}
            />
        </div>
    );
}
