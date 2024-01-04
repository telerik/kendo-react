import * as React from 'react';
import { GridCellProps } from '@progress/kendo-react-grid';

const nFormatter = (num: number) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
}

export const NumberCell = (props: GridCellProps) => {
    const value = props.field && props.dataItem[props.field];
    return (
        <td>
            {nFormatter(value)}
        </td>
    )
}