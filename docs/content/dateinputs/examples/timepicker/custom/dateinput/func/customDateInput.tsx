import * as React from 'react';
import { DateInputProps } from '@progress/kendo-react-dateinputs';

export const CustomDateInput = (props: DateInputProps) => {
    const inputStyle = {
        width: 90
    };
    const today = new Date();
    const handleChange = (event) => {
        const date = {
            hours: props.value ? props.value.getHours() : 0,
            minutes: props.value ? props.value.getMonth() : 0
        };

        date[event.target.getAttribute('data-section')] = Number(event.target.value);

        const value = new Date(today.getFullYear(), today.getMonth(), today.getDate(), date.hours, date.minutes);
        if (props.onChange) {
            props.onChange({
                value: value,
                syntheticEvent: event.syntheticEvent,
                target: event.target
            });
        }
    };
    return (
        <React.Fragment>
            <input
                style={inputStyle}
                max={23}
                min={0}
                type="number"
                data-section="hours"
                value={props.value ? props.value.getHours() : 0}
                onChange={handleChange}
            />
            <input
                style={inputStyle}
                max={59}
                min={0}
                type="number"
                data-section="minutes"
                value={props.value ? props.value.getMinutes() : 0}
                onChange={handleChange}
            />
        </React.Fragment>
    );
};
