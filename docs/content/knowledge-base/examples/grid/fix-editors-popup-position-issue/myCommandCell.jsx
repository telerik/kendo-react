import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export const MyCommandCell = (props) => {
    const { dataItem } = props;
    const inEdit = dataItem[props.editField];
    const isNewItem = dataItem.ProductID === undefined;
    return inEdit ? (
        <td {...props.tdProps} className="k-command-cell">
            <Button
                type="button"
                onClick={() => (isNewItem ? props.add(dataItem) : props.update(dataItem))}
            >
                {isNewItem ? 'Add' : 'Update'}
            </Button>
            <Button
                type="button"
                onClick={() => (isNewItem ? props.discard(dataItem) : props.cancel(dataItem))}
            >
                {isNewItem ? 'Discard' : 'Cancel'}
            </Button>
        </td>
    ) : (
        <td {...props.tdProps} className="k-command-cell">
            <Button
                type="button"
                themeColor="primary"
                onClick={() => props.edit(dataItem)}
            >
                Edit
            </Button>
            <Button
                type="button"
                onClick={() => confirm('Confirm deleting: ' + dataItem.ProductName) && props.remove(dataItem)}
            >
                Remove
            </Button>
        </td>
    );
};
