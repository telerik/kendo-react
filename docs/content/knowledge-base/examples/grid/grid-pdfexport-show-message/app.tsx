import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridPageChangeEvent } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { Button } from '@progress/kendo-react-buttons';
import { products } from './products';

interface PageState {
    skip: number;
    take: number;
}

const App = () => {
    const gridPDFExport = React.useRef<GridPDFExport>(null);
    const total: number = products.length;
    const pageSize: number = 5;

    const [page, setPage] = React.useState<PageState>({
        skip: 0,
        take: pageSize
    });

    const [pdfExportMessage, setPdfExportMessage] = React.useState<string>('');

    const pageChange = (event: GridPageChangeEvent): void => {
        setPage(event.page);
    };

    const exportPDF = (): void => {
        setPdfExportMessage('Your file will be downloaded shortly...');

        setTimeout(() => {
            if (gridPDFExport.current) {
                gridPDFExport.current.save(products, () => {
                    setPdfExportMessage('');
                });
            }
        }, 2500);
    };

    const grid = (
        <Grid
            data={products.slice(page.skip, page.skip + page.take)}
            pageable={true}
            onPageChange={pageChange}
            pageSize={pageSize}
            total={total}
            {...page}
        >
            <GridToolbar>
                <Button title="Export PDF" onClick={exportPDF} type="button">
                    Export PDF
                </Button>
            </GridToolbar>
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="ProductName" title="Name" width="300px" />
            <Column field="Category.CategoryName" title="Category" />
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In stock" />
            <Column field="Discontinued" title="Discontinued" />
        </Grid>
    );

    return (
        <div>
            {pdfExportMessage && (
                <div className="k-messagebox k-messagebox-info" style={{ marginBottom: '20px' }}>
                    {pdfExportMessage}
                </div>
            )}
            {grid}
            <GridPDFExport ref={gridPDFExport} margin="1cm">
                {grid}
            </GridPDFExport>
        </div>
    );
};

export default App;
