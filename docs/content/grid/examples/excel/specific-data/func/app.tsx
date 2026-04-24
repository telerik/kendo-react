import * as React from 'react';
import { Grid, GridColumn, GridPageChangeEvent, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import products from './gd-products';

interface PageInterface {
    skip: number;
    take: number;
}

const App = () => {
    const _export = React.useRef<ExcelExport | null>(null);
    const _grid = React.useRef<any>(undefined);

    const [page, setPage] = React.useState<PageInterface>({ skip: 0, take: 10 });

    const excelExport = () => {
        if (_export.current !== null) {
            // pass the products, instead the paginated data in the state.
            _export.current.save(products, _grid.current.columns);
        }
    };
    return (
        <div>
            <ExcelExport ref={_export} />
            <Grid
                data={products.slice(page.skip, page.skip + page.take)}
                onPageChange={(e: GridPageChangeEvent) => setPage(e.page)}
                total={products.length}
                skip={page.skip}
                pageable={true}
                pageSize={page.take}
                ref={_grid}
            >
                <GridToolbar>
                    <Button title="Export Excel" themeColor={'primary'} type="button" onClick={excelExport}>
                        Export to Excel
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductID" title="Product ID" width="50px" />
                <GridColumn field="ProductName" title="Product Name" width="350px" />
                <GridColumn field="UnitPrice" title="Price" />
                <GridColumn field="UnitsInStock" title="In stock" />
                <GridColumn field="Discontinued" title="Discontinued" />
            </Grid>
        </div>
    );
};

export default App;
