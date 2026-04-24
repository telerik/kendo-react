import * as React from 'react';
import { Grid, GridColumn, GridCustomHeaderCellProps } from '@progress/kendo-react-grid';
import products from './gd-products';
import { HeaderThElement } from '@progress/kendo-react-data-tools';

interface ProductNameHeaderProps extends GridCustomHeaderCellProps {
    children: any;
}

const ProductNameHeader = (props: ProductNameHeaderProps) => {
    return (
        <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps} style={{ color: '#53d2fa' }}>
            {props.children}
        </HeaderThElement>
    );
};
const App = () => {
    return (
        <div>
            <Grid data={products.slice(0, 5)}>
                <GridColumn field="ProductID" title="ID" width="40px" />
                <GridColumn
                    field="ProductName"
                    title="Product Name"
                    width="250px"
                    cells={{ headerCell: ProductNameHeader }}
                />
                <GridColumn field="Category.CategoryName" title="CategoryName" />
                <GridColumn field="UnitPrice" title="Price" width="80px" />
                <GridColumn field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
        </div>
    );
};

export default App;
