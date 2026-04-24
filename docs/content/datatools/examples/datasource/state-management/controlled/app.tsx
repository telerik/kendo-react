import * as React from 'react';
import { useDataSource } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn, GridFilterChangeEvent, GridSortChangeEvent } from '@progress/kendo-react-grid';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import products from './shared-dt-products';

const App = () => {
    // Controlled state management example
    const [sort, setSort] = React.useState<SortDescriptor[]>([{ field: 'UnitsInStock', dir: 'desc' }]);
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({
        logic: 'and',
        filters: [{ field: 'ProductName', operator: 'contains', value: 'Ch' }]
    });

    const dataSource = useDataSource({
        data: products,
        sort,
        filter,
        schema: {
            model: {
                id: 'ProductID'
            }
        }
    });

    return (
        <div>
            <Grid
                data={dataSource.data}
                total={dataSource.total}
                sort={sort}
                filter={filter}
                onSortChange={(e: GridSortChangeEvent) => setSort(e.sort)}
                onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
                sortable={true}
                filterable={true}
                style={{ height: '400px' }}
            >
                <GridColumn field="ProductID" title="ID" width="80px" filterable={false} sortable={false} />
                <GridColumn field="ProductName" title="Product" />
                <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
                <GridColumn field="UnitsInStock" title="In Stock" />
            </Grid>
        </div>
    );
};

export default App;
