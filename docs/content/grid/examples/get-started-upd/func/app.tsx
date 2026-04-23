import React, { useState } from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';
import products from './gd-products';

interface ProductCategory {
    CategoryID?: number;
    CategoryName?: string;
    Description?: string;
}

interface Product {
    ProductID: number;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    Category?: ProductCategory;
    inEdit?: boolean | string;
}

const App = () => {
    const [data, setData] = useState<Array<Product>>(products);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid
            style={{ height: '475px' }}
            data={data}
            dataItemKey="ProductID"
            autoProcessData={true}
            sortable={true}
            pageable={true}
            filterable={true}
            editable={{ mode: 'incell' }}
            defaultSkip={0}
            defaultTake={10}
            onItemChange={handleItemChange}
        >
            <Column field="ProductID" title="ID" editable={false} filterable={false} width="75px" />
            <Column field="ProductName" title="Name" editor="text" />
            <Column field="Category.CategoryName" title="Category" editable={false} width="200px"></Column>
            <Column field="UnitPrice" title="Price" editor="numeric" width="150px" />
            <Column field="UnitsInStock" title="In stock" editor="numeric" width="150px" />
            <Column field="Discontinued" title="Discontinued" editor="boolean" width="150px" />
        </Grid>
    );
};

export default App;
