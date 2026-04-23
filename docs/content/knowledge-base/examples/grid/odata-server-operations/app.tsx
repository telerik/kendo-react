import React, { useState, useCallback } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader as RawProductsLoader } from './shared-kb-products-loader';

const ProductsLoader = RawProductsLoader as unknown as React.ComponentType<{
    dataState: any;
    onDataReceived: (data: any) => void;
}>;

const App = () => {
    const [products, setProducts] = useState({ data: [], total: 0 });
    const [dataState, setDataState] = useState({ take: 10, skip: 0 });

    const dataStateChange = useCallback((e: any) => {
        setDataState(e.dataState);
    }, []);

    const dataReceived = useCallback((data: any) => {
        setProducts(data);
    }, []);

    return (
        <div>
            <Grid filterable sortable pageable {...dataState} {...products} onDataStateChange={dataStateChange}>
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
