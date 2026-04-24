import * as React from 'react';
import { Grid, GridColumn as Column, GridCustomCellProps } from '@progress/kendo-react-grid';
import products from './gd-products';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <Grid className="myGrid" style={{ height: '400px' }} data={[...products]}>
            <Column field="ProductID" title="ID" />
            <Column field="ProductName" title="Name" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
            <Column
                field="Discontinued"
                cells={{
                    data: (props: GridCustomCellProps) => (
                        <td {...props.tdProps}>
                            <Checkbox disabled={true} checked={props.dataItem[props.field || '']} />
                        </td>
                    )
                }}
            />
        </Grid>
    );
};

export default App;
