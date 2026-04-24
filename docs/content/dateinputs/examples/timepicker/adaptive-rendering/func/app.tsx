import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';

const defaultTime = new Date();

const App: React.FC = () => {
    const [value, setValue] = React.useState<any>(defaultTime);

    const handleChange = (event: any) => {
        setValue(event.value);
    };

    return (
        <div>
            <TimePicker
                value={value}
                onChange={handleChange}
                label="Select time"
                adaptive={true}
                adaptiveSubtitle="h:mm a"
            />
        </div>
    );
};

export default App;
