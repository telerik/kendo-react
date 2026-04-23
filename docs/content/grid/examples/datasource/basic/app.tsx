import * as React from 'react';
import { Grid, GridColumn, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { useDataSource } from '@progress/kendo-react-data-tools';

import products from './shared-dt-products';

const App = () => {
    const dataSource = useDataSource({
        defaultData: products,
        defaultSkip: 0,
        take: 10,
        defaultSort: [{ field: 'ProductName', dir: 'asc' }],
        defaultFilter: {
            logic: 'and',
            filters: [{ field: 'UnitPrice', operator: 'gt', value: 15 }]
        },
        schema: {
            model: {
                id: 'ProductID'
            }
        }
    });

    const handleDataStateChange = (event: GridDataStateChangeEvent) => {
        dataSource.setDataState(event.dataState);
    };

    return (
        <Grid
            style={{ height: '400px' }}
            data={dataSource.data}
            total={dataSource.total}
            pageable={true}
            groupable={true}
            sortable={true}
            filterable={true}
            onDataStateChange={handleDataStateChange}
            {...dataSource.dataState}
        >
            <GridColumn field="ProductID" title="ID" width="100px" filterable={false} sortable={false} />
            <GridColumn field="ProductName" title="Product" />
            <GridColumn field="UnitPrice" title="Price" width="150px" />
            <GridColumn field="UnitsInStock" title="In Stock" width="150px" />
        </Grid>
    );
};

export default App;
