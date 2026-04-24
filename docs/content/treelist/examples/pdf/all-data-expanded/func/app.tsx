import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListToolbar,
    TreeListExpandChangeEvent,
    TreeListPageChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { TreeListPDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';
import { TreeListPager } from './shared-tl-pager';
import { Employee } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    {
        field: 'name',
        title: 'Name',
        width: '250px',
        expandable: true
    },
    {
        field: 'hireDate',
        title: 'Hire Date',
        width: '200px',
        format: '{0:d}'
    },
    {
        field: 'timeInPosition',
        title: 'Year(s) in Position',
        width: '200px'
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px'
    }
];

interface AppState {
    data: Employee[];
    skip: number;
    take: number;
    expanded: number[];
}

const App = () => {
    let gridPDFExport;

    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        skip: 0,
        take: 5,
        expanded: [1, 2, 32]
    });

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

    const onPageChange = (event: TreeListPageChangeEvent) => {
        const { skip, take } = event;
        setState({ ...state, skip, take });
    };

    const exportPDF = () => {
        let allDataExpanded: Employee[] = mapTree(state.data, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: true
            })
        );
        gridPDFExport.save(allDataExpanded);
    };

    const treelist = (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            pager={TreeListPager}
            skip={state.skip}
            take={state.take}
            onPageChange={onPageChange}
            data={addExpandField(state.data)}
            columns={columns}
            toolbar={
                <TreeListToolbar>
                    <Button type="button" title="Export PDF" themeColor={'primary'} onClick={exportPDF}>
                        Export PDF
                    </Button>
                </TreeListToolbar>
            }
        />
    );

    return (
        <div>
            {treelist}
            <TreeListPDFExport ref={pdfExport => {
                (gridPDFExport = pdfExport);
            }} allPages={true}>
                {treelist}
            </TreeListPDFExport>
        </div>
    );
};

export default App;
