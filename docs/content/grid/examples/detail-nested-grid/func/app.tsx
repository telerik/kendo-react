import * as React from 'react';
import { Grid, GridColumn as Column, GridDetailRowProps } from '@progress/kendo-react-grid';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import { categories, ProductCategory } from './data';

const DetailComponent = (props: GridDetailRowProps) => {
    const category = props.dataItem as ProductCategory;

    return (
        <Grid data={category.products} style={{ margin: '8px 0' }}>
            <Column field="ProductID" title="ID" width="70px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" format="{0:c}" width="130px" />
            <Column field="UnitsInStock" title="In Stock" width="110px" />
            <Column field="Discontinued" title="Discontinued" width="130px" />
        </Grid>
    );
};

const App = () => {
    const [detailExpand] = React.useState<DetailExpandDescriptor>({ [categories[0].CategoryID]: true });

    return (
        <Grid
            data={categories}
            detail={DetailComponent}
            style={{ height: '480px' }}
            dataItemKey="CategoryID"
            defaultDetailExpand={detailExpand}
        >
            <Column field="CategoryID" title="ID" width="70px" />
            <Column field="CategoryName" title="Category" width="180px" />
            <Column field="Description" title="Description" />
        </Grid>
    );
};

export default App;
