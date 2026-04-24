import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { filterClearIcon } from '@progress/kendo-svg-icons';
import { DateTimePicker, DateTimePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { GridCustomFilterCellProps } from '@progress/kendo-react-grid';

export const DateFilterCell = (props: GridCustomFilterCellProps) => {
    const onChange = (event: DateTimePickerChangeEvent) => {
        props.onChange({
            value: event.value,
            operator: 'eq',
            syntheticEvent: event.syntheticEvent
        });
    };

    const onClearButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.onChange({
            value: null,
            operator: '',
            syntheticEvent: event
        });
    };

    const value = props.value || null;

    return (
        <>
            <DateTimePicker width="70%" value={props.value || null} onChange={onChange} />
            <Button
                svgIcon={filterClearIcon}
                title="Clear"
                disabled={!value}
                onClick={onClearButtonClick}
                type="button"
            ></Button>
        </>
    );
};
