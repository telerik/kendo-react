import { ShapeOptions } from '@progress/kendo-react-diagram';
import { FlowchartShapeType } from '@progress/kendo-diagram-common';

export const shapes: ShapeOptions[] = [
    {
        id: 'rectangle1',
        type: 'rectangle',
        x: 50,
        y: 50,
        content: {
            text: 'Rectangle',
            color: 'white'
        },
        fill: {
            color: '#007bff'
        }
    },
    {
        id: 'circle1',
        type: 'circle',
        x: 210,
        y: 40,
        width: 100,
        height: 100,
        content: {
            text: 'Circle',
            color: 'white'
        },
        fill: {
            color: '#28a745'
        }
    },
    {
        id: 'ellipse1',
        type: 'circle',
        x: 340,
        y: 50,
        width: 150,
        height: 80,
        content: {
            text: 'Ellipse',
            color: 'white'
        },
        fill: {
            color: '#ffc107'
        }
    },
    {
        id: 'image1',
        type: 'image',
        x: 510,
        y: 50,
        width: 100,
        height: 80,
        source: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNkYzM1NDUiLz48cGF0aCBkPSJNMjUgNzVMNTAgMjVMNzUgNzVIMjVaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
        content: {
            text: 'Image',
            color: 'white',
            align: 'top'
        }
    },
    {
        id: 'terminator1',
        type: FlowchartShapeType.Terminator,
        content: { text: 'Terminator', color: 'white' },
        fill: { color: '#FF6B6B' },
        stroke: { color: '#FF5252', width: 2 },
        x: 50,
        y: 200,
        width: 120,
        height: 60
    },
    {
        id: 'process1',
        type: FlowchartShapeType.Process,
        content: { text: 'Process', color: 'white' },
        fill: { color: '#4ECDC4' },
        stroke: { color: '#26A69A', width: 2 },
        x: 200,
        y: 200,
        width: 120,
        height: 60
    },
    {
        id: 'decision1',
        type: FlowchartShapeType.Decision,
        content: { text: 'Decision', color: '#333' },
        fill: { color: '#FFE066' },
        stroke: { color: '#FFD54F', width: 2 },
        x: 350,
        y: 200,
        width: 120,
        height: 60
    },
    {
        id: 'predefinedprocess1',
        type: FlowchartShapeType.PredefinedProcess,
        content: { text: 'Predefined', color: 'white' },
        fill: { color: '#BA68C8' },
        stroke: { color: '#7B1FA2', width: 2 },
        x: 500,
        y: 200,
        width: 120,
        height: 60
    },
    {
        id: 'document1',
        type: FlowchartShapeType.Document,
        content: { text: 'Document', color: 'white' },
        fill: { color: '#81C784' },
        stroke: { color: '#66BB6A', width: 2 },
        x: 50,
        y: 280,
        width: 120,
        height: 60
    },
    {
        id: 'multipledocuments1',
        type: FlowchartShapeType.MultipleDocuments,
        content: { text: 'Multiple Docs', color: 'white' },
        fill: { color: '#64B5F6' },
        stroke: { color: '#42A5F5', width: 2 },
        x: 200,
        y: 280,
        width: 120,
        height: 60
    },
    {
        id: 'manualinputoutput1',
        type: FlowchartShapeType.ManualInputOutput,
        content: { text: 'Manual I/O', color: 'white' },
        fill: { color: '#FFB74D' },
        stroke: { color: '#FFA726', width: 2 },
        x: 350,
        y: 280,
        width: 120,
        height: 60
    },
    {
        id: 'preparation1',
        type: FlowchartShapeType.Preparation,
        content: { text: 'Preparation', color: 'white' },
        fill: { color: '#F06292' },
        stroke: { color: '#EC407A', width: 2 },
        x: 500,
        y: 280,
        width: 120,
        height: 60
    },
    {
        id: 'manualoperation1',
        type: FlowchartShapeType.ManualOperation,
        content: { text: 'Manual Op', color: '#333' },
        fill: { color: '#AED581' },
        stroke: { color: '#9CCC65', width: 2 },
        x: 50,
        y: 360,
        width: 120,
        height: 60
    },
    {
        id: 'internalstorage1',
        type: FlowchartShapeType.InternalStorage,
        content: {
            text: 'Internal Storage',
            color: '#333',
            textWrap: 'wrap',
            relativePadding: 0.1
        },
        fill: { color: '#90CAF9' },
        stroke: { color: '#1976D2', width: 2 },
        x: 200,
        y: 360,
        width: 120,
        height: 60
    },
    {
        id: 'display1',
        type: FlowchartShapeType.Display,
        content: { text: 'Display', color: '#333' },
        fill: { color: '#FFCC02' },
        stroke: { color: '#FFB300', width: 2 },
        x: 350,
        y: 360,
        width: 120,
        height: 60
    },
    {
        id: 'directaccessstorage1',
        type: FlowchartShapeType.DirectAccessStorage,
        content: {
            text: 'Direct Access',
            color: 'white',
            textWrap: 'wrap',
            relativePadding: 0.2
        },
        fill: { color: '#FF8A65' },
        stroke: { color: '#D84315', width: 2 },
        x: 500,
        y: 360,
        width: 120,
        height: 60
    },
    {
        id: 'database1',
        type: FlowchartShapeType.Database,
        content: { text: 'Database', color: '#333' },
        fill: { color: '#A1C4FD' },
        stroke: { color: '#7C4DFF', width: 2 },
        x: 50,
        y: 440,
        width: 120,
        height: 60
    },
    {
        id: 'onpageconnector1',
        type: FlowchartShapeType.OnPageConnector,
        fill: { color: '#FF9AA2' },
        stroke: { color: '#FF6B9D', width: 2 },
        x: 200,
        y: 440,
        width: 120,
        height: 60
    },
    {
        id: 'offpageconnector1',
        type: FlowchartShapeType.OffPageConnector,
        content: { text: 'Off Page', color: '#333' },
        fill: { color: '#C7CEEA' },
        stroke: { color: '#9FA8DA', width: 2 },
        x: 350,
        y: 440,
        width: 120,
        height: 60
    },
    {
        id: 'datainputoutput1',
        type: FlowchartShapeType.DataInputOutput,
        content: { text: 'Data I/O', color: '#333' },
        fill: { color: '#B5FFFC' },
        stroke: { color: '#4DD0E1', width: 2 },
        x: 500,
        y: 440,
        width: 120,
        height: 60
    },
    {
        id: 'summingjunction1',
        type: FlowchartShapeType.SummingJunction,
        fill: { color: '#FFECD2' },
        stroke: { color: '#FFB74D', width: 2 },
        x: 50,
        y: 520,
        width: 120,
        height: 60
    },
    {
        id: 'logicalor1',
        type: FlowchartShapeType.LogicalOr,
        fill: { color: '#FCB69F' },
        stroke: { color: '#FF8A65', width: 2 },
        x: 230,
        y: 520,
        width: 60,
        height: 60
    },
    {
        id: 'merge1',
        type: FlowchartShapeType.Merge,
        content: { text: 'Merge', color: '#333' },
        fill: { color: '#ABEBC6' },
        stroke: { color: '#81C784', width: 2 },
        x: 350,
        y: 520,
        width: 120,
        height: 60
    },
    {
        id: 'extract1',
        type: FlowchartShapeType.Extract,
        content: { text: 'Extract', color: 'white' },
        fill: { color: '#D2B4DE' },
        stroke: { color: '#BA68C8', width: 2 },
        x: 500,
        y: 520,
        width: 120,
        height: 60
    },
    {
        id: 'datastorage1',
        type: FlowchartShapeType.DataStorage,
        content: {
            text: 'Data Storage',
            color: '#333',
            textWrap: 'wrap',
            relativePadding: 0.2
        },
        fill: { color: '#F9E79F' },
        stroke: { color: '#F7DC6F', width: 2 },
        x: 50,
        y: 600,
        width: 120,
        height: 60
    },
    {
        id: 'delay1',
        type: FlowchartShapeType.Delay,
        content: { text: 'Delay', color: '#333' },
        fill: { color: '#AED6F1' },
        stroke: { color: '#85C1E9', width: 2 },
        x: 200,
        y: 600,
        width: 120,
        height: 60
    },
    {
        id: 'sort1',
        type: FlowchartShapeType.Sort,
        fill: { color: '#F5B7B1' },
        stroke: { color: '#EC7063', width: 2 },
        x: 350,
        y: 600,
        width: 120,
        height: 60
    },
    {
        id: 'collate1',
        type: FlowchartShapeType.Collate,
        fill: { color: '#A9DFBF' },
        stroke: { color: '#7DCEA0', width: 2 },
        x: 500,
        y: 600,
        width: 120,
        height: 60
    }
];
