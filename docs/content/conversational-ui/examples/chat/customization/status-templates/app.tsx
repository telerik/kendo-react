import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { statusTemplates } from './templates';

const bot: User = {
    id: 0,
    name: 'Status Bot',
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
            text: 'Welcome! This demo shows different status templates for messages.',
            timestamp: new Date(),
            status: 'received'
        },
        {
            id: 2,
            author: user,
            text: '🖱️ CLICK ME! This message has been sent',
            timestamp: new Date(),
            status: 'sent'
        },
        {
            id: 3,
            author: user,
            text: '🖱️ CLICK ME! This message was delivered',
            timestamp: new Date(),
            status: 'delivered'
        },
        {
            id: 4,
            author: user,
            text: '🖱️ CLICK ME! This message has been read',
            timestamp: new Date(),
            status: 'read'
        }
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            timestamp: new Date(),
            text: event.message.text || ' ',
            status: 'sent'
        };

        setMessages((prev) => [...prev, newMessage]);

        // Simulate status progression
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg))
            );
        }, 1000);

        setTimeout(() => {
            setMessages((prev) => prev.map((msg) => (msg.id === newMessage.id ? { ...msg, status: 'read' } : msg)));
        }, 2500);

        // Bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                timestamp: new Date(),
                text: `Message received with ${selectedTemplate} status template! Watch the status change.`
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 3000);
    };

    const templateKeys = Object.keys(statusTemplates);
    const currentTemplate = statusTemplates[selectedTemplate as keyof typeof statusTemplates];

    const StatusTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Status Template Selector</h3>
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
                            {statusTemplates[key as keyof typeof statusTemplates].name}
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

            {/* Prominent instruction banner */}
            <div
                style={{
                    marginBottom: '20px',
                    padding: '16px 20px',
                    backgroundColor: '#fff3cd',
                    border: '2px solid #ffc107',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)',
                    animation: 'fadeInBounce 1s ease-out'
                }}
            >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>👆 💬</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#856404', marginBottom: '4px' }}>
                    CLICK ON ANY MESSAGE BUBBLE BELOW
                </div>
                <div style={{ fontSize: '14px', color: '#856404' }}>
                    Click on message bubbles to reveal their delivery status!
                </div>
            </div>

            <style>
                {`
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }

                    @keyframes fadeInBounce {
                        0% { opacity: 0; transform: translateY(-20px); }
                        60% { opacity: 1; transform: translateY(5px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>

            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={addNewMessage}
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                statusTemplate={StatusTemplate}
            />
        </div>
    );
};

export default App;
