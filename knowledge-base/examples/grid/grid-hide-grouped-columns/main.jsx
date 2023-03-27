import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { process } from '@progress/kendo-data-query';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';
import {
  setGroupIds,
  getGroupIds,
  setExpandedState,
} from '@progress/kendo-react-data-tools';

import products from './products.json';
import { Product } from './interfaces';

const initialDataState = {
  take: 10,
  skip: 0,
  group: [{ field: 'Category.CategoryName' }],
};

const processWithGroups = (data, dataState) => {
  const newDataState = process(data, dataState);

  setGroupIds({ data: newDataState.data, group: dataState.group });

  return newDataState;
};

let columns = [
  {
    field: 'Category.CategoryName',
    title: 'Category Name',
    show: false,
  },
  {
    field: 'ProductID',
    title: 'ID',
    show: true,
  },
  {
    field: 'ProductName',
    title: 'Product Name',
    show: true,
  },
  {
    field: 'UnitPrice',
    title: 'Unit Price',
    show: true,
  },
];

const App = () => {
  const [stateColumns, setStateColumns] = React.useState(columns);
  const [dataState, setDataState] = React.useState(initialDataState);
  const [resultState, setResultState] = React.useState(
    processWithGroups(products, initialDataState)
  );
  const [collapsedState, setCollapsedState] = React.useState([]);

  const onDataStateChange = React.useCallback((event) => {
    const newDataState = processWithGroups(products, event.dataState);

    if (
      event.dataState.group &&
      columns.length > event.dataState.group.length
    ) {
      columns = columns.map((col) => {
        col.show = true;
        return col;
      });
      event.dataState.group.forEach((group) => {
        for (let i = 0; i < columns.length; i++) {
          if (group.field == columns[i].field) {
            console.log(group.field);
            columns[i].show = false;
          }
        }
      });
      setStateColumns(columns);
    }

    setDataState(event.dataState);
    setResultState(newDataState);
  }, []);

  const onExpandChange = React.useCallback(
    (event) => {
      const item = event.dataItem;

      if (item.groupId) {
        const collapsedIds = !event.value
          ? [...collapsedState, item.groupId]
          : collapsedState.filter((groupId) => groupId !== item.groupId);
        setCollapsedState(collapsedIds);
      }
    },
    [collapsedState]
  );

  const onGroupsToggle = React.useCallback(() => {
    const dataStateWithoutPaging = processWithGroups(products, {
      group: dataState.group,
    });

    setCollapsedState(
      collapsedState.length
        ? []
        : getGroupIds({ data: dataStateWithoutPaging.data })
    );
  }, [collapsedState, dataState]);

  const newData = setExpandedState({
    data: resultState.data,
    collapsedIds: collapsedState,
  });

  return (
    <Grid
      style={{ height: '520px' }}
      pageable={{ pageSizes: true }}
      groupable={true}
      data={newData}
      total={resultState.total}
      onDataStateChange={onDataStateChange}
      {...dataState}
      onExpandChange={onExpandChange}
      expandField="expanded"
    >
      <GridToolbar>
        <button className="k-button k-primary" onClick={onGroupsToggle}>
          {collapsedState.length ? 'Expand' : 'Collapse'} Groups
        </button>
      </GridToolbar>
      {stateColumns.map(
        (column, idx) =>
          column.show && (
            <Column key={idx} field={column.field} title={column.title} />
          )
      )}
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
