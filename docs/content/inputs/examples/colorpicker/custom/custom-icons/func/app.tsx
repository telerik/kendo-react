import * as React from 'react';

import { ColorPicker } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div>
            <p>Select color:</p>
            <ColorPicker views={['gradient', 'palette']} iconClassName={'k-icon k-i-edit-tools'} />
        </div>
    );
};

export default App;
