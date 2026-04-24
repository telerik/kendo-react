import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div>
            <NumericTextBox defaultValue={0} size={'small'} width={300} />
            <br />
            <br />
            <NumericTextBox defaultValue={0} size={'medium'} width={300} />
            <br />
            <br />
            <NumericTextBox defaultValue={0} size={'large'} width={300} />
        </div>
    );
};

export default App;
