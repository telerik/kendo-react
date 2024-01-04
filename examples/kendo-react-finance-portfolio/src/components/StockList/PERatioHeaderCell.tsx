import * as React from 'react';
import { GridHeaderCellProps } from '@progress/kendo-react-grid';
import styles from './stock-list.module.scss';
import { classNames } from '@progress/kendo-react-common';

export const PERatioHeaderCell = (_props: GridHeaderCellProps) => {
    return (
        <a className={classNames(styles["multiline-header-cell"], "k-link")}>
            PE Ratio
            <small>
                (TTM)
            </small>
        </a>
    )
}