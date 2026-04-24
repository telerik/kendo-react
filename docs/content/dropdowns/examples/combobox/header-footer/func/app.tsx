import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';
import countries from './shared-dd-countries';

const App = () => {
    return (
        <ComboBox
            style={{ width: '300px' }}
            data={countries}
            header={<span style={{ marginLeft: '60px' }}>header</span>}
            footer={<span style={{ marginLeft: '60px' }}>footer</span>}
        />
    );
};

export default App;
