import React, { useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [statusText, setStatusText] = useState('Inactive');

    const handleStart = () => {
        setStatusText('Active');
    };

    const handleEnd = () => {
        setStatusText('Inactive');
    };

    return (
        <div className="example-container">
            <div className="active-state-example">
                <div>
                    <SpeechToTextButton onStart={handleStart} onEnd={handleEnd} className="pulse-animation" />
                    <p className="status-text">{statusText}</p>
                </div>
                <div className="code-snippet">
                    <p className="code-title">CSS Animation for Active State</p>
                    <pre>
                        {`.k-speech-to-text-button.k-listening {
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`}
                    </pre>
                </div>
            </div>
            <p className="hint-text">Click the button to see the active state styling</p>
        </div>
    );
};

export default App;
