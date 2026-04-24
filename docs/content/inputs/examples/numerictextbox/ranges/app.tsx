import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div>
            <p>Increment the spinner to see values between 0 and 5.</p>
            <br />
            <NumericTextBox width={300} min={0} max={5} />
        </div>
    );
};

export default App;
