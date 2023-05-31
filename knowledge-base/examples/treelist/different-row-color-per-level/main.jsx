import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TreeList,
  orderBy,
  filterBy,
  mapTree,
  extendDataItem,
  TreeListTextFilter,
  TreeListNumericFilter,
  TreeListDateFilter,
  TreeListBooleanFilter,
} from '@progress/kendo-react-treelist';
import employees from './data';
const subItemsField = 'employees';
const expandField = 'expanded';
const columns = [
  {
    field: 'name',
    title: 'Name',
    width: '250px',
    filter: TreeListTextFilter,
    expandable: true,
  },
  {
    field: 'hireDate',
    title: 'Hire Date',
    width: '200px',
    format: '{0:d}',
    filter: TreeListDateFilter,
  },
  {
    field: 'timeInPosition',
    title: 'Year(s) in Position',
    width: '200px',
    filter: TreeListNumericFilter,
  },
  {
    field: 'fullTime',
    title: 'Full Time',
    width: '100px',
    filter: TreeListBooleanFilter,
  },
];
const App = () => {
  const [state, setState] = React.useState({
    data: [...employees],
    dataState: {
      sort: [
        {
          field: 'name',
          dir: 'asc',
        },
      ],
      filter: [],
    },
    expanded: [1, 2, 32],
  });
  const onExpandChange = (e) => {
    setState({
      ...state,
      expanded: e.value
        ? state.expanded.filter((id) => id !== e.dataItem.id)
        : [...state.expanded, e.dataItem.id],
    });
  };
  const handleDataStateChange = (event) => {
    setState({
      ...state,
      dataState: event.dataState,
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
  const processData = () => {
    let { data, dataState } = state;
    let filteredData = filterBy(data, dataState.filter, subItemsField);
    let sortedData = orderBy(filteredData, dataState.sort, subItemsField);
    return addExpandField(sortedData);
  };

  const rowRender = (row, props) => {
    let color = '#fff';
    let level = props.level.length;
    switch (level) {
      case 1:
        color = '#ccc';
        break;
      case 2:
        color = '#ddd';
        break;
      case 3:
        color = '#eee';
        break;
      default:
        color = '#fff';
    }
    let style = { ...row.props.style, backgroundColor: color };
    return <tr {...row.props} style={style}></tr>;
  };
  return (
    <TreeList
      rowRender={rowRender}
      style={{
        maxHeight: '510px',
        overflow: 'auto',
      }}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      sortable={{
        mode: 'multiple',
      }}
      {...state.dataState}
      data={processData()}
      onDataStateChange={handleDataStateChange}
      columns={columns}
    />
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
