import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridToolbar,
    GridItemChangeEvent,
    GridCustomCellProps
} from '@progress/kendo-react-grid';
import sampleProducts from './gd-sample-products';
import { MyCommandCell } from './gd-myCommandCell';
import { DropDownCell } from './myDropDownCell';
import { Button } from '@progress/kendo-react-buttons';
import { insertItem, getItems, updateItem, deleteItem } from './gd-services';
import { Product } from './gd-interfaces';
import { EditDescriptor, NavigatableMode } from '@progress/kendo-react-data-tools';

const GridContext = React.createContext<any>({});

const CommandCell = (props: GridCustomCellProps) => {
    const { enterEdit, remove, add, discard, update, cancel } = React.useContext(GridContext);

    return (
        <MyCommandCell
            {...props}
            edit={enterEdit}
            remove={remove}
            add={add}
            discard={discard}
            update={update}
            cancel={cancel}
        />
    );
};

const App = () => {
    const [data, setData] = React.useState<Array<Product>>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    // modify the data in the store, db etc
    const remove = (dataItem: Product) => {
        const newData = deleteItem(dataItem);
        setData([...newData]);
    };

    const add = (dataItem: Product) => {
        const newData = insertItem(dataItem);
        setData(newData);
    };

    const update = (dataItem: Product) => {
        const newData = updateItem(dataItem);
        setData(newData);
        setEdit((edit) => ({ ...edit, [dataItem.ProductID!]: false }));
    };

    // Local state operations
    const discard = (dataItem: Product) => {
        const newData = [...data];
        newData.splice(0, 1);
        setData(newData);
    };

    const cancel = (dataItem: Product) => {
        const originalItem = getItems().find((p) => p.ProductID === dataItem.ProductID);
        const newData =
            originalItem && data.map((item) => (item.ProductID === originalItem.ProductID ? originalItem : item));
        if (newData) {
            setData(newData);
        }
    };

    const enterEdit = (dataItem: Product) => {
        setEdit({
            [dataItem.ProductID!]: true
        });
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [field]: event.value } : item
        );

        setData(newData);
    };

    const addNew = () => {
        const newDataItem: Product = {
            Discontinued: false
        };

        setData([newDataItem, ...data]);
        setEdit({
            [newDataItem.ProductID!]: true
        });
    };
    return (
        <GridContext.Provider value={{ enterEdit, remove, add, discard, update, cancel }}>
            <Grid
                style={{ height: '530px' }}
                data={data}
                onItemChange={itemChange}
                edit={edit}
                editable={true}
                dataItemKey={'ProductID'}
                navigatable={{ mode: 'inline' as NavigatableMode }}
            >
                <GridToolbar>
                    <Button title="Add new" themeColor={'primary'} type="button" onClick={addNew}>
                        Add new
                    </Button>
                </GridToolbar>
                <Column field="ProductID" title="Id" width="50px" editable={false} />
                <Column field="ProductName" title="Product Name" editor="text" />
                <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" editable={false} />
                <Column field="UnitsInStock" title="Units" editor="numeric" />
                <Column field="Discontinued" title="Discontinued" editor="boolean" />
                <Column
                    field="Discontinued"
                    title="Discontinued"
                    cells={{
                        data: (props: GridCustomCellProps) => <DropDownCell {...props} />
                    }}
                />
                <Column
                    width="240px"
                    cells={{
                        data: (props: GridCustomCellProps) => <CommandCell {...props} />
                    }}
                />
            </Grid>
        </GridContext.Provider>
    );
};

export default App;
