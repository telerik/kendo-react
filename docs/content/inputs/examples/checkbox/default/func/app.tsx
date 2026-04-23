import * as React from 'react';
import { Checkbox } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    return (
        <div className="preferences-container">
            <br />
            <h3>Notification Preferences</h3>
            <p>Select how you want to be notified:</p>
            <br />
            <div className="checkbox-group">
                <Checkbox defaultChecked={true} label={'Email Notifications'} />
                <Checkbox label={'SMS Alerts'} />
            </div>
        </div>
    );
};

export default App;
