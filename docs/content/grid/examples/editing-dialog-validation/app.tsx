import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridItemChangeEvent,
    GridRowClickEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Product } from './gd-interfaces';
import sampleProducts from './gd-sample-products';

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const rowClick = (event: GridRowClickEvent) => {
        const inEditID = event.dataItem[DATA_ITEM_KEY];

        setEdit({ [inEditID]: true });
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem[DATA_ITEM_KEY];

        const newData = data.map((item) => {
            return item[DATA_ITEM_KEY] === inEditID ? { ...item, ...event.dataItem } : item;
        });

        setData(newData);
        setEdit({});
    };

    const nameValidator = (value: string) => {
        if (value?.length < 3) {
            return 'Name must be at least 3 characters long';
        }

        return '';
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
            dataItemKey={DATA_ITEM_KEY}
            onEditChange={handleEditChange}
            onItemChange={handleItemChange}
        >
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column validator={nameValidator} field="ProductName" title="Name" />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
            <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
            <Column field="Discontinued" title="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
