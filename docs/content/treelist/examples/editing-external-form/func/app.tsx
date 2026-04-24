import * as React from 'react';
import {
    TreeList,
    mapTree,
    extendDataItem,
    removeItems,
    TreeListExpandChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import { Button } from '@progress/kendo-react-buttons';
import { Employee } from './shared-tl-interfaces';
import EditingDialog from './EditingDialog';
import employees from './shared-tl-data';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const editField: string = 'inEdit';

interface AppState {
    data: Employee[];
    itemInEdit: undefined | Employee;
    expanded: number[];
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        itemInEdit: undefined,
        expanded: [1, 2, 32]
    });

    const edit = (dataItem: Employee) => {
        setState({
            ...state,
            itemInEdit: extendDataItem(dataItem, subItemsField)
        });
    };

    const remove = (dataItem: Employee) => {
        setState({
            ...state,
            data: removeItems(state.data, subItemsField, (i) => i.id === dataItem.id)
        });
    };

    const cellWithEditing = (props) => {
        return (
            <td>
                <Button
                    className="k-grid-edit-command"
                    themeColor={'primary'}
                    onClick={() => {
                        edit(props.dataItem);
                    }}
                >
                    Edit
                </Button>
                &nbsp;
                <Button
                    className="k-grid-remove-command"
                    onClick={() => {
                        confirm('Confirm deleting: ' + props.dataItem.name) && remove(props.dataItem);
                    }}
                >
                    Remove
                </Button>
            </td>
        );
    };

    const columns: TreeListColumnProps[] = [
        { field: 'name', title: 'Employee', expandable: true },
        { field: 'position', title: 'Position' },
        { field: 'fullTime', title: 'Full Time' },
        { title: 'Edit', cell: cellWithEditing }
    ];

    const save = (itemInEdit: Employee) => {
        setState({
            ...state,
            itemInEdit: undefined,
            data: mapTree(state.data, subItemsField, (item) => (itemInEdit.id === item.id ? itemInEdit : item))
        });
    };

    const cancel = () => {
        setState({
            ...state,
            itemInEdit: undefined
        });
    };

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const { expanded, data } = state;
    return (
        <div>
            <TreeList
                data={mapTree(data, subItemsField, (item) =>
                    extendDataItem(item, subItemsField, {
                        [expandField]: expanded.includes(item.id)
                    })
                )}
                style={{ maxHeight: '510px', overflow: 'auto' }}
                editField={editField}
                expandField={expandField}
                subItemsField={subItemsField}
                onExpandChange={onExpandChange}
                columns={columns}
            />
            {state.itemInEdit && <EditingDialog itemInEdit={state.itemInEdit} save={save} cancel={cancel} />}
        </div>
    );
};

export default App;
