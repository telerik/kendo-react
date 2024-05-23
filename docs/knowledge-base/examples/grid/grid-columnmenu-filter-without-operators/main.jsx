import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ColumnMenuWithoutOperators } from './columnMenu';
import './styles.css';
const products = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    UnitPrice: 18.0,
    Discontinued: false,
  },
  {
    ProductID: 2,
    ProductName: 'Chai2',
    UnitPrice: 12.0,
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
  });
  const [result, setResult] = React.useState(initialState.result);
  const [dataState, setDataState] = React.useState(initialState.dataState);

  const dataStateChange = (event) => {
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
        columnMenu={ColumnMenuWithoutOperators}
      />
      <Column field="ProductName" columnMenu={ColumnMenuWithoutOperators} />
      <Column
        field="UnitPrice"
        filter={'numeric'}
        columnMenu={ColumnMenuWithoutOperators}
      />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
