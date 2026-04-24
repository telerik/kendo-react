import * as React from 'react';

import { CalendarHeaderTitle, CalendarViewEnum, CalendarHeaderTitleProps } from '@progress/kendo-react-dateinputs';
import { SvgIcon } from '@progress/kendo-react-common';
import * as svgIcons from '@progress/kendo-svg-icons';

const CustomHeaderTitle = (props: CalendarHeaderTitleProps) => {
    let value = props.value || '';
    return (
        <CalendarHeaderTitle {...props}>
            {props.view === CalendarViewEnum.month ? `${value.split(' ')[0]}` : props.value}
            {props.view !== CalendarViewEnum.century ? <SvgIcon icon={svgIcons['arrowUpIcon']} size="small" /> : null}
        </CalendarHeaderTitle>
    );
};

export default CustomHeaderTitle;
