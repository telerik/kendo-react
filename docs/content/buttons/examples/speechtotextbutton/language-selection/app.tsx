import React, { useState } from 'react';
import { SpeechToTextButton, SpeechToTextErrorEvent, SpeechToTextResultEvent } from '@progress/kendo-react-buttons';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import './styles.css';

const languageOptions = [
    { text: 'English (US)', value: 'en-US' },
    { text: 'English (UK)', value: 'en-GB' },
    { text: 'Spanish (Spain)', value: 'es-ES' },
    { text: 'French (France)', value: 'fr-FR' },
    { text: 'German (Germany)', value: 'de-DE' },
    { text: 'Italian (Italy)', value: 'it-IT' },
    { text: 'Portuguese (Brazil)', value: 'pt-BR' },
    { text: 'Japanese (Japan)', value: 'ja-JP' },
    { text: 'Korean (Korea)', value: 'ko-KR' },
    { text: 'Chinese (Mandarin)', value: 'zh-CN' }
];

const App = () => {
    const [isListening, setIsListening] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');
    const [statusText, setStatusText] = useState('Ready to listen');
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    const onStart = () => {
        setIsListening(true);
        setStatusText('Listening...');
    };

    const onEnd = () => {
        setIsListening(false);
        setStatusText('Ready to listen');
    };

    const onError = (event: SpeechToTextErrorEvent) => {
        setIsListening(false);
        setStatusText('Error occurred');
        console.error('Speech recognition error:', event);
    };

    const onResult = (event: SpeechToTextResultEvent) => {
        const { isFinal, alternatives } = event;
        console.log('Speech Result:', isFinal, event.alternatives[0].transcript);

        if (isFinal && alternatives.length > 0) {
            setRecognizedText(alternatives[0].transcript);
        }
    };

    const onLanguageChange = (e: DropDownListChangeEvent) => {
        setSelectedLanguage(e.value);
        setRecognizedText('');
        setStatusText('Ready to listen');
    };

    // console.log(recognizedText);

    return (
        <div className="example-container">
            <div className="language-config-demo">
                <p>Select a language and start speaking to see recognition in different languages</p>

                <div className="language-selector">
                    <label htmlFor="language-select">Recognition Language:</label>
                    <DropDownList
                        id="language-select"
                        data={languageOptions}
                        dataItemKey="value"
                        textField="text"
                        value={selectedLanguage}
                        onChange={onLanguageChange}
                    />
                </div>

                <div className="speech-controls">
                    <SpeechToTextButton
                        lang={selectedLanguage.value}
                        onStart={onStart}
                        onEnd={onEnd}
                        onError={onError}
                        onResult={onResult}
                    />
                    <div className={`status ${isListening ? 'listening' : ''}`}>{statusText}</div>
                </div>

                <div className="language-info">
                    <p>
                        <strong>Current Language:</strong> {selectedLanguage.value}
                    </p>
                    <p>
                        <em>Speak in {selectedLanguage.text} for best results</em>
                    </p>
                </div>

                {recognizedText && (
                    <div className="result-display">
                        <h5>Recognition Result:</h5>
                        <p>{recognizedText}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
