import * as React from 'react';
import { GridHeaderCellProps } from '@progress/kendo-react-grid';
import styles from './stock-list.module.scss';
import { classNames } from '@progress/kendo-react-common';

export const AvgVolumeHeaderCell = (_props: GridHeaderCellProps) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={classNames(styles["multiline-header-cell"], "k-link")}>
            Avg Vol
            <small>
                (3 months)
            </small>
        </a>
    )
}