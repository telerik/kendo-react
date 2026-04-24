import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatResendMessageEvent
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { Checkbox } from '@progress/kendo-react-inputs';
import { checkIcon } from '@progress/kendo-svg-icons';

const bot: User = {
    id: 0,
    name: 'Demo Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows how to handle failed message delivery.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'What happens when a message fails to send?',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'Failed messages display with a visual indicator. You can click the retry button to resend them.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [simulateFailure, setSimulateFailure] = React.useState(false);

    const addTypingIndicator = (author: User) => {
        const typingMessage: Message = {
            id: Date.now() + Math.random(),
            author: author,
            typing: true,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, typingMessage]);
    };

    const removeTypingIndicator = () => {
        setMessages((prev) => prev.filter((msg) => !msg.typing));
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const userMessage: Message = {
            ...event.message,
            text: event.message.text || '',
            id: Date.now(),
            author: user,
            timestamp: new Date(),
            isFailed: simulateFailure
        };

        setMessages((prev) => [...prev, userMessage]);

        if (!simulateFailure) {
            // Show bot typing indicator and send response
            setTimeout(() => {
                addTypingIndicator(bot);
            }, 300);

            setTimeout(() => {
                removeTypingIndicator();
                const botResponse: Message = {
                    id: Date.now(),
                    author: bot,
                    text: `Message received successfully: "${event.message.text}"`,
                    timestamp: new Date()
                };
                setMessages((prev) => [...prev, botResponse]);
            }, 1500);
        } else {
            // Show failure notification
            setTimeout(() => {
                const botResponse: Message = {
                    id: Date.now(),
                    author: bot,
                    text: '⚠️ Your message failed to send. You can retry by clicking the resend button.',
                    timestamp: new Date()
                };
                setMessages((prev) => [...prev, botResponse]);
            }, 500);
        }
    };

    const handleResendMessage = (event: ChatResendMessageEvent) => {
        // Remove the failed message
        setMessages((prev) => prev.filter((msg) => msg.id !== event.message.id));

        // Add the resent message with success status
        const resentMessage: Message = {
            ...event.message,
            id: Date.now(),
            author: user,
            timestamp: new Date(),
            isFailed: false,
            status: {
                text: 'Delivered',
                svgIcon: checkIcon
            }
        };
        setMessages((prev) => [...prev, resentMessage]);

        // Show bot typing indicator and send confirmation
        setTimeout(() => {
            addTypingIndicator(bot);
        }, 300);

        setTimeout(() => {
            removeTypingIndicator();
            const botResponse: Message = {
                id: Date.now(),
                author: bot,
                text: `✓ Message successfully resent: "${event.message.text}"`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1500);
    };

    const addFailedMessage = () => {
        const failedMessage: Message = {
            id: Date.now(),
            author: user,
            text: 'This is a simulated failed message',
            timestamp: new Date(),
            isFailed: true
        };
        setMessages((prev) => [...prev, failedMessage]);

        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now(),
                author: bot,
                text: '⚠️ A failed message was added. Click the retry button to resend it.',
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 500);
    };

    return (
        <div style={{ height: '680px', maxWidth: '420px', margin: '0 auto' }}>
            <div
                style={{
                    marginBottom: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '6px'
                }}
            >
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Demo Controls</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Button onClick={addFailedMessage} themeColor="primary">
                        Add Failed Message
                    </Button>
                    <Checkbox
                        label="Simulate message failure"
                        value={simulateFailure}
                        onChange={(e) => setSimulateFailure(e.value ?? false)}
                    />
                </div>
            </div>
            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={handleSendMessage}
                onResendMessage={handleResendMessage}
                placeholder="Type a message..."
                height={540}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default App;
