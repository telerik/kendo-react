import * as React from 'react';

import { Calendar, CalendarCell, CalendarCellProps } from '@progress/kendo-react-dateinputs';

const customCell = (props: CalendarCellProps) => {
    const style: React.CSSProperties = props.isWeekend ? { color: '#FF6B6B' } : { color: 'black' };

    return <CalendarCell {...props} style={style} />;
};

const CustomCalendar = (props) => {
    return <Calendar value={props.value} onChange={props.onChange} navigation={false} cell={customCell} />;
};

export default CustomCalendar;
