import * as React from 'react';
import { Chat, ChatSendMessageEvent, ChatMessageTemplateProps, Message } from '@progress/kendo-react-conversational-ui';
import { setOptions } from 'marked';

const MessageTemplate = (props: ChatMessageTemplateProps) => {
    let message = props.item;
    let parser = setOptions({});
    let parsedMessage = parser.parse(message.text);
    let htmlToinsert = { __html: parsedMessage };
    return (
        <div className="k-chat-bubble">
            <div dangerouslySetInnerHTML={htmlToinsert} />
        </div>
    );
};

const user = {
    id: 1
};

const bot = {
    id: 0
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Type in some _Markdown_ to see it **rendered** here',
        timestamp: new Date()
    }
];

const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);
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
