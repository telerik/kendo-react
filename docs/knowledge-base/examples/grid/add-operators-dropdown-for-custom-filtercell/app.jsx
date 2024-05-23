import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { InputFilterCell } from './inputFilterCell';
import { sampleProducts } from './sample-products';
const categories = Array.from(
  new Set(
    sampleProducts.map((p) => (p.Category ? p.Category.CategoryName : ''))
  )
);
const CategoryFilterCell = (props) => (
  <InputFilterCell
    {...props}
    data={categories}
    defaultItem={'Select category'}
  />
);
const App = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [filter, setFilter] = React.useState();
  const filterChange = (event) => {
    setData(filterBy(sampleProducts, event.filter));
    setFilter(event.filter);
  };
  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={data}
      filterable={true}
      filter={filter}
      onFilterChange={filterChange}
    >
      <Column
        field="Category.CategoryName"
        title="Category Name"
        filterCell={CategoryFilterCell}
      />
    </Grid>
  );
};

export default App;