import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { timestampTemplates } from './templates';

const bot: User = {
    id: 0,
    name: 'Time Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            author: bot,
            text: 'Welcome! This demo shows different timestamp templates.',
            timestamp: new Date(Date.now() - 5 * 60 * 1000) // 5 minutes ago
        },
        {
            id: 2,
            author: user,
            text: 'This message was sent a few minutes ago',
            timestamp: new Date(Date.now() - 3 * 60 * 1000) // 3 minutes ago
        },
        {
            id: 3,
            author: bot,
            text: 'Here is a more recent message to show the time difference',
            timestamp: new Date(Date.now() - 1 * 60 * 1000) // 1 minute ago
        },
        {
            id: 4,
            author: user,
            text: 'And this is the most recent one',
            timestamp: new Date() // Now
        }
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            timestamp: new Date(),
            text: event.message.text || ' '
        };

        setMessages((prev) => [...prev, newMessage]);

        // Bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                timestamp: new Date(),
                text: `Message received! You're using the ${selectedTemplate} timestamp template.`
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const templateKeys = Object.keys(timestampTemplates);
    const currentTemplate = timestampTemplates[selectedTemplate as keyof typeof timestampTemplates];

    const TimestampTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Timestamp Template Selector</h3>
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
                            {timestampTemplates[key as keyof typeof timestampTemplates].name}
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
                {selectedTemplate === 'interactive' && (
                    <p
                        style={{
                            margin: '8px 0 0 0',
                            fontSize: '12px',
                            color: '#0066cc',
                            fontWeight: 'bold'
                        }}
                    >
                        💡 Click on the colored timestamps in the chat to toggle between relative and absolute time
                        formats
                    </p>
                )}
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={addNewMessage}
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                timestampTemplate={TimestampTemplate}
            />
        </div>
    );
};

export default App;
