import * as React from 'react';

import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { sampleProducts } from './sample-products';
import './styles.css';

const DATA_KEY_FIELD = 'ProductID';
const App = () => {
    const [data, setData] = React.useState(sampleProducts);
    const [originalData, setOriginalData] = React.useState(sampleProducts);
    const [changes, setChanges] = React.useState(false);
    const [dirty, setDirty] = React.useState({});
    const [edit, setEdit] = React.useState({});

    const handleEditChange = (event) => {
        setEdit(event.edit);
    };

    const saveChanges = () => {
        sampleProducts.splice(0, sampleProducts.length, ...data);
        setOriginalData([...data]);
        setChanges(false);
        setDirty({});
        setEdit({});
    };

    const cancelChanges = () => {
        setData([...originalData]);
        setChanges(false);
        setDirty({});
        setEdit({});
    };

    const itemChange = (event) => {
        const field = event.field || '';
        const productId = event.dataItem[DATA_KEY_FIELD];

        const newData = data.map((item) => {
            if (item[DATA_KEY_FIELD] === productId) {
                return { ...item, [field]: event.value };
            }
            return item;
        });

        const originalItem = originalData.find((i) => i.ProductID === productId);
        const isDirty = originalItem && originalItem[field] !== event.value;

        const newDirty = { ...dirty };
        if (!newDirty[productId]) {
            newDirty[productId] = {};
        }
        newDirty[productId][field] = isDirty;

        setDirty(newDirty);
        setData(newData);
        setChanges(true);
    };

    const CustomCell = (props) => {
        const productId = props.dataItem[DATA_KEY_FIELD];
        const field = props.field;
        const isDirty = dirty[productId] && dirty[productId][field];

        const className = isDirty
            ? (props.tdProps?.className ? `${props.tdProps.className} dirty` : 'dirty')
            : props.tdProps?.className || '';

        return (
            <td {...props.tdProps} className={className}>
                {props.children}
            </td>
        );
    };

    return (
        <Grid
            style={{
                height: '420px'
            }}
            data={data}
            dataItemKey={DATA_KEY_FIELD}
            rowHeight={50}
            edit={edit}
            editable={{ mode: 'incell' }}
            onEditChange={handleEditChange}
            onItemChange={itemChange}
            cells={{
                data: CustomCell
            }}
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
