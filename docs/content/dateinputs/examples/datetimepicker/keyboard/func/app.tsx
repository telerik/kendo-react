import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const picker = React.useRef<any>(undefined);
    const value = new Date(2000, 2, 10);

    React.useEffect(() => {
        if (
            picker.current !== undefined &&
            picker.current.dateInput !== null &&
            picker.current.dateInput.element !== null
        ) {
            picker.current.dateInput.element.focus();
        }
    }, []);

    return (
        <div className="example-wrapper">
            <DateTimePicker ref={picker} defaultValue={value} />
            <p>
                (use Alt+<code>↓</code> to open the calendar, <code>←</code> and <code>→</code> to navigate,{' '}
                <code>↑</code> to increment and <code>↓</code> to decrement the value)
            </p>
        </div>
    );
};
export default App;
