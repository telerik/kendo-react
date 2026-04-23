import * as React from 'react';
import { PromptBox } from '@progress/kendo-react-conversational-ui';
import './styles.css';

const App = () => {
    return (
        <div className="example">
            <PromptBox
                mode="single"
                placeholder="Base theme color..."
                uploadButtonConfig={{ themeColor: 'base' }}
                speechToTextButtonConfig={{ themeColor: 'base' }}
                actionButtonConfig={{ themeColor: 'base' }}
            />

            <PromptBox
                mode="single"
                placeholder="Primary theme color..."
                uploadButtonConfig={{ themeColor: 'primary' }}
                speechToTextButtonConfig={{ themeColor: 'primary' }}
                actionButtonConfig={{ themeColor: 'primary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Secondary theme color..."
                uploadButtonConfig={{ themeColor: 'secondary' }}
                speechToTextButtonConfig={{ themeColor: 'secondary' }}
                actionButtonConfig={{ themeColor: 'secondary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Tertiary theme color..."
                uploadButtonConfig={{ themeColor: 'tertiary' }}
                speechToTextButtonConfig={{ themeColor: 'tertiary' }}
                actionButtonConfig={{ themeColor: 'tertiary' }}
            />

            <PromptBox
                mode="single"
                placeholder="Info theme color..."
                uploadButtonConfig={{ themeColor: 'info' }}
                speechToTextButtonConfig={{ themeColor: 'info' }}
                actionButtonConfig={{ themeColor: 'info' }}
            />

            <PromptBox
                mode="single"
                placeholder="Success theme color..."
                uploadButtonConfig={{ themeColor: 'success' }}
                speechToTextButtonConfig={{ themeColor: 'success' }}
                actionButtonConfig={{ themeColor: 'success' }}
            />

            <PromptBox
                mode="single"
                placeholder="Warning theme color..."
                uploadButtonConfig={{ themeColor: 'warning' }}
                speechToTextButtonConfig={{ themeColor: 'warning' }}
                actionButtonConfig={{ themeColor: 'warning' }}
            />

            <PromptBox
                mode="single"
                placeholder="Error theme color..."
                uploadButtonConfig={{ themeColor: 'error' }}
                speechToTextButtonConfig={{ themeColor: 'error' }}
                actionButtonConfig={{ themeColor: 'error' }}
            />

            <PromptBox
                mode="single"
                placeholder="Dark theme color..."
                uploadButtonConfig={{ themeColor: 'dark' }}
                speechToTextButtonConfig={{ themeColor: 'dark' }}
                actionButtonConfig={{ themeColor: 'dark' }}
            />

            <PromptBox
                mode="single"
                placeholder="Light theme color..."
                uploadButtonConfig={{ themeColor: 'light' }}
                speechToTextButtonConfig={{ themeColor: 'light' }}
                actionButtonConfig={{ themeColor: 'light' }}
            />

            <PromptBox
                mode="single"
                placeholder="Inverse theme color..."
                uploadButtonConfig={{ themeColor: 'inverse' }}
                speechToTextButtonConfig={{ themeColor: 'inverse' }}
                actionButtonConfig={{ themeColor: 'inverse' }}
            />
        </div>
    );
};

export default App;
