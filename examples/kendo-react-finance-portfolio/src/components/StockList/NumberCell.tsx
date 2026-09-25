import * as React from 'react';
import { getStockValue, StockCellProps } from './StockCellProps';

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

export const NumberCell = (props: StockCellProps) => {
    const value = getStockValue(props.dataItem, props.field);
    const numericValue = typeof value === 'number' ? value : Number(value);
    return props.asCard
        ? <span>{nFormatter(numericValue)}</span>
        : <td>{nFormatter(numericValue)}</td>;
}