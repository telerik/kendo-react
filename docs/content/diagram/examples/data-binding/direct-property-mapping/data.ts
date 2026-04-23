import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const processSteps: ShapeOptions[] = [
    {
        id: '1',
        content: { text: 'Receiving Inspection' },
        x: 100,
        y: 50,
        width: 140,
        height: 70,
        type: 'rectangle',
        fill: { color: '#0d6efd' }
    },
    {
        id: '2',
        content: { text: 'Material Preparation' },
        x: 105,
        y: 150,
        width: 130,
        height: 70,
        type: 'rectangle',
        fill: { color: '#6f42c1' }
    },
    {
        id: '3',
        content: { text: 'Assembly Line' },
        x: 105,
        y: 250,
        width: 130,
        height: 70,
        type: 'rectangle',
        fill: { color: '#20c997' }
    },
    {
        id: '4',
        content: { text: 'Quality Inspection' },
        x: 105,
        y: 350,
        width: 130,
        height: 70,
        type: 'circle',
        fill: { color: '#ffc107' }
    },
    {
        id: 'pass',
        content: { text: 'Packaging' },
        x: 30,
        y: 470,
        width: 110,
        height: 60,
        type: 'rectangle',
        fill: { color: '#198754' }
    },
    {
        id: 'fail',
        content: { text: 'Rework' },
        x: 220,
        y: 470,
        width: 90,
        height: 60,
        type: 'rectangle',
        fill: { color: '#dc3545' }
    },
    {
        id: 'shipping',
        content: { text: 'Shipping' },
        x: 30,
        y: 570,
        width: 110,
        height: 60,
        type: 'rectangle',
        fill: { color: '#198754' }
    }
];

export const connections: ConnectionOptions[] = [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: 'pass' },
    { from: '4', to: 'fail' },
    { from: 'fail', to: '2' },
    { from: 'pass', to: 'shipping' }
];
