import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Loader } from '@progress/kendo-react-indicators';
import products from './gd-products';

const styles = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const App = () => {
    const [data, setData] = React.useState<any>([]);
    const [showLoader, setShowLoader] = React.useState<boolean>(true);

    const customLoader = (
        <div className="k-loading-mask">
            <div className="k-loading-color" />
            <div style={styles}>
                <Loader size="large" type="pulsing" />
                <span style={{ fontSize: '1.25rem' }}>Loading data...</span>
            </div>
        </div>
    );

    React.useEffect(() => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
            setData(products);
        }, 2000);
    }, []);

    return (
        <Grid loader={customLoader} showLoader={showLoader} style={{ height: '400px' }} data={data}>
            <Column field="ProductID" width={50} title="ID" />
            <Column field="ProductName" title="Product Name" />
            <Column field="Category.CategoryName" title="CategoryName" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
        </Grid>
    );
};

export default App;
