import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridRowClickEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.ProductID;
        console.log(event.field);
        const field = event.field || '';
        const newData = data.map((item) => (item.ProductID === inEditID ? { ...item, [field]: event.value } : item));
        setData(newData);
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            autoProcessData={true}
            editable={true}
            defaultEdit={{
                1: true
            }}
            dataItemKey="ProductID"
            onItemChange={handleItemChange}
        >
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column field="ProductName" title="Name" />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
            <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
            <Column field="Discontinued" title="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
