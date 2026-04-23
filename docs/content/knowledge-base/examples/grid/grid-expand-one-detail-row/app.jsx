import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './shared-kb-products';

const DetailComponent = (props) => {
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
    const [data, setData] = React.useState(products);
    const expandChange = (event) => {
        const updatedData = data.map((item) => ({
            ...item,
            expanded: item.ProductID === event.dataItem.ProductID ? !event.dataItem.expanded : false
        }));
        setData(updatedData);
    };
    return (
        <Grid
            data={data}
            detail={DetailComponent}
            style={{
                height: '400px'
            }}
            expandField="expanded"
            onExpandChange={expandChange}
        >
            <Column field="ProductName" title="Product" width="300px" />
            <Column field="ProductID" title="ID" width="50px" />
            <Column field="UnitPrice" title="Unit Price" width="100px" />
            <Column field="QuantityPerUnit" title="Qty Per Unit" />
        </Grid>
    );
};
export default App;
