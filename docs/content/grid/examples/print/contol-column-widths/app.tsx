import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';
import './style.css';

const initialProducts = products.slice();
const App = () => {
    const [gridData, setGridData] = React.useState(initialProducts);
    const [scrollable, setScrollable] = React.useState<'scrollable' | 'none'>('scrollable');
    const [dimensions, setDimesions] = React.useState({
        height: '500px',
        width: '600px'
    });

    const [columns, setColumns] = React.useState([
        {
            field: 'ProductID',
            title: 'ID',
            width: 40,
            hidden: false
        },
        {
            field: 'ProductName',
            title: 'Name',
            width: 250,
            hidden: false
        },
        {
            field: 'Discontinued',
            title: 'Discontinued',
            width: 250,
            hidden: false
        },
        {
            field: 'UnitPrice',
            title: 'UnitPrice',
            width: 450,
            hidden: false
        },
        {
            field: 'QuantityPerUnit',
            title: 'QuantityPerUnit',
            width: 250,
            hidden: false
        },
        {
            field: 'Category.CategoryName',
            title: 'CategoryName',
            width: 250,
            hidden: false
        }
    ]);

    const print = () => {
        setPrintLayout();

        setTimeout(() => {
            window.print();
            setNormalLayout();
        });
    };

    const setPrintLayout = () => {
        const columnsToPrint = columns.map((column) => ({ ...column, width: 120 }));
        setColumns(columnsToPrint);
        setDimesions({ height: '100%', width: '100%' });
        setScrollable('none');
    };

    const setNormalLayout = () => {
        setColumns(columns);
        setDimesions({
            height: '500px',
            width: '600px'
        });
        setScrollable('scrollable');
    };

    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div className="col">
                        <Button onClick={print}>Print Grid</Button>
                    </div>
                </div>
            </div>
            <Grid style={dimensions} scrollable={scrollable} data={gridData} rowHeight={50}>
                {columns.map(
                    (column, i) =>
                        !column.hidden && (
                            <Column key={i} field={column.field} title={column.title} width={column.width} />
                        )
                )}
            </Grid>
        </div>
    );
};

export default App;
