import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './gd-products';

interface PageState {
    skip: number;
    take: number;
}

const App = () => {
    const [data, setData] = React.useState(products);

    return (
        <div>
            <Grid
                style={{ height: '400px' }}
                dataItemKey="ProductID"
                data={data}
                autoProcessData={true}
                defaultSkip={0}
                defaultTake={10}
                pageable={{
                    buttonCount: 4,
                    pageSizes: [5, 10, 15, 'All']
                }}
            >
                <GridColumn field="ProductID" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Unit Price" />
            </Grid>
        </div>
    );
};

export default App;
