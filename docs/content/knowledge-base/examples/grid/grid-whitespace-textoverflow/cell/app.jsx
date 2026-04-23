import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-kb-products';
const App = () => {
    const CellRender = (props) => {
        return (
            <td
                {...props.tdProps}
                style={{
                    whiteSpace: 'nowrap',
                    textOverflow: 'clip'
                }}
            >
                {props.dataItem.ProductName}
            </td>
        );
    };
    return (
        <Grid
            style={{
                height: '400px'
            }}
            data={products}
        >
            <GridColumn field="ProductID" title="ID" />
            <GridColumn field="ProductName" title="Name" cells={{ data: CellRender }} />
            <GridColumn field="Category.CategoryName" title="CategoryName" />
            <GridColumn field="UnitPrice" title="Price" />
            <GridColumn field="UnitsInStock" title="In stock" />
        </Grid>
    );
};
export default App;
