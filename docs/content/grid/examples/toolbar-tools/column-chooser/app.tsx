import * as React from 'react';
import {
    Grid,
    GridToolbar,
    GridColumn as Column,
    GridToolbarColumnsChooser,
    GridColumnProps
} from '@progress/kendo-react-grid';
import products from './products';

interface GridColumnExtendedProps extends GridColumnProps {
    minWidth: number;
}
const columns: Array<GridColumnExtendedProps> = [
    { field: 'ProductID', title: 'ID', minWidth: 50 },
    { field: 'ProductName', title: 'Product Name', minWidth: 200 },
    { field: 'UnitPrice', title: 'Unit Price', filter: 'numeric', minWidth: 100 },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        filter: 'boolean',
        minWidth: 120
    }
];
const ADJUST_PADDING: number = 4;
const COLUMN_MIN: number = 4;

const App = () => {
    const minGridWidth = React.useRef<number>(0);
    const grid = React.useRef<any>(null);
    const [applyMinWidth, setApplyMinWidth] = React.useState(false);
    const [gridCurrent, setGridCurrent] = React.useState(0);

    React.useEffect(() => {
        grid.current = document.querySelector('.k-grid');
        window.addEventListener('resize', handleResize);
        columns.map((item: any) =>
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
        <Grid
            data={products}
            dataItemKey="ProductID"
            autoProcessData={true}
            navigatable={true}
            adaptive={true}
            style={{ height: '530px' }}
        >
            <GridToolbar>
                <GridToolbarColumnsChooser />
            </GridToolbar>
            {columns.map((column, index) => {
                return (
                    <Column field={column.field} title={column.title} key={index} width={setWidth(column.minWidth)} />
                );
            })}
        </Grid>
    );
};

export default App;
