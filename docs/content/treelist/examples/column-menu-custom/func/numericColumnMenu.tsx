import * as React from 'react';
import { ColumnMenuNumericColumn, ColumnMenuNumericFilter, ColumnMenuProps } from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

export const ColumnMenuCustomNumericColumn = (props: ColumnMenuProps & { children?: React.ReactNode; }) => {
    const initialFilter: (field: string) => CompositeFilterDescriptor = React.useCallback(
        field =>
            ({ logic: 'and', filters: [{ operator: 'eq', field }] }),
        []
    );

    return (
      <ColumnMenuNumericColumn
        {...props}
        filterContent={[
                ColumnMenuNumericFilter
            ]}
        initialFilter={initialFilter}
        />
    )
};
