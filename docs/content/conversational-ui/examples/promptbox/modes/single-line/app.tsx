import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('');

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    const setShortText = () => {
        setPromptValue('What is AI?');
    };

    const setLongText = () => {
        setPromptValue(
            'Explain the impact of artificial intelligence on modern healthcare systems, including diagnostic accuracy improvements, patient care optimization, administrative efficiency, and ethical considerations and data privacy concerns'
        );
    };

    const clearText = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <div className="example-buttons">
                <Button onClick={setShortText}>Short Prompt</Button>
                <Button onClick={setLongText}>Long Prompt</Button>
                <Button onClick={clearText}>Clear</Button>
            </div>

            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="single"
                placeholder="Type a short question..."
                uploadButtonConfig={true}
                onPromptAction={handleSend}
            />
        </div>
    );
};

export default App;
