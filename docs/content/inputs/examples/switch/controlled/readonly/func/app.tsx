import * as React from 'react';
import { Switch } from '@progress/kendo-react-inputs';

const App = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <p className="mb-2">Read-only:</p>
            <Switch checked={true} />
        </div>
    );
};

export default App;
