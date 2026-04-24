import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import CustomHeaderTitle from './customHeaderTitle';

const App = () => {
    return <Calendar headerTitle={CustomHeaderTitle} />;
};

export default App;
