import * as React from 'react';
import { Grid, GridColumnMenuProps, GridColumnMenuColumnsChooser, GridColumn } from '@progress/kendo-react-grid';

import sampleProducts from './gd-sample-products';

const ColumnMenu = (props: GridColumnMenuProps) => (
    <div>
        <GridColumnMenuColumnsChooser {...props} />
    </div>
);

const App = () => {
    return (
        <Grid data={sampleProducts} adaptive={true} columnMenu={ColumnMenu} style={{ height: '400px' }}>
            <GridColumn field="ProductID" filter="numeric" />
            <GridColumn field="ProductName" />
            <GridColumn field="UnitPrice" filter="numeric" />
            <GridColumn field="Discontinued" filter="boolean" />
        </Grid>
    );
};

export default App;
