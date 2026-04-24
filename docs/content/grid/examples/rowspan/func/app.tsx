import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    const style = `
    td[rowspan="2"] {
        background-color: lavender;
    }
    td[rowspan="4"] {
        background-color: lavenderblush;
    }`;

    return (
        <div>
            <style>{style}</style>
            <Grid style={{ height: '500px' }} data={products} rowSpannable={true}>
                <Column field="ProductID" title="ID" width="60px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" width="80px" />
                <Column field="UnitsInStock" title="In stock" width="80px" />
                <Column field="Discontinued" width="120px" />
            </Grid>
        </div>
    );
};

export default App;
