import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDetailRowProps,
    GridPageChangeEvent,
    GridDetailExpandChangeEvent
} from '@progress/kendo-react-grid';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import products from './gd-products';

const DetailComponent = (props: GridDetailRowProps) => {
    const dataItem = props.dataItem;
    return (
        <section>
            <p>
                <strong>In Stock:</strong> {dataItem.UnitsInStock} units
            </p>
            <p>
                <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
            </p>
            <p>
                <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
            </p>
            <p>
                <strong>Discontinued:</strong> {dataItem.Discontinued}
            </p>
            <p>
                <strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}
            </p>
        </section>
    );
};

const App = () => {
    const [skip, setSkip] = React.useState<number>(0);
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({});
    const pageSize = 20;

    const handlePageChange = (event: GridPageChangeEvent) => {
        setSkip(event.page.skip);
    };

    const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
        setDetailExpand(event.detailExpand);
    };

    return (
        <Grid
            data={products}
            style={{ height: '400px' }}
            rowHeight={50}
            dataItemKey="ProductID"
            detailRowHeight={196}
            detail={DetailComponent}
            scrollable={'virtual'}
            pageSize={pageSize}
            skip={skip}
            total={products.length}
            onPageChange={handlePageChange}
            detailExpand={detailExpand}
            onDetailExpandChange={handleDetailExpandChange}
        >
            <Column field="ProductName" title="Product" width="300px" />
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="UnitPrice" title="Unit Price" width="100px" />
            <Column field="QuantityPerUnit" title="Qty Per Unit" />
        </Grid>
    );
};
export default App;
