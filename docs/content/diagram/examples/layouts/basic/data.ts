import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'ceo', content: { text: 'CEO' }, fill: { color: '#dc3545' }, width: 80, height: 50 },
    { id: 'cto', content: { text: 'CTO' }, fill: { color: '#fd7e14' }, width: 80, height: 50 },
    { id: 'cfo', content: { text: 'CFO' }, fill: { color: '#fd7e14' }, width: 80, height: 50 },
    { id: 'dev1', content: { text: 'Dev 1' }, fill: { color: '#28a745' }, width: 80, height: 50 },
    { id: 'dev2', content: { text: 'Dev 2' }, fill: { color: '#28a745' }, width: 80, height: 50 },
    { id: 'qa1', content: { text: 'QA 1' }, fill: { color: '#007bff' }, width: 80, height: 50 },
    { id: 'qa2', content: { text: 'QA 2' }, fill: { color: '#007bff' }, width: 80, height: 50 },
    { id: 'acc1', content: { text: 'Acc 1' }, fill: { color: '#6f42c1' }, width: 80, height: 50 },
    { id: 'acc2', content: { text: 'Acc 2' }, fill: { color: '#6f42c1' }, width: 80, height: 50 }
];

export const connections: ConnectionOptions[] = [
    { from: 'ceo', to: 'cto', endCap: { type: 'ArrowEnd' } },
    { from: 'ceo', to: 'cfo', endCap: { type: 'ArrowEnd' } },
    { from: 'cto', to: 'dev1', endCap: { type: 'ArrowEnd' } },
    { from: 'cto', to: 'dev2', endCap: { type: 'ArrowEnd' } },
    { from: 'cto', to: 'qa1', endCap: { type: 'ArrowEnd' } },
    { from: 'cto', to: 'qa2', endCap: { type: 'ArrowEnd' } },
    { from: 'cfo', to: 'acc1', endCap: { type: 'ArrowEnd' } },
    { from: 'cfo', to: 'acc2', endCap: { type: 'ArrowEnd' } }
];
