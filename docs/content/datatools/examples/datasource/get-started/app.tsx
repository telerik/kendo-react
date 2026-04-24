import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { useDataSource } from '@progress/kendo-react-data-tools';

import products from './shared-dt-products';

const App = () => {
    const dataState = {
        skip: 0,
        take: 10,
        sort: [{ field: 'ProductName', dir: 'asc' }],
        filter: {
            logic: 'and',
            filters: [{ field: 'UnitPrice', operator: 'gt', value: 20 }]
        }
    };

    const result = useDataSource({
        data: products,
        dataState
    });

    const handleDataStateChange = (event: GridDataStateChangeEvent) => {
        result.setDataState(event.dataState);
    };

    return (
        <Grid
            style={{ height: '400px' }}
            data={result.data}
            total={result.total}
            filterable={true}
            pageable={true}
            groupable={true}
            sortable={true}
            onDataStateChange={handleDataStateChange}
            {...result.dataState}
        >
            <GridColumn field="ProductID" title="ID" width="100px" sortable={false} />
            <GridColumn field="ProductName" title="Product" width="200px" />
            <GridColumn field="Category.CategoryName" title="Category" width="150px" />
            <GridColumn field="Category.Description" title="Category Description" />
        </Grid>
    );
};

export default App;
