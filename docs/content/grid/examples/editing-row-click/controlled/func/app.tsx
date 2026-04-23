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

    const rowClick = (event: GridRowClickEvent) => {
        const inEditID = event.dataItem.ProductID;
        setEdit({ [inEditID]: true });
    };

    const cancelEdit = () => {
        setEdit({});
    };

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.ProductID;
        const field = event.field || '';
        const newData = data.map((item) => (item.ProductID === inEditID ? { ...item, [field]: event.value } : item));
        setData(newData);
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    const addRecord = () => {
        const id = data.length + 1;
        const newRecord = { ProductID: id };

        setData([newRecord, ...data]);
        setEdit({ [id]: true });
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            edit={edit}
            editable={true}
            onRowClick={rowClick}
            dataItemKey="ProductID"
            onEditChange={handleEditChange}
            onItemChange={handleItemChange}
        >
            <GridToolbar>
                <div>
                    <Button title="Add new" themeColor={'primary'} type="button" onClick={addRecord}>
                        Add New
                    </Button>
                    <Button
                        title="Cancel"
                        fillMode={'flat'}
                        themeColor={'primary'}
                        onClick={cancelEdit}
                        style={{ marginLeft: '10px' }}
                    >
                        Cancel
                    </Button>
                </div>
            </GridToolbar>
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column field="ProductName" title="Name" />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
            <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
            <Column field="Discontinued" title="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
