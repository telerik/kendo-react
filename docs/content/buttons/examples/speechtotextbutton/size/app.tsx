import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="example-container">
            <h4>Button Size Options</h4>
            <div className="size-examples">
                <div>
                    <span>Small</span>
                    <SpeechToTextButton size="small" />
                </div>
                <div>
                    <span>Medium (default)</span>
                    <SpeechToTextButton size="medium" />
                </div>
                <div>
                    <span>Large</span>
                    <SpeechToTextButton size="large" />
                </div>
            </div>
        </div>
    );
};

export default App;
