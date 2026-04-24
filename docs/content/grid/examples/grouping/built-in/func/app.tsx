import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const initialGroup: GroupDescriptor[] = [
    {
        field: 'UnitsInStock'
    },
    {
        field: 'ProductName'
    }
];

const App = () => {
    return (
        <Grid
            style={{
                height: '520px'
            }}
            dataItemKey="ProductID"
            data={products}
            autoProcessData={true}
            groupable={true}
            defaultGroup={initialGroup}
        >
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};
export default App;
