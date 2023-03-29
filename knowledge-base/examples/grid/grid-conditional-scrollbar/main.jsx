import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
const initialDataState = {
  skip: 0,
  take: 10,
};

const App = () => {
  const [page, setPage] = React.useState(initialDataState);
  const [scrollable, setScrollable] = React.useState(
    initialDataState.take > 10 ? 'scrollable' : 'none'
  );
  const pageChange = (event) => {
    setPage(event.page);
    event.page.take > 10 ? setScrollable('scrollable') : setScrollable('none');
  };

  return (
    <div>
      <Grid
        scrollable={scrollable}
        style={{
          maxHeight: '446px',
        }}
        rowHeight={35} //this setting is not mandatory, but with the maxHeight of 446px and default theme, the height of 10 items will be exactly 446px and enabling the scrollable will keep the same height
        data={products.slice(page.skip, page.take + page.skip)}
        skip={page.skip}
        take={page.take}
        total={products.length}
        pageable={{ 
          buttonCount: 5,
          info: true,
          type: 'numeric',
          pageSizes: true,
          previousNext: true,
        }}
        onPageChange={pageChange}
      >
        <GridColumn field="ProductID" width="110px" />
        <GridColumn field="ProductName" title="Product Name" width="300px" />
        <GridColumn field="UnitPrice" title="Unit Price" />
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
