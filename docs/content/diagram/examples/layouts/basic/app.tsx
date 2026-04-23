import * as React from 'react';
import { Diagram, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { shapes, connections } from './data';

const treeSubtypes = [
    { text: 'Down', value: 'down' },
    { text: 'Up', value: 'up' },
    { text: 'Left', value: 'left' },
    { text: 'Right', value: 'right' },
    { text: 'Mindmap Horizontal', value: 'mindmapHorizontal' },
    { text: 'Radial', value: 'radial' }
];

const layeredSubtypes = [
    { text: 'Down', value: 'down' },
    { text: 'Up', value: 'up' },
    { text: 'Left', value: 'left' },
    { text: 'Right', value: 'right' }
];

const layoutTypes = [
    { text: 'Tree Layout', value: 'tree' },
    { text: 'Layered Layout', value: 'layered' },
    { text: 'Force-Directed Layout', value: 'force' }
];

const buildLayout = (type: string, subtype: string): DiagramLayout => {
    if (type === 'force') {
        return { type: 'force', iterations: 300 };
    }
    return {
        type: type as 'tree' | 'layered',
        subtype: subtype as DiagramLayout['subtype'],
        horizontalSeparation: 80,
        verticalSeparation: 60
    };
};

const App = () => {
    const [layoutType, setLayoutType] = React.useState({ text: 'Tree Layout', value: 'tree' });
    const [subtype, setSubtype] = React.useState({ text: 'Down', value: 'down' });
    const [layout, setLayout] = React.useState<DiagramLayout>(buildLayout('tree', 'down'));
    const diagramRef = React.useRef<DiagramWidget>(null);
    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    let availableSubtypes = treeSubtypes;
    if (layoutType.value === 'layered') {
        availableSubtypes = layeredSubtypes;
    } else if (layoutType.value === 'force') {
        availableSubtypes = [];
    }

    const handleLayoutChange = (e: DropDownListChangeEvent) => {
        const newType = e.value;
        setLayoutType(newType);
        const newSubtype = { text: 'Down', value: 'down' };
        setSubtype(newSubtype);
        setLayout(buildLayout(newType.value, newSubtype.value));
    };

    const handleSubtypeChange = (e: DropDownListChangeEvent) => {
        const newSubtype = e.value;
        setSubtype(newSubtype);
        setLayout(buildLayout(layoutType.value, newSubtype.value));
    };

    return (
        <div>
            <div
                style={{
                    background: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: 6,
                    padding: 20,
                    marginBottom: 20,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <h4 style={{ margin: '0 0 15px 0', color: '#495057', fontWeight: 600 }}>Layout Configuration</h4>
                <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <Label>Layout Type:</Label>
                        <DropDownList
                            data={layoutTypes}
                            value={layoutType}
                            onChange={handleLayoutChange}
                            textField="text"
                            dataItemKey="value"
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <Label>Subtype:</Label>
                        <DropDownList
                            data={availableSubtypes}
                            value={subtype}
                            onChange={handleSubtypeChange}
                            textField="text"
                            dataItemKey="value"
                            disabled={layoutType.value === 'force'}
                        />
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: 300}}>
                <Diagram
                    ref={diagramRef}
                    shapes={shapes}
                    connections={connections}
                    layout={layout}
                    zoom={0.7}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};

export default App;
