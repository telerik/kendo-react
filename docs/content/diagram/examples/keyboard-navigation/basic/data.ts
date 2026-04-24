import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        x: 100,
        y: 50,
        width: 120,
        height: 60,
        content: { text: 'Project Start', color: 'white' },
        fill: { color: '#28a745' },
        stroke: { color: '#1e7e34', width: 2 }
    },
    {
        id: 'shape2',
        x: 100,
        y: 150,
        width: 120,
        height: 60,
        content: { text: 'Planning', color: 'white' },
        fill: { color: '#007bff' },
        stroke: { color: '#0056b3', width: 2 }
    },
    {
        id: 'shape3',
        x: 100,
        y: 250,
        width: 120,
        height: 60,
        content: { text: 'Development', color: 'white' },
        fill: { color: '#17a2b8' },
        stroke: { color: '#117a8b', width: 2 }
    },
    {
        id: 'shape4',
        x: 300,
        y: 150,
        width: 120,
        height: 60,
        content: { text: 'Testing', color: 'white' },
        fill: { color: '#ffc107' },
        stroke: { color: '#d39e00', width: 2 }
    },
    {
        id: 'shape5',
        x: 300,
        y: 250,
        width: 120,
        height: 60,
        content: { text: 'Deployment', color: 'white' },
        fill: { color: '#dc3545' },
        stroke: { color: '#bd2130', width: 2 }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'shape1', to: 'shape2', stroke: { color: '#666', width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'shape2', to: 'shape3', stroke: { color: '#666', width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'shape2', to: 'shape4', stroke: { color: '#666', width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'shape3', to: 'shape5', stroke: { color: '#666', width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'shape4', to: 'shape5', stroke: { color: '#666', width: 2 }, endCap: { type: 'ArrowEnd' } }
];
