import * as React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import { CustomWeekCell } from './customWeekCell';

const App = () => {
    return <MultiViewCalendar weekNumber={true} weekCell={CustomWeekCell} />;
};

export default App;
