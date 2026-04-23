import * as React from 'react';

import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div className="k-d-flex k-justify-center k-align-items-center k-gap-4">
            <NumericTextBox defaultValue={0} width={100} />
            <NumericTextBox defaultValue={0} width={200} />
            <NumericTextBox defaultValue={0} width={300} />
        </div>
    );
};

export default App;
