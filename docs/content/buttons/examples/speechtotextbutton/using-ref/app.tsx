import React, { useRef, useState, useEffect } from 'react';
import {
    SpeechToTextButton,
    SpeechToTextButtonHandle,
    SpeechToTextErrorEvent,
    SpeechToTextResultEvent
} from '@progress/kendo-react-buttons';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const sttButtonRef = useRef<SpeechToTextButtonHandle | null>(null);
    const [isListening, setIsListening] = React.useState(false);
    const [transcript, setTranscript] = useState('');
    const [interimText, setInterimText] = useState('');
    const [finalText, setFinalText] = useState('');
    const [eventLog, setEventLog] = useState<{ timestamp: string; type: string; message: string }[]>([]);

    const addLogEntry = (type, message) => {
        const timestamp = new Date().toLocaleTimeString();
        setEventLog((prev) => {
            const updated = [{ timestamp, type, message }, ...prev];
            return updated.slice(0, 10);
        });
    };

    const startRecognition = async () => {
        if (sttButtonRef.current) {
            addLogEntry('METHOD', 'Called start() method');
            sttButtonRef.current.start();
            setIsListening(true);
        }
    };

    const stopRecognition = async () => {
        if (sttButtonRef.current) {
            addLogEntry('METHOD', 'Called stop() method');
            sttButtonRef.current.stop();
            setIsListening(false);
        }
    };

    const abortRecognition = async () => {
        if (sttButtonRef.current) {
            addLogEntry('METHOD', 'Called abort() method');
            sttButtonRef.current.abort();
            setIsListening(false);
        }
    };

    const checkActiveState = () => {
        if (sttButtonRef.current) {
            const active = sttButtonRef.current.isActive();
            addLogEntry('METHOD', `Called isActive() method - Result: ${active}`);
            setIsListening(active);
        }
    };

    const handleStart = async () => {
        setIsListening(true);
        addLogEntry('EVENT', 'Speech recognition started');
    };

    const handleEnd = async () => {
        setIsListening(false);
        addLogEntry('EVENT', 'Speech recognition stopped');
    };

    const handleResult = (event: SpeechToTextResultEvent) => {
        if (event.alternatives && event.alternatives.length > 0) {
            const text = event.alternatives[0].transcript;
            setTranscript(text);

            if (event.isFinal) {
                setFinalText(text);
                setInterimText('');
                addLogEntry('RESULT', `Final result: "${text}"`);
            } else {
                setInterimText(text);
                addLogEntry('RESULT', `Interim result: "${text}"`);
            }
        }
    };

    const handleError = async (event: SpeechToTextErrorEvent) => {
        setIsListening(false);
        addLogEntry('ERROR', event.errorMessage || 'Unknown error');
    };

    useEffect(() => {
        addLogEntry('SYSTEM', 'Demo initialized');
    }, []);

    return (
        <div className="demo-container">
            <div className="demo-section">
                <h4>Speech to Text Button</h4>
                <SpeechToTextButton
                    ref={sttButtonRef}
                    interimResults={true}
                    onStart={handleStart}
                    onEnd={handleEnd}
                    onResult={handleResult}
                    onError={handleError}
                />
            </div>

            <div className="demo-section">
                <h4>Programmatic Controls</h4>
                <div className="control-buttons">
                    <Button
                        onClick={startRecognition}
                        disabled={isListening}
                        themeColor="success"
                        className="control-btn"
                    >
                        Start Recognition
                    </Button>
                    <Button
                        onClick={stopRecognition}
                        disabled={!isListening}
                        themeColor="warning"
                        className="control-btn"
                    >
                        Stop Recognition
                    </Button>
                    <Button
                        onClick={abortRecognition}
                        disabled={!isListening}
                        themeColor="error"
                        className="control-btn"
                    >
                        Abort Recognition
                    </Button>
                    <Button onClick={checkActiveState} themeColor="primary" className="control-btn">
                        Check Active State
                    </Button>
                </div>
            </div>

            {transcript && (
                <div className="demo-section">
                    <h4>Transcript</h4>
                    <div className="transcript">
                        {interimText && (
                            <div className="interim-text">
                                <strong>Interim:</strong> {interimText}
                            </div>
                        )}
                        {finalText && (
                            <div className="final-text">
                                <strong>Final:</strong> {finalText}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="demo-section">
                <h4>Event Log</h4>
                <div className="event-log">
                    {eventLog.map((event, index) => (
                        <div className="log-entry" key={index}>
                            <span className="timestamp">{event.timestamp}</span>
                            <span className="event-type">{event.type}</span>
                            <span className="event-message">{event.message}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
