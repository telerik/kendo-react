import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';
import { Checkbox } from '@progress/kendo-react-inputs';
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
            width: 250,
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
    const [columnsToPrint, setColumnsToPrint] = React.useState(columns.slice());
    const print = () => {
        setPrintLayout();
        setTimeout(() => {
            window.print();
            setNormalLayout();
        });
    };
    const setPrintLayout = () => {
        setColumns(columnsToPrint);
        setDimesions({
            height: '100%',
            width: '100%'
        });
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
    const onChange = (event) => {
        const field = event.target.name;
        const newColumns = columnsToPrint.map((column) => {
            if (column.field === field) {
                return {
                    ...column,
                    hidden: !column.hidden
                };
            }
            return column;
        });
        setColumnsToPrint(newColumns);
    };
    return (
        <div>
            <div className="example-config">
                <div className="row">
                    <div>
                        <h5>Select Columns to Print</h5>
                        {columns.map((column, index) => (
                            <div key={index} className="col-xs-12 example-col">
                                <Checkbox
                                    type="checkbox"
                                    id={column.field}
                                    name={column.field}
                                    defaultChecked={!column.hidden}
                                    onChange={onChange}
                                    label={column.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col">
                <Button onClick={print}>Print Grid</Button>
                <br />
                <br />
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
