import * as React from "react";
import { Button } from "@progress/kendo-react-buttons";
import DataContext from '../../contexts/data-context';

const MyCommandCell = props => {
    const currentContext = React.useContext(DataContext);

    const { dataItem } = props;
    const isNewItem = dataItem.productID === null;

    const inEdit = dataItem.inEdit;

    const handleAddUpdate = React.useCallback(() =>{
        if(isNewItem){
            currentContext.add(dataItem)
        } else {
            currentContext.update(dataItem)
        }
    },[currentContext, dataItem, isNewItem])

    const handleDiscardCancel = React.useCallback(()=>{
        isNewItem ? currentContext.discard(dataItem) : currentContext.cancel()
    },[currentContext, dataItem, isNewItem])

    const handleEdit = React.useCallback(()=> {
        currentContext.enterEdit(dataItem)
    },[currentContext, dataItem])

    const handleDelete = React.useCallback(()=> {
        window.confirm("Confirm deleting: " + dataItem.productName) && currentContext.remove(dataItem)
    }, [currentContext, dataItem])

    /**
    * Return null if this is a group header cell.
    */

    if(props.rowType === 'groupHeader') return null;

    return inEdit ?
            (<td className="k-command-cell">
                <Button onClick={handleAddUpdate}>
                    {isNewItem ? "Add" : "Update"}
                </Button>
                <Button onClick={handleDiscardCancel}>
                    {isNewItem ? "Discard" : "Cancel"}
                </Button>
            </td>) :   
            (<td className="k-command-cell">
                <Button themeColor="primary" onClick={handleEdit}>
                    Edit
                </Button>
                <Button onClick={handleDelete}>
                    Remove
                </Button>
            </td>);
};

export default MyCommandCell; 