import * as React from 'react';
import { Grid, GridColumn as Column, GridRowPinChangeEvent } from '@progress/kendo-react-grid';
import products from './gd-products';
import { Product } from './gd-interfaces';

const App = () => {
    const [pinnedTop, setPinnedTop] = React.useState<Product[]>([products[0], products[1]]);
    const [pinnedBottom, setPinnedBottom] = React.useState<Product[]>([products[products.length - 1]]);

    const handleRowPinChange = React.useCallback((event: GridRowPinChangeEvent) => {
        setPinnedTop(event.pinnedTopRows);
        setPinnedBottom(event.pinnedBottomRows);
    }, []);

    return (
        <Grid
            style={{ height: '400px' }}
            data={products}
            dataItemKey="ProductID"
            pinnable={true}
            contextMenu={true}
            pinnedTopRows={pinnedTop}
            pinnedBottomRows={pinnedBottom}
            onRowPinChange={handleRowPinChange}
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
