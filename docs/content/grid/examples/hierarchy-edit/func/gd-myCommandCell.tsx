import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

export const MyCommandCell = (props) => {
    const { dataItem } = props;
    const inEdit = props.isInEdit;
    const isNewItem = dataItem.ProductID === null;
    const [visible, setVisible] = React.useState(false);
    const onDeleteData = () => {
        props.remove(props.dataItem);
        setVisible(!visible);
    };
    const toggleDialog = () => {
        setVisible(!visible);
    };

    return (
        <td className="k-command-cell">
            <Button
                themeColor={'primary'}
                onClick={() =>
                    inEdit ? (isNewItem ? props.add(dataItem) : props.update(dataItem)) : props.edit(dataItem)
                }
            >
                {inEdit ? (isNewItem ? 'Add' : 'Update') : 'Edit'}
            </Button>
            <Button
                themeColor={'primary'}
                onClick={() =>
                    inEdit ? (isNewItem ? props.discard(dataItem) : props.cancel(dataItem)) : toggleDialog()
                }
            >
                {inEdit ? (isNewItem ? 'Discard' : 'Cancel') : 'Remove'}
            </Button>
            {visible && (
                <Dialog title={'Delete Data'} onClose={toggleDialog} width={350}>
                    <div>Are you sure you want to delete item with ID {dataItem.ProductID}?</div>
                    <DialogActionsBar>
                        <Button onClick={onDeleteData}>Delete</Button>
                        <Button onClick={toggleDialog}>Cancel</Button>
                    </DialogActionsBar>
                </Dialog>
            )}
        </td>
    );
};
