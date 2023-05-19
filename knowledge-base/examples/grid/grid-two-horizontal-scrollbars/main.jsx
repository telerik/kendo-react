import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './sample-products';
const initialFilter = {
  logic: 'and',
  filters: [
    {
      field: 'ProductName',
      operator: 'contains',
      value: 'Chef',
    },
  ],
};

const App = () => {
  const [filter, setFilter] = React.useState(initialFilter);
  React.useEffect(() => {
    let innerScrollDiv = document.querySelector('#inner-scroll-div');
    let gridContainer = document.querySelector('.k-grid-content .k-grid-table');
    innerScrollDiv.style.width = gridContainer.clientWidth + 'px';
  }, []);

  const onGridScroll = (ev) => {
    let fakeScrollDiv = document.querySelector('#fake-scroll');
    let scrollLeft = ev.nativeEvent.target.scrollLeft;
    fakeScrollDiv.scrollLeft = scrollLeft;
  };

  const onFakeScroll = (ev) => {
    let gridScrollDiv = document.querySelector('.k-grid-content');
    let scrollLeft = ev.target.scrollLeft;
    gridScrollDiv.scrollLeft = scrollLeft;
  };
  return (
    <div style={{ width: '400px', backgroundColor: '#eee' }}>
      <div
        onScroll={onFakeScroll}
        id={'fake-scroll'}
        style={{ height: '18px', overflowX: 'scroll', marginRight: '17px' }}
      >
        <div id={'inner-scroll-div'}></div>
      </div>
      <Grid
        onScroll={onGridScroll}
        style={{
          height: '420px',
        }}
        data={filterBy(sampleProducts, filter)}
        filterable={true}
        filter={filter}
        onFilterChange={(e) => setFilter(e.filter)}
      >
        <Column field="ProductID" title="ID" filterable={false} width="60px" />
        <Column field="ProductName" title="Product Name" width="240px" />
        <Column
          field="FirstOrderedOn"
          width="240px"
          filter="date"
          format="{0:d}"
        />
        <Column
          field="UnitPrice"
          width="180px"
          filter="numeric"
          format="{0:c}"
        />
        <Column field="Discontinued" width="190px" filter="boolean" />
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
