import * as React from 'react';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    BooleanFilter,
    Pager,
    FilterChangeEvent,
    PageChangeEvent
} from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
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
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(5);

    const handleFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
    };

    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
        setTake(event.take);
    };

    let filterData = filterBy(products, filter);

    return (
        <React.Fragment>
            <Filter
                value={filter}
                onChange={handleFilterChange}
                fields={[
                    {
                        name: 'ProductName',
                        label: 'Name',
                        filter: TextFilter,
                        operators: Operators.text
                    },
                    {
                        name: 'UnitPrice',
                        label: 'Price',
                        filter: NumericFilter,
                        operators: Operators.numeric
                    },
                    {
                        name: 'Discontinued',
                        label: 'Discontinued',
                        filter: BooleanFilter,
                        operators: Operators.boolean
                    }
                ]}
            />
            <hr />
            <Grid
                style={{
                    maxHeight: '400px'
                }}
                data={filterData.slice(skip, skip + take)}
            >
                <GridColumn field="ProductName" title="Name" width="300px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
            <hr />
            <Pager
                skip={skip}
                take={take}
                type="input"
                previousNext={true}
                total={filterData.length}
                onPageChange={handlePageChange}
            />
        </React.Fragment>
    );
};

export default App;
