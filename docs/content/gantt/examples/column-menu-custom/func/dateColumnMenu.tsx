import * as React from 'react';
import { ColumnMenuDateColumn, ColumnMenuProps } from '@progress/kendo-react-data-tools';

export const ColumnMenuCustomDateColumn = (props: ColumnMenuProps) => {
    return <ColumnMenuDateColumn {...props} sortAsc={false} sortDesc={false} />;
};
