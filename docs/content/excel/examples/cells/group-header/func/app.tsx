import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { GroupDescriptor, process } from '@progress/kendo-data-query';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';

const group: GroupDescriptor[] = [
    {
        field: 'Category.CategoryName'
    }
];

const data = process(products, {
    group: group
}).data;

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
                <ExcelExportColumn field="ProductName" title="Product Name" width={350} />
                <ExcelExportColumn
                    field="Category.CategoryName"
                    title="Category"
                    groupHeaderCellOptions={{
                        background: 'ff0000'
                    }}
                    hidden={true}
                />
            </ExcelExport>
        </div>
    );
};

export default App;
