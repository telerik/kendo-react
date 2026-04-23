import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message, User } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { messageTemplates } from './templates';
import './styles.css';

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg'
};

const bot: User = {
    id: 0,
    name: 'KendoBot',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/BERGS.jpg'
};

const generateSampleMessage = (text: string, author: User): Message => ({
    author,
    timestamp: new Date(),
    text,
    id: Date.now() + Math.random()
});

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        generateSampleMessage('Hello! Welcome to the message templates demo.', bot),
        generateSampleMessage('This template looks great! How can I customize it further?', user),
        generateSampleMessage(
            'You can modify the template styles, add new elements, or create completely custom layouts.',
            bot
        ),
        generateSampleMessage('Perfect! The templates make it easy to match our brand design.', user)
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages((prevMessages) => [...prevMessages, event.message]);
    };

    const templateKeys = Object.keys(messageTemplates);
    const currentTemplate = messageTemplates[selectedTemplate as keyof typeof messageTemplates];

    const MessageTemplate = currentTemplate.component;

    return (
        <div>
            <div
                style={{
                    marginBottom: '20px',
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #dee2e6'
                }}
            >
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Message Template Selector</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    {templateKeys.map((key) => (
                        <Button
                            key={key}
                            onClick={() => setSelectedTemplate(key)}
                            selected={selectedTemplate === key}
                            fillMode={selectedTemplate === key ? 'solid' : 'outline'}
                            themeColor={selectedTemplate === key ? 'primary' : 'base'}
                            size="small"
                            rounded="medium"
                        >
                            {messageTemplates[key as keyof typeof messageTemplates].name}
                        </Button>
                    ))}
                </div>
                <p
                    style={{
                        margin: '0',
                        fontSize: '14px',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }}
                >
                    <strong>Current:</strong> {currentTemplate.name} - {currentTemplate.desc}
                </p>
            </div>

            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                placeholder="Type a message to test the template..."
                style={{ maxWidth: '400px' }}
                height={600}
                className={`k-m-auto chat-template-${selectedTemplate}`}
                messageTemplate={MessageTemplate}
            />
        </div>
    );
};

export default App;
