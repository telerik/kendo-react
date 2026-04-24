import * as React from 'react';
import { ExcelExport, ExcelExportColumn, ExcelExportFooter } from '@progress/kendo-react-excel-export';
import { aggregateBy, AggregateDescriptor } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';

const aggregates: AggregateDescriptor[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

const data = products;

const total = aggregateBy(products, aggregates);

const CustomFooter = () => {
    return `Sum: ${total.UnitPrice.sum}`;
};
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
                <ExcelExportColumn field="UnitPrice" title="Unit Price" footer={CustomFooter} />
            </ExcelExport>
        </div>
    );
};

export default App;
