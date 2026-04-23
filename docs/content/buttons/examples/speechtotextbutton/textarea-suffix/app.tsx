import React, { useState } from 'react';
import { SpeechToTextButton, SpeechToTextErrorEvent, SpeechToTextResultEvent } from '@progress/kendo-react-buttons';
import { InputSuffix, TextArea } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [result, setResult] = useState('');
    const [appendMode, setAppendMode] = useState(true);

    const onResult = (event: SpeechToTextResultEvent) => {
        const { isFinal, alternatives } = event;

        if (isFinal && alternatives.length > 0) {
            const transcript = alternatives[0].transcript;
            setResult((prev) => {
                if (appendMode) {
                    const needsSpace = prev && !prev.endsWith(' ') && !prev.endsWith('\n');
                    return prev + (needsSpace ? ' ' : '') + transcript;
                } else {
                    return transcript;
                }
            });
        }
    };

    const clearText = () => {
        setResult('');
        setIsListening(false);
    };

    const toggleAppend = () => {
        setAppendMode((prev) => !prev);
    };

    return (
        <div className="example-container">
            <div className="textarea-speech-demo">
                <p>Use the microphone button to dictate text directly into the textarea</p>

                <div className="textarea-container">
                    <div className="textarea-wrapper">
                        <TextArea
                            value={result}
                            onChange={(e) => setResult(e.value)}
                            style={{ width: '400px' }}
                            rows={4}
                            placeholder="Click the microphone and start speaking..."
                            suffix={() => (
                                <InputSuffix orientation="vertical">
                                    <SpeechToTextButton
                                        size="small"
                                        fillMode="flat"
                                        themeColor="primary"
                                        onResult={onResult}
                                    />
                                </InputSuffix>
                            )}
                        />
                    </div>
                </div>

                <div className="actions-container">
                    <div className="actions">
                        <Button onClick={clearText} themeColor="error" fillMode="outline">
                            Clear Text
                        </Button>
                        <Button onClick={toggleAppend} themeColor="primary" fillMode="outline">
                            Append Mode: {appendMode ? 'ON' : 'OFF'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
