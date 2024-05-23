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
const initialDataState = {
  take: 10,
  skip: 0,
  group: [
    {
      field: 'ProductID',
    },
  ],
};

const processWithGroups = (data, dataState) => {
  const newDataState = process(data, dataState);
  setGroupIds({
    data: newDataState.data,
    group: dataState.group,
  });
  return newDataState;
};

const findFirstDataItem = (item) => {
  if (item.items && item.items.length > 0 && !item.items[0].groupId) {
    return item.items[0];
  } else {
    return findFirstDataItem(item.items[0]);
  }
};

const App = () => {
  const [dataState, setDataState] = React.useState(initialDataState);
  const [resultState, setResultState] = React.useState(
    processWithGroups(products, initialDataState)
  );
  const [collapsedState, setCollapsedState] = React.useState([]);
  const onDataStateChange = React.useCallback((event) => {
    const newDataState = processWithGroups(products, event.dataState);
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
        : getGroupIds({
            data: dataStateWithoutPaging.data,
          })
    );
  }, [collapsedState, dataState]);
  const newData = setExpandedState({
    data: resultState.data,
    collapsedIds: collapsedState,
  });

  const cellRender = (td, props) => {
    if (
      props.rowType == 'groupHeader' &&
      props.field == 'value' &&
      props.dataItem.field == 'ProductID' &&
      td
    ) {
      if (td.props.children) {
        let children = (
          <span>
            {td.props.children.props.children}:{' '}
            {findFirstDataItem(props.dataItem).ProductName}
          </span>
        );
        return React.cloneElement(td, td.props, children);
      }
    }
    return td;
  };
  return (
    <Grid
      style={{
        height: '520px',
      }}
      pageable={{
        pageSizes: true,
      }}
      cellRender={cellRender}
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
      <Column field="ProductID" filterable={false} title="ID" width="50px" />
      <Column field="ProductName" title="Product Name" />
      <Column field="UnitPrice" title="Unit Price" filter="numeric" />
      <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
      <Column field="Category.CategoryName" title="Category Name" />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
