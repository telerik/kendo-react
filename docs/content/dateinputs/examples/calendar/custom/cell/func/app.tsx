import * as React from 'react';

import { Calendar, CalendarCell, CalendarCellProps } from '@progress/kendo-react-dateinputs';

const customCell = (props: CalendarCellProps) => {
    const style: React.CSSProperties = props.isWeekend ? { color: '#FF6B6B' } : { color: 'black' };

    return <CalendarCell {...props} style={style} />;
};

const App = () => {
    return <Calendar cell={customCell} />;
};
export default App;
