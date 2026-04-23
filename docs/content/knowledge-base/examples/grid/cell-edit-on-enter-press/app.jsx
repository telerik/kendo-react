import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { sampleProducts } from './sample-products';
import { CellRender, RowRender } from './renderers';
const EDIT_FIELD = 'inEdit';

const App = () => {
    const [data, setData] = React.useState(sampleProducts);
    const [changes, setChanges] = React.useState(false);

    const enterEdit = (dataItem, field) => {
        const newData = data.map((item) => ({
            ...item,
            [EDIT_FIELD]: item.ProductID === dataItem.ProductID ? field : undefined
        }));
        setData(newData);
    };

    const exitEdit = () => {
        const newData = data.map((item) => ({ ...item, [EDIT_FIELD]: undefined }));
        setData(newData);
    };

    const saveChanges = () => {
        sampleProducts.splice(0, sampleProducts.length, ...data);
        setChanges(false);
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
    const CustomCell = (props) => (
        <CellRender {...props} enterEdit={enterEdit} editField={EDIT_FIELD}>
            {props.children}
        </CellRender>
    );

    const CustomRow = (props) => {
        return (
            <RowRender {...props} exitEdit={exitEdit} editField={EDIT_FIELD}>
                {props.children}
            </RowRender>
        );
    };

    return (
        <Grid
            style={{
                height: '420px'
            }}
            data={data}
            dataItemKey={'ProductID'}
            rowHeight={50}
            onItemChange={itemChange}
            cells={{
                data: CustomCell
            }}
            rows={{ data: CustomRow }}
            editField={EDIT_FIELD}
            navigatable={true}
        >
            <GridToolbar>
                <Button
                    type="button"
                    title="Save Changes"
                    onClick={saveChanges}
                    disabled={!changes}
                >
                    Save Changes
                </Button>
                <Button
                    type="button"
                    title="Cancel Changes"
                    onClick={cancelChanges}
                    disabled={!changes}
                >
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
