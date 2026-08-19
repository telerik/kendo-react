import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDetailRowProps,
    GridDetailExpandChangeEvent
} from '@progress/kendo-react-grid';
import { DetailExpandDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
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
                <strong>Discontinued:</strong> {String(dataItem.Discontinued)}
            </p>
            <p>
                <strong>Category:</strong> {dataItem.Category.CategoryName} — {dataItem.Category.Description}
            </p>
        </section>
    );
};

const App = () => {
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({});

    const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
        setDetailExpand(event.detailExpand);
    };

    const expandAll = () => {
        setDetailExpand(Object.fromEntries(products.map((p) => [p.ProductID, true])));
    };

    const collapseAll = () => {
        setDetailExpand({});
    };

    return (
        <div>
            <div style={{ marginBottom: '12px', display: 'flex', gap: '8px' }}>
                <Button onClick={expandAll}>Expand All</Button>
                <Button onClick={collapseAll}>Collapse All</Button>
            </div>
            <Grid
                data={products}
                detail={DetailComponent}
                detailExpand={detailExpand}
                onDetailExpandChange={handleDetailExpandChange}
                style={{ height: '400px' }}
                dataItemKey="ProductID"
            >
                <Column field="ProductName" title="Product" width="300px" />
                <Column field="ProductID" title="ID" width="50px" />
                <Column field="UnitPrice" title="Unit Price" width="100px" />
                <Column field="QuantityPerUnit" title="Qty Per Unit" />
            </Grid>
        </div>
    );
};

export default App;
