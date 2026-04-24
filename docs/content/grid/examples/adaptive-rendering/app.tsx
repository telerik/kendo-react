import * as React from 'react';
import {
    Grid,
    GridColumn as Column,
    GridColumnMenuProps,
    GridItemChangeEvent,
    GridEditChangeEvent,
    GridToolbar,
    GridToolbarSort,
    GridToolbarFilter,
    GridToolbarColumnsChooser,
    GridToolbarSpacer,
    GridToolbarSeparator,
    GridRowClickEvent,
    GridToolbarGroup
} from '@progress/kendo-react-grid';
import { EditDescriptor } from '@progress/kendo-react-data-tools';
import { Button } from '@progress/kendo-react-buttons';
import { Product } from './gd-interfaces';
import products from './gd-products';
import { insertItem, getItems, updateItem, deleteItem } from './gd-services';
import ColumnMenu from './columnMenu';
import { pencilIcon, plusIcon, trashIcon } from '@progress/kendo-svg-icons';

const GridContext = React.createContext<any>({});
const DATA_ITEM_KEY = 'ProductID';

const App = () => {
    const [data, setData] = React.useState<Product[]>(products);
    const [edit, setEdit] = React.useState<EditDescriptor>({});
    const [editButton, setEditButton] = React.useState({ enabled: false, id: null });
    const [deleteButton, setDeleteButton] = React.useState({ enabled: false, id: null });
    const [mobileMode, setMobileMode] = React.useState<boolean>(window.innerWidth < 768);

    const onWindowResize = React.useCallback(() => {
        setMobileMode(window.innerWidth < 768);
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [onWindowResize]);

    const remove = (dataItem: Product) => {
        const newData = deleteItem(dataItem);
        setData([...newData]);
    };

    const add = (dataItem: Product) => {
        const newData = insertItem(dataItem);
        setData(newData);
        setEdit({});
    };

    const update = (dataItem: Product) => {
        dataItem.inEdit = false;
        const newData = updateItem(dataItem);
        setData(newData);
        setEdit((edit) => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    // Local state operations
    const discard = (dataItem: Product) => {
        const newData = [...data];
        newData.splice(0, 1);
        setData(newData);
        setEdit(() => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    const cancel = (dataItem: Product) => {
        const originalItem = getItems().find((p) => p[DATA_ITEM_KEY] === dataItem[DATA_ITEM_KEY]);
        const newData = data.map((item) =>
            item[DATA_ITEM_KEY] === originalItem?.[DATA_ITEM_KEY] ? originalItem : item
        );

        setData(newData as any);
        setEdit(() => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    const enterEdit = (dataItem: Product) => {
        setEdit((edit) => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: true }));
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const field = event.field || '';
        const newData = data.map((item) =>
            item[DATA_ITEM_KEY] === event.dataItem[DATA_ITEM_KEY] ? { ...item, [field]: event.value } : item
        );

        setData(newData);
    };

    const CustomColumnMenu = (props: GridColumnMenuProps) => <ColumnMenu {...props} data={data}></ColumnMenu>;

    const handleItemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.ProductID;

        const newData = data.map((item) => {
            return item.ProductID === inEditID ? { ...item, ...event.dataItem } : item;
        });

        setData(newData);
        setEdit({});
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    const addNew = () => {
        const newDataItem = {
            [DATA_ITEM_KEY]: data.length + 1,
            Discontinued: false
        };

        setData([newDataItem, ...data]);
        setEdit((edit) => ({ ...edit, [String(newDataItem[DATA_ITEM_KEY])]: true }));
    };

    const editRecord = () => {
        setEdit({ [String(editButton.id)]: true });
    };

    const removeRecord = () => {
        const dataItem = data.find((item) => item[DATA_ITEM_KEY] === deleteButton.id);
        if (dataItem) {
            remove(dataItem);
            setDeleteButton({ enabled: false, id: null });
            setEditButton({ enabled: false, id: null });
        }
    };

    const rowClick = (event: GridRowClickEvent) => {
        const inEditID = event.dataItem[DATA_ITEM_KEY];
        setEditButton({ enabled: true, id: inEditID });
        setDeleteButton({ enabled: true, id: inEditID });
    };

    return (
        <GridContext.Provider value={{ enterEdit, remove, add, discard, update, cancel }}>
            <Grid
                data={data}
                autoProcessData={true}
                adaptive={true}
                sortable={{ mode: 'multiple' }}
                editable={{ mode: 'dialog', enabled: true }}
                edit={edit}
                defaultSkip={0}
                defaultTake={10}
                pageable={{
                    pageSizes: [5, 10, 15, 'All']
                }}
                selectable={{
                    enabled: true,
                    mode: 'single'
                }}
                groupable={true}
                dataItemKey={DATA_ITEM_KEY}
                onEditChange={handleEditChange}
                onItemChange={handleItemChange}
                onRowClick={rowClick}
            >
                <GridToolbar>
                    <Button title="Add new" svgIcon={plusIcon} size={mobileMode ? 'large' : undefined} onClick={addNew}>
                        {!mobileMode ? 'Add' : undefined}
                    </Button>
                    <Button
                        title="Edit record"
                        svgIcon={pencilIcon}
                        size={mobileMode ? 'large' : undefined}
                        disabled={!editButton.enabled}
                        onClick={editRecord}
                    >
                        {!mobileMode ? 'Edit' : undefined}
                    </Button>
                    <Button
                        title="Delete record"
                        svgIcon={trashIcon}
                        size={mobileMode ? 'large' : undefined}
                        disabled={!deleteButton.enabled}
                        onClick={removeRecord}
                    >
                        {!mobileMode ? 'Delete' : undefined}
                    </Button>
                    <GridToolbarSeparator />
                    <GridToolbarSort />
                    <GridToolbarFilter />
                    <GridToolbarGroup />
                    <GridToolbarSpacer />
                    <GridToolbarColumnsChooser />
                </GridToolbar>
                <Column field="ProductName" title="Name" columnMenu={CustomColumnMenu} />
                <Column field="Category.CategoryName" title="Category" columnMenu={CustomColumnMenu} />
                <Column
                    field="UnitPrice"
                    filter="numeric"
                    editor="numeric"
                    title="Price"
                    columnMenu={CustomColumnMenu}
                />
            </Grid>
        </GridContext.Provider>
    );
};

export default App;
