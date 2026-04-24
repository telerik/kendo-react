import * as React from 'react';

import { CalendarHeaderTitle, CalendarViewEnum, CalendarHeaderTitleProps } from '@progress/kendo-react-dateinputs';

const CustomHeaderTitle = (props: CalendarHeaderTitleProps) => {
    let value = props.value || '';
    return (
        <CalendarHeaderTitle {...props}>
            {props.view === CalendarViewEnum.month ? `${value.split(' ')[0]} - ${value.split(' ')[3]}` : value}
            {props.view !== CalendarViewEnum.century ? <code>↑</code> : null}
        </CalendarHeaderTitle>
    );
};

export default CustomHeaderTitle;
