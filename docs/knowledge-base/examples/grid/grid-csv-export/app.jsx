import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { CSVDownload, CSVLink } from 'react-csv';
import products from './products.json';
const initialDataState = {
  skip: 0,
  take: 10,
};
const App = () => {
  const [page, setPage] = React.useState(initialDataState);
  const [pageSizeValue, setPageSizeValue] = React.useState();
  const pageChange = (event) => {
    const targetEvent = event.syntheticEvent;
    const take =
      targetEvent.value === 'All' ? products.length : event.page.take;
    if (targetEvent.value) {
      setPageSizeValue(targetEvent.value);
    }
    setPage({
      ...event.page,
      take,
    });
  };
  return (
    <div>
      <CSVLink data={products}>Download me</CSVLink>
      <CSVDownload data={products} target="_blank" />
      <Grid
        style={{
          height: '400px',
        }}
        data={products.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={products.length}
        pageable={{
          buttonCount: 4,
          pageSizes: [5, 10, 15, 'All'],
          pageSizeValue: pageSizeValue,
        }}
        onPageChange={pageChange}
      >
        <GridColumn field="ProductID" />
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Unit Price" />
      </Grid>
    </div>
  );
};
export default App;
