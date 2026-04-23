import * as React from 'react';
import { Calendar } from '@progress/kendo-react-dateinputs';
import CustomWeekCell from './customWeekCell';

const App = () => {
    return <Calendar weekCell={CustomWeekCell} weekNumber showOtherMonthDays />;
};

export default App;
