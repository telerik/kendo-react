import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    const selectedColor: string = 'rgba(237, 126, 50, 1)';
    const gradientSettings: { opacity: boolean } = {
        opacity: false
    };

    return (
        <div>
            <p>Select color:</p>
            <ColorPicker defaultValue={selectedColor} views={['gradient']} gradientSettings={gradientSettings} />
        </div>
    );
};

export default App;
