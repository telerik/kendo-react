import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="example-container">
            <div className="custom-styling-examples">
                <div>
                    <span>Inline style</span>
                    <SpeechToTextButton
                        style={{
                            backgroundColor: '#6200EA',
                            color: 'white',
                            border: '2px solid #3700B3'
                        }}
                    />
                </div>
                <div>
                    <span>Custom class</span>
                    <SpeechToTextButton className="custom-speech-button" />
                </div>
            </div>
        </div>
    );
};

export default App;
