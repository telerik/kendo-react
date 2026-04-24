import * as React from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { Pager } from '@progress/kendo-react-data-tools';
import products from './gd-products';
import { PagerProps } from '@progress/kendo-react-data-tools';

const MyPager = (props: PagerProps) => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Pager
                responsive={true}
                skip={props.skip}
                take={props.take}
                total={200}
                onPageChange={props.onPageChange}
                buttonCount={5}
                info={true}
                previousNext={true}
                type="numeric"
                pageSizes={[10, 15, 20]}
            />
        </div>
    );
};

interface PageState {
    skip: number;
    take: number;
}

const App = () => {
    const [page, setPage] = React.useState<PageState>({ skip: 0, take: 10 });
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    return (
        <div>
            <Grid
                style={{ height: '400px' }}
                data={products.slice(page.skip, page.take + page.skip)}
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
