import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import products from './shared-kb-products';

function getTextWidth(text: string, font: string): number {
    const fn = getTextWidth as typeof getTextWidth & { canvas?: HTMLCanvasElement };
    const canvas = fn.canvas || (fn.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    if (!context) {
        return 0;
    }
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

interface Product {
    ProductID: number;
    ProductName: string;
    Category?: { CategoryName?: string };
    UnitPrice?: number;
    UnitsInStock?: number;
    [key: string]: any;
}

const App = () => {
    const calculateWidth = (field: keyof Product): number => {
        let maxWidth = 0;
        (products as Product[]).forEach((item) => {
            const value = item[field];
            const size = getTextWidth(String(value), 'normal 14px sans-serif') + 12;
            if (size > maxWidth) {
                maxWidth = size;
            }
        });
        return maxWidth;
    };

    return (
        <Grid
            style={{
                height: '400px'
            }}
            data={products as Product[]}
        >
            <GridColumn field="ProductID" title="ID" width="40px" />
            <GridColumn field="ProductName" title="Name" width={calculateWidth('ProductName')} />
            <GridColumn field="Category.CategoryName" title="CategoryName" />
            <GridColumn field="UnitPrice" title="Price" />
            <GridColumn field="UnitsInStock" title="In stock" />
        </Grid>
    );
};

export default App;
