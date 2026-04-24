import * as React from 'react';
import { Grid, GridColumn, GridCustomCellProps } from '@progress/kendo-react-grid';
import sampleProducts from './gd-products';

const CustomLockedCell = (props: GridCustomCellProps) => {
    const field = props.field || '';
    const value = props.dataItem[field];
    return <td {...props.tdProps}>{value === null ? '' : value.toString()} Custom cell</td>;
};

const App = () => {
    return (
        <Grid data={sampleProducts} style={{ width: 500, height: 450 }}>
            <GridColumn
                field="ProductID"
                title="Id"
                width="150px"
                editable={false}
                cells={{ data: CustomLockedCell }}
                locked={true}
            />
            <GridColumn field="ProductName" title="Product Name" width={300} />
            <GridColumn field="UnitPrice" title="Price" filter="numeric" format="{0:c}" width={300} />
            <GridColumn field="UnitsInStock" title="Units" editor="numeric" width={300} />
        </Grid>
    );
};

export default App;
