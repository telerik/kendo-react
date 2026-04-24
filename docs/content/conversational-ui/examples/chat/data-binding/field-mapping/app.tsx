import * as React from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';

// Custom data structure that doesn't match the default Message interface

const bot = {
    id: 0,
    name: 'Support Agent',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg'
};
const user = {
    id: 1,
    name: 'Customer',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg'
};

// Sample data with custom field names including threaded replies
const customChatData = [
    {
        messageId: 1,
        content: 'Hello! Welcome to our support chat. How can I assist you today with your account or services?',
        senderId: 0,
        senderName: 'Support Agent',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg',
        messageStatus: 'read',
        createdAt: '2025-01-15T10:00:00Z'
    },
    {
        messageId: 2,
        content: 'Hi! I have a question about my recent order and need help with tracking information.',
        senderId: 1,
        senderName: 'Customer',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg',
        messageStatus: 'read',
        createdAt: '2025-01-15T10:01:00Z'
    },
    {
        messageId: 3,
        content:
            "I'd be happy to help you with your order tracking. Could you please provide your order number so I can look it up in our system?",
        senderId: 0,
        senderName: 'Support Agent',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg',
        messageStatus: 'read',
        createdAt: '2025-01-15T10:02:00Z',
        respondingToMessageId: 2
    },
    {
        messageId: 4,
        content:
            "Sure! My order number is #ORD-2025-789456. I placed it last week and haven't received any shipping updates since then.",
        senderId: 1,
        senderName: 'Customer',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg',
        messageStatus: 'delivered',
        createdAt: '2025-01-15T10:03:00Z',
        respondingToMessageId: 3
    },
    {
        messageId: 5,
        content:
            'Thank you for providing your order number! I can see your order in our system. It was shipped yesterday and is currently in transit. You should receive it within 2-3 business days.',
        senderId: 0,
        senderName: 'Support Agent',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg',
        messageStatus: 'read',
        createdAt: '2025-01-15T10:04:00Z',
        respondingToMessageId: 4
    },
    {
        messageId: 6,
        content:
            "That's great news! Thank you so much for checking on that. Will I receive a tracking number to monitor the shipment progress?",
        senderId: 1,
        senderName: 'Customer',
        senderAvatar: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg',
        messageStatus: 'delivered',
        createdAt: '2025-01-15T10:05:00Z',
        respondingToMessageId: 5
    }
];
const App = () => {
    const [messages, setMessages] = React.useState(customChatData);
    const handleSendMessage = (event) => {
        const newMessage = {
            messageId: Date.now(),
            content: event.message.text || '',
            senderId: user.id,
            senderName: user.name || 'Customer',
            senderAvatar: user.avatarUrl || '',
            messageStatus: 'sent',
            createdAt: new Date().toISOString(),
            respondingToMessageId: event.message.replyToId
        };
        setMessages((prev) => [...prev, newMessage]);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                messageId: Date.now() + 1,
                content:
                    "Thank you for your message. I'm processing your request and will respond with detailed information shortly.",
                senderId: bot.id,
                senderName: bot.name || 'Support Agent',
                senderAvatar: bot.avatarUrl || '',
                messageStatus: 'sent',
                createdAt: new Date().toISOString()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };
    return (
        <div
            style={{
                height: '650px',
                width: '100%'
            }}
        >
            <div
                style={{
                    marginBottom: '10px',
                    padding: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '6px',
                    fontSize: '14px'
                }}
            >
                <strong>Field Mapping Example:</strong> This demo shows how to use custom data structures with the Chat
                component. The data uses custom field names like <code>messageId</code>, <code>content</code>,{' '}
                <code>senderId</code>, and <code>respondingToMessageId</code>, which are mapped to the Chat's expected
                properties using field mapping configuration.
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={handleSendMessage}
                placeholder="Type your message here..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                // Field mapping configuration
                idField="messageId"
                textField="content"
                authorIdField="senderId"
                authorNameField="senderName"
                authorImageUrlField="senderAvatar"
                statusField="messageStatus"
                replyToIdField="respondingToMessageId"
            />
        </div>
    );
};
export default App;
