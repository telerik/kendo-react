import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListToolbar,
    TreeListExpandChangeEvent
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { Employee, DataState } from './shared-tl-interfaces';
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon, minusIcon } from '@progress/kendo-svg-icons';
import { getter } from '@progress/kendo-react-common';

const DATA_ITEM_KEY: string = 'id';
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
    dataState: DataState;
    expanded: number[];
}

const App = () => {
    const idGetter = getter(DATA_ITEM_KEY);
    const [expandedState, setExpandedState] = React.useState<{ [key: number]: boolean }>({});
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        dataState: {
            sort: [{ field: 'name', dir: 'asc' }]
        },
        expanded: [1, 2, 32]
    });

    const onExpandChange = React.useCallback(
        (e: TreeListExpandChangeEvent) => {
            setExpandedState({
                ...expandedState,
                [idGetter(e.dataItem)]: !e.value
            });
        },
        [expandedState]
    );

    const processData = () => {
        const { data, expanded } = state;

        const resultTree = mapTree(data, subItemsField, (item) => {
            return extendDataItem(item, subItemsField, {
                expanded: expandedState[idGetter(item) as number]
            });
        });
        return resultTree;
    };
    const expandAll = () => {
        let allExpanded: { [key: number]: boolean } = {};
        mapTree(state.data, subItemsField, (item) => {
            allExpanded[item[DATA_ITEM_KEY]] = true;
        });
        setExpandedState(allExpanded);
    };
    const collapseAll = () => {
        setExpandedState({});
    };
    return (
        <TreeList
            style={{
                maxHeight: '510px',
                overflow: 'auto'
            }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={processData()}
            columns={columns}
            dataItemKey={DATA_ITEM_KEY}
            toolbar={
                <TreeListToolbar>
                    <Button svgIcon={plusIcon} title="Expand" onClick={expandAll}>
                        ExpandAll
                    </Button>
                    <Button svgIcon={minusIcon} title="Collapse" onClick={collapseAll}>
                        CollapseAll
                    </Button>
                </TreeListToolbar>
            }
        />
    );
};

export default App;
