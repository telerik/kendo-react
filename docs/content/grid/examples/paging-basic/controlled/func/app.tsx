import * as React from 'react';
import { process } from '@progress/kendo-data-query';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import products from './gd-products';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const App = () => {
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [pageSizeValue, setPageSizeValue] = React.useState<number | string | undefined>();

    const data = process(products, { skip: page.skip, take: page.take });

    const pageChange = (event: GridPageChangeEvent) => {
        const targetEvent = event.targetEvent as PagerTargetEvent;
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
            <Grid
                style={{ height: '400px' }}
                data={data}
                skip={page.skip}
                take={page.take}
                total={products.length}
                pageable={{
                    buttonCount: 4,
                    pageSizes: [5, 10, 15, 'All'],
                    pageSizeValue: pageSizeValue
                }}
                onPageChange={pageChange}
            >
                <GridColumn field="ProductID" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
