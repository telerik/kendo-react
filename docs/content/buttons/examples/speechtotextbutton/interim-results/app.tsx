import React, { useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [interimResults, setInterimResults] = useState(true);
    const [statusText, setStatusText] = useState('Ready to listen');
    const [currentInterim, setCurrentInterim] = useState('');
    const [finalResults, setFinalResults] = useState<string[]>([]);

    const onStart = () => {
        setIsListening(true);
        setStatusText('Listening...');
        setCurrentInterim('');
    };

    const onEnd = () => {
        setIsListening(false);
        setStatusText('Ready to listen');
        setCurrentInterim('');
    };

    const onError = (event) => {
        setIsListening(false);
        setStatusText('Error occurred');
        setCurrentInterim('');
        console.error('Speech recognition error:', event);
    };

    const onResult = (event) => {
        const { isFinal, alternatives } = event;

        if (alternatives.length > 0) {
            const transcript = alternatives[0].transcript;

            if (isFinal) {
                setFinalResults((prev) => [...prev, transcript]);
                setCurrentInterim('');
            } else if (interimResults) {
                setCurrentInterim(transcript);
            }
        }
    };

    const handleInterimChange = (e) => {
        setInterimResults(e.value);
        setFinalResults([]);
        setCurrentInterim('');
        setStatusText('Ready to listen');
    };

    return (
        <div className="example-container">
            <div className="interim-demo">
                <p>Enable interim results to see real-time transcription as you speak</p>

                <div className="toggle-controls">
                    <label>
                        <Checkbox
                            checked={interimResults}
                            onChange={handleInterimChange}
                            label="Enable Interim Results"
                        />
                    </label>
                    <p className="toggle-description">
                        {interimResults
                            ? 'Shows partial results in real-time while speaking'
                            : 'Only shows final results after speech is complete'}
                    </p>
                </div>

                <div className="speech-controls">
                    <SpeechToTextButton
                        interimResults={interimResults}
                        continuous={true}
                        onStart={onStart}
                        onEnd={onEnd}
                        onError={onError}
                        onResult={onResult}
                    />
                    <div className={`status ${isListening ? 'listening' : ''}`}>{statusText}</div>
                </div>

                <div className="results-container">
                    {interimResults && (
                        <div className="interim-section">
                            <h5>Interim (Live) Results:</h5>
                            <div className="interim-display">
                                {currentInterim ? (
                                    <p className="interim-text">{currentInterim}</p>
                                ) : (
                                    <p className="placeholder">
                                        {isListening
                                            ? 'Speak to see live transcription...'
                                            : 'Start speaking to see interim results'}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="final-section">
                        <h5>Final Results:</h5>
                        {finalResults.length > 0 ? (
                            <div className="final-results">
                                {finalResults.map((result, index) => (
                                    <div className="result-item" key={index}>
                                        <span className="result-number">{index + 1}.</span>
                                        <span className="result-text">{result}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="placeholder">Final transcription results will appear here</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
