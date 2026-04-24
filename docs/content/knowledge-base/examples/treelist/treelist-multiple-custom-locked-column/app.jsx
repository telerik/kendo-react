import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    TreeList,
    mapTree,
    extendDataItem,
} from '@progress/kendo-react-treelist';
import employees from './data.js';
const subItemsField = 'employees';
const expandField = 'expanded';
const MyCell = (props) => {
    const { dataItem } = props;
    const field = props.field || '';
    const cellData = dataItem[field];
    return (
    <td
      className="k-table-td k-grid-content-sticky k-text-nowrap"
      role="gridCell"
      style={{
        left: '0px',
        right: '100px',
        borderRightWidth: '1px',
      }}
    >
      <span
        style={{
          color: cellData ? 'green' : 'red',
        }}
      >
        {String(cellData)}
      </span>
    </td>
    );
};

const MyCell2 = (props) => {
    const { dataItem } = props;
    const field = props.field || '';
    const cellData = dataItem[field];
    return (
    <td
      className="k-table-td k-grid-content-sticky"
      role="gridCell"
      colSpan={1}
      style={{
        left: '0px',
        right: '0px',
        borderRightWidth: '1px',
      }}
    >
      <span
        style={{
          color: cellData ? 'green' : 'red',
        }}
      >
        {String(cellData)}
      </span>
    </td>
    );
};
const columns = [
    {
        field: 'fullTime',
        title: 'Full Time',
        //width: '100px',
        cell: MyCell,
        locked: true,
    },
    {
        field: 'name',
        title: 'Name',
        //width: '300px',
        expandable: true,
        locked: true,
        cell: MyCell2,
    },
    {
        field: 'position',
        title: 'Position',
        width: '300px',
    },
    {
        field: 'hireDate',
        title: 'Hire Date',
        width: '200px',
        format: '{0:d}',
    },
    {
        field: 'phone',
        title: 'Phone',
        width: '200px',
    },
    {
        field: 'extension',
        title: 'Extension',
        width: '200px',
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px',
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px',
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px',
    },
    {
        field: 'fullTime',
        title: 'Full Time',
        width: '100px',
    },
];
const App = () => {
    const [state, setState] = React.useState({
        data: [...employees],
        expanded: [],
    });
    const onExpandChange = (e) => {
        setState({
            ...state,
            expanded: e.value
                ? state.expanded.filter((id) => id !== e.dataItem.id)
                : [...state.expanded, e.dataItem.id],
        });
    };
    const updateFields = (dataArr) => {
        const { expanded } = state;
        return mapTree(dataArr, subItemsField, (item) =>
            extendDataItem(item, subItemsField, {
                expanded: expanded.includes(item.id),
            })
        );
    };
    return (
    <TreeList
      style={{
        maxHeight: '510px',
        overflow: 'auto',
        width: '600px',
      }}
      data={updateFields(state.data)}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      columns={columns}
    />
    );
};

export default App;
