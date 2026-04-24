import * as React from 'react';
import {
    TreeList,
    orderBy,
    extendDataItem,
    mapTree,
    TreeListColumnProps,
    TreeListExpandChangeEvent,
    TreeListSortChangeEvent,
    TreeListProps
} from '@progress/kendo-react-treelist';
import { Label } from '@progress/kendo-react-labels';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Checkbox } from '@progress/kendo-react-inputs';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '310px', expandable: true },
    { field: 'position', title: 'Position', width: '260px' },
    { field: 'hireDate', title: 'Hire Date', width: '160px', format: '{0:d}' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '160px' },
    { field: 'fullTime', title: 'Full Time', width: '150px' }
];

interface AppState {
    data: Employee[];
    sort: SortDescriptor[];
    expanded: number[];
    allowUnsort: boolean;
    multiple: boolean;
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        sort: [
            {
                field: 'name',
                dir: 'asc'
            }
        ],
        expanded: [1, 2, 32],
        allowUnsort: true,
        multiple: true
    });

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const handleSortChange = (event: TreeListSortChangeEvent) => {
        setState({
            ...state,
            sort: event.sort
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
        const { data, sort } = state;
        return addExpandField(orderBy(data, sort, subItemsField));
    };

    return (
        <div>
            <div className="example-config">
                <Checkbox
                    id="unsort"
                    checked={state.allowUnsort}
                    onChange={(e) =>
                        setState({
                            ...state,
                            allowUnsort: e.value
                        })
                    }
                    label="Enable unsorting"
                />
                <Checkbox
                    id="multiSort"
                    checked={state.multiple}
                    onChange={(e) =>
                        setState({
                            ...state,
                            multiple: e.value
                        })
                    }
                    label="Enable multiple columns sorting"
                />
            </div>
            <TreeList
                style={{ maxHeight: '510px', overflow: 'auto' }}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                sortable={{
                    allowUnsort: state.allowUnsort,
                    mode: state.multiple ? 'multiple' : 'single'
                }}
                sort={state.sort}
                data={processData()}
                onSortChange={handleSortChange}
                columns={columns}
            />
        </div>
    );
};

export default App;
