import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import { WorkbookOptions, WorkbookSheetRow } from '@progress/kendo-ooxml';
import products from './shared-kb-products';

const data = products;
const modifiedData = data.map((item) => ({
    ...item
}));

const App = () => {
    const _exporter = React.createRef<ExcelExport>();
    const excelExport = () => {
        save(_exporter);
    };
    const save = (component) => {
        const options: WorkbookOptions = component.current.workbookOptions();
        const rows = options.sheets![0].rows!;

        const dataMap = new Map(modifiedData.map((item) => [item.ProductID, item]));

        rows.forEach((row: WorkbookSheetRow) => {
            if (row.type === 'data') {
                const productID = row.cells![0].value;
                const dataItem = dataMap.get(productID) as { [key: string]: string };

                if (dataItem && dataItem.is_total) {
                    row.cells!.forEach((cell) => {
                        cell.bold = true;
                    });
                }
            }
        });

        component.current.save(options);
    };
    return (
        <div>
            <Button
                type="button"
                onClick={excelExport}
            >
                Export to Excel
            </Button>

            <ExcelExport data={modifiedData} fileName="Products.xlsx" ref={_exporter}>
                <ExcelExportColumn field="ProductID" title="Product ID" />
                <ExcelExportColumn field="ProductName" title="Product Name" />
            </ExcelExport>
        </div>
    );
};

export default App;
