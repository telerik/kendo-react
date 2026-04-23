import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Input, InputChangeEvent } from '@progress/kendo-react-inputs';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
import products from './gd-products';

const App = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({
        logic: 'or',
        filters: []
    });
    const data = filterBy(products, filter);

    const handleFilterChange = (event: InputChangeEvent) => {
        let filter: CompositeFilterDescriptor = {
            logic: 'or',
            filters: [
                { field: 'ProductID', operator: 'contains', value: event.value },
                { field: 'ProductName', operator: 'contains', value: event.value },
                { field: 'Category.CategoryName', operator: 'contains', value: event.value },
                { field: 'UnitPrice', operator: 'contains', value: event.value },
                { field: 'UnitsInStock', operator: 'contains', value: event.value }
            ]
        };
        setFilter(filter);
    };

    return (
        <Grid style={{ height: '400px' }} data={data}>
            <GridToolbar>
                Filter: <Input onChange={handleFilterChange} />
            </GridToolbar>
            <Column field="ProductID" title="ID" width="55px" />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
        </Grid>
    );
};

export default App;
