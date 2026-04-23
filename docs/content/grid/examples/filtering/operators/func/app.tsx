import * as React from 'react';
import { Grid, GridColumn as Column, GridFilterOperators } from '@progress/kendo-react-grid';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import sampleProducts from './gd-sample-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
};

const filterOperators: GridFilterOperators = {
    text: [{ text: 'grid.filterContainsOperator', operator: 'contains' }],
    numeric: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
    date: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
    boolean: [{ text: 'grid.filterEqOperator', operator: 'eq' }]
};

const App = () => {
    return (
        <Grid
            style={{ height: '420px' }}
            data={sampleProducts}
            autoProcessData={true}
            dataItemKey="ProductID"
            filterable={true}
            defaultFilter={initialFilter}
            filterOperators={filterOperators}
        >
            <Column field="ProductID" title="ID" filterable={false} width="60px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="FirstOrderedOn" width="220px" filter="date" format="{0:d}" />
            <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" width="190px" filter="boolean" />
        </Grid>
    );
};

export default App;
