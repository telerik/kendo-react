import * as React from 'react';

import { process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-react-buttons';
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from '@progress/kendo-react-grid';

let products = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    UnitPrice: 18.0,
    Discontinued: false,
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    UnitPrice: 11.0,
    Discontinued: false,
  },
];

const createDataState = (dataState) => {
  return {
    result: process(products.slice(0), dataState),
    dataState: dataState,
  };
};

const App = () => {
  let initialState = createDataState({
    take: 8,
    skip: 0,
    filter: {
      logic: 'and',
      filters: [
        {
          field: 'ProductName',
          operator: 'contains',
          value: 'Chai',
        },
        {
          field: 'ProductID',
          operator: 'eq',
          value: 1,
        },
      ],
    },
  });

  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);

  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  const clearFilters = (ev) => {
    let updatedState = createDataState({ ...dataState, filter: null }); //here the filter object is set to null
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  return (
    <Grid
      data={result}
      {...dataState}
      onDataStateChange={dataStateChange}
      sortable={true}
      pageable={true}
      pageSize={8}
      filterable={true}
    >
      <GridToolbar>
        <Button onClick={clearFilters}>Clear filters</Button>
      </GridToolbar>
      <Column field="ProductID" title="Product Id" filter={'numeric'} />
      <Column field="ProductName" />
      <Column field="UnitPrice" filter={'numeric'} />
      <Column field="Discontinued" filter={'boolean'} />
    </Grid>
  );
};

export default App;
