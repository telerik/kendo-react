import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const value = new Date(2000, 2, 10);
    const picker: any = React.useRef(undefined);

    React.useEffect(() => {
        picker.current.dateInput.element.focus();
    });

    return (
        <div className="example-wrapper">
            <p>Enter time:</p>
            <TimePicker ref={picker} defaultValue={value} width={300} />
            <p>
                (use Alt+<code>↓</code> to open the time list, Tab to move to the next time section in the popup,{' '}
                <code>↑</code> to increment and
                <code>↓</code> to decrement the value)
            </p>
        </div>
    );
};
export default App;
