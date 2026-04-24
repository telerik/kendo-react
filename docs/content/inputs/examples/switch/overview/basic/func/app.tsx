import * as React from 'react';

import { Switch } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-container">
            <Switch defaultChecked={true} />
            <Switch />
            <Switch defaultChecked={true} disabled={true} />
            <Switch disabled={true} />
        </div>
    );
};

export default App;
