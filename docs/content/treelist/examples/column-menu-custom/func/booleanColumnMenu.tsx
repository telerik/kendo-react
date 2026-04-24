import * as React from 'react';
import { ColumnMenuBooleanColumn, ColumnMenuProps } from '@progress/kendo-react-data-tools';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

const ColumnMenuBooleanFilter = (props: ColumnMenuProps & { children?: React.ReactNode }) => {
    const filter: CompositeFilterDescriptor[] | undefined  = props.filter;
    const onFilterChange: any = props.onFilterChange

    const inputChange = React.useCallback(
        (event: CheckboxChangeEvent) => {
            onFilterChange.call(undefined, event.syntheticEvent, { ...filter, value: event.value }, filter);
        },
        [filter, onFilterChange]
    );

    return (
      <Checkbox
        onChange={inputChange}
        checked={filter!.values as any}
        label="Is true"
        labelPlacement="after"
        />
    );
};

export const ColumnMenuCustomBooleanColumn = (props: ColumnMenuProps & { children?: React.ReactNode }) => {
    const initialFilter: (field: string) => CompositeFilterDescriptor = React.useCallback(
        field =>
            ({ logic: 'and', filters: [{ operator: 'eq', field, value: false }] }),
        []
    );

    return (
      <ColumnMenuBooleanColumn
        {...props}
        filterContent={[
                ColumnMenuBooleanFilter
            ]}
        initialFilter={initialFilter}
        />
    )
};
