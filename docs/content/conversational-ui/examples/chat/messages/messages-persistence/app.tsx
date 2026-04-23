import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const bot: User = {
    id: 0,
    name: 'Demo Bot',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: 'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg'
};

const MESSAGES_KEY = 'chat-messages';

const defaultMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows messages persistence across browser sessions.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'How does messages persistence work?',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'Your entire conversation history is automatically saved to localStorage. When you refresh the page or return later, all messages are restored.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: bot,
        text: 'Try sending some messages, then refresh the page (F5). Your conversation will continue from where you left off!',
        timestamp: new Date('2025-01-01T10:03:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(() => {
        // Load saved messages on initialization
        const savedMessages = localStorage.getItem(MESSAGES_KEY);
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                // Convert timestamp strings back to Date objects
                return parsed.map((msg: any) => ({
                    ...msg,
                    timestamp: new Date(msg.timestamp)
                }));
            } catch (error) {
                console.error('Failed to parse saved messages:', error);
                return defaultMessages;
            }
        }
        return defaultMessages;
    });

    const [persistenceStatus, setPersistenceStatus] = React.useState<string>('');
    const [lastSaved, setLastSaved] = React.useState<Date | null>(null);

    const saveMessages = React.useCallback((messagesToSave: Message[]) => {
        try {
            localStorage.setItem(MESSAGES_KEY, JSON.stringify(messagesToSave));
            setLastSaved(new Date());
            setPersistenceStatus(`${messagesToSave.length} messages saved to localStorage`);
        } catch (error) {
            console.error('Failed to save messages:', error);
            setPersistenceStatus('Failed to save messages');
        }
    }, []);

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        saveMessages(updatedMessages);

        // Bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                author: bot,
                text: `Message received and saved: "${event.message.text}". This conversation is now persisted in localStorage.`,
                timestamp: new Date()
            };
            const finalMessages = [...updatedMessages, botResponse];
            setMessages(finalMessages);
            saveMessages(finalMessages);
        }, 500);
    };

    const clearConversation = () => {
        setMessages(defaultMessages);
        saveMessages(defaultMessages);
        setPersistenceStatus('Conversation reset to default messages');
    };

    const addSampleMessages = () => {
        const sampleMessages: Message[] = [
            {
                id: Date.now(),
                author: user,
                text: 'This is a sample message to demonstrate persistence.',
                timestamp: new Date()
            },
            {
                id: Date.now() + 1,
                author: bot,
                text: 'This message will be saved and restored even after page refresh!',
                timestamp: new Date()
            }
        ];

        const updatedMessages = [...messages, ...sampleMessages];
        setMessages(updatedMessages);
        saveMessages(updatedMessages);
    };

    const simulatePageLoad = () => {
        // Simulate what happens on page load by showing current localStorage value
        const savedData = localStorage.getItem(MESSAGES_KEY);
        if (savedData) {
            const messageCount = JSON.parse(savedData).length;
            const loadMessage: Message = {
                id: Date.now(),
                author: bot,
                text: `Simulated page load! Found ${messageCount} saved messages in localStorage. In a real app, these would be automatically restored when the page loads.`,
                timestamp: new Date()
            };
            const updatedMessages = [...messages, loadMessage];
            setMessages(updatedMessages);
            saveMessages(updatedMessages);
        }
    };

    const getStorageInfo = () => {
        const savedData = localStorage.getItem(MESSAGES_KEY);
        if (!savedData) return { count: 0, size: '0 bytes' };

        const messageCount = JSON.parse(savedData).length;
        const sizeInBytes = new Blob([savedData]).size;
        const sizeFormatted = sizeInBytes > 1024 ? `${(sizeInBytes / 1024).toFixed(1)} KB` : `${sizeInBytes} bytes`;

        return { count: messageCount, size: sizeFormatted };
    };

    const storageInfo = getStorageInfo();

    return (
        <div style={{ height: '650px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button onClick={clearConversation} themeColor="error" size="small">
                    Reset Conversation
                </Button>

                <Button onClick={simulatePageLoad} themeColor="info" size="small">
                    Simulate Page Load
                </Button>

                <Button onClick={addSampleMessages} themeColor="success" size="small">
                    Add Sample Messages
                </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', backgroundColor: '#f0f8ff', borderRadius: '4px', fontSize: '0.9em' }}>
                    <strong>💬 Messages Status:</strong>
                    <div>{persistenceStatus || 'No persistence activity yet'}</div>
                    <div>Current count: {messages.length}</div>
                    {lastSaved && (
                        <div style={{ color: '#666', fontSize: '0.8em' }}>
                            Last saved: {lastSaved.toLocaleTimeString()}
                        </div>
                    )}
                </div>

                <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '0.9em' }}>
                    <strong>💾 localStorage:</strong>
                    <div style={{ fontSize: '0.8em', color: '#333' }}>Saved messages: {storageInfo.count}</div>
                    <div style={{ fontSize: '0.8em', color: '#333' }}>Storage size: {storageInfo.size}</div>
                </div>
            </div>

            <div
                style={{
                    marginBottom: '10px',
                    padding: '8px',
                    backgroundColor: '#fff3cd',
                    borderRadius: '4px',
                    fontSize: '0.9em'
                }}
            >
                💡 <strong>Try this:</strong> Send some messages, then refresh the page (F5) or close and reopen the
                browser. Your entire conversation will be restored!
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                onSendMessage={handleSendMessage}
                placeholder="Send a message - your conversation will be automatically saved..."
            />
        </div>
    );
};

export default App;
