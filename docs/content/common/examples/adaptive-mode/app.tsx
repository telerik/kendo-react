import * as React from 'react';
import { AdaptiveModeContext } from '@progress/kendo-react-common';
import { DatePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = new Date(2025, 1, 10);

    return (
        <AdaptiveModeContext.Provider value={{ small: 320, medium: 1024 }}>
            <DatePicker defaultValue={defaultValue} adaptive={true} adaptiveTitle="Set Date" />
        </AdaptiveModeContext.Provider>
    );
};

export default App;
