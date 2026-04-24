import React, { useState } from 'react';
import { Diagram } from '@progress/kendo-react-diagram';

export default function ShapesDataBindingDemo() {
    // Sample data
    const shapeData = [
        {
            id: 'emp1',
            name: 'Jane Simons',
            title: 'CEO',
            department: 'Executive',
            color: '#E0F8F1',
        },
        {
            id: 'emp2',
            name: 'John Anderson',
            title: 'VP Operations',
            department: 'Operations',
            color: '#E1F5FE',
        },
        {
            id: 'emp3',
            name: 'Maria Garcia',
            title: 'VP Development',
            department: 'Engineering',
            color: '#F3E5F5',
        },
        {
            id: 'emp4',
            name: 'James Chen',
            title: 'Development Lead',
            department: 'Engineering',
            color: '#F3E5F5',
        },
        {
            id: 'emp5',
            name: 'Lisa Murphy',
            title: 'Development Lead',
            department: 'Engineering',
            color: '#F3E5F5',
        },
    ];

    const connectionData = [
        { id: 'c1', from: 'emp1', to: 'emp2' },
        { id: 'c2', from: 'emp1', to: 'emp3' },
        { id: 'c3', from: 'emp3', to: 'emp4' },
        { id: 'c4', from: 'emp3', to: 'emp5' },
    ];

    // Convert flat data to shapes with positions
    const organizedPositions = {
        emp1: { x: 150, y: 20 },
        emp2: { x: 50, y: 150 },
        emp3: { x: 250, y: 150 },
        emp4: { x: 200, y: 300 },
        emp5: { x: 300, y: 300 },
    };

    const [shapes] = useState(
        shapeData.map((item) => ({
            id: item.id,
            x: organizedPositions[item.id].x,
            y: organizedPositions[item.id].y,
            width: 140,
            height: 80,
            type: 'rectangle',
            text: item.name,
            fill: { color: item.color },
            stroke: { color: '#333', width: 1 },
            dataItem: item,
        }))
    );

    const [connections] = useState(
        connectionData.map((item) => ({
            id: item.id,
            from: item.from,
            to: item.to,
            stroke: { color: '#999', width: 2 },
        }))
    );

    return (
        <div className="example-wrapper">
            <div className="info-banner" style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#e8f4f8', borderLeft: '4px solid #0288d1' }}>
                <strong>ℹ️ Data Binding Example</strong> — Organization chart created by binding shape data. Shapes are populated from the data array and styled based on department.
            </div>
            <Diagram
                shapes={shapes}
                connections={connections}
                layout={{
                    type: 'tree',
                    subtype: 'down',
                    horizontalSeparation: 80,
                    verticalSeparation: 80,
                }}
                zoom={0.85}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ height: 450 }}
            />
        </div>
    );
}
