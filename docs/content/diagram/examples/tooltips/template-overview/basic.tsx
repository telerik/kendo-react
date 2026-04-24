import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function TemplateOverviewTooltipDemo() {
    const [shapes] = useState([
        {
            id: 'frontend',
            x: 50,
            y: 50,
            width: 140,
            height: 80,
            type: 'rectangle',
            text: 'Frontend',
            fill: { color: '#7EC8E3' },
            stroke: { color: '#0288d1', width: 2 },
            dataItem: {
                name: 'Frontend Team',
                members: 5,
                tech: 'React, TypeScript',
                description: 'User interface and client-side development',
            },
        },
        {
            id: 'backend',
            x: 250,
            y: 50,
            width: 140,
            height: 80,
            type: 'rectangle',
            text: 'Backend',
            fill: { color: '#A5D6A7' },
            stroke: { color: '#43a047', width: 2 },
            dataItem: {
                name: 'Backend Team',
                members: 4,
                tech: 'Node.js, Go',
                description: 'API and server-side logic',
            },
        },
        {
            id: 'database',
            x: 450,
            y: 50,
            width: 140,
            height: 80,
            type: 'rectangle',
            text: 'Database',
            fill: { color: '#FFB74D' },
            stroke: { color: '#f57c00', width: 2 },
            dataItem: {
                name: 'Database Team',
                members: 2,
                tech: 'PostgreSQL, Redis',
                description: 'Data layer and caching',
            },
        },
        {
            id: 'devops',
            x: 250,
            y: 200,
            width: 140,
            height: 80,
            type: 'rectangle',
            text: 'DevOps',
            fill: { color: '#CE93D8' },
            stroke: { color: '#7b1fa2', width: 2 },
            dataItem: {
                name: 'DevOps Team',
                members: 3,
                tech: 'Kubernetes, Docker',
                description: 'Infrastructure and deployment',
            },
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'frontend',
            to: 'backend',
            dataItem: {
                type: 'REST API',
                description: 'Frontend communicates with backend via REST API',
                latency: '< 50ms',
            },
            stroke: { color: '#555', width: 2 },
        },
        {
            id: 'c2',
            from: 'backend',
            to: 'database',
            dataItem: {
                type: 'Database Query',
                description: 'Backend queries the database for data',
                latency: '< 10ms',
            },
            stroke: { color: '#555', width: 2 },
        },
        {
            id: 'c3',
            from: 'backend',
            to: 'devops',
            dataItem: {
                type: 'Deployment',
                description: 'DevOps deploys backend services',
                frequency: 'Multiple times daily',
            },
            stroke: { color: '#f57c00', width: 2 },
        },
        {
            id: 'c4',
            from: 'frontend',
            to: 'devops',
            dataItem: {
                type: 'CD/CI Pipeline',
                description: 'DevOps manages frontend deployments',
                frequency: 'On every commit',
            },
            stroke: { color: '#f57c00', width: 2 },
        },
    ];

    return (
        <div className="example-wrapper">
            <style>{`
                .tooltip-header {
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 8px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }
                .tooltip-item {
                    display: flex;
                    margin: 5px 0;
                    font-size: 12px;
                }
                .tooltip-label {
                    font-weight: 500;
                    min-width: 70px;
                }
                .tooltip-value {
                    color: #666;
                }
            `}</style>
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Rich tooltip templates</strong> — Hover over shapes and connections to see detailed team and workflow information.
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
                style={{ height: 450 }}
            />
        </div>
    );
}
