import React, { useRef } from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';

import products from './shared-kb-products';

const App = () => {
    const _export = useRef(null);

    const handleExport = () => {
        if (!_export.current) return;

        const options = _export.current.workbookOptions();
        const rows = options.sheets[0].rows;
        options.sheets[0].frozenRows = 2;

        const headerRow = {
            height: 70,
            cells: [{ value: `Product List ${new Date().getFullYear()}`, fontSize: 30, colSpan: 5 }]
        };

        const footerRow = {
            height: 70,
            cells: [{ value: `Total revenue 1 000 000`, fontSize: 30, colSpan: 5 }]
        };

        rows.unshift(headerRow);
        rows.push(footerRow);

        _export.current.save(options);
    };

    return (
        <ExcelExport data={products} ref={_export}>
            <Grid data={products} style={{ height: '420px' }}>
                <GridToolbar>
                    <button title="Export PDF" className="k-button k-primary" onClick={handleExport}>
                        Export to Excel
                    </button>
                </GridToolbar>
                <GridColumn field="ProductID" title="Product ID" width="50px" />
                <GridColumn field="ProductName" title="Product Name" width="350px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </ExcelExport>
    );
};

export default App;
