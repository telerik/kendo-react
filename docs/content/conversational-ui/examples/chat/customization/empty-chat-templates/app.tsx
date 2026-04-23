import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message, User } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { emptyTemplates } from './templates';

const bot: User = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('sms');

    const onMessageSend = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, newMessage]);

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                'Thanks for your message! Notice how the empty template disappeared once messages were added.',
                'The empty template provides a welcoming first impression. You can customize it to match your brand!',
                'Each empty template style offers a different user experience. Try clearing messages to see them again.',
                'Empty templates are perfect for guiding users on how to start a conversation.',
                'You can add helpful tips, branding, or call-to-action buttons in your empty template.'
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const botMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: randomResponse,
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    const templateKeys = Object.keys(emptyTemplates);
    const currentTemplate = emptyTemplates[selectedTemplate as keyof typeof emptyTemplates];

    const EmptyTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>No Data Template Selector</h3>
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
                            {emptyTemplates[key as keyof typeof emptyTemplates].name}
                        </Button>
                    ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <Button onClick={clearMessages} themeColor="secondary" size="small" rounded="medium">
                        Clear Messages
                    </Button>
                    <span style={{ fontSize: '12px', color: '#6c757d' }}>
                        Messages: <strong>{messages.length}</strong>
                        {messages.length === 0 && (
                            <span style={{ color: '#28a745', marginLeft: '8px' }}>← Empty template visible</span>
                        )}
                    </span>
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
                onSendMessage={onMessageSend}
                placeholder="Type a message to start chatting..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                noDataTemplate={EmptyTemplate}
            />
        </div>
    );
};

export default App;
