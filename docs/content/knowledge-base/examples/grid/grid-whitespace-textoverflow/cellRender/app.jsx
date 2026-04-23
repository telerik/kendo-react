import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-kb-products';
const App = () => {
    const CustomCell = (props) => {
        return (
            <td
                {...props.td}
                style={{
                    whiteSpace: 'nowrap',
                    textOverflow: 'clip'
                }}
            >
                {props.children}
            </td>
        );
    };
    return (
        <Grid
            style={{
                height: '400px'
            }}
            data={products}
            cells={{
                data: CustomCell
            }}
        >
            <GridColumn field="ProductID" title="ID" width="40px" />
            <GridColumn field="ProductName" title="Name" />
            <GridColumn field="Category.CategoryName" title="CategoryName" />
            <GridColumn field="UnitPrice" title="Price" />
            <GridColumn field="UnitsInStock" title="In stock" />
        </Grid>
    );
};
export default App;
