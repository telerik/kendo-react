import * as React from 'react';
import {
    Grid,
    GridToolbar,
    GridToolbarSort,
    GridToolbarFilter,
    GridColumn as Column
} from '@progress/kendo-react-grid';
import { gearIcon } from '@progress/kendo-svg-icons';
import products from './products';

const App = () => {
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css" />
            <Grid
                style={{ minWidth: '500px', height: '530px' }}
                adaptive={true}
                dataItemKey="ProductID"
                data={products}
                autoProcessData={true}
                navigatable={true}
                sortable={{ mode: 'multiple' }}
            >
                <GridToolbar>
                    <GridToolbarSort icon="gear" />
                    <GridToolbarFilter svgIcon={gearIcon} />
                </GridToolbar>
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" filter={'numeric'} />
                <Column field="Discontinued" filter={'boolean'} />
            </Grid>
        </>
    );
};

export default App;
