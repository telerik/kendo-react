import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridDetailRowProps,
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
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({ [products[1].ProductID]: true });

    return (
        <Grid
            data={products}
            detail={DetailComponent}
            style={{ height: '400px' }}
            dataItemKey="ProductID"
            defaultDetailExpand={detailExpand}
        >
            <Column field="ProductName" title="Product" width="300px" />
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="UnitPrice" title="Unit Price" width="100px" />
            <Column field="QuantityPerUnit" title="Qty Per Unit" />
        </Grid>
    );
};
export default App;
