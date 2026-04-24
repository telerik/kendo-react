import * as React from 'react';

import { MultiViewCalendar, CalendarCell, CalendarCellProps } from '@progress/kendo-react-dateinputs';

const customCell = (props: CalendarCellProps) => {
    const style: React.CSSProperties = props.isWeekend ? { opacity: '.7' } : { fontWeight: 'bold' };

    return <CalendarCell {...props} style={style} />;
};

const App = () => {
    return <MultiViewCalendar cell={customCell} />;
};
export default App;
