import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import sampleProducts from './products';

// Store GridColumn elements in an array for reusability
const App: React.FC = () => {
    const columns = [
        <GridColumn key="ProductID" field="ProductID" title="ID" width="80px" />,
        <GridColumn key="ProductName" field="ProductName" title="Product Name" />,
        <GridColumn key="UnitPrice" field="UnitPrice" title="Price" format="{0:c}" width="120px" />,
        <GridColumn key="UnitsInStock" field="UnitsInStock" title="In Stock" width="120px" />
    ];

    return <Grid data={sampleProducts}>{columns}</Grid>;
};
export default App;
