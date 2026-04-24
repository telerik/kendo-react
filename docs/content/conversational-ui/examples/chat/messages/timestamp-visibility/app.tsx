import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const user: User = {
    id: 1,
    name: 'User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const bot: User = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Hello! Use the button above to toggle timestamp visibility.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'When set to "On Focus", I can click on a message to see its timestamp.',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'When set to "Hidden", timestamps are never visible, providing a cleaner interface.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [timestampVisibility, setTimestampVisibility] = React.useState<'onFocus' | 'hidden'>('onFocus');

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || '',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const toggleTimestampVisibility = () => {
        setTimestampVisibility((prev) => (prev === 'onFocus' ? 'hidden' : 'onFocus'));
    };

    return (
        <div style={{ height: '600px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px' }}>
                <Button onClick={toggleTimestampVisibility} themeColor="primary">
                    Switch to {timestampVisibility === 'onFocus' ? 'Hidden' : 'On Focus'}
                </Button>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                timestampVisibility={timestampVisibility}
                onSendMessage={handleSendMessage}
                placeholder="Type a message..."
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
