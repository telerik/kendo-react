import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { Slider, NumericTextBox, NumericTextBoxChangeEvent, SliderChangeEvent } from '@progress/kendo-react-inputs';
import products from './gd-products';
import { PagerProps } from '@progress/kendo-react-data-tools';

const MyPager = (props: PagerProps) => {
    const element = React.useRef<HTMLDivElement>(null);
    const currentPage = Math.floor(props.skip / props.take) + 1;
    const totalPages = Math.ceil((props.total || 0) / props.take);

    const handleChange = (event: NumericTextBoxChangeEvent | SliderChangeEvent) => {
        props.onPageChange?.({
            target: { element: element.current, props },
            skip: ((event.value ?? 1) - 1) * props.take,
            take: props.take,
            syntheticEvent: event.syntheticEvent,
            nativeEvent: event.nativeEvent,
            targetEvent: { value: event.value }
        });
    };

    return (
        <div
            ref={element}
            className={'k-pager k-pager-md k-grid-pager'}
            style={{ borderTop: '1px solid', borderTopColor: 'inherit' }}
        >
            <div className="col-4">
                <Slider buttons={true} step={1} value={currentPage} min={1} max={totalPages} onChange={handleChange} />
            </div>
            <div className="col-4">
                <NumericTextBox value={currentPage} onChange={handleChange} min={1} max={totalPages} />
            </div>
            <div className="col-4">{`Page ${currentPage} of ${totalPages}`}</div>
        </div>
    );
};

const App = () => {
    const [page, setPage] = React.useState({ skip: 0, take: 10 });
    const data = process(products, { skip: page.skip, take: page.take });

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    return (
        <div>
            <Grid
                style={{ height: '400px' }}
                data={data}
                skip={page.skip}
                take={page.take}
                total={products.length}
                pageable={true}
                onPageChange={pageChange}
                pager={MyPager}
            >
                <GridColumn field="ProductID" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
