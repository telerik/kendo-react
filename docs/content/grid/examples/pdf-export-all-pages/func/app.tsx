import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridPageChangeEvent,
    GridPdfExportButton
} from '@progress/kendo-react-grid';
import { saveGridPDF } from '@progress/kendo-react-pdf';
import { products } from './products';

interface Page {
    skip: number;
    take: number;
}

const App = () => {
    let total: number = products.length;
    let pageSize: number = 5;

    const [page, setPage] = React.useState<Page>({ skip: 0, take: pageSize });

    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const handlePdfExport = async (event) => {
        const callBack = () => {
            console.log('PDF Exported');
        };
        setTimeout(async () => {
            // we could load the @progress/kendo-react-pdf module dynamically
            // const { saveGridPDF } = await import('@progress/kendo-react-pdf');
            saveGridPDF(
                event.target,
                {
                    margin: '1cm'
                },
                callBack
            );
        }, 250);
    };

    return (
        <div>
            <Grid
                data={products.slice(page.skip, page.skip + page.take)}
                pageable={true}
                onPageChange={pageChange}
                pageSize={pageSize}
                total={total}
                {...page}
                pdf={{
                    data: products
                }}
                onPdfExport={handlePdfExport}
            >
                <GridToolbar>
                    <GridPdfExportButton themeColor={'primary'} />
                </GridToolbar>
                <Column field="ProductID" title="ID" width="50px" />
                <Column field="ProductName" title="Name" width="300px" />
                <Column field="Category.CategoryName" title="Category" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
