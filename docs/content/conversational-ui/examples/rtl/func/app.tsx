import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';

const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const bot = {
    id: 0
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        suggestedActions: [
            {
                type: 'reply',
                value: 'Oh, really?'
            },
            {
                type: 'reply',
                value: 'Thanks, but this is borring.'
            }
        ],
        timestamp: new Date(),
        text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!'
    }
];

const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        let botResponce = Object.assign({}, event.message);
        botResponce.text = countReplayLength(event.message.text);
        botResponce.author = bot;
        setMessages([...messages, { ...event.message, text: event.message.text || ' ' }]);
        setTimeout(function () {
            setMessages([...messages, botResponce]);
        }, 1000);
    };

    const countReplayLength = (question) => {
        let length = question.length;
        let answer = question + ' contains exactly ' + length + ' symbols.';
        return answer;
    };

    return (
        <div dir="rtl">
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                width={400}
                placeholder={'Type a message...'}
                height={600}
            />
        </div>
    );
};

export default App;
