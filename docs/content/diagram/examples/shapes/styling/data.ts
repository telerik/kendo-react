import { ShapeOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'default1',
        x: 50,
        y: 50,
        content: { text: 'Default Style' },
        fill: { color: '#007bff' }
    },
    {
        id: 'custom1',
        x: 250,
        y: 50,
        content: { text: 'Custom Colors', color: '#333', fontSize: 16, fontWeight: 'bold' },
        fill: { color: '#e0e0e0' },
        stroke: { color: 'purple', width: 3 }
    },
    {
        id: 'dashed1',
        x: 450,
        y: 50,
        content: { text: 'Dashed Border', color: 'white' },
        fill: { color: '#28a745' },
        stroke: { color: '#155724', width: 2, dashType: 'dash' }
    },
    {
        id: 'gradient1',
        x: 50,
        y: 200,
        content: { text: 'High Opacity', color: 'white' },
        fill: { color: '#dc3545', opacity: 0.9 },
        stroke: { color: '#721c24', width: 2 }
    },
    {
        id: 'transparent1',
        x: 250,
        y: 200,
        content: { text: 'Semi-transparent', color: '#333' },
        fill: { color: '#ffc107', opacity: 0.3 },
        stroke: { color: '#856404', width: 2 }
    },
    {
        id: 'rotated1',
        x: 450,
        y: 200,
        rotation: { angle: 45 },
        content: { text: 'Rotated 45 deg', color: 'white' },
        fill: { color: '#17a2b8' },
        stroke: { color: '#117a8b', width: 2 }
    }
];
