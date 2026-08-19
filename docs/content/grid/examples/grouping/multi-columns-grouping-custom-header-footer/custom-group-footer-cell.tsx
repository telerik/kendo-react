import * as React from 'react';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

// Customizes the footer cell rendered under each real data column (e.g. UnitPrice, UnitsInStock).
export const CustomGroupFooterCell = (props: GridCustomCellProps) => {
    const { key, ...tdProps } = (props.tdProps ?? {}) as React.TdHTMLAttributes<HTMLTableCellElement> & {
        key?: string;
    };

    return (
        <td key={key} {...tdProps} role="gridcell" aria-colindex={props.columnIndex}>
            {(() => {
                switch (props.field) {
                    case 'UnitPrice':
                        return `Avg: ${props.dataItem.aggregates?.UnitPrice?.average?.toFixed(2)}`;
                    case 'UnitsInStock':
                        return `Sum: ${props.dataItem.aggregates?.UnitsInStock?.sum}`;
                    default:
                        return props.children;
                }
            })()}
        </td>
    );
};

// The group column's own footer cell (`field` is always `'value'`), so both aggregates are combined here.
export const CustomGroupColumnFooterCell = (props: GridCustomCellProps) => {
    const { key, ...tdProps } = (props.tdProps ?? {}) as React.TdHTMLAttributes<HTMLTableCellElement> & {
        key?: string;
    };

    if (props.isSpacerCell) {
        return <td key={key} {...tdProps} />;
    }

    return (
        <td key={key} {...tdProps} role="gridcell" aria-colindex={props.columnIndex}>
            {`Avg: ${props.dataItem.aggregates?.UnitPrice?.average?.toFixed(2)} / Sum: ${
                props.dataItem.aggregates?.UnitsInStock?.sum
            }`}
        </td>
    );
};
