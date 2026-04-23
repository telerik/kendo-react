export type LogisticsNode = {
    nodeId: string;
    nodeName: { text: string };
    nodeType: string;
    location: { posX: number; posY: number };
    dimensions: { w: number; h: number };
    status: string;
    color: string;
};

export type LogisticsFlow = {
    sourceNode: string;
    targetNode: string;
    flowType: string;
};

export const logisticsNodes: LogisticsNode[] = [
    {
        nodeId: 'supplier',
        nodeName: { text: 'Raw Materials Supplier' },
        nodeType: 'rectangle',
        location: { posX: 100, posY: 50 },
        dimensions: { w: 140, h: 70 },
        status: 'active',
        color: '#CFE2FF'
    },
    {
        nodeId: 'manufacturer',
        nodeName: { text: 'Manufacturing Plant' },
        nodeType: 'rectangle',
        location: { posX: 100, posY: 180 },
        dimensions: { w: 140, h: 70 },
        status: 'active',
        color: '#E2D9F3'
    },
    {
        nodeId: 'quality-control',
        nodeName: { text: 'Quality Control' },
        nodeType: 'circle',
        location: { posX: 100, posY: 310 },
        dimensions: { w: 140, h: 70 },
        status: 'active',
        color: '#FFF3CD'
    },
    {
        nodeId: 'warehouse',
        nodeName: { text: 'Distribution Warehouse' },
        nodeType: 'rectangle',
        location: { posX: 50, posY: 440 },
        dimensions: { w: 120, h: 70 },
        status: 'active',
        color: '#E0F8F1'
    },
    {
        nodeId: 'regional-hub',
        nodeName: { text: 'Regional Hub' },
        nodeType: 'rectangle',
        location: { posX: 200, posY: 440 },
        dimensions: { w: 120, h: 70 },
        status: 'active',
        color: '#E0F8F1'
    },
    {
        nodeId: 'retail',
        nodeName: { text: 'Retail Stores' },
        nodeType: 'rectangle',
        location: { posX: 50, posY: 570 },
        dimensions: { w: 120, h: 60 },
        status: 'active',
        color: '#F8D7DA'
    },
    {
        nodeId: 'ecommerce',
        nodeName: { text: 'E-commerce Fulfillment' },
        nodeType: 'rectangle',
        location: { posX: 200, posY: 570 },
        dimensions: { w: 120, h: 60 },
        status: 'active',
        color: '#F8D7DA'
    }
];

export const logisticsFlows: LogisticsFlow[] = [
    { sourceNode: 'supplier', targetNode: 'manufacturer', flowType: 'materials' },
    { sourceNode: 'manufacturer', targetNode: 'quality-control', flowType: 'inspection' },
    { sourceNode: 'quality-control', targetNode: 'warehouse', flowType: 'distribution' },
    { sourceNode: 'quality-control', targetNode: 'regional-hub', flowType: 'distribution' },
    { sourceNode: 'warehouse', targetNode: 'retail', flowType: 'delivery' },
    { sourceNode: 'regional-hub', targetNode: 'ecommerce', flowType: 'fulfillment' }
];
