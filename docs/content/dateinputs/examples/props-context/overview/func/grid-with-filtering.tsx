import * as React from 'react';

import { Grid, GridColumn, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import sampleProducts from './sample-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
};

export const GridWithFiltering = () => {
    const [filter, setFilter] = React.useState(initialFilter);

    return (
        <Grid
            style={{ height: '420px' }}
            data={filterBy(sampleProducts, filter)}
            filterable={true}
            filter={filter}
            onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
        >
            <GridColumn field="ProductID" title="ID" filterable={false} width="60px" />
            <GridColumn field="ProductName" title="Product Name" width="240px" />
            <GridColumn field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
            <GridColumn field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
            <GridColumn field="Discontinued" width="190px" filter="boolean" />
        </Grid>
    );
};
