import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { contentTemplates } from './templates';

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const bot: User = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const generateSampleMessage = (message: Partial<Message>, author: User): Message => ({
    author,
    timestamp: new Date(),
    id: Date.now() + Math.random(),
    ...message
});

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        generateSampleMessage(
            {
                text: 'Hello! I need help with my recent order. Can you check the status?'
            },
            user
        ),
        generateSampleMessage(
            {
                text: 'Order Status Update\nYour order #12345 has been shipped\nEstimated delivery: October 31, 2025\nTracking number: 1Z999AA10123456784'
            },
            bot
        ),
        generateSampleMessage(
            {
                text: 'Great! Here is my **proof of payment** and *shipping address* for reference.',
                files: [
                    {
                        id: 1,
                        name: 'payment-receipt.pdf',
                        size: 245760,
                        extension: '.pdf'
                    },
                    {
                        id: 2,
                        name: 'shipping-address.txt',
                        size: 1024,
                        extension: '.txt'
                    }
                ]
            },
            user
        ),
        generateSampleMessage(
            {
                text: 'Success! Your payment has been verified and the shipping address is confirmed.'
            },
            bot
        ),
        generateSampleMessage(
            {
                text: 'Warning: Please note that delivery may be delayed due to weather conditions in your area.'
            },
            bot
        )
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const newMessage = generateSampleMessage(
            {
                text: event.message.text,
                files: event.message.files
            },
            user
        );
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const templateKeys = Object.keys(contentTemplates);
    const currentTemplate = contentTemplates[selectedTemplate as keyof typeof contentTemplates];

    const ContentTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Content Template Selector</h3>
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
                            {contentTemplates[key as keyof typeof contentTemplates].name}
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
                messageContentTemplate={ContentTemplate}
                placeholder="Type a message to test the template..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
