import * as React from 'react';
import {
    Chat,
    ChatMessage,
    ChatMessageProps,
    ChatSendMessageEvent,
    Message
} from '@progress/kendo-react-conversational-ui';

const CustomChatMessage = (props: ChatMessageProps) => <ChatMessage {...props} dateFormat={'t'} />;

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
        suggestedActions: [
            {
                type: 'reply',
                value: 'Oh, really?'
            },
            {
                type: 'reply',
                value: 'Thanks, but this is boring.'
            }
        ],
        timestamp: new Date(),
        text: "Hello, this is a demo bot. I don't do much, but I can count symbols!"
    }
];

const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        let botResponce = Object.assign({}, event.message);
        botResponce.text = countReplayLength(event.message.text);
        botResponce.author = bot;
        setMessages((oldMessage) => [...oldMessage, event.message]);
        setTimeout(() => {
            setMessages((oldMessage) => [...oldMessage, botResponce]);
        }, 1000);
    };

    const countReplayLength = (question) => {
        let length = question.length;
        let answer = question + ' contains exactly ' + length + ' symbols.';
        return answer;
    };

    return (
        <div>
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                placeholder={'Type a message...'}
                width={400}
                height={600}
                className="k-m-auto"
                message={CustomChatMessage}
            />
        </div>
    );
};

export default App;
