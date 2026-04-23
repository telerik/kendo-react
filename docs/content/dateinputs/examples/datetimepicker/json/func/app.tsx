import React, { useState } from 'react';
import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { IntlProvider, IntlService } from '@progress/kendo-react-intl';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    // JSON data with ISO8601-formatted date string
    const initialModel = { hireDate: '2025-03-26T00:00' };

    // State for the parsed user object
    const [user, setUser] = useState({
        hireDate: new Date(initialModel.hireDate)
    });

    // State for the JSON model (stringified for presentation)
    const [output, setOutput] = useState(JSON.stringify(initialModel));

    // Kendo IntlService instance
    const intl = new IntlService('en');

    // Handle changes to the DateInput
    const handleDateChange = (event) => {
        const updatedModel = {
            ...initialModel,
            hireDate: intl.formatDate(event.value, 'yyyy-MM-dd, hh:mm')
        };
        setUser({ hireDate: event.value });
        setOutput(JSON.stringify(updatedModel));
    };

    return (
        <IntlProvider locale="en">
            <div className="example">
                <div className="example-config">
                    <p>Form Model: {JSON.stringify(user)}</p>
                    <p style={{ margin: 0 }}>JSON Model: {output}</p>
                </div>
                <Label editorId="hiredate">Select Date</Label>
                <DateTimePicker id="hiredate" value={user.hireDate} onChange={handleDateChange} />
            </div>
        </IntlProvider>
    );
};

export default App;
