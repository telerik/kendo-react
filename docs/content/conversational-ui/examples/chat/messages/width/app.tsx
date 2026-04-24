import * as React from 'react';
import { Chat, Message, User, MessageWidthMode, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const bot: User = {
    id: 0,
    name: 'Demo Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows the messageWidthMode prop.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'The messageWidthMode prop controls how wide messages appear in the chat.',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'Standard mode (default): Messages have a standard width for compact display, similar to typical chat applications.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: user,
        text: 'Full mode: Messages occupy the full width of the chat container, which is useful for AI conversations or when you want to display more content.',
        timestamp: new Date('2025-01-01T10:03:00Z')
    },
    {
        id: 5,
        author: bot,
        text: 'Switch between the modes using the toggle button below to see the difference in message layout and appearance.',
        timestamp: new Date('2025-01-01T10:04:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [messageWidthMode, setMessageWidthMode] = React.useState<MessageWidthMode>('standard');

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const toggleWidthMode = () => {
        const newMode = messageWidthMode === 'standard' ? 'full' : 'standard';
        setMessageWidthMode(newMode);

        const modeMessage: Message = {
            id: Date.now(),
            author: bot,
            text: `Message width mode changed to: ${newMode}. Notice how the message width has changed!`,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, modeMessage]);
    };

    return (
        <div style={{ height: '650px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px' }}>
                <Button onClick={toggleWidthMode} themeColor={'primary'}>
                    Switch to {messageWidthMode === 'standard' ? 'Full' : 'Standard'} Width
                </Button>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                messageWidthMode={messageWidthMode}
                onSendMessage={handleSendMessage}
                placeholder={`Type in ${messageWidthMode} width mode...`}
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
