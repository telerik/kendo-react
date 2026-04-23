import * as React from 'react';
import { Chat, Message } from '@progress/kendo-react-conversational-ui';

const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const bot = { id: 0 };

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: 'Hello, This is the KendoReact Chat component.'
    }
];

const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);

    const addNewMessage = (event: any) => {
        setMessages([...messages, { ...event.message, text: event.message.text || ' ' }]);
    };

    return (
        <div>
            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={addNewMessage}
                placeholder={'Type a message...'}
                width={400}
                height={600}
            />
        </div>
    );
};

export default App;
