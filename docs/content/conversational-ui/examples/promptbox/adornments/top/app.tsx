import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>(
        'Explain how transformer models process context in natural language understanding.'
    );
    const characterLimit = 100;

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const characterCount = promptValue.length;
    const isWarning = characterCount > 80;
    const isLimit = characterCount >= characterLimit;
    const icon = isLimit ? '⛔' : isWarning ? '⚠️' : '✏️';
    const iconClass = isLimit ? 'icon-error' : isWarning ? 'icon-warning' : 'icon-normal';
    const statusText = isLimit ? 'LIMIT REACHED' : `${characterLimit - characterCount} left`;

    const handleSend = () => {
        if (promptValue.trim() && characterCount <= characterLimit) {
            setPromptValue('');
        }
    };

    return (
        <div className="demo-container">
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="multi"
                uploadButtonConfig={true}
                maxTextAreaHeight="250"
                placeholder="Start typing to see the character counter update..."
                onPromptAction={handleSend}
                inputAttributes={{ maxLength: characterLimit }}
                topAffix={
                    <div
                        className={`affix-content ${isWarning ? 'warning-state' : ''} ${isLimit ? 'limit-state' : ''}`}
                    >
                        <div className="counter-wrapper">
                            <div className="icon-badge">
                                <span className={iconClass}>{icon}</span>
                            </div>
                            <div className="counter-info">
                                <span className="label">Character Count</span>
                                <div className="value-container">
                                    <span className="value">
                                        {characterCount}/{characterLimit}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {isWarning && (
                            <div className={`status-badge ${isLimit ? 'error-badge' : ''}`}>{statusText}</div>
                        )}
                    </div>
                }
            />
        </div>
    );
};

export default App;
