import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'h1', content: { text: 'Start' }, x: 50, y: 50, width: 80, height: 50, fill: { color: '#4caf50' } },
    { id: 'h2', content: { text: 'Process' }, x: 250, y: 50, width: 80, height: 50, fill: { color: '#2196f3' } },
    { id: 'h3', content: { text: 'Review' }, x: 450, y: 50, width: 80, height: 50, fill: { color: '#ff9800' } },
    { id: 'h4', content: { text: 'Complete' }, x: 650, y: 50, width: 80, height: 50, fill: { color: '#f44336' } },
    { id: 'v1', content: { text: 'Input' }, x: 50, y: 200, width: 80, height: 50, fill: { color: '#9c27b0' } },
    { id: 'v2', content: { text: 'Validate' }, x: 50, y: 350, width: 80, height: 50, fill: { color: '#00bcd4' } },
    { id: 'v3', content: { text: 'Task A' }, x: 250, y: 200, width: 80, height: 50, fill: { color: '#8bc34a' } },
    { id: 'v4', content: { text: 'Task B' }, x: 250, y: 350, width: 80, height: 50, fill: { color: '#673ab7' } },
    { id: 'd1', content: { text: 'Node 1' }, x: 450, y: 200, width: 80, height: 50, fill: { color: '#3f51b5' } },
    { id: 'd2', content: { text: 'Node 2' }, x: 650, y: 350, width: 80, height: 50, fill: { color: '#009688' } },
    { id: 'd3', content: { text: 'Step X' }, x: 850, y: 200, width: 80, height: 50, fill: { color: '#ffc107' } },
    { id: 'd4', content: { text: 'Step Y' }, x: 850, y: 350, width: 80, height: 50, fill: { color: '#795548' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'h1',
        to: 'h2',
        content: { text: 'Inline', fontFamily: 'Arial', position: 'inline' },
        stroke: { color: '#007acc', width: 2 }
    },
    {
        from: 'h2',
        to: 'h3',
        content: {
            text: 'Top',
            fontFamily: 'Arial',
            position: { vertical: 'top' },
            border: { color: '#28a745', width: 1 },
            padding: 1
        },
        stroke: { color: '#28a745', width: 2 }
    },
    {
        from: 'h3',
        to: 'h4',
        content: {
            text: 'Bottom',
            fontFamily: 'Arial',
            position: { vertical: 'bottom' },
            border: { color: '#dc3545', width: 1 },
            padding: 1
        },
        stroke: { color: '#dc3545', width: 2 }
    },
    {
        from: 'v1',
        to: 'v2',
        content: {
            text: 'Inline Label',
            fontFamily: 'Arial',
            position: 'inline'
        },
        stroke: { color: '#007acc', width: 2 }
    },
    {
        from: 'v3',
        to: 'v4',
        content: {
            text: 'Right',
            fontFamily: 'Arial',
            position: { horizontal: 'right' },
            border: { color: '#28a745', width: 1 },
            padding: 1
        },
        stroke: { color: '#28a745', width: 2 }
    },
    {
        from: 'd1',
        to: 'd2',
        type: 'cascading',
        content: {
            text: 'Inline',
            fontFamily: 'Arial',
            position: 'inline',
            border: { color: '#6f42c1', width: 1 },
            background: '#e3d5f3',
            color: '#6f42c1'
        },
        stroke: { color: '#6f42c1', width: 2, dashType: 'dash' }
    },
    {
        from: 'd3',
        to: 'd4',
        type: 'cascading',
        content: {
            text: 'Left',
            fontFamily: 'Arial',
            position: { horizontal: 'left' },
            border: { color: '#e83e8c', width: 1 },
            padding: 1
        },
        stroke: { color: '#e83e8c' }
    }
];
