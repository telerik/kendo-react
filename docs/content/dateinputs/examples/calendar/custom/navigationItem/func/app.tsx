import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import CustomNavigationItem from './customNavigationItem';

const App = () => {
    return <Calendar navigationItem={CustomNavigationItem} />;
};

export default App;
