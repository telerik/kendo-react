import * as React from 'react';
import {
    Grid,
    GridColumn,
    type GridCustomCellProps
} from '@progress/kendo-react-grid';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    unitsInStock: number;
}

const products: Product[] = [
    { id: 1, name: 'Chai', category: 'Beverages', price: 18, unitsInStock: 39 },
    { id: 2, name: 'Chang', category: 'Beverages', price: 19, unitsInStock: 17 },
    { id: 3, name: 'Aniseed Syrup', category: 'Condiments', price: 10, unitsInStock: 13 },
    { id: 4, name: 'Chef Anton\'s Cajun Seasoning', category: 'Condiments', price: 22, unitsInStock: 53 },
    { id: 5, name: 'Grandma\'s Boysenberry Spread', category: 'Condiments', price: 25, unitsInStock: 0 },
    { id: 6, name: 'Uncle Bob\'s Organic Dried Pears', category: 'Produce', price: 30, unitsInStock: 15 },
    { id: 7, name: 'Northwoods Cranberry Sauce', category: 'Condiments', price: 40, unitsInStock: 6 },
    { id: 8, name: 'Mishi Kobe Niku', category: 'Meat/Poultry', price: 97, unitsInStock: 29 }
];

const ActionsCell = (props: Readonly<GridCustomCellProps>) => {
    const { tdProps, dataItem } = props;

    const handleEdit = () => {
        alert(`Edit: ${dataItem.name}`);
    };

    return (
        <td {...tdProps}>
            <button className="k-button k-button-sm k-button-solid k-button-solid-primary" onClick={handleEdit}>
                Edit
            </button>
        </td>
    );
};

const StockCell = (props: Readonly<GridCustomCellProps>) => {
    const { tdProps, dataItem } = props;
    const inStock = dataItem.unitsInStock > 0;

    return (
        <td {...tdProps} style={{ ...tdProps?.style, color: inStock ? '#28a745' : '#dc3545', fontWeight: 600 }}>
            {inStock ? `\u2713 ${dataItem.unitsInStock} in stock` : '\u2715 Out of stock'}
        </td>
    );
};

const App = () => {
    return (
        <Grid style={{ height: '400px' }} data={products}>
            <GridColumn
                field="id"
                title="Actions"
                width="110px"
                locked={true}
                cells={{ data: ActionsCell }}
            />
            <GridColumn field="name" title="Product Name" width="240px" />
            <GridColumn field="category" title="Category" width="160px" />
            <GridColumn field="price" title="Price ($)" width="120px" />
            <GridColumn
                field="unitsInStock"
                title="Availability"
                width="160px"
                cells={{ data: StockCell }}
            />
        </Grid>
    );
};

export default App;
