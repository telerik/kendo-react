import * as React from 'react';
import { GridHeaderCellProps } from '@progress/kendo-react-grid';
import styles from './stock-list.module.scss';
import { classNames } from '@progress/kendo-react-common';

export const AvgVolumeHeaderCell = (props: GridHeaderCellProps) => {
    const thProps = (props as GridHeaderCellProps & { thProps?: React.HTMLAttributes<HTMLTableCellElement> }).thProps;
    const {
        ariaSort: rawAriaSort,
        ariaColumnIndex,
        ariaSelected,
        ariaDescription,
        ariaHasPopup,
        columnId: _columnId,
        navigatable: _navigatable,
        ...safeThProps
    } = (thProps || {}) as React.HTMLAttributes<HTMLTableCellElement> & {
        ariaSort?: string;
        ariaColumnIndex?: number;
        ariaSelected?: boolean;
        ariaDescription?: string;
        ariaHasPopup?: boolean | "dialog" | "menu" | "grid" | "listbox" | "tree" | "true" | "false";
        columnId?: string;
        navigatable?: boolean;
    };
    const ariaSort = rawAriaSort as "none" | "ascending" | "descending" | "other" | undefined;
    return (
        <th
            {...safeThProps}
            aria-sort={ariaSort}
            aria-colindex={ariaColumnIndex}
            aria-selected={ariaSelected}
            aria-description={ariaDescription}
            aria-haspopup={ariaHasPopup}
        >
            <span className={classNames(styles["multiline-header-cell"], "k-link")}>
                Avg Vol
                <small>
                    (3 months)
                </small>
            </span>
        </th>
    )
}