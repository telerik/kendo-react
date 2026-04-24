import * as React from 'react';

import {
  Calendar,
  CalendarCell,
  CalendarCellProps,
} from '@progress/kendo-react-dateinputs';

const customCell = (props: CalendarCellProps) => {
  const disabledDates: string[] = ['10', '11', '12', '13', '14', '15'];

  const currentDate = props.formattedValue;
  const shouldDisableCell = disabledDates.some((date) => date === currentDate)
    ? 'k-disabled'
    : '';

  return <CalendarCell {...props} className={shouldDisableCell} />;
};

export const CustomCalendar = () => <Calendar cell={customCell} />;

