import * as React from 'react';
import { Grid, GridColumn, GridFilterChangeEvent, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import products from './gd-products';

const initialFilter: CompositeFilterDescriptor = {
    logic: 'and',
    filters: [{ field: 'UnitPrice', operator: 'lt', value: 30 }]
};

const App = () => {
    const _export = React.useRef<ExcelExport | null>(null);
    const _grid = React.useRef<any>(undefined);
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>(initialFilter);

    const filteredData = filterBy(products, filter);

    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save(filteredData, _grid.current.columns);
        }
    };

    const handleFilterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };

    return (
        <div>
            <ExcelExport ref={_export} />
            <Grid
                data={filteredData}
                filterable={true}
                filter={filter}
                onFilterChange={handleFilterChange}
                style={{ height: '440px' }}
                ref={_grid}
            >
                <GridToolbar>
                    <Button title="Export Excel" themeColor={'primary'} type="button" onClick={excelExport}>
                        Export to Excel
                    </Button>
                </GridToolbar>
                <GridColumn field="ProductID" title="Product ID" width="120px" filterable={false} />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Price" width="160px" filter="numeric" format="{0:c}" />
                <GridColumn field="UnitsInStock" title="In Stock" width="120px" filter="numeric" />
                <GridColumn field="Discontinued" title="Discontinued" width="150px" filter="boolean" />
            </Grid>
        </div>
    );
};

export default App;
