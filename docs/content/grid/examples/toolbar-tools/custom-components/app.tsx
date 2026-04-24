import * as React from 'react';
import { Grid, GridColumn as Column, GridItemChangeEvent, GridToolbar } from '@progress/kendo-react-grid';
import GridToolbarEdit from './GridToolbarEdit';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import sampleProducts from './products';

interface Product {
    ProductID: number;
    ProductName?: string;
    UnitsInStock?: number;
    Discontinued?: boolean;
}

const App = () => {
    const [data, setData] = React.useState<Product[]>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    return (
        <Grid
            style={{ height: '530px', minWidth: '500px' }}
            data={data}
            dataItemKey="ProductID"
            autoProcessData={true}
            editable={true}
            edit={edit}
            onItemChange={handleItemChange}
        >
            <GridToolbar>
                <GridToolbarEdit edit={edit} setEdit={setEdit} data={data} />
            </GridToolbar>
            <Column field="ProductID" title="Id" width="40px" editable={false} />
            <Column field="ProductName" title="Product Name" />
            <Column field="UnitPrice" title="Unit Price" editor="numeric" />
            <Column field="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
