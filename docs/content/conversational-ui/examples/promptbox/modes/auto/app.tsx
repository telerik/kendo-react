import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('Tell me about renewable energy sources');

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const setShortText = () => {
        setPromptValue('What is AI?');
    };

    const setLongText = () => {
        setPromptValue(`Analyze our Q4 financial performance and provide a comprehensive strategic assessment covering the following areas:

1. Revenue Analysis:
   - Compare Q4 revenue against Q3 and the same quarter last year
   - Identify which product lines or services drove the most growth
   - Analyze revenue by geographic region and customer segment

2. Cost Structure and Efficiency:
   - Evaluate operational expenses as a percentage of revenue
   - Suggest opportunities for cost optimization without impacting quality
   - Compare our cost efficiency metrics against industry benchmarks`);
    };

    const clearText = () => {
        setPromptValue('');
    };

    const handleSend = () => {
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
                placeholder="Start typing..."
                mode="auto"
                uploadButtonConfig={true}
                maxTextAreaHeight="200"
                onPromptAction={handleSend}
            />
        </div>
    );
};

export default App;
