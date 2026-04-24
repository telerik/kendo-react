import * as React from 'react';
import { Grid, GridColumn as Column, GridFooterCellProps } from '@progress/kendo-react-grid';
import { Product } from './gd-interfaces';
import products from './gd-products';

const UnitPriceCell = (props: GridFooterCellProps) => {
    const field = props.field || '';
    const min = products.reduce((acc: number, current: Product) => Math.min(acc, current[field]), Number.MAX_VALUE);
    const max = products.reduce((acc: number, current: Product) => Math.max(acc, current[field]), 0);
    return (
        <td colSpan={props.colSpan} style={props.style}>
            min: {min.toString()}, max: {max.toString()}
        </td>
    );
};

const UnitsInStockCell = (props: GridFooterCellProps) => {
    const field = props.field || '';
    const total = products.reduce((acc: any, current: { [x: string]: any }) => acc + current[field], 0);
    return (
        <td colSpan={props.colSpan} style={props.style}>
            total: {total}
        </td>
    );
};

const App = () => {
    return (
        <Grid style={{ height: '420px' }} data={products}>
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" cells={{ footerCell: UnitPriceCell }} />
            <Column field="UnitsInStock" title="Units In Stock" cells={{ footerCell: UnitsInStockCell }} />
            <Column field="Category.CategoryName" title="Category Name" />
        </Grid>
    );
};

export default App;
