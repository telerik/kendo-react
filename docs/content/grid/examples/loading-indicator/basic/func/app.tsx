import React from 'react';

import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';
const App = () => {
    const [data, setData] = React.useState<any>([]);
    const [showLoader, setShowLoader] = React.useState<boolean>(true);

    React.useEffect(() => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
            setData(products);
        }, 2000);
    }, []);

    return (
        <Grid showLoader={showLoader} style={{ height: '400px' }} data={data}>
            <Column field="ProductID" width={50} title="ID" />
            <Column field="ProductName" title="Product Name" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
        </Grid>
    );
};

export default App;
