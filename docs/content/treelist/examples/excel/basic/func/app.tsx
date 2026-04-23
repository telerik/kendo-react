import * as React from 'react';
import {
    TreeList,
    orderBy,
    filterBy,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    treeToFlat,
    TreeListToolbar,
    TreeListExpandChangeEvent,
    TreeListDataStateChangeEvent
} from '@progress/kendo-react-treelist';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import employees from './shared-tl-data';
import { Employee, DataState } from './shared-tl-interfaces';
import { Button } from '@progress/kendo-react-buttons';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '250px', expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px' },
    { field: 'fullTime', title: 'Full Time' }
];

interface AppState {
    data: Employee[];
    dataState: DataState;
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        dataState: {
            sort: [{ field: 'name', dir: 'asc' }],
            filter: []
        },
        expanded: [1, 2, 32]
    });

    let _export;

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const handleDataStateChange = (event: TreeListDataStateChangeEvent) => {
        setState({
            ...state,
            dataState: event.dataState
        });
    };

    const addExpandField = (dataTree) => {
        const expanded = state.expanded;
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    const processData = () => {
        let { data, dataState } = state;
        let filteredData = filterBy(data, dataState.filter, subItemsField);
        let sortedData = orderBy(filteredData, dataState.sort, subItemsField);
        return addExpandField(sortedData);
    };

    const exportToExcel = () => {
        _export.save(treeToFlat(processData(), expandField, subItemsField), columns);
    };

    return (
        <ExcelExport ref={exporter => {
            (_export = exporter);
        }} hierarchy={true}>
            <TreeList
                style={{ maxHeight: '510px', overflow: 'auto' }}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                sortable={{ mode: 'multiple' }}
                {...state.dataState}
                data={processData()}
                onDataStateChange={handleDataStateChange}
                columns={columns}
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
