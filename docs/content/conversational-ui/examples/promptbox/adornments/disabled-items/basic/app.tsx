import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { starIcon, bookIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>(
        'Describe the impact of artificial intelligence on healthcare'
    );
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    const toggleDisabled = () => {
        setIsDisabled(!isDisabled);
    };

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        console.log('Sent:', promptValue);
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <div className="example-buttons">
                <Button onClick={toggleDisabled}>{isDisabled ? 'Enable' : 'Disable'} PromptBox</Button>
            </div>
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="single"
                disabled={isDisabled}
                placeholder="Type your message..."
                onPromptAction={handleSend}
                startAffix={<Button svgIcon={starIcon} fillMode="flat" rounded="full" title="Add to favorites" />}
                endAffix={<Button svgIcon={bookIcon} fillMode="flat" rounded="full" title="Bookmark prompt" />}
            />
        </div>
    );
};

export default App;
