import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <Grid
            style={{ height: '400px' }}
            data={products}
            dataItemKey="ProductID"
            pinnable={true}
            contextMenu={true}
            defaultPinnedTopRows={[products[0], products[1]]}
            defaultPinnedBottomRows={[products[products.length - 1]]}
        >
            <Column columnType="pin" />
            <Column field="ProductID" title="ID" width="80px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" format="{0:c}" width="120px" />
            <Column field="UnitsInStock" title="Units In Stock" width="130px" />
            <Column field="Category.CategoryName" title="Category" />
        </Grid>
    );
};

export default App;
