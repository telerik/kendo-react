import * as React from 'react';
import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';

const data = products;

const App = () => {
    const _exporter = React.createRef<ExcelExport>();
    const excelExport = () => {
        if (_exporter.current) {
            _exporter.current.save();
        }
    };
    return (
        <div>
            <Button type="button" onClick={excelExport}>
                Export to Excel
            </Button>
            <ExcelExport data={data} fileName="Products.xlsx" ref={_exporter}>
                <ExcelExportColumn field="ProductID" title="Product ID" />
                <ExcelExportColumn field="ProductName" title="Product Name" />
                <ExcelExportColumnGroup title="Availability" headerCellOptions={{ textAlign: 'center' }}>
                    <ExcelExportColumn field="UnitPrice" title="Unit Price" />
                    <ExcelExportColumn field="UnitsOnOrder" title="Units On Order" />
                    <ExcelExportColumn field="UnitsInStock" title="Units In Stock" />
                </ExcelExportColumnGroup>
            </ExcelExport>
        </div>
    );
};

export default App;
