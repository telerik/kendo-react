import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TreeList,
  TreeListToolbar,
  mapTree,
  extendDataItem,
  removeItems,
  modifySubItems,
  TreeListTextEditor,
  //TreeListBooleanEditor,
} from '@progress/kendo-react-treelist';
import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import MyCommandCell from './my-command-cell';
import employees from './data';
const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';

const App = () => {
  const [state, setState] = React.useState({
    data: employees.slice(),
    expanded: [1, 2, 32],
    inEdit: [],
  });

  const [isValid, setIsValid] = React.useState(true);

  const MyCell = React.useCallback((props) => {
    console.log(props);
    let isValid = true;
    if (props.dataItem[props.field]) {
      if (props.dataItem[props.field].length <= 4) {
        isValid = false;
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else {
      isValid = false;
      setIsValid(false);
    }

    const handleOnChange = (e) => {
      props.onChange({
        dataItem: props.dataItem,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.value,
      });
    };
    return (
      <td>
        <Input
          required
          value={props.dataItem[props.field]}
          onChange={handleOnChange}
          valid={isValid ? true : false}
        />
        {!isValid && <Error>This is not valid</Error>}
      </td>
    );
  }, []);

  const addChild = (dataItem) => {
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
      ),
    });
  };
  const enterEdit = (dataItem) => {
    setState({
      ...state,
      inEdit: [...state.inEdit, extendDataItem(dataItem, subItemsField)],
    });
  };
  const save = (dataItem) => {
    const { isNew, inEdit, ...itemToSave } = dataItem;
    isValid &&
      setState({
        ...state,
        data: mapTree(state.data, subItemsField, (item) =>
          item.id === itemToSave.id ? itemToSave : item
        ),
        inEdit: state.inEdit.filter((i) => i.id !== itemToSave.id),
      });
  };
  const cancel = (editedItem) => {
    const { inEdit, data } = state;
    if (editedItem.isNew) {
      return remove(editedItem);
    }
    setState({
      ...state,
      data: mapTree(data, subItemsField, (item) =>
        item.id === editedItem.id ? inEdit.find((i) => i.id === item.id) : item
      ),
      inEdit: inEdit.filter((i) => i.id !== editedItem.id),
    });
  };
  const remove = (dataItem) => {
    setState({
      ...state,
      data: removeItems(state.data, subItemsField, (i) => i.id === dataItem.id),
      inEdit: state.inEdit.filter((i) => i.id !== dataItem.id),
    });
  };
  const onExpandChange = (e) => {
    setState({
      ...state,
      expanded: e.value
        ? state.expanded.filter((id) => id !== e.dataItem.id)
        : [...state.expanded, e.dataItem.id],
    });
  };
  const onItemChange = (event) => {
    const field = event.field;
    setState({
      ...state,
      data: mapTree(state.data, subItemsField, (item) =>
        item.id === event.dataItem.id
          ? extendDataItem(item, subItemsField, {
              [field]: event.value,
            })
          : item
      ),
    });
  };
  const addRecord = () => {
    const newRecord = createNewItem();
    setState({
      ...state,
      data: [newRecord, ...state.data],
      inEdit: [
        ...state.inEdit,
        {
          ...newRecord,
        },
      ],
    });
  };
  const createNewItem = () => {
    const timestamp = new Date().getTime();
    return {
      id: timestamp,
      isNew: true,
    };
  };
  const CommandCell = MyCommandCell(
    enterEdit,
    remove,
    save,
    cancel,
    addChild,
    editField
  );
  const columns = [
    {
      field: 'name',
      title: 'Name',
      width: '280px',
      editCell: MyCell,
      expandable: true,
    },
    {
      cell: CommandCell,
      width: '360px',
    },
  ];
  const { data, expanded, inEdit } = state;
  return (
    <TreeList
      style={{
        maxHeight: '510px',
        overflow: 'auto',
      }}
      data={mapTree(data, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          [expandField]: expanded.includes(item.id),
          [editField]: Boolean(inEdit.find((i) => i.id === item.id)),
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
          <button
            title="Add new"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={addRecord}
          >
            Add new
          </button>
        </TreeListToolbar>
      }
    />
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
