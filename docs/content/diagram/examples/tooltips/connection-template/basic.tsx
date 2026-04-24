import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function ConnectionTemplateTooltipDemo() {
    const [shapes] = useState([
        {
            id: 'shape1',
            x: 50,
            y: 50,
            width: 130,
            height: 70,
            text: 'Development',
            fill: { color: '#7EC8E3' },
            stroke: { color: '#0288d1', width: 2 },
        },
        {
            id: 'shape2',
            x: 250,
            y: 50,
            width: 130,
            height: 70,
            text: 'Testing',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#43a047', width: 2 },
        },
        {
            id: 'shape3',
            x: 450,
            y: 50,
            width: 130,
            height: 70,
            text: 'Deployment',
            fill: { color: '#FFB74D' },
            stroke: { color: '#f57c00', width: 2 },
        },
        {
            id: 'shape4',
            x: 250,
            y: 200,
            width: 130,
            height: 70,
            text: 'Production',
            fill: { color: '#CE93D8' },
            stroke: { color: '#7b1fa2', width: 2 },
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'shape1',
            to: 'shape2',
            dataItem: {
                stage: 'Dev → QA',
                duration: '2-3 days',
                responsible: 'QA Team',
            },
            stroke: { color: '#666', width: 2 },
        },
        {
            id: 'c2',
            from: 'shape2',
            to: 'shape3',
            dataItem: {
                stage: 'QA → Deploy',
                duration: '1 day',
                responsible: 'DevOps Team',
            },
            stroke: { color: '#666', width: 2 },
        },
        {
            id: 'c3',
            from: 'shape3',
            to: 'shape4',
            dataItem: {
                stage: 'Deploy → Prod',
                duration: '< 1 hour',
                responsible: 'Infrastructure Team',
            },
            stroke: { color: '#666', width: 2 },
        },
        {
            id: 'c4',
            from: 'shape2',
            to: 'shape1',
            dataItem: {
                stage: 'Feedback Loop',
                duration: 'As needed',
                responsible: 'QA Team',
            },
            stroke: { color: '#f44336', width: 2, dashType: 'dash' },
        },
    ];

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Hover over the connections</strong> to see custom tooltip templates with process stage details.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                connectionDefaults={{
                    tooltip: {
                        visible: true,
                    },
                }}
                style={{ height: 450 }}
            />
        </div>
    );
}
