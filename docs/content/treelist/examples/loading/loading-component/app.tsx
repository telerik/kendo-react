import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
    TreeListDataStateChangeEvent
} from '@progress/kendo-react-treelist';
import employees from './shared-tl-data';
import { Employee, DataState } from './shared-tl-interfaces';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    {
        field: 'name',
        title: 'Name',
        width: '250px',
        filter: TreeListTextFilter,
        expandable: true
    },
    {
        field: 'hireDate',
        title: 'Hire Date',
        width: '200px',
        format: '{0:d}',
        filter: TreeListDateFilter
    },
    {
        field: 'timeInPosition',
        title: 'Year(s) in Position',
        width: '200px',
        filter: TreeListNumericFilter
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px',
        filter: TreeListBooleanFilter
    }
];

interface AppState {
    data: Employee[];
    dataState: DataState;
    expanded: number[];
}

const LoadingPanel = () => {
    const panel = (
        <div className="k-loading-mask">
            <span className="k-loading-text">Loading</span>
            <div className="k-loading-image"></div>
            <div className="k-loading-color"></div>
        </div>
    );

    const treeListContent = document && document.querySelector('.treelist-wrapper');
    console.log(treeListContent);
    return treeListContent ? ReactDOM.createPortal(panel, treeListContent) : panel;
};

const App: React.FC = () => {
    const [loading, setLoading] = React.useState<boolean | null>();
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        dataState: {
            sort: [{ field: 'name', dir: 'asc' }],
            filter: []
        },
        expanded: [1, 2, 32]
    });

    const setExpandedState = (event: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        if (event.value === false) {
            setLoading(true);
            //perform api call
            setTimeout(() => {
                setLoading(false);
                setExpandedState(event);
            }, 1000);
        } else {
            setExpandedState(event);
        }
    };

    const handleDataStateChange = (event: TreeListDataStateChangeEvent) => {
        setState({
            ...state,
            dataState: event.dataState
        });
    };

    const addExpandField = (dataTree: Employee) => {
        const expanded: number[] = state.expanded;
        return mapTree(dataTree, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            })
        );
    };

    const processData = () => {
        let { data, dataState } = state;
        let filteredData: Employee[] = filterBy(data, dataState.filter, subItemsField);
        let sortedData: Employee[] = orderBy(filteredData, dataState.sort, subItemsField);
        return addExpandField(sortedData);
    };

    return (
        <div className="treelist-wrapper">
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
            />
            {loading && <LoadingPanel />}
        </div>
    );
};

export default App;
