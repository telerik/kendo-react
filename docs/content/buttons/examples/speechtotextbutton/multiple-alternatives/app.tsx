import React, { useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './styles.css';

const alternativesOptions = [
    { text: '1 (Default)', value: 1 },
    { text: '3', value: 3 },
    { text: '5', value: 5 },
    { text: '10', value: 10 }
];

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [maxAlternatives, setMaxAlternatives] = useState(alternativesOptions[1]);
    const [statusText, setStatusText] = useState('Ready to listen');
    const [currentAlternatives, setCurrentAlternatives] = useState<{ transcript: string; confidence?: number }[]>([]);

    const onStart = () => {
        setIsListening(true);
        setStatusText('Listening...');
    };

    const onEnd = () => {
        setIsListening(false);
        setStatusText('Ready to listen');
    };

    const onError = (event) => {
        setIsListening(false);
        setStatusText('Error occurred');
        console.error('Speech recognition error:', event);
    };

    const onResult = (event) => {
        const { isFinal, alternatives } = event;
        if (isFinal && alternatives.length > 0) {
            setCurrentAlternatives(alternatives);
            setStatusText(`Found ${alternatives.length} alternative${alternatives.length > 1 ? 's' : ''}`);
        }
    };

    const onConfigChange = (e) => {
        setMaxAlternatives(e.value);
        setCurrentAlternatives([]);
        setStatusText('Ready to listen');
    };

    return (
        <div className="example-container">
            <div className="alternatives-demo">
                <p>Configure maxAlternatives to see different interpretations of your speech</p>

                <div className="config-controls">
                    <label htmlFor="max-alternatives">Max Alternatives:</label>
                    <DropDownList
                        id="max-alternatives"
                        data={alternativesOptions}
                        dataItemKey="value"
                        textField="text"
                        value={maxAlternatives}
                        onChange={onConfigChange}
                        style={{ width: '200px' }}
                    />
                    <p className="config-description">
                        Current setting: {maxAlternatives.text} alternative{maxAlternatives.value > 1 ? 's' : ''}
                    </p>
                </div>

                <div className="speech-controls">
                    <SpeechToTextButton
                        maxAlternatives={maxAlternatives.value}
                        interimResults={false}
                        onStart={onStart}
                        onEnd={onEnd}
                        onError={onError}
                        onResult={onResult}
                    />
                    <div className={`status ${isListening ? 'listening' : ''}`}>{statusText}</div>
                </div>

                <div className="results-container">
                    <h5>Recognition Alternatives:</h5>
                    <div className="alternatives-list">
                        {currentAlternatives.map((alt, index) => (
                            <div key={index} className={`alternative-item ${index === 0 ? 'primary' : ''}`}>
                                <div className="alternative-header">
                                    <span className="alternative-rank">
                                        {index === 0 ? 'Primary' : `Alternative ${index}`}
                                    </span>
                                    {alt.confidence && (
                                        <span className="confidence-score">
                                            {(alt.confidence * 100).toFixed(1)}% confidence
                                        </span>
                                    )}
                                </div>
                                <div className="alternative-text">{alt.transcript}</div>
                            </div>
                        ))}
                    </div>
                    <div className="placeholder">
                        <p>Speak clearly to see multiple recognition alternatives</p>
                        <p className="hint">
                            Try saying words that sound similar like "to", "too", "two" or "right", "write", "rite"
                        </p>
                    </div>
                </div>

                <div className="info-panel">
                    <h6>How it works:</h6>
                    <ul>
                        <li>
                            <code>maxAlternatives</code> controls how many interpretations are returned
                        </li>
                        <li>They’re ordered by confidence (highest first)</li>
                        <li>Useful for accents, noisy environments, or ambiguous words</li>
                        <li>Higher numbers may slightly affect performance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
