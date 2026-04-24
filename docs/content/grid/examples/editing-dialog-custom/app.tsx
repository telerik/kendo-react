import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridItemChangeEvent,
    GridRowClickEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';

import { CustomEditDialog } from './custom-dialog';
import { Product } from './gd-interfaces';
import sampleProducts from './gd-sample-products';

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const rowClick = (event: GridRowClickEvent) => {
        const inEditID = event.dataItem.ProductID;

        setEdit({ [inEditID]: true });
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.ProductID;

        const newData = data.map((item) => {
            return item.ProductID === inEditID ? { ...item, ...event.dataItem } : item;
        });

        setData(newData);
        setEdit({});
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            edit={edit}
            editable={{ mode: 'dialog', enabled: true }}
            onRowClick={rowClick}
            editDialog={CustomEditDialog}
            dataItemKey="ProductID"
            onEditChange={handleEditChange}
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
