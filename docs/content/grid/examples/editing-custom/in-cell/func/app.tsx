import * as React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridEditChangeEvent,
    GridCustomRowProps
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import sampleProducts from './gd-sample-products';
import { RowRender } from './cellRender';
import { MyCustomDateCell, MyCustomDateEditCell, MyCustomEditCell } from './customCells';

const App = () => {
    const [data, setData] = React.useState<any[]>(sampleProducts);
    const [changes, setChanges] = React.useState<boolean>(false);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    const exitEdit = () => {
        setEdit({});
    };

    const saveChanges = () => {
        sampleProducts.splice(0, sampleProducts.length, ...data);
        setChanges(false);
        setEdit({});
    };

    const cancelChanges = () => {
        setData(sampleProducts);
        setEdit({});
        setChanges(false);
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

    const CustomRow = (props: GridCustomRowProps) => {
        return (
            <RowRender {...props} exitEdit={exitEdit} />
        );
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            dataItemKey={'ProductID'}
            rowHeight={50}
            onItemChange={itemChange}
            cells={{
                edit: {
                    text: MyCustomEditCell,
                    boolean: MyCustomEditCell,
                    numeric: MyCustomEditCell
                }
            }}
            rows={{ data: CustomRow }}
            edit={edit}
            editable={{ mode: 'incell' }}
            onEditChange={handleEditChange}
        >
            <GridToolbar>
                <Button title="Save Changes" onClick={saveChanges} disabled={!changes} type="button">
                    Save Changes
                </Button>
                <Button title="Cancel Changes" onClick={cancelChanges} disabled={!changes} type="button">
                    Cancel Changes
                </Button>
            </GridToolbar>
            <Column field="ProductID" title="Id" width="100px" editable={false} />
            <Column field="ProductName" title="Product Name" width="200px" />
            <Column field="UnitsInStock" title="Units In Stock" editor="numeric" />
            <Column
                field="FirstOrderedOn"
                title="First Ordered"
                editor="date"
                cells={{
                    data: MyCustomDateCell,
                    edit: {
                        date: MyCustomDateEditCell
                    }
                }}
                width="140px"
            />
            <Column field="Discontinued" editor="boolean" />
        </Grid>
    );
};

export default App;
