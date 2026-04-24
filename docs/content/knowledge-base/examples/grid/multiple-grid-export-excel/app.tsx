import React, { useRef, useCallback } from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import products from './shared-kb-products';

const App = () => {
    const exportGridOneRef = useRef<ExcelExport>(null);
    const exportGridTwoRef = useRef<ExcelExport>(null);

    const handleExport = useCallback(() => {
        if (exportGridOneRef.current && exportGridTwoRef.current) {
            const optionsGridOne = exportGridOneRef.current.workbookOptions();
            const optionsGridTwo = exportGridTwoRef.current.workbookOptions();
            if (optionsGridOne.sheets && optionsGridTwo.sheets) {
                optionsGridOne.sheets[1] = optionsGridTwo.sheets[0];
                if (optionsGridOne.sheets[0]) {
                    optionsGridOne.sheets[0].name = 'First Grid data';
                }
                if (optionsGridOne.sheets[1]) {
                    optionsGridOne.sheets[1].name = 'Second Grid data';
                }
                exportGridOneRef.current.save(optionsGridOne);
            }
        }
    }, []);

    return (
        <div>
            <ExcelExport data={products} ref={exportGridOneRef}>
                <Grid data={products} style={{ height: '490px' }}>
                    <GridToolbar>
                        <button title="Export Excel" className="k-button k-primary" onClick={handleExport}>
                            Export to Excel
                        </button>
                    </GridToolbar>
                    <GridColumn field="ProductID" title="Product ID" />
                    <GridColumn field="ProductName" title="Product Name" />
                    <GridColumn field="UnitsInStock" title="UnitsInStock" />
                </Grid>
            </ExcelExport>

            <ExcelExport data={products} ref={exportGridTwoRef}>
                <Grid data={products} style={{ height: '490px' }}>
                    <GridToolbar>
                        <button title="Export Excel" className="k-button k-primary" onClick={handleExport}>
                            Export to Excel
                        </button>
                    </GridToolbar>
                    <GridColumn field="ProductID" title="Product ID" />
                    <GridColumn field="ProductName" title="Product Name" />
                    <GridColumn field="UnitsInStock" title="UnitsInStock" />
                </Grid>
            </ExcelExport>
        </div>
    );
};

export default App;
