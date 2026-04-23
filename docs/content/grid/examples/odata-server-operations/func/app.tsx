import * as React from 'react';

import { Grid, GridColumn as Column, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader';
import { DataResult, State } from '@progress/kendo-data-query';
import { Product } from './gd-interfaces';

const App = () => {
    const [products, setProducts] = React.useState<DataResult>({ data: [], total: 77 });
    const [dataState, setDataState] = React.useState<State>({ take: 10, skip: 0 });

    const dataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    const dataReceived = (products: DataResult) => {
        if (products.data) {
            setProducts(products);
        } else {
            setProducts({ data: [], total: 0 });
        }
    };

    return (
        <div>
            <Grid
                style={{ height: '400px' }}
                filterable={true}
                sortable={true}
                pageable={true}
                {...dataState}
                data={products}
                onDataStateChange={dataStateChange}
            >
                <Column field="ProductID" filter="numeric" title="Id" />
                <Column field="ProductName" title="Name" />
                <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
                <Column field="UnitsInStock" filter="numeric" title="In stock" />
            </Grid>

            <ProductsLoader dataState={dataState} onDataReceived={dataReceived} />
        </div>
    );
};

export default App;
