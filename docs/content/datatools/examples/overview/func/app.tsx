import * as React from 'react';
import './styles.css';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    DateFilter,
    BooleanFilter,
    Pager,
    FilterChangeEvent,
    PageChangeEvent
} from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { orders } from './data';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'Fulfilled', operator: 'eq', value: false }]
};

const App = () => {
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>(initialFilter);
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(6);

    const handleFilterChange = (event: FilterChangeEvent) => {
        setFilter(event.filter);
        setSkip(0);
    };

    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
        setTake(event.take);
    };

    const filteredData = filterBy(orders, filter);

    return (
        <div className="order-dashboard">
            <div className="dashboard-header">
                <h2>Order Management</h2>
                <p>Filter and browse customer orders across all regions</p>
            </div>
            <div className="filter-card">
                <div className="filter-card-label">Filter Orders</div>
                <Filter
                    value={filter}
                    onChange={handleFilterChange}
                    fields={[
                        { name: 'Customer', label: 'Customer', filter: TextFilter, operators: Operators.text },
                        { name: 'Amount', label: 'Amount ($)', filter: NumericFilter, operators: Operators.numeric },
                        { name: 'OrderDate', label: 'Order Date', filter: DateFilter, operators: Operators.date },
                        { name: 'Fulfilled', label: 'Fulfilled', filter: BooleanFilter, operators: Operators.boolean }
                    ]}
                />
            </div>
            <div className="results-summary">
                Showing <strong>{Math.min(take, filteredData.length - skip)}</strong> of{' '}
                <strong>{filteredData.length}</strong> orders
            </div>
            <div className="grid-card">
                <Grid data={filteredData.slice(skip, skip + take)}>
                    <GridColumn field="OrderID" title="Order #" width="100px" />
                    <GridColumn field="Customer" title="Customer" width="170px" />
                    <GridColumn field="Product" title="Product" width="190px" />
                    <GridColumn field="Category" title="Category" width="130px" />
                    <GridColumn field="Amount" title="Amount ($)" format="{0:c2}" width="120px" />
                    <GridColumn field="OrderDate" title="Order Date" format="{0:MMM dd, yyyy}" width="140px" />
                    <GridColumn field="Status" title="Status" width="120px" />
                    <GridColumn field="Fulfilled" title="Fulfilled" width="100px" />
                </Grid>
            </div>
                <Pager
                    skip={skip}
                    take={take}
                    total={filteredData.length}
                    buttonCount={5}
                    previousNext={true}
                    pageSizes={[5, 8, 10, 20]}
                    onPageChange={handlePageChange}
                />
        </div>
    );
};

export default App;
