import * as React from 'react';
import { PromptBox } from '@progress/kendo-react-conversational-ui';
import './styles.css';

const App = () => {
    return (
        <div className="example">
            <PromptBox
                mode="single"
                placeholder="Solid fill mode..."
                uploadButtonConfig={{ fillMode: 'solid' }}
                speechToTextButtonConfig={{ fillMode: 'solid' }}
                actionButtonConfig={{ fillMode: 'solid', themeColor: 'primary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Flat fill mode..."
                uploadButtonConfig={{ fillMode: 'flat' }}
                speechToTextButtonConfig={{ fillMode: 'flat' }}
                actionButtonConfig={{ fillMode: 'flat', themeColor: 'primary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Outline fill mode..."
                uploadButtonConfig={{ fillMode: 'outline' }}
                speechToTextButtonConfig={{ fillMode: 'outline' }}
                actionButtonConfig={{ fillMode: 'outline', themeColor: 'primary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Clear fill mode..."
                uploadButtonConfig={{ fillMode: 'clear' }}
                speechToTextButtonConfig={{ fillMode: 'clear' }}
                actionButtonConfig={{ fillMode: 'clear', themeColor: 'primary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Link fill mode..."
                uploadButtonConfig={{ fillMode: 'link' }}
                speechToTextButtonConfig={{ fillMode: 'link' }}
                actionButtonConfig={{ fillMode: 'link', themeColor: 'primary' }}
            />
        </div>
    );
};

export default App;
