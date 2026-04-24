import * as React from 'react';

export const CellRender = (props) => {
    // Adding a dirty class name to the cells if there is a change
    let className = props.tdProps?.className || '';
    const cellField = props.field;

    if (props.dirty && cellField && props.dirty[cellField]) {
        className = className ? `${className} dirty` : 'dirty';
    }

    return (
        <td {...props.tdProps} className={className}>
            {props.children}
        </td>
    );
};

