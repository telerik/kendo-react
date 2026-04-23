import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const user: User = {
    id: 1,
    name: 'John Doe',
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
        text: 'Hello! Use the button above to toggle username visibility.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'The usernames help identify message authors at a glance.',
        timestamp: new Date('2025-01-01T10:01:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [showUsername, setShowUsername] = React.useState<boolean>(true);

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || '',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div style={{ height: '600px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px' }}>
                <Button onClick={() => setShowUsername(!showUsername)} themeColor="primary">
                    {showUsername ? 'Hide' : 'Show'} Usernames
                </Button>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                showUsername={showUsername}
                onSendMessage={handleSendMessage}
                placeholder="Type a message..."
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
