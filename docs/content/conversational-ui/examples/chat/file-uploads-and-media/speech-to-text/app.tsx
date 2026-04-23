import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message, User } from '@progress/kendo-react-conversational-ui';

const user: User = {
    id: 1,
    name: 'User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI User'
};

const bot: User = {
    id: 0,
    name: 'Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png',
    avatarAltText: 'KendoReact Conversational UI Bot'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: "Hello, I am a demo bot that can't do much, but I can count symbols. Say something or type your message to try it out."
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
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Bot responds with character count
        setTimeout(() => {
            const messageText = userMessage.text || '';
            const charCount = messageText.length;
            const botResponse: Message = {
                id: Date.now() + 1,
                author: bot,
                text: `Your message has ${charCount} character${charCount !== 1 ? 's' : ''}.`,
                timestamp: new Date()
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        }, 500);
    };

    return (
        <Chat
            authorId={user.id}
            messages={messages}
            onSendMessage={addNewMessage}
            style={{ maxWidth: '400px' }}
            height={600}
            className="k-m-auto"
            placeholder="Press the speech-to-text button to dictate message"
            speechToTextConfig={{
                themeColor: 'primary',
                lang: 'en-US',
                onStart: () => console.log('Speech recognition started'),
                onEnd: () => console.log('Speech recognition ended')
            }}
        />
    );
};

export default App;
