import * as React from 'react';
import { Grid, GridColumn as Column, GridToolbar, GridCustomCellProps } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import sampleProducts from './gd-sample-products';
import { Product } from './gd-interfaces';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import * as OriginalArrayServices from './gd-services';

const CustomCell = ({ tdProps, children, color }) => {
    return tdProps ? (
        <td
            {...tdProps}
            style={{
                ...tdProps.style,
                backgroundColor: color
            }}
        >
            {children}
        </td>
    ) : null;
};

const MyInputCustomCell = (props) => <CustomCell {...props} color="#f97e6d" />;
const MyNumericCustomCell = (props) => <CustomCell {...props} color="#90ab86" />;
const MyDateCustomCell = (props) => <CustomCell {...props} color="#a1cec5" />;
const MyBooleanCustomCell = (props) => <CustomCell {...props} color="#fac390" />;

const GridContext = React.createContext<any>({});

const MyCommandCell = (props: GridCustomCellProps) => {
    const { enterEdit, remove } = React.useContext(GridContext);
    const { dataItem } = props;

    return (
        <td {...props.tdProps}>
            <Button themeColor={'primary'} onClick={() => enterEdit(dataItem)}>
                Edit
            </Button>
            <Button
                onClick={() =>
                    window.confirm(`Confirm deleting item with id of: ${dataItem.ProductID}?`) && remove(dataItem)
                }
            >
                Remove
            </Button>
        </td>
    );
};

const MyCommandEditCell = (props: GridCustomCellProps) => {
    const { dataItem } = props;
    const { add, update, discard, cancel } = React.useContext(GridContext);

    const isNewItem = React.useCallback(() => dataItem.new, [dataItem]);

    return (
        <td>
            <Button
                themeColor={'primary'}
                onClick={() => {
                    isNewItem() ? add(dataItem) : update(dataItem);
                }}
            >
                {isNewItem() ? 'Add' : 'Update'}
            </Button>
            <Button
                onClick={() => {
                    isNewItem() ? discard(dataItem) : cancel(dataItem);
                }}
            >
                {isNewItem() ? 'Discard' : 'Cancel'}
            </Button>
        </td>
    );
};

const generateId = (data) => data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

const App = () => {
    const [data, setData] = React.useState<Product[]>(sampleProducts.slice(0));
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const enterEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: true }));
    };

    const exitEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [dataItem.ProductID]: false }));
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
        const newData = [...data.filter((item) => item.ProductID !== dataItem.ProductID)];
        setData(newData);
        exitEdit(dataItem);
    };

    const cancel = (dataItem: Product) => {
        const originalItem = OriginalArrayServices.getItems().find((p) => p.ProductID === dataItem.ProductID);

        if (originalItem) {
            const newData = data.map((item) => (item.ProductID === originalItem.ProductID ? originalItem : item));
            setData(newData);
            exitEdit(dataItem);
        }
    };

    const remove = (dataItem: Product) => {
        OriginalArrayServices.deleteItem(dataItem);
        setData((prevData) => prevData.filter((item) => item.ProductID !== dataItem.ProductID));
    };

    const itemChange = (event) => {
        const { value, field } = event;

        if (!field) return;

        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID
                ? {
                      ...item,
                      [field]: value
                  }
                : item
        );

        setData(newData);
    };

    const addNew = () => {
        const newDataItem = {
            ProductID: generateId(data),
            Discontinued: false,
            new: true
        };

        setData([newDataItem, ...data]);
        enterEdit(newDataItem);
    };

    React.useEffect(addNew, []);

    return (
        <div>
            <GridContext.Provider value={{ enterEdit, remove, add, discard, update, cancel }}>
                <Grid
                    style={{
                        height: '400px'
                    }}
                    data={data}
                    onItemChange={itemChange}
                    dataItemKey="ProductID"
                    edit={edit}
                    editable={true}
                    cells={{
                        edit: {
                            text: MyInputCustomCell,
                            numeric: MyNumericCustomCell,
                            boolean: MyBooleanCustomCell,
                            date: MyDateCustomCell
                        }
                    }}
                >
                    <GridToolbar>
                        <Button title="Add new" type="button" onClick={addNew}>
                            Add new
                        </Button>
                    </GridToolbar>
                    <Column field="ProductID" title="Product Id" editable={false} />
                    <Column field="ProductName" title="Product Name" editor="text" />
                    <Column field="UnitsInStock" title="Units In Stock" editor="numeric" />
                    <Column field="FirstOrderedOn" title="Order Date" editor="date" format="{0:d}" />
                    <Column field="Discontinued" title="Discontinued" editor="boolean" />
                    <Column
                        cells={{
                            data: MyCommandCell,
                            edit: { text: MyCommandEditCell }
                        }}
                        width="200px"
                    />
                </Grid>
            </GridContext.Provider>
        </div>
    );
};
export default App;
