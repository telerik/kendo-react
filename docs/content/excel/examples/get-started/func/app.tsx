import * as React from 'react';

import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';

const App = () => {
    const _exporter = React.createRef<ExcelExport>();
    const exportExcel = () => {
        if (_exporter.current) {
            _exporter.current.save();
        }
    };
    return (
        <div>
            <Button type="button" onClick={exportExcel}>
                Export to Excel
            </Button>
            <ExcelExport data={products} fileName="Products.xlsx" ref={_exporter}>
                <ExcelExportColumn field="ProductID" title="Product ID" locked={true} width={200} />
                <ExcelExportColumn field="ProductName" title="Product Name" width={350} />
                <ExcelExportColumn field="UnitsOnOrder" title="Units on Order" />
                <ExcelExportColumn field="UnitsInStock" title="Units in Stock" />
            </ExcelExport>
        </div>
    );
};

export default App;
