import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function StylingTooltipsDemo() {
    const [shapes] = useState([
        {
            id: 'critical',
            x: 50,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Critical',
            fill: { color: '#EF5350' },
            stroke: { color: '#C62828', width: 2 },
            dataItem: { priority: 'Critical', status: 'High priority task' },
        },
        {
            id: 'high',
            x: 220,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'High',
            fill: { color: '#FFA726' },
            stroke: { color: '#E65100', width: 2 },
            dataItem: { priority: 'High', status: 'Important task' },
        },
        {
            id: 'medium',
            x: 390,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Medium',
            fill: { color: '#42A5F5' },
            stroke: { color: '#1565C0', width: 2 },
            dataItem: { priority: 'Medium', status: 'Normal task' },
        },
        {
            id: 'low',
            x: 560,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Low',
            fill: { color: '#66BB6A' },
            stroke: { color: '#2E7D32', width: 2 },
            dataItem: { priority: 'Low', status: 'Low priority task' },
        },
        {
            id: 'info',
            x: 220,
            y: 200,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Info',
            fill: { color: '#AB47BC' },
            stroke: { color: '#6A1B9A', width: 2 },
            dataItem: { priority: 'Info', status: 'Informational message' },
        },
    ]);

    const connections = [
        { id: 'c1', from: 'critical', to: 'high' },
        { id: 'c2', from: 'high', to: 'medium' },
        { id: 'c3', from: 'medium', to: 'low' },
        { id: 'c4', from: 'high', to: 'info' },
    ];

    const getTooltipClass = (priority) => {
        return `tooltip-${priority.toLowerCase().replace(' ', '-')}`;
    };

    return (
        <div className="example-wrapper">
            <style>{`
                .tooltip-critical {
                    background: linear-gradient(135deg, #EF5350 0%, #C62828 100%);
                    color: white;
                    border-left: 4px solid #B71C1C;
                }
                .tooltip-high {
                    background: linear-gradient(135deg, #FFA726 0%, #E65100 100%);
                    color: white;
                    border-left: 4px solid #FF6F00;
                }
                .tooltip-medium {
                    background: linear-gradient(135deg, #42A5F5 0%, #1565C0 100%);
                    color: white;
                    border-left: 4px solid #0D47A1;
                }
                .tooltip-low {
                    background: linear-gradient(135deg, #66BB6A 0%, #2E7D32 100%);
                    color: white;
                    border-left: 4px solid #1B5E20;
                }
                .tooltip-info {
                    background: linear-gradient(135deg, #AB47BC 0%, #6A1B9A 100%);
                    color: white;
                    border-left: 4px solid #4A148C;
                }
            `}</style>
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Hover over the shapes</strong> to see styled tooltips with different colors based on priority levels.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                shapeDefaults={{
                    tooltip: {
                        visible: true,
                    },
                }}
                style={{ height: 400 }}
            />
        </div>
    );
}
