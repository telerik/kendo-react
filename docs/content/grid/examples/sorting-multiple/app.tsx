import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const initialSort: SortDescriptor[] = [
    { field: 'ProductID', dir: 'desc' },
    { field: 'ProductName', dir: 'asc' }
];

const App = () => {
    const [data, setData] = React.useState(products);

    return (
        <Grid
            style={{ height: '300px' }}
            dataItemKey="ProductID"
            data={data}
            autoProcessData={true}
            sortable={{ mode: 'multiple' }}
            defaultSort={initialSort}
        >
            <Column field="ProductID" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" />
        </Grid>
    );
};

export default App;
