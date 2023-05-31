import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { process } from '@progress/kendo-data-query';
import {
  Grid,
  GridColumn as Column,
  GridColumnMenuWrapper,
} from '@progress/kendo-react-grid';
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
  GridColumnMenuGroup,
} from '@progress/kendo-react-grid';

const products = [
  { ProductName: 'Name', ProductID: 1, UnitPrice: 5, Discontinued: true },
];

const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
      <GridColumnMenuGroup {...props} />
    </div>
  );
};

const customHeaderCell = (props) => {
  return (
    <>
      <span onClick={props.onClick} className={'k-cell-inner'}>
        <span className={'k-link'}>
          <span className={'k-column-title'}>{props.field}</span>{' '}
          {props.children}
        </span>
      </span>
      <GridColumnMenuWrapper {...props.columnMenuWrapperProps} />
    </>
  );
};
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
        columnMenu={ColumnMenu}
      />
      <Column
        field="ProductName"
        columnMenu={ColumnMenu}
        headerCell={customHeaderCell}
      />
      <Column field="UnitPrice" filter={'numeric'} columnMenu={ColumnMenu} />
      <Column field="Discontinued" filter={'boolean'} columnMenu={ColumnMenu} />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
