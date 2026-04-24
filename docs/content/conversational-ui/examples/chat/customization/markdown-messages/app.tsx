import * as React from 'react';
import { Chat, ChatSendMessageEvent, ChatMessageTemplateProps, Message } from '@progress/kendo-react-conversational-ui';
import { setOptions } from 'marked';

const MessageTemplate = (props: ChatMessageTemplateProps) => {
    let message = props.item;
    let parser = setOptions({});
    let parsedMessage = parser.parse(message.text);
    let htmlToinsert = { __html: parsedMessage };

    return (
        <div className="k-chat-bubble k-bubble">
            <div className="k-bubble-content">
                <div dangerouslySetInnerHTML={htmlToinsert} />
            </div>
        </div>
    );
};

const user = {
    id: 1,
    name: 'Demo User'
};

const bot = {
    id: 0,
    name: 'Markdown Bot'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! I can render **Markdown** content. Try typing some markdown syntax, or check out this example:'
    },
    {
        id: 2,
        author: bot,
        text: '# Welcome to Markdown Chat\n\nHere are some **formatting** examples:\n\n## Text Formatting\n- *Italic text*\n- **Bold text**\n- ***Bold and italic***\n- ~~Strikethrough~~\n\n## Lists\n1. First item\n2. Second item\n3. Third item\n\n## Code\nInline code: `const hello = "world";`\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\n## Links\n[KendoReact](https://www.telerik.com/kendo-react-ui)\n\n> This is a blockquote with *markdown* support!'
    },
    {
        id: 3,
        author: bot,
        text: 'Try typing your own markdown to see it rendered in real-time.'
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
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                messageTemplate={MessageTemplate}
                messageWidthMode="full"
                placeholder={'Type a message...'}
            />
        </div>
    );
};

export default App;
