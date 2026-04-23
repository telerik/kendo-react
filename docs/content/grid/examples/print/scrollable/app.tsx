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

    const print = () => {
        setPrintLayout();

        setTimeout(() => {
            window.print();
            setNormalLayout();
        });
    };

    const setPrintLayout = () => {
        setDimesions({ height: '100%', width: '100%' });
        setScrollable('none');
    };

    const setNormalLayout = () => {
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
                <Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Discontinued" width="250px" />
                <Column field="UnitPrice" />
            </Grid>
        </div>
    );
};

export default App;
