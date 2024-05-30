import * as React from 'react';
import {
  TreeList,
  mapTree,
  extendDataItem,
} from '@progress/kendo-react-treelist';
import employees from './data';
const subItemsField = 'employees';
const expandField = 'expanded';
const columns = [
  {
    field: 'name',
    title: 'Name',
    width: '310px',
    expandable: true,
    key: 1,
  },
  {
    field: 'position',
    title: 'Position',
    width: '260px',
    locked: true,
    key: 2,
  },
  {
    field: 'hireDate',
    title: 'Hire Date',
    width: '160px',
    format: '{0:d}',
    key: 3,
  },
  {
    field: 'timeInPosition',
    title: 'Year(s) in Position',
    width: '160px',
    key: 4,
  },
  {
    field: 'fullTime',
    title: 'Full Time',
    width: '150px',
    key: 5,
  },
];

const App = () => {
  const [state, setState] = React.useState({
    expanded: [1, 2, 32],
    columns,
  });
  const table = React.useRef();

  const onColumnResize = (event) => {
    //setting the sum of all columns width to the table element
    if (table) {
      table.current.element.children[0].style.width = `${event.totalWidth}px`;
      setState({ ...state, columns: event.columns });
    }

    if (event.end) {
      setState({ ...state, columns: event.columns });
    }
  };

  const onExpandChange = (e) => {
    setState({
      ...state,
      expanded: e.value
        ? state.expanded.filter((id) => id !== e.dataItem.id)
        : [...state.expanded, e.dataItem.id],
    });
  };

  const addExpandField = (dataTree) => {
    const expanded = state.expanded;
    return mapTree(dataTree, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id),
      })
    );
  };

  return (
    <TreeList
      ref={table}
      tableProps={{
        ref: table,
        style: {
          width: '1040px',
        },
      }}
      style={{
        maxHeight: '510px',
        width: '720px',
        overflow: 'auto',
      }}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      data={addExpandField(employees)}
      columns={state.columns}
      resizable={true}
      onColumnResize={onColumnResize}
    />
  );
};

export default App;
