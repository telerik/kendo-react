import * as React from 'react';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'ProductName', operator: 'contains', value: 'C' }]
};

const App = () => {
    return (
        <Grid
            style={{ height: '365px' }}
            dataItemKey="ProductID"
            data={sampleProducts}
            autoProcessData={true}
            navigatable={true}
            filterable={true}
            defaultFilter={initialFilter}
        >
            <Column field="ProductID" title="ID" filterable={false} width="40px" />
            <Column field="ProductName" title="Product Name" width="240px" />
            <Column field="FirstOrderedOn" title="First Ordered On" width="220px" filter="date" format="{0:d}" />
            <Column field="UnitPrice" width="180px" title="Unit Price" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
