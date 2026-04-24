import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="example-container">
            <h4>Fill Mode Options</h4>
            <div className="fillmode-examples">
                <div>
                    <span>Solid (default)</span>
                    <SpeechToTextButton fillMode="solid" />
                </div>
                <div>
                    <span>Outline</span>
                    <SpeechToTextButton fillMode="outline" />
                </div>
                <div>
                    <span>Flat</span>
                    <SpeechToTextButton fillMode="flat" />
                </div>
                <div>
                    <span>Link</span>
                    <SpeechToTextButton fillMode="link" />
                </div>
            </div>
        </div>
    );
};

export default App;
