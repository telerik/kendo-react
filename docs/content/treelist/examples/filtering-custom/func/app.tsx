import * as React from 'react';
import {
    TreeList,
    filterBy,
    extendDataItem,
    mapTree,
    TreeListTextFilter,
    TreeListExpandChangeEvent,
    TreeListFilterChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import DropDownFilter from './dropDownFilter';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { FilterDescriptor } from '@progress/kendo-data-query';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';

interface AppState {
    data: Employee[];
    filter: FilterDescriptor[];
    expanded: number[];
}

let dropDownData: any[] = [];
const MyDropDownFilter = (props) => <DropDownFilter {...props} data={dropDownData} defaultItem="Select Position" />;

const App = () => {
    const columns: TreeListColumnProps[] = [
        { field: 'name', title: 'Name', width: '400px', expandable: true, filterCell: TreeListTextFilter },
        { field: 'position', title: 'Position', width: '300px', filterCell: MyDropDownFilter },
        { field: 'hireDate', title: 'Hire Date', width: '300px', format: '{0:d}' },
        { field: 'fullTime', title: 'Full Time', width: '300px' }
    ];

    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        filter: [],
        expanded: [1, 2, 32]
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const handleFilterChange = (event: TreeListFilterChangeEvent) => {
        setState({
            ...state,
            filter: event.filter
        });
    };

    const processData = () => {
        const { data, expanded } = state;
        const filteredData = filterBy(data, state.filter, subItemsField);
        const positions = new Set();

        const resultTree = mapTree(filteredData, subItemsField, (item) => {
            positions.add(item.position);
            return extendDataItem(item, subItemsField, {
                [expandField]: expanded.includes(item.id)
            });
        });

        dropDownData = Array.from(positions);

        return resultTree;
    };

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            filter={state.filter}
            data={processData()}
            onFilterChange={handleFilterChange}
            columns={columns}
        />
    );
};

export default App;
