import * as React from 'react';

import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ColumnMenu, ProductNameolumnMenuCheckboxFilter } from './columnMenu';
import products from './shared-products.json';

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
  });
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);

  const dataStateChange = (event) => {
    event.dataState.filter.filters.forEach((filter) => {
      filter.filters.forEach((innerFilter) => {
        if (innerFilter.field == 'ProductName') {
          //Change 'ProductName' with the field of the checkbox filter
          innerFilter.operator = 'contains';
        }
      });
    });
    let updatedState = createDataState(event.dataState);
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
    >
      <Column
        field="ProductID"
        title="Product Id"
        filter={'numeric'}
        columnMenu={ColumnMenu}
      />
      <Column
        field="ProductName"
        columnMenu={ProductNameolumnMenuCheckboxFilter}
      />
      <Column field="UnitPrice" filter={'numeric'} columnMenu={ColumnMenu} />
    </Grid>
  );
};

export default App;
