import * as React from 'react';
import {
    TreeList,
    orderBy,
    filterBy,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListTextFilter,
    TreeListNumericFilter,
    TreeListDateFilter,
    TreeListBooleanFilter,
    TreeListExpandChangeEvent,
    TreeListDataStateChangeEvent,
    TreeListToolbar
} from '@progress/kendo-react-treelist';
import { TreeListPDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';
import employees from './shared-tl-data';
import { DataState, Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '250px', filter: TreeListTextFilter, expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: '200px', format: '{0:d}', filter: TreeListDateFilter },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '200px', filter: TreeListNumericFilter },
    { field: 'fullTime', title: 'Full Time', width: '100px', filter: TreeListBooleanFilter }
];

interface AppState {
    data: Employee[];
    dataState: DataState;
    expanded: number[];
}

const App = () => {
    const gridPDFExport = React.useRef<any>(undefined);

    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        dataState: {
            sort: [{ field: 'name', dir: 'asc' }],
            filter: []
        },
        expanded: [1, 2, 32]
    });

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

    const addExpandField = (dataTree: Employee[]) => {
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

    const exportPDF = () => {
        if (gridPDFExport !== null) {
            gridPDFExport.current.save();
        }
    };

    const treelist: React.ReactElement<any> = (
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
            navigatable={true}
            toolbar={
                <TreeListToolbar>
                    <Button title="Export to PDF" themeColor={'primary'} onClick={exportPDF}>
                        Export To PDF
                    </Button>
                </TreeListToolbar>
            }
        />
    );

    return (
        <>
            {treelist}
            <TreeListPDFExport ref={gridPDFExport}>{treelist}</TreeListPDFExport>
        </>
    );
};

export default App;
