import React, { useState, useCallback } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import products from './shared-kb-products';

interface GridColumnConfig {
    field: string;
    title: string;
    show: boolean;
}

const App = () => {
    const [columns, setColumns] = useState<GridColumnConfig[]>([
        { field: 'ProductID', title: 'ID', show: false },
        { field: 'ProductName', title: 'Name', show: true },
        { field: 'Category.CategoryName', title: 'Category Name', show: true },
        { field: 'UnitPrice', title: 'Price', show: true },
        { field: 'UnitsInStock', title: 'In Stock', show: true }
    ]);

    const onChange = useCallback((e: CheckboxChangeEvent) => {
        const id = e.target.element.id;
        setColumns((prev) => prev.map((col) => (col.field === id ? { ...col, show: !col.show } : col)));
    }, []);

    return (
        <>
            <h4>Show Columns</h4>
            {columns.map((col, i) => (
                <Checkbox
                    key={i}
                    className="custom-checkbox"
                    id={col.field}
                    name={col.title}
                    defaultChecked={col.show}
                    onChange={onChange}
                    label={col.title}
                />
            ))}
            <br />
            <Grid style={{ height: '400px' }} data={[...products]}>
                {columns.map((col, i) => col.show && <Column key={i} field={col.field} title={col.title} />)}
            </Grid>
        </>
    );
};

export default App;
