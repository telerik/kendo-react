import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div>
            <NumericTextBox defaultValue={0} fillMode={'solid'} width={300} />
            <br />
            <br />
            <NumericTextBox defaultValue={0} fillMode={'outline'} width={300} />
            <br />
            <br />
            <NumericTextBox defaultValue={0} fillMode={'flat'} width={300} />
        </div>
    );
};

export default App;
