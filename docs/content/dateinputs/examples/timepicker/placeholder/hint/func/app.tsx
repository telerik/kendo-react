import * as React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => (
    <div>
        <p>Enter time:</p>
        <TimePicker placeholder="Type in your birth date..." width={300} />
    </div>
);

export default App;
