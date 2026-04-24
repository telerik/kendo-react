import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div className="example-wrapper">
            <DatePicker />
            <p>
                (use Alt+<code>↓</code> to open the calendar, <code>←</code> and <code>→</code> to navigate,{' '}
                <code>↑</code> to increment and <code>↓</code> to decrement the value)
            </p>
        </div>
    );
};
export default App;
