import React from 'react';
import { SpeechToTextButton } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    return (
        <div className="size-examples">
            <div>
                <span>Small</span>
                <SpeechToTextButton iconSize="small" />
            </div>
            <div>
                <span>Medium</span>
                <SpeechToTextButton iconSize="medium" />
            </div>
            <div>
                <span>Large</span>
                <SpeechToTextButton iconSize="large" />
            </div>
        </div>
    );
};

export default App;
