import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message, User } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { headerTemplates } from './templates';

const bot: User = {
    id: 0,
    name: 'Support Agent',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Customer',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            author: bot,
            text: 'Welcome to our support chat! This demo showcases different header template styles. Try switching between the templates above to see how different headers can enhance the chat experience.',
            timestamp: new Date()
        }
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');

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
                "Thanks for your message! I can see you're testing the header templates.",
                'Each header template provides a different user experience. Which one do you prefer?',
                'The header templates can be customized to match your brand and requirements.',
                'Notice how the status template shows dynamic online/offline indicators.',
                'The business template includes branding elements and action buttons.'
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

    const templateKeys = Object.keys(headerTemplates);
    const currentTemplate = headerTemplates[selectedTemplate as keyof typeof headerTemplates];

    const HeaderTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Header Template Selector</h3>
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
                            {headerTemplates[key as keyof typeof headerTemplates].name}
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
                onSendMessage={onMessageSend}
                placeholder="Type a message to test the header template..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                headerTemplate={HeaderTemplate}
            />
        </div>
    );
};

export default App;
