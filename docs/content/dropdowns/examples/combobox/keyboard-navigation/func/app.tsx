import * as React from 'react';

import { ComboBox } from '@progress/kendo-react-dropdowns';

const App = () => {
    const sports = [
        'Baseball',
        'Basketball',
        'Cricket',
        'Field Hockey',
        'Football',
        'Table Tennis',
        'Tennis',
        'Volleyball'
    ];

    return (
        <div className="example-wrapper">
            <p>Favorite sport:</p>
            <ComboBox style={{ width: '300px' }} data={sports} allowCustom={true} placeholder="Please select ..." />
        </div>
    );
};

export default App;
