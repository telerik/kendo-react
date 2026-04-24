import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="example-container">
            <h4>Disabled State</h4>
            <div className="disabled-state-examples">
                <div>
                    <span>Enabled (default)</span>
                    <SpeechToTextButton />
                </div>
                <div>
                    <span>Disabled</span>
                    <SpeechToTextButton disabled />
                </div>
            </div>
        </div>
    );
};

export default App;
