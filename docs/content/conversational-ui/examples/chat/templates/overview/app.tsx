import * as React from 'react';
import { Chat, ChatSendMessageEvent, ChatMessageTemplateProps, Message } from '@progress/kendo-react-conversational-ui';

const MessageTemplate = (props: ChatMessageTemplateProps) => {
    return (
        <div className="k-chat-bubble">
            <div>The message text is {props.item.text}</div>
        </div>
    );
};

const user = {
    id: 1,
    name: 'Jane',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([]);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages([...messages, { ...event.message, text: event.message.text || ' ' }]);
    };

    return (
        <div>
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                width={400}
                height={600}
                className="k-m-auto"
                messageTemplate={MessageTemplate}
                placeholder={'Type a message...'}
            />
        </div>
    );
};

export default App;
