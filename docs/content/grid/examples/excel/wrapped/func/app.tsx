import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

const App = () => {
    const _export = React.useRef<ExcelExport | null>(null);
    const exportExport = () => {
        if (_export.current !== null) {
            _export.current.save(products);
        }
    };
    return (
        <ExcelExport ref={_export}>
            <Grid style={{ height: '420px' }} data={products}>
                <GridToolbar>
                    <Button title="Export Excel" themeColor={'primary'} type="button" onClick={exportExport}>
                        Export to Excel
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductID" title="Product ID" width="50px" />
                <GridColumn field="ProductName" title="Product Name" width="350px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </ExcelExport>
    );
};

export default App;
