import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function PolylineConnectionsDemo() {
    const [shapes] = useState([
        {
            id: 'shape1',
            x: 50,
            y: 50,
            width: 100,
            height: 70,
            type: 'rectangle',
            text: 'Start',
            fill: { color: '#90CAF9' },
            stroke: { color: '#1976d2', width: 2 },
        },
        {
            id: 'shape2',
            x: 300,
            y: 50,
            width: 100,
            height: 70,
            type: 'rectangle',
            text: 'Middle',
            fill: { color: '#FFB74D' },
            stroke: { color: '#f57c00', width: 2 },
        },
        {
            id: 'shape3',
            x: 550,
            y: 50,
            width: 100,
            height: 70,
            type: 'rectangle',
            text: 'End',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#388e3c', width: 2 },
        },
        {
            id: 'shape4',
            x: 300,
            y: 250,
            width: 100,
            height: 70,
            type: 'rectangle',
            text: 'Target',
            fill: { color: '#CE93D8' },
            stroke: { color: '#7b1fa2', width: 2 },
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'shape1',
            to: 'shape2',
            type: 'polyline',
            stroke: { color: '#1976d2', width: 2 },
        },
        {
            id: 'c2',
            from: 'shape2',
            to: 'shape3',
            type: 'polyline',
            stroke: { color: '#f57c00', width: 2 },
        },
        {
            id: 'c3',
            from: 'shape3',
            to: 'shape4',
            type: 'polyline',
            stroke: { color: '#388e3c', width: 2 },
        },
        {
            id: 'c4',
            from: 'shape1',
            to: 'shape4',
            type: 'polyline',
            stroke: { color: '#7b1fa2', width: 2, dashType: 'dash' },
        },
    ];

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Polyline Connections</strong> — Polyline connections follow a series of straight line segments, making 90-degree angles. Useful for flowcharts and organizational diagrams.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                zoom={0.8}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ height: 450 }}
            />
        </div>
    );
}
