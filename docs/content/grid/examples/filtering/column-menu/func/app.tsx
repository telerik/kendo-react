import * as React from 'react';

import { process, State } from '@progress/kendo-data-query';
import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { ColumnMenu, ColumnMenuCheckboxFilter } from './columnMenu';
import products from './gd-products';
import { filterIcon } from '@progress/kendo-svg-icons';

const App = () => {
    return (
        <Grid
            style={{ height: '540px' }}
            data={products}
            autoProcessData={true}
            dataItemKey="ProductID"
            sortable={true}
            pageable={true}
            defaultTake={8}
            defaultSkip={0}
            pageSize={8}
            columnMenuIcon={filterIcon}
        >
            <Column field="ProductID" title="ID" filter={'numeric'} columnMenu={ColumnMenu} width={80} />
            <Column field="ProductName" title="Product Name" columnMenu={ColumnMenuCheckboxFilter} />
            <Column field="Category.CategoryName" title="Category Name" columnMenu={ColumnMenuCheckboxFilter} />

            <Column field="UnitPrice" filter={'numeric'} columnMenu={ColumnMenu} />
            <Column field="Discontinued" filter={'boolean'} columnMenu={ColumnMenuCheckboxFilter} />
        </Grid>
    );
};

export default App;
