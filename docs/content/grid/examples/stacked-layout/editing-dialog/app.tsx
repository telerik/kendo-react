import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridItemChangeEvent,
    GridRowClickEvent,
    GridEditChangeEvent
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Customer, customers } from './data';

const DATA_ITEM_KEY = 'CustomerID';

const App = () => {
    const [data, setData] = React.useState<Array<Customer>>(customers);
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

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            edit={edit}
            dataLayoutMode="stacked"
            stackedLayoutSettings={{ cols: 2 }}
            editable={{ mode: 'dialog', enabled: true }}
            onRowClick={rowClick}
            dataItemKey={DATA_ITEM_KEY}
            onEditChange={handleEditChange}
            onItemChange={handleItemChange}
        >
            <Column field="CustomerID" title="Id" editable={false} />
            <Column field="ContactName" title="Contact Name" />
            <Column field="CompanyName" title="Company Name" />
            <Column field="Country" title="Country" />
        </Grid>
    );
};

export default App;
