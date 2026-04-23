import React, { useState } from 'react';
import { Grid, GridColumn as Column, GridColumnState } from '@progress/kendo-react-grid';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import products from './gd-products';

const App = () => {
    const [columnsState, setColumnsState] = React.useState<GridColumnState[]>([
        { id: 'ProductID', field: 'ProductID', hidden: true },
        { id: 'ProductName', field: 'ProductName' },
        { id: 'Category.CategoryName', field: 'Category.CategoryName' },
        { id: 'UnitPrice', field: 'UnitPrice' },
        { id: 'UnitsInStock', field: 'UnitsInStock' }
    ]);

    const onChange = (event: CheckboxChangeEvent) => {
        const field = event.target.name;
        const newColumns = columnsState.map((column) => {
            if (column.field === field) {
                return { ...column, hidden: !column.hidden };
            }
            return column;
        });
        setColumnsState(newColumns);
    };

    return (
        <>
            <h4>Show Columns</h4>
            <div className="row example-config">
                {columnsState.map((column, index) => (
                    <div key={index} className="col-xs-12 col-md-2 example-col">
                        <Checkbox
                            type="checkbox"
                            id={column.field}
                            name={column.field}
                            defaultChecked={!column.hidden}
                            onChange={onChange}
                            label={column.field}
                        />
                    </div>
                ))}
            </div>
            <Grid columnsState={columnsState} style={{ height: '400px' }} data={[...products]}>
                <Column id={'ProductID'} field={'ProductID'} title={'ID'} />
                <Column id={'ProductName'} field={'ProductName'} title={'Name'} />
                <Column id={'Category.CategoryName'} field={'Category.CategoryName'} title={'Category Name'} />
                <Column id={'UnitPrice'} field={'UnitPrice'} title={'Price'} />
                <Column id={'UnitsInStock'} field={'UnitsInStock'} title={'In Stock'} />
            </Grid>
        </>
    );
};

export default App;
