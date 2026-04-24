import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './gd-products';
import { GridHelper } from './GridHelper';

const App = () => {
    const onSelectedItemsChange = (ev) => {
        console.log(ev.selectedItems);
    };

    return (
        <div>
            <GridHelper
                toolbarSettings={{
                    filterHighlights: true,
                    expandCollapseAllButton: true,
                    pdfExportButton: true,
                    excelExportButton: true,
                    externalFilter: true,
                    showFeaturesConfigurator: true,
                    showColumnsConfigurator: true
                }}
                initialDataState={{
                    skip: 0,
                    take: 10,
                    sort: [
                        {
                            field: 'ProductName',
                            dir: 'desc'
                        }
                    ],
                    group: [{ field: 'Category.CategoryName', dir: 'asc' }]
                }}
                onSelectedItemsChange={onSelectedItemsChange}
                filterable={true}
                dataItemKey={'ProductID'}
                selectable={true}
                groupable={true}
                sortable={true}
                pageable={{ buttonCount: 3, info: true, pageSizes: [5, 10, 50] }}
                data={products}
            >
                <Grid style={{ height: '520px' }}>
                    <Column columnType="checkbox" width="65px" filterable={false} />
                    <Column field="ProductID" title="ID" width="100px" filterable={false} />
                    <Column field="ProductName" title="Name" width="340px" />
                    <Column field="Category.CategoryName" title="Category Name" width="180px" />
                    <Column field="UnitPrice" title="Price" filter="numeric" width="160px" />
                    <Column field="UnitsInStock" title="In stock" filter="numeric" width="160px" />
                    <Column field="Discontinued" filter="boolean" width="180px" />
                </Grid>
            </GridHelper>
        </div>
    );
};
export default App;
