import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    treeToFlat,
    TreeListToolbar,
    TreeListColumnProps,
    TreeListExpandChangeEvent,
    TreeListPageChangeEvent
} from '@progress/kendo-react-treelist';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { Button } from '@progress/kendo-react-buttons';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px' },
    { field: 'fullTime', title: 'Full Time' }
];

const App = () => {
    const [state, setState] = React.useState({
        data: [...employees],
        skip: 0,
        take: 8,
        expanded: [1, 2, 3, 32]
    });

    let _export;

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const addExpandField = (dataTree: Employee[]) => {
        const expanded = state.expanded;
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    const addExpandFieldAllExpanded = (dataTree: Employee[]) => {
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: true
            })
        );
    };

    const onPageChange = (event: TreeListPageChangeEvent) => {
        const { skip, take } = event;
        setState({ ...state, skip, take });
    };

    const exportToExcel = () => {
        const dataWithAllExpanded = addExpandFieldAllExpanded(state.data);
        const flatData = treeToFlat(dataWithAllExpanded, expandField, subItemsField);
        _export.save(flatData, columns);
    };

    return (
        <ExcelExport ref={exporter => {
            (_export = exporter);
        }} hierarchy={true}>
            <TreeList
                style={{ maxHeight: '610px', overflow: 'auto' }}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                data={addExpandField(state.data)}
                columns={columns}
                skip={state.skip}
                take={state.take}
                onPageChange={onPageChange}
                toolbar={
                    <TreeListToolbar>
                        <Button type="button" title="Excel export" themeColor={'primary'} onClick={exportToExcel}>
                            Export to Excel
                        </Button>
                    </TreeListToolbar>
                }
            />
        </ExcelExport>
    );
};

export default App;
