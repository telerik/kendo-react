import * as React from 'react';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    DateFilter,
    BooleanFilter,
    FilterChangeEvent
} from '@progress/kendo-react-data-tools';

import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-dt-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'gt', value: 20 },
        { field: 'UnitPrice', operator: 'lt', value: 50 },
        { field: 'Discontinued', operator: 'eq', value: false },
        {
            logic: 'or',
            filters: [
                { field: 'ProductName', operator: 'contains', value: 'organic' },
                { field: 'ProductName', operator: 'contains', value: 'cranberry' }
            ]
        }
    ]
};

const App = () => {
    const [filter, setFilter] = React.useState(initialFilter);

    const onFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <React.Fragment>
            <Filter
                value={filter}
                onChange={onFilterChange}
                fields={[
                    { name: 'ProductName', label: 'Name', filter: TextFilter, operators: Operators.text },
                    { name: 'UnitPrice', label: 'Price', filter: NumericFilter, operators: Operators.numeric },
                    { name: 'Discontinued', label: 'Discontinued', filter: BooleanFilter, operators: Operators.boolean }
                ]}
            />
            <Grid style={{ maxHeight: '400px' }} data={filterBy(products, filter)}>
                <GridColumn field="ProductName" title="Name" width="300px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </React.Fragment>
    );
};

export default App;
