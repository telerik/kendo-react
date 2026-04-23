import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import { AggregateDescriptor, GroupDescriptor, process } from '@progress/kendo-data-query';
import products from './shared-ex-products';

const aggregates: AggregateDescriptor[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

const group: GroupDescriptor[] = [
    {
        field: 'Discontinued',
        aggregates: aggregates
    }
];

const data = process(products, {
    group: group
}).data;

const CustomGroupFooter = (props: any) => {
    return `Sum: ${props.aggregates.UnitPrice.sum.toFixed(2)}`;
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
            <ExcelExport data={data} group={group} fileName="Products.xlsx" ref={_exporter}>
                <ExcelExportColumn field="ProductID" title="Product ID" />
                <ExcelExportColumn field="ProductName" title="Product Name" />
                <ExcelExportColumn field="UnitPrice" title="Unit Price" groupFooter={CustomGroupFooter} />
            </ExcelExport>
        </div>
    );
};

export default App;
