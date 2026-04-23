import * as React from 'react';
import { useDataSource } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import products from './shared-dt-products';

const App = () => {
    // Built-in state management example
    const dataSource = useDataSource({
        data: products,
        defaultSort: [{ field: 'ProductName', dir: 'asc' }] as SortDescriptor[],
        defaultFilter: {
            logic: 'and',
            filters: [{ field: 'UnitPrice', operator: 'gt', value: 15 }]
        } as CompositeFilterDescriptor,
        defaultSkip: 0,
        defaultTake: 5,
        schema: {
            model: {
                id: 'ProductID'
            }
        }
    });

    // State persistence example
    const saveState = () => {
        localStorage.setItem('dataSourceState', JSON.stringify(dataSource.dataState));
    };

    const loadState = () => {
        const savedState = JSON.parse(localStorage.getItem('dataSourceState') || '{}');
        dataSource.setDataState(savedState);
    };

    return (
        <div>
            <div style={{ marginBottom: '1em' }}>
                <Button onClick={saveState} themeColor={'primary'} style={{ marginRight: '1em' }}>
                    Save State
                </Button>
                <Button onClick={loadState}>Load State</Button>
            </div>
            <Grid
                data={dataSource.data}
                total={dataSource.total}
                {...dataSource.dataState}
                onDataStateChange={(e) => {
                    dataSource.setDataState(e.dataState);
                }}
                pageable={true}
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
