import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import './styles.css';

const sampleData = [
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18, UnitsInStock: 39, Discontinued: false },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19, UnitsInStock: 17, Discontinued: false },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10, UnitsInStock: 13, Discontinued: false },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22, UnitsInStock: 53, Discontinued: false },
    { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitPrice: 21.35, UnitsInStock: 0, Discontinued: true }
];

const App = () => {
    return (
        <div>
            <h3>Grid with Reduced Header Height</h3>
            <Grid data={sampleData}>
                <GridColumn field="ProductID" title="ID" width="80px" />
                <GridColumn field="ProductName" title="Product Name" />
                <GridColumn field="UnitPrice" title="Price" format="{0:c}" width="120px" />
                <GridColumn field="UnitsInStock" title="In Stock" width="120px" />
                <GridColumn field="Discontinued" title="Discontinued" width="140px" />
            </Grid>
        </div>
    );
};

export default App;
