import * as React from 'react';

import { CalendarWeekCell, CalendarWeekCellProps } from '@progress/kendo-react-dateinputs';
import { convertToRoman } from './customProvider';

export const CustomWeekCell = (props: CalendarWeekCellProps) => {
    return <CalendarWeekCell {...props}>{convertToRoman(props.value)}</CalendarWeekCell>;
};
