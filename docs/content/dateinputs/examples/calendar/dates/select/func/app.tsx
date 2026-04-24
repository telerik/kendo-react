import * as React from 'react';

import { Calendar, CalendarChangeEvent } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    return <Calendar value={date} onChange={(e: CalendarChangeEvent) => setDate(e.target.value)} />;
};

export default App;
