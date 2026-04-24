import * as React from 'react';
import {
    TreeList,
    TreeListToolbar,
    mapTree,
    extendDataItem,
    TreeListColumnProps,
    TreeListTextEditor,
    TreeListNumericEditor,
    TreeListDateEditor,
    TreeListBooleanEditor,
    TreeListExpandChangeEvent,
    TreeListItemChangeEvent
} from '@progress/kendo-react-treelist';
import { createRenderers } from './renderers';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { Button } from '@progress/kendo-react-buttons';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const editField: string = 'inEdit';

const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', width: '280px', editCell: TreeListTextEditor, expandable: true },
    { field: 'position', title: 'Position', width: '260px', editCell: TreeListTextEditor },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '170px', editCell: TreeListDateEditor },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '170px', editCell: TreeListNumericEditor },
    { field: 'fullTime', title: 'Full Time', width: '160px', editCell: TreeListBooleanEditor }
];

interface AppState {
    data: Employee[];
    expanded: number[];
    editItem: Employee | undefined;
    editItemField: string | undefined;
    changes: boolean;
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: [...employees],
        expanded: [1, 2, 32],
        editItem: undefined,
        editItemField: undefined,
        changes: false
    });

    let renderers;

    const enterEdit = (dataItem: Employee, field: string) => {
        setState({
            ...state,
            editItem: { ...dataItem },
            editItemField: field
        });
    };

    const exitEdit = () => {
        setState({
            ...state,
            editItem: undefined,
            editItemField: undefined
        });
    };
    renderers = createRenderers(enterEdit, exitEdit, editField);

    const onExpandChange = (event: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: event.value
                ? state.expanded.filter((id) => id !== event.dataItem.id)
                : [...state.expanded, event.dataItem.id]
        });
    };

    const saveChanges = () => {
        employees.splice(0, employees.length, ...state.data);
        setState({
            ...state,
            editItem: undefined,
            editItemField: undefined,
            changes: false
        });
    };

    const cancelChanges = () => {
        setState({
            ...state,
            data: [...employees],
            editItem: undefined,
            editItemField: undefined,
            changes: false
        });
    };

    const itemChange = (event: TreeListItemChangeEvent) => {
        const field: any = event.field;
        setState({
            ...state,
            changes: true,
            data: mapTree(state.data, subItemsField, (item) =>
                event.dataItem.id === item.id ? extendDataItem(item, subItemsField, { [field]: event.value }) : item
            )
        });
    };
    const { data, changes, expanded, editItem, editItemField } = state;
    const editItemId = editItem ? editItem.id : null;

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            data={mapTree(data, subItemsField, (item) =>
                extendDataItem(item, subItemsField, {
                    [expandField]: expanded.includes(item.id),
                    [editField]: item.id === editItemId ? editItemField : undefined
                })
            )}
            editField={editField}
            expandField={expandField}
            subItemsField={subItemsField}
            cellRender={renderers.cellRender}
            rowRender={renderers.rowRender}
            onItemChange={itemChange}
            onExpandChange={onExpandChange}
            columns={columns.map((column) => ({
                ...column,
                editCell: editItemField === column.field ? column.editCell : undefined
            }))}
            toolbar={
                <TreeListToolbar>
                    <Button type="button" title="Save Changes" onClick={saveChanges} disabled={!changes}>
                        Save Changes
                    </Button>
                    <Button type="button" title="Cancel Changes" onClick={cancelChanges} disabled={!changes}>
                        Cancel Changes
                    </Button>
                </TreeListToolbar>
            }
        />
    );
};

export default App;
