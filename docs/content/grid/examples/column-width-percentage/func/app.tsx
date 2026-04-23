import * as React from 'react';
import { Grid, GridCustomCellProps, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './gd-products';
import { Checkbox } from '@progress/kendo-react-inputs';

const App = () => {
    const gridWidth: number = 600;

    const setPercentage = (percentage: number) => {
        return Math.round(gridWidth / 100) * percentage;
    };

    return (
        <div>
            <Grid style={{ height: '400px', width: gridWidth }} data={products}>
                <Column field="ProductID" title="ID" width={setPercentage(10)} />
                <Column field="ProductName" title="Name" width={setPercentage(21.9)} />
                <Column field="Category.CategoryName" title="CategoryName" width={setPercentage(25)} />
                <Column field="UnitPrice" title="Price" width={setPercentage(15)} />
                <Column field="UnitsInStock" title="In stock" width={setPercentage(15)} />
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
        </div>
    );
};

export default App;
