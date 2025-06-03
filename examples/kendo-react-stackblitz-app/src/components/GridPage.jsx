import React, { useState } from 'react';
import { sampleProducts } from '../common/sample-products';
import { MyCommandCell } from './MyCommandCell.jsx';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { insertItem, getItems, updateItem, deleteItem } from '../common/products-services';
import ThemeChooser from './ThemeChooser';

const GridContext = React.createContext({});

const CommandCell = (props) => {
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
    )
};

const DATA_ITEM_KEY = 'ProductID';

const GridPage = (props) => {
    const [data, setData] = useState(sampleProducts);
    const [edit, setEdit] = useState({});

    const remove = (dataItem) => {
        const newData = deleteItem(dataItem);
        setData([...newData]);
    };

    const add = (dataItem) => {
        const newData = insertItem(dataItem);
        setData(newData);
        setEdit({});
    };

    const update = (dataItem) => {
        dataItem.inEdit = false;
        const newData = updateItem(dataItem);
        setData(newData);
        setEdit((edit) => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    const discard = (dataItem) => {
        const newData = [...data];
        newData.splice(0, 1);
        setData(newData);
        setEdit(() => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    const cancel = (dataItem) => {
        const originalItem = getItems().find((p) => p[DATA_ITEM_KEY] === dataItem[DATA_ITEM_KEY]);
        const newData = data.map((item) =>
            item[DATA_ITEM_KEY] === originalItem?.[DATA_ITEM_KEY] ? originalItem : item
        );

        setData(newData);
        setEdit(() => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: false }));
    };

    const enterEdit = (dataItem) => {
        setEdit((edit) => ({ ...edit, [String(dataItem[DATA_ITEM_KEY])]: true }));
    };

    const itemChange = (event) => {
        const field = event.field || '';
        const newData = data.map((item) =>
            item[DATA_ITEM_KEY] === event.dataItem[DATA_ITEM_KEY] ? { ...item, [field]: event.value } : item
        );

        setData(newData);
    };

    const addNew = () => {
        const newDataItem = {
            [DATA_ITEM_KEY]: null,
            Discontinued: false
        };

        setData([newDataItem, ...data]);
        setEdit((edit) => ({ ...edit, [String(newDataItem[DATA_ITEM_KEY])]: true }));
    };

    const cancelCurrentChanges = () => {
        setData([...sampleProducts]);
    }

    return (
        <div className="container-fluid">
           <ThemeChooser changeTheme={props.changeTheme} theme={props.theme}/>
           <div className='row my-4'>
                <div className='col-12 col-lg-9 border-right'>
                    <GridContext.Provider value={{ enterEdit, remove, add, discard, update, cancel }}>
                        <Grid
                            data={data}
                            autoProcessData={true}
                            dataItemKey={DATA_ITEM_KEY}

                            pageable={true}
                            defaultSkip={0}
                            defaultTake={10}

                            edit={edit}
                            editable={{ mode: 'inline' }}
                            navigatable={{ mode: 'inline' }}

                            sortable={true}
                            filterable={true}

                            onItemChange={itemChange}
                        >
                            <GridToolbar>
                                <Button
                                    title="Add new"
                                    themeColor={'primary'}
                                    onClick={addNew}
                                >
                                    Add new
                                </Button>
                                {Object.keys(edit).length > 0 && (
                                    <Button
                                        title="Cancel current changes"
                                        onClick={cancelCurrentChanges}
                                    >
                                        Cancel current changes
                                    </Button>
                                )}
                            </GridToolbar>
                            <Column field="ProductID" title="Id" width="50px" editable={false} filterable={false} />
                            <Column field="ProductName" title="Product Name" />
                            <Column field="UnitPrice" title="Unit Price" />
                            <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
                            <Column field="Discontinued" title="Discontinued" editor="boolean" />
                            <Column cells={{ data: (props) => <CommandCell {...props} />}} width="240px" filterable={false} />
                        </Grid>
                    </GridContext.Provider>
                </div>
                <div className='col-12 col-lg-3 mt-3 mt-lg-0'>
                    <h3>KendoReact Grid</h3>
                    <p>The KendoReact Data Grid (Table) provides 100+ ready-to-use features covering everything from paging, sorting, filtering, editing, and grouping to row and column virtualization, export to PDF and Excel and accessibility.</p>
                    <p>For documentation and demos of all available Grid features (filtering, sorting, paging, editing etc), please visit the <a href="https://www.telerik.com/kendo-react-ui/components/grid/?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-trial-grid">KendoReact Grid documentation page.</a> </p>
                </div>
            </div>
        </div>
    );
}

export default GridPage;
