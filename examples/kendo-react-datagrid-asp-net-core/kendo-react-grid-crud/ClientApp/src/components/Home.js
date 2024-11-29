import '@progress/kendo-theme-default/dist/all.css'

import { useState, useEffect } from "react";

import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { Button } from "@progress/kendo-react-buttons";
import { mapTree } from "@progress/kendo-react-treelist";
import { clone } from '@progress/kendo-react-common';

/**
* Import a custom command cell responsible for rendering the Edit, Remove, Update and Cancel commands.
*/
import MyCommandCell from './cells/CommandCell';

/**
* Import a custom cell responsible for rendering and editing complext fields with a DropDownList.
*/
import DropDownCell from './cells/DropDownCell';

/**
* Import the React.Context use to pass extra props to the custom cell.
*/
import DataContext from '../contexts/data-context';

import Axios from "axios";
import { toDataSourceRequestString, translateDataSourceResultGroups } from '@progress/kendo-data-query';

const Home = (props) => {
    const [data, setData] = useState([]);
    const [itemBeforeEdit, setItemBeforeEdit] = useState({})
    const [dataState, setDataState] = useState({ take: 5, skip: 0, group: [] })
    const [total, setTotal] = useState(0);

    // Check if the Grid is grouped.
    const hasGroups = dataState.group && dataState.group.length;


    // Make request to the server for server side data operations.
    useEffect(() => {
        Axios.post("https://localhost:44487/products", toDataSourceRequestString(dataState)).then((response) => {
            let parsedDataNew = mapTree(response.data.data, 'items', (product) => {
                product.firstOrderedOn = product.firstOrderedOn !== null ? new Date(product.firstOrderedOn) : null;
                return product
            })
            parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
            setTotal(response.data.total)
            setData([...parsedDataNew]);
        });
    }, [dataState]) // We make the request initially and everytime the dataState is changed.


    /**
    * Add a new empty item only to the local data.
    */
    const addRecord = () => {
        let newDate = new Date();

        // We use this to remvoe time porting of the date based on the timezone. In this example we edit and filter only the date portion.
        var myToday = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0);
        let offsetMiliseconds = new Date().getTimezoneOffset() * 60000;
        let dateWitnNotimeZone = new Date(
            myToday.getTime() - offsetMiliseconds
        );
        let newRecord = {
            productID: null,
            firstOrderedOn: dateWitnNotimeZone,
            category: { categoryID: 1, categoryName: "Beverages" },
            inEdit: true,
            ProductName: 'New Product',
            Discontinued: false,
            UnitsInStock: 1
        }
        let newData = [...data];
        newData.unshift(newRecord);
        setData(newData)
    }

    /**
    * Update the local data when the user edits a field.
    */
    const handleItemChange = (event) => {
        let newData = mapTree(data, 'items', item => {
            if (event.dataItem.productID === item.productID) {
                item[event.field] = event.value;
            }
            return item;
        })
        setData(newData);
    }

    /**
    * Put the row in edit mode.
    */
    const enterEdit = (dataItem) => {
        let newData = mapTree(data, "items", (item) => {
            dataItem.productID === item.productID ? item.inEdit = true : item.inEdit = false;
            return item;
        });

        setItemBeforeEdit(clone(dataItem));
        setData(newData);
    }

    /**
    * Make a request to the server to delete a specific item.
    */
    const remove = (dataItem) => {
        // We process the dataState to make it compatible with the server requirements.
        const data = {
            filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
            sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
            group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
            take: dataState.take,
            skip: dataState.skip
        }
        Axios.delete("https://localhost:44487/products", { data: { ...data, product: dataItem } }).then(
            (response) => {
                let parsedDataNew = mapTree(response.data.data, 'items', item => {
                    item.firstOrderedOn = new Date(item.firstOrderedOn);
                    return item;
                })
                parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
                setData(parsedDataNew);
                setTotal(response.data.total);
            }
        );
    }

    /**
    * Make a request to the server to create a new item.
    */
    const add = (dataItem) => {
        let headers = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        // We process the dataState to make it compatible with the server requirements.
        const data = {
            filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
            sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
            group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
            take: dataState.take,
            skip: dataState.skip
        }
        Axios.put("https://localhost:44487/products", { ...data, product: dataItem }, headers).then(
            (response) => {
                let parsedDataNew = mapTree(response.data.data, 'items', item => {
                    item.firstOrderedOn = new Date(item.firstOrderedOn);
                    return item;
                })
                parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
                setData(parsedDataNew);
                setTotal(response.data.total);
            }
        );
    }

    /**
    * Remove a new item that has not been still saved on the server.
    */
    const discard = () => {
        let hasGroup = dataState.group.length > 0 ? true : false
        let newData = []
        hasGroup ? newData = data.filter(item => item.value !== undefined) : newData = data.filter(item => item.productID !== null)
        setData(newData);
    }

    /**
    * Make a request to the server to update a specific item.
    */
    const update = (dataItem) => {
        // We use this to remvoe time porting of the date based on the timezone. In this example we edit and filter only the date portion.
        var myToday = new Date(dataItem.firstOrderedOn.getFullYear(), dataItem.firstOrderedOn.getMonth(), dataItem.firstOrderedOn.getDate(), 0, 0, 0);
        let offsetMiliseconds = new Date().getTimezoneOffset() * 60000;
        let dateWitnNotimeZone = new Date(
            myToday.getTime() - offsetMiliseconds
        );

        dataItem.firstOrderedOn = dateWitnNotimeZone;

        let headers = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        // We process the dataState to make it compatible with the server requirements.
        const data = {
            filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
            sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
            group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
            take: dataState.take,
            skip: dataState.skip
        }
        Axios.put("https://localhost:44487/products", { ...data, product: dataItem }, headers).then(
            (response) => {
                let parsedDataNew = mapTree(response.data.data, 'items', item => {
                    item.firstOrderedOn = new Date(item.firstOrderedOn);
                    return item;
                })
                parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
                setData(parsedDataNew);
            }
        );
    }

    /**
    * Cancel the changes made to an item before they were saved on the server.
    */
    const cancel = () => {
        let newData = mapTree(data, 'items', item => {
            if (item.productID === itemBeforeEdit.productID) {
                item = itemBeforeEdit;
                item.inEdit = false;
            }
            return item;
        })
        setData(newData);
    }

    const handleDataStateChange = (event) => {
        setDataState(event.dataState);
    }
    return (
        <DataContext.Provider
            value={{
                enterEdit: enterEdit,
                remove: remove,
                add: add,
                discard: discard,
                update: update,
                cancel: cancel
            }}
        >
            <Grid
                style={{
                    height: "520px",
                }}
                data={data}
                editField="inEdit"
                onItemChange={handleItemChange}
                onDataStateChange={handleDataStateChange}
                {...dataState}
                pageable
                sortable
                filterable
                groupable
                total={total}
            >
                <GridToolbar>
                    <div>
                        <Button
                            title="Add new"
                            themeColor="primary"
                            onClick={addRecord}
                        >
                            Add new
                        </Button>
                    </div>
                </GridToolbar>
                <GridColumn field="productID" title="Id" width="100px" editable={false} filterable={false} />
                <GridColumn field="productName" title="Name" />
                <GridColumn field="category.categoryName" title="Category" cell={DropDownCell} />
                <GridColumn field="firstOrderedOn" title="First Ordered On" editor="date" filter='date' format={'{0:d}'} />
                <GridColumn
                    field="unitsInStock"
                    title="Units"
                    width="150px"
                    editor="numeric"
                    filter="numeric"
                />
                <GridColumn field="discontinued" title="Discontinued" editor="boolean" filter="boolean" />
                <GridColumn width="200px" cell={MyCommandCell} />
            </Grid>
        </DataContext.Provider>
    )
}

export { Home };