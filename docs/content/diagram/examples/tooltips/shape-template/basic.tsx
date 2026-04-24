import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function ShapeTemplateTooltipDemo() {
    const [shapes] = useState([
        {
            id: 'ceo',
            x: 150,
            y: 50,
            width: 140,
            height: 70,
            text: 'CEO',
            fill: { color: '#84B9F5' },
            stroke: { color: '#5A9FE8', width: 2 },
            dataItem: {
                name: 'Sarah Mitchell',
                title: 'Chief Executive Officer',
                email: 'sarah.mitchell@company.com',
            },
        },
        {
            id: 'vp-ops',
            x: 50,
            y: 200,
            width: 140,
            height: 70,
            text: 'VP Operations',
            fill: { color: '#7EC8E3' },
            stroke: { color: '#5A9FE8', width: 2 },
            dataItem: {
                name: 'John Anderson',
                title: 'VP Operations',
                email: 'john.anderson@company.com',
            },
        },
        {
            id: 'vp-dev',
            x: 250,
            y: 200,
            width: 140,
            height: 70,
            text: 'VP Development',
            fill: { color: '#7EC8E3' },
            stroke: { color: '#5A9FE8', width: 2 },
            dataItem: {
                name: 'Maria Garcia',
                title: 'VP Development',
                email: 'maria.garcia@company.com',
            },
        },
        {
            id: 'dev-lead',
            x: 250,
            y: 350,
            width: 140,
            height: 70,
            text: 'Dev Lead',
            fill: { color: '#B3E5FC' },
            stroke: { color: '#5A9FE8', width: 2 },
            dataItem: {
                name: 'James Chen',
                title: 'Development Lead',
                email: 'james.chen@company.com',
            },
        },
    ]);

    const connections = [
        { id: 'c1', from: 'ceo', to: 'vp-ops' },
        { id: 'c2', from: 'ceo', to: 'vp-dev' },
        { id: 'c3', from: 'vp-dev', to: 'dev-lead' },
    ];

    const shapeTooltip = (shape) => (
        <div style={{ padding: '8px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
            <strong>{shape.dataItem.name}</strong>
            <div style={{ fontSize: '12px', color: '#666' }}>{shape.dataItem.title}</div>
            <div style={{ fontSize: '11px', color: '#999' }}>{shape.dataItem.email}</div>
        </div>
    );

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Hover over the shapes</strong> to see custom tooltip templates with employee details.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                shapeDefaults={{
                    tooltip: {
                        visible: true,
                    },
                }}
                layout={{
                    type: 'tree',
                    subtype: 'down',
                    horizontalSeparation: 80,
                    verticalSeparation: 60,
                }}
                zoom={0.9}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ height: 450 }}
            />
        </div>
    );
}
