import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Checkbox } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleActionClick = () => {
        if (!promptValue.trim()) {
            return;
        }

        console.log('Prompt sent:', promptValue);
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <div className="example-config">
                <Checkbox
                    label={'Disabled'}
                    value={isDisabled}
                    onChange={(e) => setIsDisabled(e.value ?? false)}
                    style={{ marginLeft: '4px' }}
                />
            </div>

            <div className="promptbox-section">
                <PromptBox
                    value={promptValue}
                    onChange={handleValueChange}
                    disabled={isDisabled}
                    placeholder="Type your message..."
                    actionButtonConfig={{
                        themeColor: 'primary',
                        disabled: false
                    }}
                    uploadButtonConfig={{
                        disabled: true
                    }}
                    speechToTextButtonConfig={{
                        disabled: false
                    }}
                    onPromptAction={handleActionClick}
                />
            </div>
        </div>
    );
};

export default App;
