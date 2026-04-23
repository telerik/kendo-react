import * as React from 'react';
import { Grid, GridColumn, GridCustomCellProps } from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';

const CustomCell = (props: GridCustomCellProps) => {
    return (
        <td
            {...props.tdProps}
            colSpan={1}
            style={{
                color: props.children == 'true' ? 'green' : 'crimson'
            }}
        >
            {props.children}
        </td>
    );
};

const App = () => {
    return (
        <Grid data={sampleProducts} style={{ height: '400px' }}>
            <GridColumn field="ProductID" title="Id" width="50px" />
            <GridColumn field="ProductName" title="Product Name" />
            <GridColumn field="UnitPrice" title="Unit Price" />
            <GridColumn field="UnitsInStock" title="Units In Stock" />
            <GridColumn field="Discontinued" cells={{ data: CustomCell }} />
        </Grid>
    );
};

export default App;
