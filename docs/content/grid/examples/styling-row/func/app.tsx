import * as React from 'react';
import { Grid, GridColumn as Column, GridRowProps, GridCustomRowProps } from '@progress/kendo-react-grid';
import products from './gd-products';

const CustomRow = (props: GridCustomRowProps) => {
    const available = !props.dataItem.Discontinued;
    const noBgr = { backgroundColor: '' };
    const customBgr = { backgroundColor: 'lavender', fontWeight: 'bold' };

    return (
        <tr {...props.trProps} style={available ? noBgr : customBgr}>
            {props.children}
        </tr>
    );
};

const App = () => {
    return (
        <div>
            <Grid data={products} style={{ height: '400px' }} rows={{ data: CustomRow }}>
                <Column field="ProductName" title="Product Name" />
                <Column field="UnitsInStock" title="Units In Stock" />
                <Column field="UnitsOnOrder" title="Units On Order" />
                <Column field="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
