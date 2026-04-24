import React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <Grid
            style={{
                height: '400px'
            }}
            data={products}
        >
            <GridColumn field="ProductID" title="ID" width="40px" />
            <GridColumn field="ProductName" title="Product Name" width="240px" />
            <GridColumn field="Category" title="Category">
                <GridColumn field="Category.CategoryName" title="Name" width="150px" />
                <GridColumn field="Category.Description" title="Description" />
            </GridColumn>
        </Grid>
    );
};

export default App;
