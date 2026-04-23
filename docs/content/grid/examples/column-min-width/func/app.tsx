import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';
import { columnInterface, Product } from './gd-interfaces';
const columns: Array<columnInterface> = [
    { field: 'ProductID', title: 'ID', minWidth: 50 },
    { field: 'ProductName', title: 'Name', minWidth: 200 },
    { field: 'Category.CategoryName', title: 'CategoryName', minWidth: 200 },
    { field: 'UnitPrice', title: 'Price', minWidth: 100 },
    { field: 'UnitsInStock', title: 'In stock', minWidth: 100 }
];
const ADJUST_PADDING: number = 4;
const COLUMN_MIN: number = 4;
const App = () => {
    const minGridWidth = React.useRef<number>(0);
    const grid = React.useRef<any>(null);
    const [gridData, setGridData] = React.useState<Array<Product>>(products);
    const [applyMinWidth, setApplyMinWidth] = React.useState(false);
    const [gridCurrent, setGridCurrent] = React.useState(0);

    React.useEffect(() => {
        grid.current = document.querySelector('.k-grid');
        window.addEventListener('resize', handleResize);
        columns.map((item: columnInterface) =>
            item.minWidth !== undefined ? (minGridWidth.current += item.minWidth) : minGridWidth.current
        );
        setGridCurrent(grid.current.offsetWidth);
        setApplyMinWidth(grid.current.offsetWidth < minGridWidth.current);
    }, []);

    const handleResize = () => {
        if (grid.current.offsetWidth < minGridWidth.current && !applyMinWidth) {
            setApplyMinWidth(true);
        } else if (grid.current.offsetWidth > minGridWidth.current) {
            setGridCurrent(grid.current.offsetWidth);
            setApplyMinWidth(false);
        }
    };

    const setWidth = (minWidth: number | undefined) => {
        if (minWidth === undefined) {
            minWidth = 0;
        }
        let width = applyMinWidth ? minWidth : minWidth + (gridCurrent - minGridWidth.current) / columns.length;
        if (width >= COLUMN_MIN) {
            width -= ADJUST_PADDING;
        }
        return width;
    };

    return (
        <div>
            <Grid style={{ height: '400px' }} data={gridData}>
                {columns.map((column, index) => {
                    return (
                        <Column
                            field={column.field}
                            title={column.title}
                            key={index}
                            width={setWidth(column.minWidth)}
                        />
                    );
                })}
            </Grid>
        </div>
    );
};

export default App;
