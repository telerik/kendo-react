import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message, User } from '@progress/kendo-react-conversational-ui';

const bot: User = {
    id: 0,
    name: 'bot'
};

const user: User = {
    id: 1,
    name: 'user'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: 'Hello, This is the KendoReact Chat component.'
    }
];

const App = () => {
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
            style={{ maxWidth: '400px' }}
            className="k-m-auto"
            height={600}
        />
    );
};

export default App;
