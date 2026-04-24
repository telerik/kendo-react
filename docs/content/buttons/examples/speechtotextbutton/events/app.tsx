import React, { useState } from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import Logger from './Logger.tsx';
import './styles.css';

const App = () => {
    const [currentStatus, setCurrentStatus] = useState('Ready');
    const [recognizedText, setRecognizedText] = useState('');
    const [eventLog, setEventLog] = useState<string[]>([]);

    const addEvent = (eventType, details = '') => {
        const timestamp = new Date().toLocaleTimeString();
        const message = details ? `${eventType} - ${details} (${timestamp})` : `${eventType} (${timestamp})`;

        setEventLog((prev) => [message, ...prev]);
    };

    const handleStart = () => {
        setCurrentStatus('Listening...');
        addEvent('start', 'Speech recognition started');
    };

    const handleResult = (event) => {
        const { isFinal, alternatives } = event;

        if (alternatives.length > 0) {
            const text = alternatives[0].transcript;
            const confidence = alternatives[0].confidence;

            if (isFinal) {
                setRecognizedText(text);
                setCurrentStatus('Recognition completed');
                addEvent(
                    'result',
                    `Final: "${text}" (confidence: ${confidence ? (confidence * 100).toFixed(1) + '%' : 'N/A'})`
                );
            } else {
                addEvent('result', `Interim: "${text}"`);
            }
        }
    };

    const handleEnd = () => {
        setCurrentStatus('Recognition ended');
        addEvent('end', 'Speech recognition stopped');
    };

    const handleError = (event) => {
        setCurrentStatus(`Error: ${event.error}`);
        addEvent('error', `Error occurred: ${event.error}`);
        console.error('Speech recognition error:', event);
    };

    return (
        <div className="events-demo">
            <div className="demo-section">
                <p>Click the microphone button and speak to see the events being triggered</p>

                <div className="speech-controls">
                    <SpeechToTextButton
                        interimResults={true}
                        continuous={false}
                        onStart={handleStart}
                        onResult={handleResult}
                        onEnd={handleEnd}
                        onError={handleError}
                    />
                    <div className="current-status">
                        <strong>Current Status:</strong> {currentStatus}
                    </div>
                    {recognizedText && (
                        <div className="recognized-text">
                            <strong>Recognized Text:</strong> {recognizedText}
                        </div>
                    )}
                </div>
            </div>

            <Logger events={eventLog} title="Event Log" />
        </div>
    );
};

export default App;
