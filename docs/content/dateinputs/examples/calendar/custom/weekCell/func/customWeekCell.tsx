import * as React from 'react';

import { CalendarWeekCell, CalendarWeekCellProps } from '@progress/kendo-react-dateinputs';
import convertToRoman from './customProvider';
import './styles.css';

const CustomWeekCell = (props: CalendarWeekCellProps) => {
    return (
        <CalendarWeekCell className="custom-week" {...props}>
            {convertToRoman(props.value)}
        </CalendarWeekCell>
    );
};

export default CustomWeekCell;
