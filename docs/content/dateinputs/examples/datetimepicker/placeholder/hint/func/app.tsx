import * as React from 'react';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const App = () => (
    <div>
        <p>Select date:</p>
        <DateTimePicker placeholder="Type in your birth date..." width={300} />
    </div>
);

export default App;
