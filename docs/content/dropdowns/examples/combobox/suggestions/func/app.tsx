import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';

const App = () => {
    const countries = [
        'Albania',
        'Andorra',
        'Armenia',
        'Austria',
        'Azerbaijan',
        'Belarus',
        'Belgium',
        'Bosnia & Herzegovina',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Georgia',
        'Germany',
        'Greece'
    ];

    return (
        <div className="example-wrapper">
            <div>Enter country:</div>
            <ComboBox data={countries} suggest={true} placeholder="e.g. Austria" style={{ width: '300px' }} />
        </div>
    );
};

export default App;
