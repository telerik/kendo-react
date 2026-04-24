import * as React from 'react';
import { process, State } from '@progress/kendo-data-query';
import { GridColumn, Grid, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import products from './gd-products';

const App = () => {
    const [dataState, setDataState] = React.useState<State>({ skip: 0, take: 10 });
    return (
        <div dir="rtl" className="k-rtl">
            <Grid
                style={{ height: '420px' }}
                filterable={true}
                sortable={true}
                pageable={true}
                data={process(products, dataState)}
                total={products.length}
                {...dataState}
                onDataStateChange={(e: GridDataStateChangeEvent) => {
                    setDataState(e.dataState);
                }}
            >
                <GridColumn field="ProductID" title="Product Id" filter="numeric" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitsInStock" title="Units In Stock" filter="numeric" />
            </Grid>
        </div>
    );
};

export default App;
