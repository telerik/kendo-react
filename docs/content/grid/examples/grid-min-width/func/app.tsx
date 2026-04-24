import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';
import { columnInterface } from './gd-interfaces';
const initialColumns: columnInterface[] = [
    { field: 'ProductID', title: 'ID' },
    { field: 'ProductName', title: 'Name' },
    { field: 'Category.CategoryName', title: 'CategoryName' },
    { field: 'UnitPrice', title: 'Price', minGridWidth: 400 },
    { field: 'UnitsInStock', title: 'In stock', minGridWidth: 500 }
];

const App = () => {
    let grid: any;
    const [columns, setColumns] = React.useState(initialColumns);

    React.useEffect(() => {
        grid = document.querySelector('.k-grid');
        window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const currentVisibleColumns = columns.filter((c: any) => !(c.minGridWidth > grid.offsetWidth));
        if (currentVisibleColumns.length !== columns.length) {
            setColumns(currentVisibleColumns);
        }
    };

    return (
        <div>
            <Grid style={{ height: '400px' }} data={products}>
                {columns.map((column, index) => {
                    return <Column field={column.field} title={column.title} key={index} />;
                })}
            </Grid>
        </div>
    );
};

export default App;
