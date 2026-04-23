import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const today = new Date();
const defaultDateRange = { start: today, end: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7) };

const App: React.FC = () => {
    const [value, setValue] = React.useState<any>(defaultDateRange);
    const [currentSelected, setCurrentSelected] = React.useState<any[]>([]);

    const handleFocus = () => {
        setCurrentSelected(value);
    };

    const handleChange = (event: any) => {
        setValue({ ...event.value });
    };

    const handleCancel = () => {
        setValue(currentSelected);
    };

    return (
        <div className="app-wrapper">
            <DateRangePicker
                value={value}
                adaptive={true}
                adaptiveTitle="Select range"
                adaptiveSubtitle={'MM/DD/YYYY'}
                onFocus={handleFocus}
                onChange={handleChange}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default App;
