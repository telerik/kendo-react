import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'warehouse',
        content: { text: 'Warehouse' },
        x: 80,
        y: 50,
        width: 140,
        height: 70,
        fill: { color: '#84B9F5' },
        stroke: { color: '#5A9FE8', width: 2 },
        tooltipText: 'Inventory: 5,000 units'
    },
    {
        id: 'distribution',
        content: { text: 'Distribution Center' },
        x: 80,
        y: 180,
        width: 140,
        height: 70,
        fill: { color: '#C5A8E8' },
        stroke: { color: '#A77DD4', width: 2 },
        tooltipText: 'Daily throughput: 1,200 packages'
    },
    {
        id: 'retail-east',
        content: { text: 'Retail Store (East)' },
        x: 80,
        y: 310,
        width: 140,
        height: 70,
        fill: { color: '#87E8C3' },
        stroke: { color: '#5DD9AC', width: 2 },
        tooltipText: 'Store capacity: 500 units'
    },
    {
        id: 'retail-west',
        content: { text: 'Retail Store (West)' },
        x: 260,
        y: 310,
        width: 140,
        height: 70,
        fill: { color: '#FFD86E' },
        stroke: { color: '#F5C73D', width: 2 },
        tooltipText: 'Store capacity: 450 units'
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'warehouse',
        to: 'distribution',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Daily shipments - Transit: 6 hours'
    },
    {
        from: 'distribution',
        to: 'retail-east',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'East route - Transit: 3 hours'
    },
    {
        from: 'distribution',
        to: 'retail-west',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'West route - Transit: 4 hours'
    }
];
