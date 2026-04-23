import * as React from 'react';
import { Grid, GridColumn, GridCustomCellProps } from '@progress/kendo-react-grid';
import products from './gd-products';

const cellWithBackGround = (props: GridCustomCellProps) => {
    const examplePrice = props.dataItem.UnitPrice < 15;

    const icon = examplePrice ? (
        <span className="k-icon k-i-sort-desc-sm" />
    ) : (
        <span className="k-icon k-i-sort-asc-sm" />
    );

    const style = {
        ...props.tdProps?.style,
        backgroundColor: examplePrice ? 'rgb(243, 23, 0, 0.32)' : 'rgb(55, 180, 0,0.32)'
    };
    const field = props.field || '';
    return (
        <td {...props.tdProps} style={style}>
            {props.dataItem[field]} {icon}
        </td>
    );
};

const App = () => (
    <Grid data={products} style={{ height: '240px' }}>
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Units Price" cells={{ data: cellWithBackGround }} />
        <GridColumn field="UnitsOnOrder" title="Units On Order" />
        <GridColumn field="ReorderLevel" title="Reorder Level" />
    </Grid>
);

export default App;
