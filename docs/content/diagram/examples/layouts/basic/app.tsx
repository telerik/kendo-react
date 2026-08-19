import * as React from 'react';
import { Diagram, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { useConfigurator } from '@docs-shared/configurator';
import { shapes, connections } from './data';

const LAYERED_SUBTYPES = new Set(['down', 'up', 'left', 'right']);

const buildLayout = (type: string, subtype: string): DiagramLayout => {
    if (type === 'force') {
        return { type: 'force', iterations: 300 };
    }
    const resolvedSubtype = type === 'layered' && !LAYERED_SUBTYPES.has(subtype) ? 'down' : subtype;
    return {
        type: type as 'tree' | 'layered',
        subtype: resolvedSubtype as DiagramLayout['subtype'],
        horizontalSeparation: 80,
        verticalSeparation: 60
    };
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    const config = useConfigurator({
        sections: [
            {
                label: 'Layout Type',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'layoutType',
                        options: [
                            { value: 'tree', label: 'Tree Layout' },
                            { value: 'layered', label: 'Layered Layout' },
                            { value: 'force', label: 'Force-Directed Layout' }
                        ],
                        defaultValue: 'tree'
                    }
                ]
            },
            {
                label: 'Subtype',
                controls: [
                    {
                        type: 'dropdown',
                        name: 'subtype',
                        options: [
                            { value: 'down', label: 'Down' },
                            { value: 'up', label: 'Up' },
                            { value: 'left', label: 'Left' },
                            { value: 'right', label: 'Right' },
                            { value: 'mindmapHorizontal', label: 'Mindmap Horizontal' },
                            { value: 'radial', label: 'Radial' }
                        ],
                        defaultValue: 'down'
                    }
                ]
            }
        ]
    }) as {
        layoutType: string;
        subtype: string;
    };

    const resolvedLayoutType = config.layoutType ?? 'tree';
    const resolvedSubtype = config.subtype ?? 'down';

    const layout = React.useMemo(
        () => buildLayout(resolvedLayoutType, resolvedSubtype),
        [resolvedLayoutType, resolvedSubtype]
    );

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                layout={layout}
                zoom={0.7}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default App;
