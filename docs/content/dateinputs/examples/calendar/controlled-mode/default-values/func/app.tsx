import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';

const App = () => {
    return <Calendar defaultValue={new Date()} focusedDate={new Date()} defaultActiveView={'month'} />;
};
export default App;
