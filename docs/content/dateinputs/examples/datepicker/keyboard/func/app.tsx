import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const value = new Date(2000, 2, 10);
    const picker: any = React.useRef(null);

    React.useEffect(() => {
        picker.current.dateInput.element.focus();
    });

    return (
        <div className="example-wrapper">
            <DatePicker ref={picker} defaultValue={value} />
            <p>
                (use Alt+<code>↓</code> to open the calendar, <code>←</code> and <code>→</code> to navigate,{' '}
                <code>↑</code> to increment and <code>↓</code> to decrement the value)
            </p>
        </div>
    );
};
export default App;
