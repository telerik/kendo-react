import * as React from 'react';
import { PromptBox } from '@progress/kendo-react-conversational-ui';
import './styles.css';

const App = () => {
    return (
        <div className="example">
            <PromptBox
                mode="single"
                placeholder="Small roundness..."
                uploadButtonConfig={{ rounded: 'small', fillMode: 'outline' }}
                speechToTextButtonConfig={{ rounded: 'small', fillMode: 'outline' }}
                actionButtonConfig={{ rounded: 'small', fillMode: 'outline' }}
            />

            <PromptBox
                mode="single"
                placeholder="Medium roundness..."
                uploadButtonConfig={{ rounded: 'medium', fillMode: 'outline' }}
                speechToTextButtonConfig={{ rounded: 'medium', fillMode: 'outline' }}
                actionButtonConfig={{ rounded: 'medium', fillMode: 'outline' }}
            />

            <PromptBox
                mode="single"
                placeholder="Large roundness..."
                uploadButtonConfig={{ rounded: 'large', fillMode: 'outline' }}
                speechToTextButtonConfig={{ rounded: 'large', fillMode: 'outline' }}
                actionButtonConfig={{ rounded: 'large', fillMode: 'outline' }}
            />

            <PromptBox
                mode="single"
                placeholder="Full roundness..."
                uploadButtonConfig={{ rounded: 'full', fillMode: 'outline' }}
                speechToTextButtonConfig={{ rounded: 'full', fillMode: 'outline' }}
                actionButtonConfig={{ rounded: 'full', fillMode: 'outline' }}
            />
        </div>
    );
};

export default App;
