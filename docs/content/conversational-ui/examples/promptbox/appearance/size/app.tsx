import * as React from 'react';
import { PromptBox, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import './styles.css';

const App = () => {
    const [smallValue, setSmallValue] = React.useState<string>('');
    const [mediumValue, setMediumValue] = React.useState<string>('');
    const [largeValue, setLargeValue] = React.useState<string>('');

    const handleSmallValueChange = (event: PromptBoxChangeEvent) => {
        setSmallValue(event.value);
    };

    const handleMediumValueChange = (event: PromptBoxChangeEvent) => {
        setMediumValue(event.value);
    };

    const handleLargeValueChange = (event: PromptBoxChangeEvent) => {
        setLargeValue(event.value);
    };

    return (
        <div className="example">
            <PromptBox
                value={smallValue}
                onChange={handleSmallValueChange}
                mode="single"
                placeholder="Small size..."
                uploadButtonConfig={{ size: 'small' }}
                speechToTextButtonConfig={{ size: 'small' }}
                actionButtonConfig={{ size: 'small', themeColor: 'primary' }}
            />

            <PromptBox
                value={mediumValue}
                onChange={handleMediumValueChange}
                mode="single"
                placeholder="Medium size..."
                uploadButtonConfig={{ size: 'medium' }}
                speechToTextButtonConfig={{ size: 'medium' }}
                actionButtonConfig={{ size: 'medium', themeColor: 'primary' }}
            />

            <PromptBox
                value={largeValue}
                onChange={handleLargeValueChange}
                mode="single"
                placeholder="Large size..."
                uploadButtonConfig={{ size: 'large' }}
                speechToTextButtonConfig={{ size: 'large' }}
                actionButtonConfig={{ size: 'large', themeColor: 'primary' }}
            />
        </div>
    );
};

export default App;
