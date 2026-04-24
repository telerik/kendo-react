import * as React from 'react';
import {
    Chat,
    ChatSendMessageEvent,
    Message,
    User,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const bot: User = {
    id: 0,
    name: 'bot'
};

const user: User = {
    id: 1,
    name: 'user',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png',
    avatarAltText: 'KendoReact Conversational UI Avatar'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: user,
        timestamp: new Date(),
        text: 'Placeholder Message'
    },
    {
        id: 2,
        author: bot,
        timestamp: new Date(),
        text: 'Ashley Johnson, Portland'
    }
];

const MessageTemplate = (props: ChatMessageTemplateProps) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const copyToClipboard = () => {
        if (props.item.text) {
            navigator.clipboard.writeText(props.item.text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <div>
            <div className="k-chat-bubble k-bubble">
                <div className="k-bubble-content">
                    <span className="k-chat-bubble-text">{props.item.text}</span>
                </div>
            </div>

            <div className="message-copy-button">
                <Button
                    className={`copy-text-link${isCopied ? ' copied' : ''}`}
                    fillMode="clear"
                    size="small"
                    onClick={copyToClipboard}
                >
                    {isCopied ? 'Text Copied' : 'Copy'}
                </Button>
            </div>
        </div>
    );
};

const PlaceholderMessageTemplate = (props: ChatMessageTemplateProps) => {
    return (
        <div>
            <div className="k-chat-bubble k-bubble k-bubble-placeholder">
                <div className="k-bubble-content">
                    <span className="k-chat-bubble-text">{props.item.text}</span>
                </div>
            </div>
        </div>
    );
};

export const ChatSkeleton = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages([
            ...messages,
            { ...event.message, text: event.message.text || ' ', id: Date.now().toString(), author: user }
        ]);
    };

    return (
        <Chat
            messages={messages}
            authorId={user.id}
            onSendMessage={addNewMessage}
            placeholder={'Type a message...'}
            showUsername={false}
            receiverMessageSettings={{ messageTemplate: MessageTemplate }}
            authorMessageSettings={{ messageTemplate: PlaceholderMessageTemplate }}
            messageBoxSettings={{ maxTextAreaHeight: '50', rows: 1 }}
            className="chat-skeleton"
            height={350}
            width={350}
        />
    );
};
