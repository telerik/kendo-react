import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

const data = products;

const App = () => {
    const _export = React.useRef<ExcelExport | null>(null);
    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };
    return (
        <div>
            <ExcelExport data={data} ref={_export}>
                <ExcelExportColumn field="ProductID" title="Product ID" locked={true} width={50} />
                <ExcelExportColumn field="ProductName" title="Product Name" width={350} />
                <ExcelExportColumnGroup title="Availability" headerCellOptions={{ textAlign: 'center' }}>
                    <ExcelExportColumn
                        field="UnitPrice"
                        title="Price"
                        cellOptions={{ format: '$#,##0.00' }}
                        width={150}
                        footerCellOptions={{ wrap: true, textAlign: 'center' }}
                        groupFooterCellOptions={{ textAlign: 'right' }}
                    />
                    <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
                    <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
                </ExcelExportColumnGroup>
            </ExcelExport>
            <Grid style={{ height: '420px' }} data={data}>
                <GridToolbar>
                    <Button title="Export Excel" themeColor={'primary'} type="button" onClick={excelExport}>
                        Export to Excel
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductID" title="ID" width="50px" />
                <GridColumn field="ProductName" title="Name" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
