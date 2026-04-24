import * as React from 'react';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';

export const MyCommandCell = (props) => {
    const { dataItem, edit, remove, add, update, enterEdit, discard, cancel } = props;

    const [visible, setVisible] = React.useState(false);

    const inEdit = edit[dataItem.ProductID];
    const isNewItem = dataItem.new === true;

    const onDeleteData = () => {
        remove(dataItem);
        setVisible(!visible);
    };

    const toggleDialog = () => {
        setVisible(!visible);
    };

    let commandLabel = 'Edit';
    if (inEdit) {
        commandLabel = isNewItem ? 'Add' : 'Update';
    }

    // Extract the nested ternary operation into a variable
    let secondaryCommandLabel = 'Remove';
    if (inEdit) {
        secondaryCommandLabel = isNewItem ? 'Discard' : 'Cancel';
    }

    return (
        <td className="k-command-cell">
            <Button
                themeColor={'primary'}
                onClick={() => {
                    if (inEdit) {
                        if (isNewItem) {
                            add(dataItem);
                        } else {
                            update(dataItem);
                        }
                    } else {
                        enterEdit(dataItem);
                    }
                }}
            >
                {commandLabel}
            </Button>
            <Button
                themeColor={'primary'}
                onClick={() => {
                    if (inEdit) {
                        if (isNewItem) {
                            discard(dataItem);
                        } else {
                            cancel(dataItem);
                        }
                    } else {
                        toggleDialog();
                    }
                }}
            >
                {secondaryCommandLabel}
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
