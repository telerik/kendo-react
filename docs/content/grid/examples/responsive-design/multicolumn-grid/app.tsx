import React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <>
            <div style={{ height: '300px' }}>
                <Grid
                    style={{
                        height: '100%'
                    }}
                    data={products}
                >
                    <GridColumn field="ProductID" title="ID" width="40px" />
                    <GridColumn field="ProductName" title="Name" width="250px" hidden={true} />
                    <GridColumn field="Category.CategoryName" title="CategoryName" hidden={false} />
                    <GridColumn field="UnitPrice" title="Price" media={'(min-width: 550px)'} />
                    <GridColumn field="UnitsInStock" title="In stock" media={'(max-width: 700px)'} />
                    <GridColumn field="UnitsInStockLarge" title="In stock" media={'(min-width: 1000px)'} />
                    <GridColumn field="UnitPriceLarge" title="In stock" media={'(min-width: 1000px)'} />
                </Grid>
            </div>
        </>
    );
};

export default App;
