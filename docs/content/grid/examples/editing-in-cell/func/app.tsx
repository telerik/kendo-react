import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';

import sampleProducts from './gd-sample-products';
import { Button } from '@progress/kendo-react-buttons';
import { Product } from './gd-interfaces';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [changes, setChanges] = React.useState<boolean>(false);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    const saveChanges = () => {
        // @ts-expect-error the error does not affect the demo
        sampleProducts.splice(0, sampleProducts.length, ...data);
        setChanges(false);
        setEdit({});
    };

    const cancelChanges = () => {
        setChanges(false);
        setData(sampleProducts);
        setEdit({});
    };

    const itemChange = (event: GridItemChangeEvent) => {
        if (event.field) {
            setData((data) =>
                data.map((item) =>
                    item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
                )
            );
        }
        setChanges(true);
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            dataItemKey={DATA_ITEM_KEY}
            rowHeight={50}
            edit={edit}
            editable={{ mode: 'incell' }}
            onEditChange={handleEditChange}
            onItemChange={itemChange}
        >
            <GridToolbar>
                <Button title="Save Changes" type="button" onClick={saveChanges} disabled={!changes}>
                    Save Changes
                </Button>
                <Button title="Cancel Changes" type="button" onClick={cancelChanges} disabled={!changes}>
                    Cancel Changes
                </Button>
            </GridToolbar>
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column field="ProductName" title="Product Name" width="200px" />
            <Column field="UnitsInStock" title="Units In Stock" editor="numeric" />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" width="140px" />
            <Column field="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
