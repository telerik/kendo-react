import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy, process } from '@progress/kendo-data-query';
import { DropdownFilterCell } from './dropdownFilterCell';

const sampleProducts = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    SupplierID: 1,
    CategoryID: 1,
    Countries: ['USA', 'India', 'UK'],
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    SupplierID: 1,
    CategoryID: 1,
    Countries: ['UK', 'India'],
  },
];

const countries = ['UK', 'India', 'USA'];

const CategoryFilterCell = (props) => (
  <DropdownFilterCell
    {...props}
    data={countries}
    defaultItem={'Select category'}
  />
);

const arrayOperator = (value, originalOperator, current) => {
  if (value == '') return true;
  let result = filterBy(current, {
    logic: 'and',
    filters: [{ operator: originalOperator, value: value, ignoreCase: true }],
  });
  return result.length > 0;
};

const App = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [dataState, setDataState] = React.useState({});

  //Here we are replacing the default operator for the Countries filters with a custom one that will handle the array
  const onDataStateChange = (event) => {
    let newState = { ...event.dataState };
    if (event.dataState.filter) {
      newState.filter = { ...event.dataState.filter };
      newState.filter.filters = newState.filter.filters.map((item) => {
        if (item.field == 'Countries') {
          let newItem = { ...item };
          let originalOperator = newItem.operator;
          newItem.operator = arrayOperator.bind(
            undefined,
            item.value,
            originalOperator
          );
          return newItem;
        } else {
          return item;
        }
      });
    }
    setDataState(newState);
  };

  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={process(data, dataState)}
      filterable={true}
      {...dataState}
      onDataStateChange={onDataStateChange}
    >
      <Column
        field="Countries"
        title="Countries"
        filterCell={CategoryFilterCell}
      />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
