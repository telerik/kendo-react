import React from 'react';
import { ColumnMenuDateColumn } from '@progress/kendo-react-data-tools';
import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';

const ColumnMenuCustomDateFilter = (props: any) => {
    const { filter, onFilterChange } = props;

    const dateChange = React.useCallback(
        (event: DatePickerChangeEvent) => onFilterChange.call(undefined, event.syntheticEvent, { ...filter, value: event.value }, filter),
        [filter, onFilterChange]
    );

    const textLabel = filter.operator == 'gte' ? 'From' : 'To';

    return (
        <div>
            <span>{textLabel}</span>
            <DatePicker onChange={dateChange} value={filter.value} format={'M/d/yyyy'} />
        </div>
    );
};

export const ColumnMenuCustomDateColumn = (props: any) => {
    const initialFilter = React.useCallback(
        (field: string) => ({
            logic: 'and',
            filters: [
                { field, operator: 'gte', value: new Date('01/01/2012') },
                { field, operator: 'lte', value: new Date('01/01/2015') }
            ]
        }),
        []
    );

    return (
        <ColumnMenuDateColumn
            {...props}
            sortAsc={false}
            sortDesc={false}
            initialFilter={initialFilter}
            filterContent={[ColumnMenuCustomDateFilter, null, ColumnMenuCustomDateFilter]}
        />
    );
};
