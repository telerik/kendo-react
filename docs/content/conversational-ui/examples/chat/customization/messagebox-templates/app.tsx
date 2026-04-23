import * as React from 'react';
import { Chat, Message, User } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { messageBoxTemplates, EnhancedMessageBoxProps } from './templates';

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

const botResponses = [
    'Message received via enhanced input! The custom interface makes chatting more interactive.',
    'Great! The action buttons provide additional functionality beyond basic text input.',
    'Perfect! This shows how messageBox can completely transform the chat experience.',
    'Excellent! The enhanced input with attachment and voice buttons is much more engaging.',
    'The messageBox prop gives you complete control over the input area design and functionality.'
];

const simulateBotResponse = (setMessages: React.Dispatch<React.SetStateAction<Message[]>>) => {
    setTimeout(() => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                author: bot,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                timestamp: new Date()
            }
        ]);
    }, 800);
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: '1',
            author: bot,
            text: 'Welcome! This demo shows a custom messageBox with enhanced input features including attachment and voice buttons.',
            timestamp: new Date()
        }
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('enhanced');

    const handleSend = React.useCallback((text: string) => {
        if (!text.trim()) {
            return;
        }
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                author: user,
                text,
                timestamp: new Date()
            }
        ]);
        simulateBotResponse(setMessages);
    }, []);

    const templateKeys = Object.keys(messageBoxTemplates);
    const currentTemplate = messageBoxTemplates[selectedTemplate as keyof typeof messageBoxTemplates];
    const MessageBoxTemplate = currentTemplate.component;

    const messageBox = React.useMemo(() => {
        if (!MessageBoxTemplate) {
            return undefined;
        }
        const ClosureBox = (chatProps: EnhancedMessageBoxProps) => (
            <MessageBoxTemplate
                {...chatProps}
                onSendMessage={handleSend}
            />
        );
        return ClosureBox;
    }, [MessageBoxTemplate, handleSend]);

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>MessageBox Template Configurator</h3>
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
                            {messageBoxTemplates[key as keyof typeof messageBoxTemplates].name}
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
                placeholder="Type a message to test the messageBox template..."
                width={400}
                height={600}
                className="k-m-auto"
                messageBox={messageBox}
            />
        </div>
    );
};

export default App;
