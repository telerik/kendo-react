import * as React from 'react';
import {
  TreeList,
  TreeListToolbar,
  mapTree,
  extendDataItem,
  removeItems,
  modifySubItems,
  TreeListTextEditor,
  TreeListBooleanEditor,
} from '@progress/kendo-react-treelist';
import MyCommandCell from './my-command-cell';
import employees from './data';
const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';

const MyContext = React.createContext({
  currentIDToFocus: () => {},
});

const getAdditionalProps = (cellField, dataItem) => {
  const currentContext = React.useContext(MyContext);
  const activeElement = document.activeElement;
  
  //change 'name' with the field that you want to focus
  return cellField &&
    cellField === 'name' && 
    dataItem.id == currentContext.currentIDToFocus //checking if the dataItem is the same as the last item opened for editing
    ? {
        ref: (td) => {
          const input = td && td.querySelector('input');
          currentContext.setCurrentIDToFocus(null);
          if (!input || activeElement == input) {
            return;
          }

          if (input.type === 'checkbox') {
            input.focus();
          } else {
            input.select();
          }
        },
      }
    : null;
};
const CellRender = (cell, props) => {
  const dataItem = props.dataItem;
  const cellField = props.field;
  const additionalProps = getAdditionalProps(cellField, dataItem);

  const clonedProps = { ...cell.props, ...additionalProps };
  return React.cloneElement(cell, clonedProps, cell.props.children);
};

const App = () => {
  const [state, setState] = React.useState({
    data: employees.slice(),
    expanded: [1, 2, 32],
    inEdit: [],
  });

  const [currentIDToFocus, setCurrentIDToFocus] = React.useState(null);
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
    if (dataItem != null) {
      //Updating the state with the newly edited ID
      setCurrentIDToFocus(dataItem.id);
    }
    setState({
      ...state,
      inEdit: [...state.inEdit, extendDataItem(dataItem, subItemsField)],
    });
  };

  const save = (dataItem) => {
    const { isNew, inEdit, ...itemToSave } = dataItem;
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
      inEdit: [...state.inEdit, { ...newRecord }],
    });
  };

  const createNewItem = () => {
    const timestamp = new Date().getTime();
    //Here we need an unique ID for the new item
    //We are setting a timestamp, but should be replaced with the corresponding logic for setting the ID value
    setCurrentIDToFocus(timestamp);
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
      width: 280,
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'position',
      title: 'position',
      width: 280,
      editCell: TreeListTextEditor,
    },
    {
      cell: CommandCell,
      width: 360,
    },
  ];
  const { data, expanded, inEdit } = state;

  return (
    <MyContext.Provider
      value={{
        currentIDToFocus: currentIDToFocus,
        setCurrentIDToFocus: setCurrentIDToFocus,
      }}
    >
      <TreeList
        cellRender={CellRender}
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
        navigatable={true}
        toolbar={
          <TreeListToolbar>
            <button
              title="Add new"
              className="k-button k-primary"
              onClick={addRecord}
            >
              Add new
            </button>
          </TreeListToolbar>
        }
      />
    </MyContext.Provider>
  );
};

export default App;
