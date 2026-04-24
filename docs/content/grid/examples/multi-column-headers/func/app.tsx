import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    return (
        <Grid style={{ height: '420px' }} resizable={true} reorderable={true} data={products.slice(0, 10)}>
            <Column field="ProductID" title="ID" width={40} resizable={false} />
            <Column title="Product Information">
                <Column field="ProductName" title="Name" />
                <Column title="Unit">
                    <Column field="UnitPrice" title="Price" />
                    <Column field="UnitsInStock" title="In Stock" />
                </Column>
            </Column>
            <Column
                title="Category"
                children={[
                    { field: 'Category.CategoryName', title: 'Name' } as any,
                    <Column key={2} field="Category.Description" title="Description" />
                ]}
            />
        </Grid>
    );
};

export default App;
