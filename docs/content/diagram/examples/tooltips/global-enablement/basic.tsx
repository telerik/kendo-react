import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function GlobalEnablementTooltipDemo() {
    const [shapes] = useState([
        {
            id: 'rect1',
            x: 50,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Process A',
            fill: { color: '#90CAF9' },
            stroke: { color: '#1976d2', width: 2 },
            dataItem: { description: 'Initial data processing step' },
        },
        {
            id: 'rect2',
            x: 220,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Process B',
            fill: { color: '#90CAF9' },
            stroke: { color: '#1976d2', width: 2 },
            dataItem: { description: 'Data validation and filtering' },
        },
        {
            id: 'rect3',
            x: 390,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Process C',
            fill: { color: '#90CAF9' },
            stroke: { color: '#1976d2', width: 2 },
            dataItem: { description: 'Final data aggregation' },
        },
        {
            id: 'circle1',
            x: 135,
            y: 200,
            width: 70,
            height: 70,
            type: 'circle',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#388e3c', width: 2 },
            dataItem: { description: 'Decision point O1' },
        },
        {
            id: 'circle2',
            x: 305,
            y: 200,
            width: 70,
            height: 70,
            type: 'circle',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#388e3c', width: 2 },
            dataItem: { description: 'Decision point O2' },
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'rect1',
            to: 'rect2',
            dataItem: { type: 'Primary Flow' },
            stroke: { color: '#555', width: 2 },
        },
        {
            id: 'c2',
            from: 'rect2',
            to: 'rect3',
            dataItem: { type: 'Primary Flow' },
            stroke: { color: '#555', width: 2 },
        },
        {
            id: 'c3',
            from: 'rect1',
            to: 'circle1',
            dataItem: { type: 'Conditional Flow' },
            stroke: { color: '#f57c00', width: 2, dashType: 'dash' },
        },
        {
            id: 'c4',
            from: 'rect2',
            to: 'circle2',
            dataItem: { type: 'Conditional Flow' },
            stroke: { color: '#f57c00', width: 2, dashType: 'dash' },
        },
    ];

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Tooltips are enabled globally</strong> using <code>shapeDefaults</code> and <code>connectionDefaults</code>. Hover over any shape or connection to see its tooltip.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                shapeDefaults={{
                    tooltip: {
                        visible: true,
                    },
                }}
                connectionDefaults={{
                    tooltip: {
                        visible: true,
                    },
                }}
                style={{ height: 400 }}
            />
        </div>
    );
}
