import * as React from 'react';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'ProductName', operator: 'contains', value: 'e' }]
};

const App = () => {
    const [filter, setFilter] = React.useState(initialFilter);
    const data = filterBy(sampleProducts, filter);

    const handleFilterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <Grid
            style={{ height: '380px' }}
            data={data}
            navigatable={true}
            filterable={true}
            filter={filter}
            onFilterChange={handleFilterChange}
        >
            <Column field="ProductID" title="ID" filterable={false} width="40px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
