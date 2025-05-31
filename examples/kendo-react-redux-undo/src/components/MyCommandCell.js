import React from 'react';

export default function MyCommandCell(remove) {
    return class extends React.Component {
        render() {
            return (
                    <td>
                        <button
                            className="k-button k-grid-remove-command"
                            onClick={(e) => window.confirm('Confirm deleting: ' + this.props.dataItem.ProductName) && remove(this.props.dataItem)}>
                            Remove
                        </button>
                    </td>
            );
        }
    }
};