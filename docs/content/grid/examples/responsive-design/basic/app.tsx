import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';

import React from 'react';
import { Switch } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
const App = () => {
    const [isProductNameHidden, setProductNameHiddenState] = React.useState<boolean>(false);

    return (
        <>
            <Label>
                Hide ProductName column: &nbsp;
                <Switch
                    checked={isProductNameHidden}
                    onChange={(e) => setProductNameHiddenState(e.value)}
                    onLabel={'on'}
                    offLabel={'off'}
                />
            </Label>
            <Grid
                style={{
                    height: '400px',
                    marginTop: '10px'
                }}
                data={products}
            >
                <GridColumn field="ProductID" title="ID" width="40px" />
                <GridColumn field="ProductName" title="Product Name" width="250px" hidden={isProductNameHidden} />
                <GridColumn field="Category.CategoryName" title="CategoryName" />
                <GridColumn field="UnitPrice" title="Price" media={'(min-width: 550px)'} />
                <GridColumn field="UnitsInStock" title="In stock" media={'(max-width: 700px)'} />
                <GridColumn field="UnitsInStockLarge" title="In stock" media={'(min-width: 1000px)'} />
                <GridColumn field="UnitPriceLarge" title="In stock" media={'(min-width: 1000px)'} />
            </Grid>
        </>
    );
};

export default App;
