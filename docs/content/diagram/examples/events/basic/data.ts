import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'manager',
        content: { text: 'Manager', color: 'white' },
        fill: { color: '#1f77b4' },
        tooltip: { visible: true },
        tooltipText: 'Department Manager - Oversees team operations'
    },
    {
        id: 'developer1',
        content: { text: 'Senior Dev', color: 'white' },
        fill: { color: '#ff7f0e' },
        tooltip: { visible: true },
        tooltipText: 'Senior Developer - Leads development projects'
    },
    {
        id: 'developer2',
        content: { text: 'Junior Dev', color: 'white' },
        fill: { color: '#2ca02c' },
        tooltip: { visible: true },
        tooltipText: 'Junior Developer - Assists in development tasks'
    },
    {
        id: 'designer',
        content: { text: 'Designer', color: 'white' },
        fill: { color: '#d62728' },
        tooltip: { visible: true },
        tooltipText: 'UI/UX Designer - Creates user interfaces'
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'manager',
        to: 'developer1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' },
        tooltip: { visible: true },
        tooltipText: 'Reports to Manager'
    },
    {
        from: 'manager',
        to: 'developer2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' },
        tooltip: { visible: true },
        tooltipText: 'Reports to Manager'
    },
    {
        from: 'manager',
        to: 'designer',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' },
        tooltip: { visible: true },
        tooltipText: 'Reports to Manager'
    }
];
