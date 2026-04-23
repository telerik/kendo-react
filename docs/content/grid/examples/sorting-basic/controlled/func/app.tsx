import * as React from 'react';
import { Grid, GridColumn as Column, GridSortChangeEvent } from '@progress/kendo-react-grid';
import { orderBy, SortDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const initialSort: SortDescriptor[] = [{ field: 'ProductName', dir: 'asc' }];

const App = () => {
    const [sort, setSort] = React.useState<SortDescriptor[]>(initialSort);
    const data = orderBy(products, sort);

    const handleSortChange = (event: GridSortChangeEvent) => {
        setSort(event.sort);
    };

    return (
        <Grid style={{ height: '300px' }} data={data} sortable={true} sort={sort} onSortChange={handleSortChange}>
            <Column field="ProductID" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" />
        </Grid>
    );
};

export default App;
