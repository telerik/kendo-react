import React from 'react';
import { ColumnMenuBooleanColumn } from '@progress/kendo-react-data-tools';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';

const ColumnMenuCustomCheckboxesFilter = (props: any) => {
    const { filter, onFilterChange, data } = props;

    const inputChange = React.useCallback(
        (event: CheckboxChangeEvent) => {
            const newFilter = {
                ...filter,
                value: filter.value.includes(event.value)
                    ? filter.value.filter((f: any) => f !== event.value)
                    : [event.value, ...filter.value]
            };
            onFilterChange.call(undefined, event.syntheticEvent, newFilter, filter);
        },
        [filter, onFilterChange]
    );

    return (
        <div style={{ height: '300px', overflow: 'scroll' }}>
            {data.map((i: any) => (
                <React.Fragment key={i}>
                    <Checkbox
                        onChange={(event) => inputChange({ syntheticEvent: event.syntheticEvent, value: i })}
                        checked={filter.value.includes(i)}
                        label={String(i)}
                        labelPlacement="after"
                    />
                    <br />
                </React.Fragment>
            ))}
        </div>
    );
};

export const ColumnMenuCustomCheckboxesColumn = (props: any) => {
    const initialFilter = React.useCallback(
        (field: string) => ({
            logic: 'or',
            filters: [
                {
                    operator: (current: any, values: any[]) => values.includes(current),
                    field,
                    value: []
                }
            ]
        }),
        []
    );

    return (
        <ColumnMenuBooleanColumn
            {...props}
            filterContent={[(p: any) => <ColumnMenuCustomCheckboxesFilter {...p} data={props.data} />]}
            initialFilter={initialFilter}
        />
    );
};
