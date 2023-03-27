import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { process } from '@progress/kendo-data-query';
import {
  setExpandedState,
  setGroupIds,
} from '@progress/kendo-react-data-tools';
import products from './products.json';
const initialDataState = {};

const processWithGroups = (data, dataState) => {
  const newDataState = process(data, dataState);
  setGroupIds({
    data: newDataState.data,
    group: dataState.group,
  });
  return newDataState;
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
        const newCollapsedIds = !event.value
          ? [...collapsedState, item.groupId]
          : collapsedState.filter((groupId) => groupId !== item.groupId);
        setCollapsedState(newCollapsedIds);
      }
    },
    [collapsedState]
  );
  const newData = setExpandedState({
    data: resultState.data,
    collapsedIds: collapsedState,
  });

  const dropDownChange = (event) => {
    const newState = {
      ...dataState,
      skip: 0,
      filter: {
        logic: 'and',
        filters: [
          {
            field: 'ProductName',
            operator: 'contains',
            value: event.value,
          },
        ],
      },
    };
    setDataState(newState);
    setResultState(processWithGroups(products, newState));
  };

  const [filterKey, setFilterKey] = React.useState(new Date());
  const clearFilters = ev =>{
    const newState = {
      ...dataState, 
      filter: null,
    };
    setDataState(newState);
    setResultState(processWithGroups(products, newState));
    //clearing DropDownList value
    setFilterKey(new Date());
  }
  return ( 
    <>
      <DropDownList key={filterKey}
        data={products.map(item=> item.ProductName)}
        onChange={dropDownChange}
      />
      <Button onClick={clearFilters}>Clear</Button>
      <Grid
        style={{
          height: '520px', 
        }}
        pageable={{
          pageSizes: true,
        }}
        groupable={true}
        data={newData}
        total={resultState.total}
        onDataStateChange={onDataStateChange}
        {...dataState}
        onExpandChange={onExpandChange}
        expandField="expanded"
      >
        <Column field="ProductID" filterable={false} title="ID" width="50px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" filter="numeric" />
        <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
        <Column field="Category.CategoryName" title="Category Name" />
      </Grid>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
