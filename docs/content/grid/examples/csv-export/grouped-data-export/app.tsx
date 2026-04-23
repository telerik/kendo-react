import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCsvExportButton } from '@progress/kendo-react-grid';
import { GroupDescriptor, AggregateDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const aggregates: AggregateDescriptor[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

const initialGroup: GroupDescriptor[] = [
    {
        field: 'Category.CategoryName',
        aggregates
    },
    {
        field: 'Discontinued',
        aggregates
    }
];

const App = () => {
    return (
        <Grid
            style={{ height: '550px' }}
            dataItemKey="ProductID"
            data={products}
            autoProcessData={true}
            groupable={true}
            defaultGroup={initialGroup}
            csv={{ fileName: 'GroupedProducts.csv' }}
        >
            <GridToolbar>
                <GridCsvExportButton themeColor="primary">Export to CSV</GridCsvExportButton>
            </GridToolbar>
            <Column field="ProductID" filterable={false} title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" filter="numeric" />
            <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
            <Column field="Category.CategoryName" title="Category Name" />
            <Column field="Discontinued" title="Discontinued" />
        </Grid>
    );
};

export default App;
