import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import products from './gd-products';

const App = () => {
    const _grid = React.useRef<any>(undefined);
    const _export = React.useRef<ExcelExport | null>(null);
    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save(products, _grid.current.columns);
        }
    };
    return (
        <div>
            <ExcelExport ref={_export} />
            <Grid style={{ height: '420px' }} data={products} ref={_grid}>
                <GridToolbar>
                    <Button title="Export Excel" themeColor={'primary'} type="button" onClick={excelExport}>
                        Export to Excel
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductID" title="Product ID" width="50px" />
                <GridColumn field="ProductName" title="Product Name" width="350px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
