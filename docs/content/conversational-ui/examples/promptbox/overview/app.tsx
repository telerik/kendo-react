import * as React from 'react';
import { PromptBox, PromptBoxUploadButton, PromptBoxChangeEvent } from '@progress/kendo-react-conversational-ui';
import './styles.css';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
}

const App = () => {
    const [value, setValue] = React.useState<string>('');
    const [messages] = React.useState<Message[]>([
        { id: 1, text: '', isUser: true },
        { id: 2, text: '', isUser: false },
        { id: 3, text: '', isUser: true },
        { id: 4, text: '', isUser: false }
    ]);
    const [isLastMessageLoading, setIsLastMessageLoading] = React.useState(false);

    const handleValueChange = (event: PromptBoxChangeEvent) => {
        setValue(event.value);
    };

    const handleSend = () => {
        if (value.trim()) {
            setIsLastMessageLoading(true);
            setValue('');

            setTimeout(() => {
                setIsLastMessageLoading(false);
            }, 3000);
        }
    };

    return (
        <div className="promptbox-demo card-container">
            <div className="k-card custom-card !k-flex-row">
                <div className="custom-card-header">
                    <div className="card-actions-container k-pt-4 k-gap-2.5 k-flex-layout k-align-items-center k-flex-col">
                        <div className="custom-card-header-action k-skeleton k-rounded-full"></div>
                        <div className="custom-card-header-action k-skeleton k-rounded-full"></div>
                    </div>
                </div>
                <div className="card-content k-p-8 k-w-full">
                    <div className="chat-container">
                        {messages.map((message, index) => {
                            const isLastMessage = index === messages.length - 1;
                            const showTypingIndicator = isLastMessage && !message.isUser && isLastMessageLoading;

                            return (
                                <div
                                    key={message.id}
                                    className={`chat-message ${message.isUser ? 'user-message' : 'ai-message'}`}
                                >
                                    {!message.isUser && <div className="avatar ai-avatar" />}
                                    <div className="message-bubble">
                                        {showTypingIndicator ? (
                                            <div className="typing-indicator">
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                            </div>
                                        ) : (
                                            <div className="message-text">{message.text}</div>
                                        )}
                                    </div>
                                    {message.isUser && <div className="avatar user-avatar" />}
                                </div>
                            );
                        })}
                    </div>
                    <div className="promptbox-container">
                        <PromptBox
                            mode="auto"
                            placeholder="Type a message"
                            value={value}
                            onChange={handleValueChange}
                            onPromptAction={handleSend}
                            uploadButtonConfig={false}
                            startAffix={(props) => <PromptBoxUploadButton {...props.uploadButtonProps} />}
                            maxTextAreaHeight="300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
