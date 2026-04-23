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
    TreeListCellProps
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

const App: React.FC = () => {
    const [loadingID, setLoadingID] = React.useState<string | null>();
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

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        if (e.value === false) {
            setLoadingID(e.dataItem.id);
            //api call
            setTimeout(() => {
                setExpandedState(e);
                setLoadingID(null);
            }, 1000);
        } else {
            setExpandedState(e);
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

    const MyCell = (td, props: TreeListCellProps) => {
        let icon = td.props.children[0];
        if (props.dataItem.id === loadingID && props.expandable) {
            icon = <span key="loading" className="k-icon k-i-loading" style={{ margin: '-3px 3px 0 -3px' }} />;
        }

        return (
            <td.type {...td.props}>
                {icon}
                {td.props.children[1]}
            </td.type>
        );
    };

    return (
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
            cellRender={MyCell}
        />
    );
};

export default App;
