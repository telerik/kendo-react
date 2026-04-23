import React, { useState } from 'react';
import { SpeechToTextButton, SpeechToTextErrorEvent, SpeechToTextResultEvent } from '@progress/kendo-react-buttons';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [continuousMode, setContinuousMode] = useState(true);
    const [statusText, setStatusText] = useState('Ready to listen');
    const [allResults, setAllResults] = useState<string[]>([]);

    const onStart = () => {
        setIsListening(true);
        setStatusText('Listening...');
    };

    const onEnd = () => {
        setIsListening(false);
        setStatusText('Ready to listen');
    };

    const onError = (event: SpeechToTextErrorEvent) => {
        console.error('Speech recognition error:', event);
        setIsListening(false);
        setStatusText('Error occurred');
    };

    const onResult = (event: SpeechToTextResultEvent) => {
        const { isFinal, alternatives } = event;
        if (isFinal && alternatives.length > 0) {
            setAllResults((prev) => [...prev, alternatives[0].transcript]);
            if (!continuousMode) {
                setStatusText('Recognition completed');
            }
        }
    };

    const onContinuousChange = (e: CheckboxChangeEvent) => {
        setContinuousMode(e.value);
        setAllResults([]);
        setStatusText('Ready to listen');
    };

    return (
        <div className="example-container">
            <div className="continuous-demo">
                <p>Toggle continuous mode to control how speech recognition behaves after getting results</p>

                <div className="toggle-controls">
                    <Checkbox
                        label="Enable Continuous Recognition"
                        checked={continuousMode}
                        onChange={onContinuousChange}
                    />
                    <p className="toggle-description">
                        {continuousMode
                            ? 'Recognition will continue listening after results are returned'
                            : 'Recognition will stop after the first result'}
                    </p>
                </div>

                <div className="speech-controls">
                    <SpeechToTextButton
                        continuous={continuousMode}
                        onStart={onStart}
                        onEnd={onEnd}
                        onError={onError}
                        onResult={onResult}
                    />
                    <div className={`status${isListening ? ' listening' : ''}`}>{statusText}</div>
                </div>

                <div className="results-container">
                    <h5>Recognition Results:</h5>
                    {allResults.length > 0 ? (
                        <div className="results-list">
                            {allResults.map((result, idx) => (
                                <div key={idx} className="result-item">
                                    <span className="result-number">{idx + 1}.</span>
                                    <span className="result-text">{result}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="placeholder">
                            {continuousMode
                                ? 'Start speaking to see multiple results. Recognition will continue until you stop it.'
                                : 'Start speaking to see a single result. Recognition will stop automatically.'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
