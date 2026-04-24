import * as React from 'react';

import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [isSubscribed, setIsSubscribed] = React.useState<boolean | null>(true);

    const handleCheckboxChange = (event: CheckboxChangeEvent) => {
        setIsSubscribed(event.value);
    };

    return (
        <div className="subscription-container">
            <h3>Newsletter Subscription</h3>
            <br />
            <p>Use the button below to toggle your subscription status, or manually update it using the checkbox.</p>
            <div className="subscription-controls">
                <Checkbox
                    checked={isSubscribed}
                    onChange={handleCheckboxChange}
                    label={isSubscribed ? 'Subscribed' : 'Not Subscribed'}
                />
            </div>
            <br />
            <div>
                <p> {isSubscribed ? 'Unsubscribe' : 'Subscribe'}</p>
            </div>
        </div>
    );
};

export default App;
