import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';

const App = () => {
    return (
        <div>
            <SplitButton items={['Save as', 'Upload to drive']} text="Save" />
        </div>
    );
};
export default App;
