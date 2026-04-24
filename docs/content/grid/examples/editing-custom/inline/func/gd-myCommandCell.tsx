import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { classNames } from '@progress/kendo-react-common';

export const MyCommandCell = (props) => {
    const { dataItem, isInEdit, enterEdit, remove, add, update, cancel, discard, tdProps, className } = props;
    const isNewItem = dataItem.new === true;

    const onDeleteData = (dataItem) => {
        remove(dataItem);
    };

    let commandLabelFirst: string;
    if (isInEdit) {
        commandLabelFirst = isNewItem ? 'Add' : 'Update';
    } else {
        commandLabelFirst = 'Edit';
    }

    let commandLabelSecond: string;
    if (isInEdit) {
        commandLabelSecond = isNewItem ? 'Discard' : 'Cancel';
    } else {
        commandLabelSecond = 'Remove';
    }

    return (
        <td {...tdProps} className={classNames('k-command-cell', className)}>
            <Button
                className={isInEdit ? 'k-grid-save-command' : 'k-grid-edit-command'}
                themeColor={'primary'}
                onClick={() => {
                    if (isInEdit) {
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
                {commandLabelFirst}
            </Button>
            <Button
                className={isInEdit ? 'k-grid-cancel-command' : 'k-grid-remove-command'}
                themeColor={'base'}
                onClick={() => {
                    if (isInEdit) {
                        if (isNewItem) {
                            discard(dataItem);
                        } else {
                            cancel(dataItem);
                        }
                    } else {
                        onDeleteData(dataItem);
                    }
                }}
            >
                {commandLabelSecond}
            </Button>
        </td>
    );
};
