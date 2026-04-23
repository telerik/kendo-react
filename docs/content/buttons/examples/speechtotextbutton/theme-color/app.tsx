import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const themeColors = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'];

const App = () => {
    const onStart = () => {
        console.log('Speech recognition started');
    };

    const onEnd = () => {
        console.log('Speech recognition ended');
    };

    const onResult = (event) => {
        console.log('Speech recognition result:', event);
        const { isFinal, alternatives } = event;

        if (alternatives.length > 0) {
            const { transcript, confidence } = alternatives[0];

            console.log(`Transcript: "${transcript}"`);
            console.log(`Is final: ${isFinal}`);
            if (confidence !== undefined) {
                console.log(`Confidence: ${(confidence * 100).toFixed(1)}%`);
            }
        }
    };

    return (
        <div className="example-container">
            <h4>Theme Color Options</h4>
            <div className="themecolor-examples">
                {themeColors.map((color: any) => (
                    <div key={color}>
                        <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
                        <SpeechToTextButton themeColor={color} onStart={onStart} onEnd={onEnd} onResult={onResult} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
