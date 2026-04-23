import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <div className="example-config">
            <p>The resizing of the "Product Name" column is limited between 300px and 500px.</p>

            <Grid style={{ height: '300px' }} data={products} resizable={true}>
                <GridColumn field="ProductID" title="ID" width="50px" />
                <GridColumn field="ProductName" title="Product Name" width="360px" minWidth={300} maxWidth={500} />
                <GridColumn field="Category.CategoryName" title="Category" width="180px" />
                <GridColumn field="UnitPrice" title="Price" width="180px" filter="numeric" format="{0:c}" />
                <GridColumn field="UnitsInStock" title="Stock" width="200px" />
            </Grid>
        </div>
    );
};

export default App;
