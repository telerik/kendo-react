import * as React from 'react';
import { Calendar, CalendarChangeEvent } from '@progress/kendo-react-dateinputs';

const CustomCalendar = (props) => {
    const { onChange, value } = props;

    const handleStartChange = (event: CalendarChangeEvent) => {
        onChange({
            value: {
                start: event.target.value,
                end: value.end
            },
            syntheticEvent: event.syntheticEvent
        });
    };

    const handleEndChange = (event: CalendarChangeEvent) => {
        onChange({
            value: {
                start: value.start,
                end: event.target.value
            },
            syntheticEvent: event.syntheticEvent
        });
    };

    return (
        <div>
            <Calendar value={props.value.start} onChange={handleStartChange} navigation={false} />
            <Calendar value={props.value.end} onChange={handleEndChange} navigation={false} />
        </div>
    );
};

export default CustomCalendar;
