import * as React from 'react';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <p>Disabled:</p>
            <Switch disabled={true} />
        </div>
    );
};

export default App;
