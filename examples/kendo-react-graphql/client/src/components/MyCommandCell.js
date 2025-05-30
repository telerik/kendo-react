import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

export default function MyCommandCell(remove) {
    return function CommandCell(props) {
        const { dataItem } = props;

        return (
            <td>
                <Button
                    className="k-grid-remove-command"
                    onClick={(e) => {
                        if (window.confirm(`Confirm deleting: ${dataItem.ProductName}`)) {
                            remove(dataItem);
                        }
                    }}
                >
                    Remove
                </Button>
            </td>
        );
    };
}