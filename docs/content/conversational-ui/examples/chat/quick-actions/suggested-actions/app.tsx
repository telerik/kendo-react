import * as React from 'react';
import {
    Chat,
    Message,
    User,
    QuickActionsLayoutMode,
    ChatSendMessageEvent,
    ChatActionExecuteEvent
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const bot: User = {
    id: 0,
    name: 'Demo Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This message contains suggested actions. Try clicking the action buttons below to see how they work.',
        timestamp: new Date('2025-01-01T10:00:00Z'),
        suggestedActions: [
            {
                title: 'Visit Telerik',
                value: 'https://www.telerik.com',
                type: 'openUrl'
            },
            {
                title: 'Call Support',
                value: '555-123-456',
                type: 'call'
            },
            {
                title: 'Custom Action',
                value: 'Custom action triggered!',
                type: 'custom'
            }
        ]
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [quickActionsLayout, setQuickActionsLayout] = React.useState<QuickActionsLayoutMode>('scroll');

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);

        // Bot response explaining what happened
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                author: bot,
                text: `You sent: "${event.message.text}". Notice that suggested actions only appear on the most recent message.`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 500);
    };

    const handleActionExecute = (event: ChatActionExecuteEvent) => {
        const action = event.action;

        if (action.type === 'custom') {
            // Handle custom actions
            const customMessage: Message = {
                id: Date.now(),
                author: user,
                text: action.value,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, customMessage]);

            // Bot response
            setTimeout(() => {
                const botResponse: Message = {
                    id: Date.now() + 1,
                    author: bot,
                    text: 'Custom action executed! Built-in actions (reply, openUrl, call) are handled automatically by the Chat component.',
                    timestamp: new Date()
                };
                setMessages((prev) => [...prev, botResponse]);
            }, 500);
        }
        // Note: Built-in action types (reply, openUrl, call) are handled automatically by the Chat
    };

    const addMessageWithActions = () => {
        const messageWithActions: Message = {
            id: Date.now(),
            author: bot,
            text: "Here's a new message with different suggested actions. Remember, only the latest message shows suggested actions.",
            timestamp: new Date(),
            suggestedActions: [
                {
                    value: 'Great!',
                    type: 'reply'
                },
                {
                    title: 'Documentation',
                    value: 'https://www.telerik.com/kendo-react-ui/components/conversationalui/chat/',
                    type: 'openUrl'
                },
                {
                    title: 'Emergency',
                    value: '911',
                    type: 'call'
                },
                {
                    title: 'Show Alert',
                    value: 'This is a custom action response!',
                    type: 'custom'
                }
            ]
        };
        setMessages((prev) => [...prev, messageWithActions]);
    };

    const layoutOptions = [
        { value: 'scroll', name: 'Scroll', desc: 'Actions scroll horizontally' },
        { value: 'wrap', name: 'Wrap', desc: 'Actions wrap to new rows' },
        { value: 'scrollbuttons', name: 'Scroll Buttons', desc: 'Scroll with navigation buttons' }
    ] as const;

    const currentLayout = layoutOptions.find((opt) => opt.value === quickActionsLayout)!;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Quick Actions Layout</h3>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    {layoutOptions.map((layout) => (
                        <Button
                            key={layout.value}
                            onClick={() => setQuickActionsLayout(layout.value)}
                            selected={quickActionsLayout === layout.value}
                            fillMode={quickActionsLayout === layout.value ? 'solid' : 'outline'}
                            themeColor={quickActionsLayout === layout.value ? 'primary' : 'base'}
                            size="small"
                            rounded="medium"
                        >
                            {layout.name}
                        </Button>
                    ))}
                </div>
                <p
                    style={{
                        margin: '0 0 12px 0',
                        fontSize: '14px',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }}
                >
                    <strong>Current:</strong> {currentLayout.name} - {currentLayout.desc}
                </p>
                <div style={{ marginTop: '12px' }}>
                    <Button onClick={addMessageWithActions} themeColor={'primary'} size="small">
                        Add Message with Actions
                    </Button>
                    <span style={{ marginLeft: '10px', color: '#666', fontSize: '0.85em' }}>
                        💡 Suggested actions only appear on the most recent message
                    </span>
                </div>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={handleSendMessage}
                onActionExecute={handleActionExecute}
                quickActionsLayout={quickActionsLayout}
                placeholder="Type a message or try the suggested actions..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
