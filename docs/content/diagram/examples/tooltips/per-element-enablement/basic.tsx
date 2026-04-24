import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function PerElementEnablementTooltipDemo() {
    const [shapes] = useState([
        {
            id: 'docs',
            x: 50,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Documents',
            fill: { color: '#FFD54F' },
            stroke: { color: '#FBC02D', width: 2 },
            tooltip: { visible: true, content: 'Documents storage' },
        },
        {
            id: 'server',
            x: 220,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Server',
            fill: { color: '#81C784' },
            stroke: { color: '#558B2F', width: 2 },
            tooltip: { visible: true, content: 'Main application server' },
        },
        {
            id: 'database',
            x: 390,
            y: 50,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Database',
            fill: { color: '#64B5F6' },
            stroke: { color: '#1976D2', width: 2 },
            tooltip: { visible: true, content: 'Primary data store' },
        },
        {
            id: 'cache',
            x: 220,
            y: 200,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'Cache',
            fill: { color: '#E0E0E0' },
            stroke: { color: '#9E9E9E', width: 2 },
            tooltip: { visible: false }, // No tooltip for this element
        },
        {
            id: 'api',
            x: 50,
            y: 200,
            width: 120,
            height: 70,
            type: 'rectangle',
            text: 'API Gateway',
            fill: { color: '#F48FB1' },
            stroke: { color: '#C2185B', width: 2 },
            tooltip: { visible: true, content: 'External API interface' },
        },
    ]);

    const connections = [
        {
            id: 'c1',
            from: 'docs',
            to: 'server',
            dataItem: { description: 'File upload' },
            tooltip: { visible: true, content: 'Data flows from documents to server' },
        },
        {
            id: 'c2',
            from: 'server',
            to: 'database',
            dataItem: { description: 'Query/Store' },
            tooltip: { visible: true, content: 'Database operations' },
        },
        {
            id: 'c3',
            from: 'api',
            to: 'server',
            dataItem: { description: 'API calls' },
            tooltip: { visible: true, content: 'API requests to server' },
        },
        {
            id: 'c4',
            from: 'server',
            to: 'cache',
            dataItem: { description: 'Cache mechanism' },
            tooltip: { visible: false }, // No tooltip for this connection
        },
    ];

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Tooltips are enabled per element</strong>. Some shapes and connections have tooltips, others don't. <br/>
                Try hovering over <strong>Documents</strong>, <strong>Server</strong>, <strong>Database</strong>, and <strong>API Gateway</strong> (but not Cache).
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                style={{ height: 400 }}
            />
        </div>
    );
}
