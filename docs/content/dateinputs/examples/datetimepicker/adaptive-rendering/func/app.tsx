import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = React.useState(new Date());
    const handleChange = (event) => {
        setValue(event.value);
    };
    return (
        <div className="app-wrapper">
            <p>The value is: {`${value}`}</p>
            <DateTimePicker
                value={value}
                onChange={handleChange}
                label="Choose date and time"
                adaptive={true}
                adaptiveSubtitle="M/d/yyyy h:mm a"
            />
        </div>
    );
};

export default App;
