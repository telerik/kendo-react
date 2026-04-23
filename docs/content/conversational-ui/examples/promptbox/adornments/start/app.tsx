import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { globeIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('What is machine learning?');

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const setShortText = () => {
        setPromptValue('Explain quantum computing');
    };

    const setLongText = () => {
        setPromptValue(`Provide a detailed analysis of modern cloud computing architectures:

1. Infrastructure Patterns:
   - Compare microservices vs monolithic approaches
   - Evaluate containerization benefits and trade-offs
   - Discuss serverless computing use cases

2. Scalability and Performance:
   - Horizontal vs vertical scaling strategies
   - Load balancing techniques
   - Caching mechanisms for optimization

3. Security Considerations:
   - Identity and access management best practices
   - Data encryption at rest and in transit
   - Compliance requirements and auditing`);
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
                mode="auto"
                maxTextAreaHeight="200"
                placeholder="Type your message..."
                onPromptAction={handleSend}
                uploadButtonConfig={true}
                startAffix={<Button fillMode="flat" svgIcon={globeIcon} />}
            />
        </div>
    );
};

export default App;
