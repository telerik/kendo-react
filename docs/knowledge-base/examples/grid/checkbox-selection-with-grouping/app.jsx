import * as React from 'react';
import { getter } from '@progress/kendo-react-common';
import { process } from '@progress/kendo-data-query';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
  getSelectedState,
} from '@progress/kendo-react-grid';
import {
  setGroupIds,
  getGroupIds,
  setExpandedState,
} from '@progress/kendo-react-data-tools';

import products from './products.json';

const initialDataState = {
  take: 10,
  skip: 0,
  group: [
    { field: 'UnitsInStock' },
    { field: 'ProductName' },
    { field: 'UnitPrice' },
  ],
};

const processWithGroups = (data, dataState) => {
  const newDataState = process(data, dataState);

  setGroupIds({ data: newDataState.data, group: dataState.group });

  return newDataState;
};

const App = () => {
  const idGetter = getter('ProductID');
  const [currentSelectedState, setCurrentSelectedState] = React.useState({});
  const [dataState, setDataState] = React.useState(initialDataState);
  const [resultState, setResultState] = React.useState(
    processWithGroups(
      products.map((item) => ({
        ...item,
        ['selected']: currentSelectedState[idGetter(item)],
      })),
      initialDataState
    )
  );
  const [collapsedState, setCollapsedState] = React.useState([]);

  const onDataStateChange = React.useCallback((event) => {
    const newDataState = processWithGroups(
      products.map((item) => ({
        ...item,
        ['selected']: currentSelectedState[idGetter(item)],
      })),
      event.dataState
    );

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
    const dataStateWithoutPaging = processWithGroups(
      products.map((item) => ({
        ...item,
        ['selected']: currentSelectedState[idGetter(item)],
      })),
      {
        group: dataState.group,
      }
    );

    setCollapsedState(
      collapsedState.length
        ? []
        : getGroupIds({ data: dataStateWithoutPaging.data })
    );
  }, [collapsedState, dataState]);

  const setSelectedValue = (data) => {
    let newData = data.map((item) => {
      if (item.items) {
        return {
          ...item,
          items: setSelectedValue(item.items),
        };
      } else {
        return {
          ...item,
          ['selected']: currentSelectedState[idGetter(item)],
        };
      }
    });
    return newData;
  };

  const newData = setExpandedState({
    data: setSelectedValue(resultState.data),
    collapsedIds: collapsedState,
  });

  const onHeaderSelectionChange = React.useCallback((event) => {
    const checkboxElement = event.syntheticEvent.target;
    const checked = checkboxElement.checked;
    const newSelectedState = {};
    event.dataItems.forEach((item) => {
      newSelectedState[idGetter(item)] = checked;
    });
    setCurrentSelectedState(newSelectedState);
  }, []);

  const onSelectionChange = React.useCallback(
    (event) => {
      const newSelectedState = getSelectedState({
        event,
        selectedState: currentSelectedState,
        dataItemKey: 'ProductID',
      });
      setCurrentSelectedState(newSelectedState);
    },
    [currentSelectedState]
  );
  const getNumberOfItems = (data) => {
    let count = 0;
    data.forEach((item) => {
      if (item.items) {
        if (item.expanded) {
          count = count + getNumberOfItems(item.items);
        }
      } else {
        count++;
      }
    });
    return count;
  };
  const getNumberOfSelectedItems = (data) => {
    let count = 0;
    data.forEach((item) => {
      console.log(item);
      if (item.items) {
        if (item.expanded) {
          count = count + getNumberOfSelectedItems(item.items);
        }
      } else {
        count = count + (item.selected == true ? 1 : 0);
      }
    });
    return count;
  };
  const checkHeaderSelectionValue = () => {
    let selectedItems = getNumberOfSelectedItems(newData);
    return newData.length > 0 && selectedItems == getNumberOfItems(newData);
  };
  return (
    <Grid
      style={{ height: '620px' }}
      pageable={{ pageSizes: true }}
      groupable={true}
      data={newData}
      total={resultState.total}
      onDataStateChange={onDataStateChange}
      {...dataState}
      onExpandChange={onExpandChange}
      expandField="expanded"
      selectedField={'selected'}
      onHeaderSelectionChange={onHeaderSelectionChange}
      onSelectionChange={onSelectionChange}
      rowSelection={true}
    >
      <GridToolbar>
        <button className="k-button k-primary" onClick={onGroupsToggle}>
          {collapsedState.length ? 'Expand' : 'Collapse'} Groups
        </button>
      </GridToolbar>
      <Column
        field="selected"
        width={50}
        headerSelectionValue={checkHeaderSelectionValue()}
      />
      <Column field="ProductID" filterable={false} title="ID" width="50px" />
      <Column field="ProductName" title="Product Name" />
      <Column field="UnitPrice" title="Unit Price" filter="numeric" />
      <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
      <Column field="Category.CategoryName" title="Category Name" />
    </Grid>
  );
};

export default App;