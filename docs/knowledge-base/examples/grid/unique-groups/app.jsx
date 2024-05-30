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
const App = () => {
  const [group, setGroup] = React.useState(initialGroup);
  const [resultState, setResultState] = React.useState(
    processWithGroups(products, initialGroup)
  );
  const [collapsedState, setCollapsedState] = React.useState([]);
  const onGroupChange = React.useCallback(
    (event) => {
      let groupExists = false;
      const newGroup =
        event.group.length >= 0 && event.group[event.group.length - 1];
      newGroup &&
        group.map((g) => {
          if (newGroup.field === g.field) {
            groupExists = true;
          }
        });

      if (!groupExists || event.nativeEvent) {
        const newDataState = processWithGroups(products, event.group);
        setGroup(event.group);
        setResultState(newDataState);
      }
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
