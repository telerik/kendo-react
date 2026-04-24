import React, { useState, useCallback } from 'react';
import { TreeList, mapTreeItem, extendDataItem, TreeListExpandChangeEvent } from '@progress/kendo-react-treelist';
import { generateData } from './shared-tl-treelist-data';
import { Employee } from './shared-tl-interfaces';

const numberOfColumns = 100;
const columnWidth = 200;
const numberOfRows = 25000;
const subItemsField = 'subItems';
const expandField = 'expanded';

const { columns, data } = generateData(numberOfColumns, columnWidth, numberOfRows, subItemsField);

const App = () => {
    const [treeData, setTreeData] = useState<Employee[]>([...data]);

    const onExpandChange = useCallback(
        (event: TreeListExpandChangeEvent) => {
            const isExpanded = !event.value;
            const updatedTree = [...treeData];
            mapTreeItem(updatedTree, event.level, subItemsField, (item) =>
                extendDataItem(item, subItemsField, { [expandField]: isExpanded })
            );
            setTreeData(updatedTree);
        },
        [treeData]
    );

    return (
        <TreeList
            style={{ height: '430px', overflow: 'auto', width: '720px' }}
            tableProps={{
                style: {
                    tableLayout: 'fixed',
                    width: numberOfColumns * columnWidth
                }
            }}
            rowHeight={40}
            scrollable="virtual"
            columnVirtualization={numberOfColumns > 15}
            data={treeData}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            columns={columns}
        />
    );
};

export default App;
