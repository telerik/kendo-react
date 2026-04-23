import * as React from 'react';
import { Checkbox } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    return (
        <div className="container">
            <h2>Subscription Preferences</h2>
            <p>Please select your preferences:</p>
            <div className="checkbox-group">
                <Checkbox checked={true} label={'Email Notifications'} disabled={true} />
                <Checkbox checked={true} label={'Promotional Emails'} disabled={true} />
                <Checkbox label={'Push Notifications'} defaultChecked={true} />
            </div>
            <div className="note">
                <p>
                    <strong>Note:</strong> Some options are disabled due to account restrictions or feature
                    availability.
                </p>
            </div>
        </div>
    );
};

export default App;
