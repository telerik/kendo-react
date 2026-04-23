import * as React from 'react';
import {
    AffixTemplateProps,
    PromptBox,
    PromptBoxActionButton,
    PromptBoxSpeechToTextButton,
    PromptBoxChangeEvent
} from '@progress/kendo-react-conversational-ui';
import './styles.css';

const StartAffix = (props: AffixTemplateProps) => (
    <PromptBoxActionButton {...props.actionButtonProps} fillMode="solid" themeColor="primary" />
);

const EndAffix = (props: AffixTemplateProps) => <PromptBoxSpeechToTextButton {...props.speechToTextButtonProps} />;

const App = () => {
    const [promptValue, setPromptValue] = React.useState<string>('Explain the principles of sustainable architecture');

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setPromptValue(event.value);
    };

    const handleSend = () => {
        setPromptValue('');
    };

    return (
        <div className="demo-container">
            <PromptBox
                value={promptValue}
                onChange={handleValueChange}
                mode="single"
                placeholder="Type your message..."
                onPromptAction={handleSend}
                speechToTextButtonConfig={false}
                uploadButtonConfig={true}
                actionButtonConfig={false}
                startAffix={StartAffix}
                endAffix={EndAffix}
            />
        </div>
    );
};

export default App;
