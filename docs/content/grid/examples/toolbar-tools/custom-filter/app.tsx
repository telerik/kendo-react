import * as React from 'react';
import { Grid, GridToolbar, GridToolbarFilter, GridColumn as Column } from '@progress/kendo-react-grid';
import { CustomFilterUI } from './customFilerUI';
import products from './products';

const App = () => {
    return (
        <Grid
            style={{ height: '370px' }}
            adaptive={true}
            dataItemKey="ProductID"
            data={products}
            autoProcessData={true}
            navigatable={true}
        >
            <GridToolbar>
                <GridToolbarFilter filterUI={CustomFilterUI} />
            </GridToolbar>
            <Column field="ProductID" title="ID" filterable={false} width="40px" />
            <Column field="ProductName" title="Product Name" filterable={false} width="240px" />
            <Column field="UnitPrice" filter={'numeric'} filterable={false} />
            <Column field="Discontinued" filter={'boolean'} />
        </Grid>
    );
};

export default App;
