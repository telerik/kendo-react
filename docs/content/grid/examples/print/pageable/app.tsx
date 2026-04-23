import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';
import './style.css';

const initialDataState = {
    skip: 0,
    take: 10
};

const App = () => {
    const [isPrintState, setIsPrintState] = React.useState(false);
    const [scrollable, setScrollable] = React.useState<'scrollable' | 'none'>('scrollable');
    const [dimensions, setDimesions] = React.useState({
        height: '400px',
        width: '800px'
    });
    const [page, setPage] = React.useState(initialDataState);
    const [pageSizeValue, setPageSizeValue] = React.useState();

    const print = () => {
        setPrintLayout();
        setTimeout(() => {
            window.print();
            setNormalLayout();
        });
    };

    const setPrintLayout = () => {
        setIsPrintState(true);
        setDimesions({ height: '100%', width: '100%' });
        setScrollable('none');
    };

    const setNormalLayout = () => {
        setIsPrintState(false);
        setDimesions({
            height: '400px',
            width: '800px'
        });
        setScrollable('scrollable');
    };

    const pageChange = (event) => {
        const targetEvent = event.targetEvent;
        const take = targetEvent.value === 'All' ? products.length : event.page.take;
        if (targetEvent.value) {
            setPageSizeValue(targetEvent.value);
        }
        setPage({
            ...event.page,
            take
        });
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
            <Grid
                style={dimensions}
                data={isPrintState ? products : products.slice(page.skip, page.take + page.skip)}
                skip={page.skip}
                take={page.take}
                total={products.length}
                scrollable={scrollable}
                pageable={{
                    buttonCount: 4,
                    pageSizes: [5, 10, 15, 'All'],
                    pageSizeValue: pageSizeValue
                }}
                onPageChange={pageChange}
            >
                <Column field="ProductID" />
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
