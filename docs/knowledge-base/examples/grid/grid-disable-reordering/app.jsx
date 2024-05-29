import * as React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-products.json';

const App = () => {
  const [locked, setLocked] = React.useState(false);

  const handleClick = () => {
    setLocked(!locked);
  };
  
  return (
    <div>
      <div className="mb-3">
        <div className="mb-2">
          <Button themeColor={'primary'} onClick={handleClick}>
            Lock / Unlock Additional details Column
          </Button>
        </div>

        <div
          className={
            'w-50 alert ' + (locked ? 'alert-success' : 'alert-danger')
          }
        >
          The Additional details Column is
          <strong className="text-muted">
            {locked ? ' Frozen' : ' Unfrozen'}
          </strong>
        </div>
      </div>
      <Grid
        style={{
          height: 350,
        }}
        data={products}
        reorderable={true}
      >
        <Column
          field="ProductID"
          title="Id"
          width="45px"
          locked={true}
          orderIndex={0}
        />
        <Column
          field="UnitsInStock"
          title="Units"
          width="90px"
          locked={true}
          orderIndex={0}
        />
        <Column
          field="Category.CategoryName"
          title="CategoryName"
          width="250px"
        />
        <Column field="UnitPrice" title="Price" width="90px" />

        <Column field="UnitsOnOrder" title="On order" width="90px" />
        <Column field="Discontinued" width="120px" />
        <Column
          field="QuantityPerUnit"
          title="Additional details"
          width="250px"
          locked={locked}
        />
      </Grid>
    </div>
  );
};

export default App;
