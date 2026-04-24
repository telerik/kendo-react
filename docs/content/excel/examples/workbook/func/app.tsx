import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './shared-ex-products';
import { WorkbookOptions } from '@progress/kendo-ooxml';

const data = products;

const App = () => {
    const _exporter = React.createRef<ExcelExport>();
    const excelExport = () => {
        save(_exporter);
    };
    const save = (component) => {
        const options: WorkbookOptions = component.current.workbookOptions();
        const rows = options.sheets![0].rows;

        let altIdx = 0;
        rows!.forEach((row) => {
            if (row.type === 'data') {
                if (altIdx % 2 !== 0) {
                    row.cells!.forEach((cell) => {
                        cell.background = '#aabbcc';
                    });
                }
                altIdx++;
            }
        });

        component.current.save(options);
    };
    return (
        <div>
            <Button type="button" onClick={excelExport}>
                Export to Excel
            </Button>

            <ExcelExport data={data} fileName="Products.xlsx" ref={_exporter}>
                <ExcelExportColumn field="ProductID" title="Product ID" />
                <ExcelExportColumn field="ProductName" title="Product Name" />
            </ExcelExport>
        </div>
    );
};

export default App;
