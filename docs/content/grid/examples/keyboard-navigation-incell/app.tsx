import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridCustomRowProps,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import { CellRender, RowRender } from './renderers';
import { Button } from '@progress/kendo-react-buttons';
import { EditDescriptor, NavigatableMode } from '@progress/kendo-react-data-tools';

const App = () => {
    const [data, setData] = React.useState(sampleProducts);
    const [changes, setChanges] = React.useState(false);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const enterEdit = (dataItem, field) => {
        setEdit({
            [dataItem.ProductID]: [field]
        });
    };
    const exitEdit = (exitEdit) => {
        setEdit((edit) => ({ ...edit, [exitEdit.ProductID]: false }));
    };
    const saveChanges = () => {
        sampleProducts.splice(0, sampleProducts.length, ...data);
        setChanges(false);
        setEdit({});
    };
    const cancelChanges = () => {
        setData(sampleProducts);
        setChanges(false);
    };
    const itemChange = (event) => {
        let field = event.field || '';
        event.dataItem[field] = event.value;
        let newData = data.map((item) => {
            if (item.ProductID === event.dataItem.ProductID) {
                item[field] = event.value;
            }
            return item;
        });
        setData(newData);
        setChanges(true);
    };
    const CustomCell = (props: GridCustomCellProps) => {
        return (
            <CellRender {...props} enterEdit={enterEdit} exitEdit={exitEdit}>
                {props.children}
            </CellRender>
        );
    };

    return (
        <Grid
            style={{
                height: '420px'
            }}
            navigatable={{ mode: 'incell' as NavigatableMode }}
            data={data}
            dataItemKey={'ProductID'}
            rowHeight={50}
            edit={edit}
            editable={{ mode: 'incell' }}
            onItemChange={itemChange}
            cells={{
                data: CustomCell
            }}
            rows={{ data: RowRender }}
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
            <Column field="UnitsInStock" title="Units In Stock" editor="numeric" editable={false} />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" width="140px" />
            <Column field="Discontinued" editor="boolean" />
        </Grid>
    );
};
export default App;
