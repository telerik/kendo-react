import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridItemChangeEvent } from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { MyCommandCell } from './gd-myCommandCell';
import { insertItem, getItems, updateItem, deleteItem, generateId } from './gd-services';
import { Button } from '@progress/kendo-react-buttons';
import { Product } from './gd-interfaces';

const CommandCell = (props) => {
    const { edit, enterEdit, remove, add, discard, update, cancel } = props;
    return (
        <MyCommandCell
            {...props}
            edit={edit}
            enterEdit={enterEdit}
            remove={remove}
            add={add}
            discard={discard}
            update={update}
            cancel={cancel}
        />
    );
};

const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [data, setData] = React.useState<Product[]>([]);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    React.useEffect(() => {
        let newItems = getItems();
        setData(newItems);
    }, []);

    // modify the data in the store, db etc
    const remove = (dataItem: Product) => {
        deleteItem(dataItem);
        setData((prevData) => prevData.filter((item) => item.ProductID !== dataItem.ProductID));
    };

    const add = (dataItem: Product) => {
        dataItem.new = false;
        insertItem(dataItem);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
    };
    const update = (dataItem: Product) => {
        updateItem(dataItem);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
    };

    // Local state operations
    const discard = (dataItem: Product) => {
        const newData = [...data.filter((item) => item.ProductID !== dataItem.ProductID)];
        setData(newData);
    };

    const cancel = (dataItem: Product) => {
        const originalItem = getItems().find((p) => p.ProductID === dataItem.ProductID);

        if (originalItem) {
            const newData = data.map((item) => (item.ProductID === originalItem.ProductID ? originalItem : item));
            setData(newData);
            setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
        }
    };

    const enterEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: true }));
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID
                ? {
                      ...item,
                      [event.field || '']: event.value
                  }
                : item
        );
        setData(newData);
    };

    const addNew = () => {
        const newDataItem: Product = {
            ProductID: generateId(data),
            Discontinued: false,
            new: true
        };
        setData([newDataItem, ...data]);
        setEdit((edit) => ({ ...edit, [newDataItem.ProductID]: true }));
    };

    const commandCellProps = {
        edit: edit,
        enterEdit: enterEdit,
        remove: remove,
        add: add,
        discard: discard,
        update: update,
        cancel: cancel
    };

    return (
        <Grid
            style={{ height: '420px' }}
            data={data}
            onItemChange={itemChange}
            dataItemKey={DATA_ITEM_KEY}
            edit={edit}
            editable={true}
        >
            <GridToolbar>
                <Button title="Add new" themeColor={'primary'} onClick={addNew} type="button">
                    Add new
                </Button>
            </GridToolbar>
            <Column field="ProductID" title="Id" width="50px" editable={false} />
            <Column field="ProductName" title="Product Name" width="200px" />
            <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" width="150px" />
            <Column field="UnitsInStock" title="Units" width="120px" editor="numeric" />
            <Column field="Discontinued" title="Discontinued" editor="boolean" />
            <Column cells={{ data: (props) => <CommandCell {...props} {...commandCellProps} /> }} width="200px" />
        </Grid>
    );
};

export default App;
