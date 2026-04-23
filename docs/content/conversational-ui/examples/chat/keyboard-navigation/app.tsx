import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'User'
};

const bot = {
    id: 0,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png',
    avatarAltText: 'Bot'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! Use Tab to navigate, arrow keys to move between items, and Enter to select quick actions.',
        timestamp: new Date()
    },
    {
        id: 2,
        author: bot,
        text: 'Try the quick actions below:',
        suggestedActions: [
            {
                type: 'reply',
                value: 'Option 1'
            },
            {
                type: 'reply',
                value: 'Option 2'
            },
            {
                type: 'reply',
                value: 'Option 3'
            }
        ],
        timestamp: new Date()
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const userMessage: Message = {
            ...event.message,
            text: event.message.text || ' ',
            id: Date.now(),
            author: user,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, userMessage]);

        // Bot responds
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                author: bot,
                text: 'Message received! Use Up/Down arrows to navigate messages.',
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 500);
    };

    return (
        <Chat
            authorId={user.id}
            messages={messages}
            onSendMessage={addNewMessage}
            placeholder="Type a message and press Enter..."
            style={{ maxWidth: '400px' }}
            height={600}
            className="k-m-auto"
        />
    );
};

export default App;
