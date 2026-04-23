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
import * as OriginalArrayServices from './gd-services';
import { Product } from './gd-interfaces';
import { EditDescriptor, NavigatableMode } from '@progress/kendo-react-data-tools';

const generateId = (data) => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

const GridContext = React.createContext<any>({});

const CommandCell = (props: GridCustomCellProps) => {
    const { enterEdit, remove, add, discard, update, cancel } = React.useContext(GridContext);

    return (
        <MyCommandCell
            {...props}
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
    const [data, setData] = React.useState<Product[]>(sampleProducts);
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    // modify the data in the store, db etc
    const remove = (dataItem: Product) => {
        OriginalArrayServices.deleteItem(dataItem);
        setData((prevData) => prevData.filter((item) => item[DATA_ITEM_KEY] !== dataItem[DATA_ITEM_KEY]));
    };

    const add = (dataItem: Product) => {
        dataItem.new = false;
        OriginalArrayServices.insertItem(dataItem);
        exitEdit(dataItem);
    };

    const update = (dataItem: Product) => {
        OriginalArrayServices.updateItem(dataItem);
        exitEdit(dataItem);
    };

    const discard = (dataItem: Product) => {
        const newData = [...data.filter((item) => item[DATA_ITEM_KEY] !== dataItem[DATA_ITEM_KEY])];
        setData(newData);
        exitEdit(dataItem);
    };

    const cancel = (dataItem: Product) => {
        const originalItem = OriginalArrayServices.getItems().find((p) => p[DATA_ITEM_KEY] === dataItem[DATA_ITEM_KEY]);

        if (originalItem) {
            const newData = data.map((item) =>
                item[DATA_ITEM_KEY] === originalItem[DATA_ITEM_KEY] ? originalItem : item
            );
            setData(newData);
            exitEdit(dataItem);
        }
    };

    const enterEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem[DATA_ITEM_KEY]!]: true }));
    };
    const exitEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem[DATA_ITEM_KEY]!]: false }));
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        const newData = data.map((item) =>
            item[DATA_ITEM_KEY] === event.dataItem[DATA_ITEM_KEY] ? { ...item, [field]: event.value } : item
        );

        setData(newData);
    };

    const addNew = () => {
        const newDataItem = {
            [DATA_ITEM_KEY]: generateId(data),
            Discontinued: false,
            new: true
        };

        setData([newDataItem, ...data]);
        enterEdit(newDataItem);
    };

    return (
        <GridContext.Provider value={{ enterEdit, remove, add, discard, update, cancel }}>
            <Grid
                style={{
                    height: '550px'
                }}
                data={data}
                onItemChange={itemChange}
                dataItemKey={DATA_ITEM_KEY}
                edit={edit}
                editable={{ mode: 'inline' }}
                navigatable={{ mode: 'inline' as NavigatableMode }}
            >
                <GridToolbar>
                    <Button title="Add new" themeColor={'primary'} type="button" onClick={addNew}>
                        Add new
                    </Button>
                </GridToolbar>
                <Column field="ProductID" title="Id" width="50px" editable={false} />
                <Column field="ProductName" title="Product Name" editor="text" />
                <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
                <Column field="UnitsInStock" title="Units" editor="numeric" />
                <Column
                    field="Discontinued"
                    title="Discontinued"
                    cells={{
                        data: DropDownCell
                    }}
                />
                <Column
                    width="240px"
                    cells={{
                        data: CommandCell
                    }}
                />
            </Grid>
        </GridContext.Provider>
    );
};

export default App;
