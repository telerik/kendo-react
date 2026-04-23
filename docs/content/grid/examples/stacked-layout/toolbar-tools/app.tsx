import * as React from 'react';
import {
    Grid,
    GridToolbar,
    GridToolbarSort,
    GridColumn as Column,
    GridToolbarColumnsChooser,
    GridToolbarSpacer
} from '@progress/kendo-react-grid';
import products from './products';
import { SortDescriptor } from '@progress/kendo-data-query';

const initialSort: SortDescriptor[] = [
    { field: 'UnitPrice', dir: 'asc' },
    { field: 'Discontinued', dir: 'asc' }
];

const App = () => {
    return (
        <Grid
            data={products}
            dataItemKey="ProductID"
            dataLayoutMode="stacked"
            stackedLayoutSettings={{
                cols: 5
            }}
            autoProcessData={true}
            navigatable={true}
            sortable={{ mode: 'multiple' }}
            defaultSort={initialSort}
            style={{ height: '530px' }}
        >
            <GridToolbar>
                <GridToolbarSort />
                <GridToolbarSpacer />
                <GridToolbarColumnsChooser />
            </GridToolbar>
            <Column field="ProductID" title="ID" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="Discontinued" title="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
