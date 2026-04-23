---
title: Saving Files on the Server
description: 'Save the exported files on the server when working with the KendoReact Excel Export component in React projects.'
components: ["excelexport"]
slug: filesaving_excelexport
position: 5
---

# Saving Files on the Server

The Excel Export component enables you to send the generated Excel file to a remote service.

To save a file on the server:

1. Use the [`toDataURL`]({% slug api_excel-export_excelexport %}#toc-todataurl) method to get the base64-encoded contents.
1. Post the contents to the server.

```jsx-no-run
import * as React from 'react';
import { ExcelExport, ExcelExportColumn } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import { products } from './products';

const SAVE_URL = '/api/save-excel'; // Replace with your actual endpoint

export function App() {
    const exporter = React.useRef(null);
    const fileName = "Products.xlsx";

    const exportToExcel = () => {
        if (exporter.current) {
            exporter.current.toDataURL().then((dataURL) => {
                const base64 = dataURL.split(";base64,")[1];

                fetch(SAVE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        base64: base64,
                        fileName: fileName
                    })
                });
            });
        }
    };

    return (
        <div>
            <Button onClick={exportToExcel}>Export to Excel</Button>
            <ExcelExport
                data={products}
                ref={exporter}
            >
                <ExcelExportColumn field="ProductID" title="Product ID" />
                <ExcelExportColumn field="ProductName" title="Product Name" />
            </ExcelExport>
        </div>
    );
}
```

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
