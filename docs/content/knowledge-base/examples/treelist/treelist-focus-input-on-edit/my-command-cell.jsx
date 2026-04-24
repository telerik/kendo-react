import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const MyCommandCell = (enterEdit, remove, save, cancel, addChild, editField) => {
    return (props) => {
        const { dataItem } = props;

        return dataItem[editField] ? (
            <td>
                <Button onClick={() => save(dataItem)}>{dataItem.isNew ? 'Add' : 'Update'}</Button>
                <Button onClick={() => cancel(dataItem)}>{dataItem.isNew ? 'Discard' : 'Cancel'}</Button>
            </td>
        ) : (
            <td>
                <Button onClick={() => addChild(dataItem)}>Add Employee</Button>
                <Button onClick={() => enterEdit(dataItem)}>Edit</Button>
                <Button onClick={() => remove(dataItem)}>Remove</Button>
            </td>
        );
    };
};

export default MyCommandCell;
