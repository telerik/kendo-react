import * as React from 'react';
import { Grid, GridColumn, GridCellProps } from '@progress/kendo-react-grid';

// Sample data for the Grid
const sampleData = [
    { id: 1, productName: 'Laptop', price: 1299.99, inStock: true },
    { id: 2, productName: 'Mouse', price: 29.99, inStock: true },
    { id: 3, productName: 'Keyboard', price: 89.99, inStock: false },
    { id: 4, productName: 'Monitor', price: 399.99, inStock: true },
    { id: 5, productName: 'Webcam', price: 79.99, inStock: true }
];

const CenterCell = (props: GridCellProps) => {
    return <td style={{ textAlign: 'center', fontWeight: 500 }}>{props.dataItem[props.field || '']}</td>;
};

const RightCell = (props: GridCellProps) => {
    return <td style={{ textAlign: 'right' }}>{props.dataItem[props.field || '']}$</td>;
};

// Custom cell for status indication
const StatusCell = (props: GridCellProps) => {
    const inStock = props.dataItem[props.field || ''];
    return (
        <td
            style={{
                textAlign: 'center',
                color: inStock ? '#28a745' : '#dc3545',
                fontWeight: 600
            }}
        >
            {inStock ? '✓ Available' : '✗ Unavailable'}
        </td>
    );
};

// Wrapper function that maps old 'cell' prop to new 'cells' prop structure
const CustomGridColumn = (props) => {
    const { cell, ...rest } = props;
    // Map the old 'cell' prop to the new 'cells' object structure
    return <GridColumn cells={{ data: cell }} {...rest} />;
};

const App = () => {
    return (
        <Grid data={sampleData}>
            {CustomGridColumn({ field: 'productName', title: 'Product Name', cell: CenterCell })}
            {CustomGridColumn({ field: 'price', title: 'Price', cell: RightCell })}
            {CustomGridColumn({ field: 'inStock', title: 'Status', cell: StatusCell, width: '140px' })}
        </Grid>
    );
};

export default App;
