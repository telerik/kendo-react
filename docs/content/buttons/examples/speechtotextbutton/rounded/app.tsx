import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="example-container">
            <h4>Rounded Style Options</h4>
            <div className="rounded-examples">
                <div>
                    <span>Small</span>
                    <SpeechToTextButton rounded="small" />
                </div>
                <div>
                    <span>Medium (default)</span>
                    <SpeechToTextButton rounded="medium" />
                </div>
                <div>
                    <span>Large</span>
                    <SpeechToTextButton rounded="large" />
                </div>
                <div>
                    <span>Full</span>
                    <SpeechToTextButton rounded="full" />
                </div>
                <div>
                    <span>None</span>
                    <SpeechToTextButton rounded="none" />
                </div>
            </div>
        </div>
    );
};

export default App;
