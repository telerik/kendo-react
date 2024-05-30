import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { groupBy } from '@progress/kendo-data-query';
import {
  setExpandedState,
  setGroupIds,
} from '@progress/kendo-react-data-tools';
import products from './shared-products.json';
const initialGroup = [
  {
    field: 'UnitsInStock',
  },
  {
    field: 'ProductName',
  },
];
const processWithGroups = (data, group) => {
  const newDataState = groupBy(data, group);
  setGroupIds({
    data: newDataState,
    group: group,
  });
  return newDataState;
};

const CustomCell = (props) => {
  return (
    props.tdProps && (
      <td
        {...props.tdProps}
        style={{
          backgroundColor: props.color,
        }}
      >
        {props.children && (
          <p className="k-reset">
            {props.children.props.children[0]}
            {props.dataItem.items.length}:{props.dataItem[props.field]}
          </p>
        )}
      </td>
    )
  );
};

const GroupMyHeaderCustomCell = (props) => (
  <CustomCell {...props} color="lightblue" />
);

const App = () => {
  const [group, setGroup] = React.useState(initialGroup);
  const [resultState, setResultState] = React.useState(
    processWithGroups(products, initialGroup)
  );
  const [collapsedState, setCollapsedState] = React.useState([]);
  const onGroupChange = React.useCallback(
    (event) => {
      const newDataState = processWithGroups(products, event.group);
      setGroup(event.group);
      setResultState(newDataState);
    },
    [group]
  );
  const onExpandChange = React.useCallback(
    (event) => {
      const item = event.dataItem;
      if (item.groupId) {
        const newCollapsedIds = !event.value
          ? [...collapsedState, item.groupId]
          : collapsedState.filter((groupId) => groupId !== item.groupId);
        setCollapsedState(newCollapsedIds);
      }
    },
    [collapsedState]
  );
  const newData = setExpandedState({ 
    data: resultState,
    collapsedIds: collapsedState,
  });
  return (
    <Grid
      style={{
        height: '520px',
      }}
      groupable={true}
      data={newData}
      onGroupChange={onGroupChange}
      group={group}
      onExpandChange={onExpandChange}
      expandField="expanded"
      cells={{
        group: {
          groupHeader: GroupMyHeaderCustomCell,
        },
      }}
    >
      <Column field="ProductID" filterable={false} title="ID" width="50px" />
      <Column field="ProductName" title="Product Name" />
      <Column field="UnitPrice" title="Unit Price" filter="numeric" />
      <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
      <Column field="Category.CategoryName" title="Category Name" />
    </Grid>
  );
};
export default App;
