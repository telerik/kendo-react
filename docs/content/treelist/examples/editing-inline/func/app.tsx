import * as React from 'react';
import {
    TreeList,
    TreeListToolbar,
    mapTree,
    extendDataItem,
    removeItems,
    modifySubItems,
    TreeListColumnProps,
    TreeListTextEditor,
    TreeListBooleanEditor,
    TreeListItemChangeEvent,
    TreeListExpandChangeEvent
} from '@progress/kendo-react-treelist';
import MyCommandCell from './my-command-cell';
import employees from './shared-tl-data';
import { Employee } from './shared-tl-interfaces';
import { Button } from '@progress/kendo-react-buttons';

const subItemsField: string = 'employees';
const expandField: string = 'expanded';
const editField: string = 'inEdit';

interface AppState {
    data: Employee[];
    expanded: number[];
    inEdit: Array<{ id: number; isNew: boolean }>;
}

const App = () => {
    const [state, setState] = React.useState<AppState>({
        data: employees.slice(),
        expanded: [1, 2, 32],
        inEdit: []
    });

    const addChild = (dataItem: Employee) => {
        const newRecord = createNewItem();

        setState({
            ...state,
            inEdit: [...state.inEdit, newRecord],
            expanded: [...state.expanded, dataItem.id],
            data: modifySubItems(
                state.data,
                subItemsField,
                (item) => item.id === dataItem.id,
                (subItems) => [newRecord, ...subItems]
            )
        });
    };

    const enterEdit = (dataItem: Employee) => {
        setState({
            ...state,
            inEdit: [...state.inEdit, extendDataItem(dataItem, subItemsField)]
        });
    };

    const save = (dataItem: Employee) => {
        const { isNew, inEdit, ...itemToSave } = dataItem;
        setState({
            ...state,
            data: mapTree(state.data, subItemsField, (item) => (item.id === itemToSave.id ? itemToSave : item)),
            inEdit: state.inEdit.filter((i) => i.id !== itemToSave.id)
        });
    };

    const cancel = (editedItem: Employee) => {
        const { inEdit, data } = state;
        if (editedItem.isNew) {
            return remove(editedItem);
        }

        setState({
            ...state,
            data: mapTree(data, subItemsField, (item) =>
                item.id === editedItem.id ? inEdit.find((i) => i.id === item.id) : item
            ),
            inEdit: inEdit.filter((i) => i.id !== editedItem.id)
        });
    };

    const remove = (dataItem: Employee) => {
        setState({
            ...state,
            data: removeItems(state.data, subItemsField, (i) => i.id === dataItem.id),
            inEdit: state.inEdit.filter((i) => i.id !== dataItem.id)
        });
    };

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setState({
            ...state,
            expanded: e.value ? state.expanded.filter((id) => id !== e.dataItem.id) : [...state.expanded, e.dataItem.id]
        });
    };

    const onItemChange = (event: TreeListItemChangeEvent) => {
        const field: any = event.field;
        setState({
            ...state,
            data: mapTree(state.data, subItemsField, (item) =>
                item.id === event.dataItem.id ? extendDataItem(item, subItemsField, { [field]: event.value }) : item
            )
        });
    };

    const addRecord = () => {
        const newRecord: { id: number; isNew: boolean } = createNewItem();
        setState({
            ...state,
            data: [newRecord, ...state.data],
            inEdit: [...state.inEdit, { ...newRecord }]
        });
    };

    const createNewItem = () => {
        const timestamp: number = new Date().getTime();
        return { id: timestamp, isNew: true };
    };

    const CommandCell = MyCommandCell(enterEdit, remove, save, cancel, addChild, editField);

    const columns: Array<TreeListColumnProps | {}> = [
        { field: 'name', title: 'Name', width: '280px', editCell: TreeListTextEditor, expandable: true },
        { field: 'position', title: 'Position', width: '260px', editCell: TreeListTextEditor },
        { field: 'fullTime', title: 'Full Time', width: '160px', editCell: TreeListBooleanEditor },
        { cell: CommandCell, width: '360px' }
    ];

    const { data, expanded, inEdit } = state;

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            data={mapTree(data, subItemsField, (item) =>
                extendDataItem(item, subItemsField, {
                    [expandField]: expanded.includes(item.id),
                    [editField]: Boolean(inEdit.find((i) => i.id === item.id))
                })
            )}
            editField={editField}
            expandField={expandField}
            subItemsField={subItemsField}
            onItemChange={onItemChange}
            onExpandChange={onExpandChange}
            columns={columns}
            toolbar={
                <TreeListToolbar>
                    <Button type="button" title="Add new" themeColor={'primary'} onClick={addRecord}>
                        Add new
                    </Button>
                </TreeListToolbar>
            }
        />
    );
};

export default App;
