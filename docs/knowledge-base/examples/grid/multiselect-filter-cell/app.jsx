import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import products from './products.json';
import MultiSelectFilterCell from './multiSelectFilterCell';

const initialDataState = {
  sort: [
    {
      field: 'code',
      dir: 'asc',
    },
  ],
  take: 10,
  skip: 0,
};

const categories = Array.from(
  new Set(products.map((p) => p.Category.CategoryName))
);

const MyMultiSelectFilter = (props) => {
  return <MultiSelectFilterCell {...props} data={categories} />;
};

const App = () => {
  const [dataState, setDataState] = React.useState(initialDataState);
  return (
    <Grid
      pageable={true}
      sortable={true}
      filterable={true}
      style={{
        height: '400px',
      }}
      data={process(products, dataState)}
      {...dataState}
      onDataStateChange={(e) => {
        setDataState(e.dataState);
      }}
    >
      <Column field="ProductID" title="ID" width="50px" filterable={false} />
      <Column field="ProductName" title="Name" width="250px" />
      <Column
        field="Category.CategoryName"
        title="Category Name"
        filterCell={MyMultiSelectFilter}
        width="270px"
      />
      <Column
        field="UnitsInStock"
        title="In stock"
        filter="numeric"
        width="150px"
      />
    </Grid>
  );
};
export default App;
