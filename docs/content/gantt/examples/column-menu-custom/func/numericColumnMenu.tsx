import * as React from 'react';
import { ColumnMenuNumericColumn, ColumnMenuNumericFilter, ColumnMenuProps } from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

export const ColumnMenuCustomNumericColumn = (props: ColumnMenuProps) => {
    const initialFilter = React.useCallback(
        (field: string): CompositeFilterDescriptor => ({ logic: 'and', filters: [{ operator: 'eq', field }] }),
        []
    );

    return (
        <ColumnMenuNumericColumn {...props} filterContent={[ColumnMenuNumericFilter]} initialFilter={initialFilter} />
    );
};
