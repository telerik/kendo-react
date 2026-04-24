import * as React from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent } from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';

const allInEdit = () => {
    let result = {};
    const editedColumns = Object.keys(sampleProducts[0]); //the column names
    sampleProducts.forEach((product) => {
        result[product.ProductID] = editedColumns;
    });

    return result;
};

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>(allInEdit);

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid
            data={data}
            autoProcessData={true}
            dataItemKey="ProductID"
            editable={true}
            defaultEdit={edit}
            onItemChange={handleItemChange}
        >
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column field="ProductName" />
            <Column field="FirstOrderedOn" width="150px" editor="date" format="{0:d}" />
            <Column field="UnitsInStock" width="150px" editor="numeric" />
            <Column field="Discontinued" width="120px" editor="boolean" />
        </Grid>
    );
};

export default App;
