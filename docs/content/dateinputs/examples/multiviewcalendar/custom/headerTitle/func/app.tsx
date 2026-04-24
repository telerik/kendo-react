import * as React from 'react';

import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import CustomHeaderTitle from './customHeaderTitle';

const App = () => {
    return <MultiViewCalendar headerTitle={CustomHeaderTitle} />;
};

export default App;
