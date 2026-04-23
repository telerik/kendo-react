import * as React from 'react';
import { TreeList, mapTree, extendDataItem, TreeListExpandChangeEvent } from '@progress/kendo-react-treelist';
import { generateData } from './shared-tl-treelist-data';
import { Employee } from './shared-tl-interfaces';

const numberOfColumns: number = 100;
const columnWidth: number = 150;
const numberOfRows: number = 7;
const subItemsField: string = 'subItems';
const expandField: string = 'expanded';

const { columns, data } = generateData(numberOfColumns, columnWidth, numberOfRows, subItemsField);

const App = () => {
    const [state, setState] = React.useState<{ expanded: number[] }>({ expanded: [] });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const addExpandField = (dataTree: Employee[]) => {
        const expanded: number[] = state.expanded;
        return mapTree(dataTree, subItemsField, (item: Employee) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    return (
        <TreeList
            style={{ overflow: 'auto', width: '720px' }}
            tableProps={{ style: { tableLayout: 'fixed' } }}
            columns={columns}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={addExpandField(data)}
            columnVirtualization={true}
        />
    );
};

export default App;
