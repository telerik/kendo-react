import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';

const data = products;
const fields = Object.keys(data[0]);

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
                {fields.map((field, index) => (
                    <ExcelExportColumn key={index} field={field} locked={field === 'ProductID'} width={200} />
                ))}
            </ExcelExport>
        </div>
    );
};

export default App;
