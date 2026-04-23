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

const DRAFT_KEY = 'chat-draft';

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows message box value persistence.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'What does message box persistence mean?',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'It means your typed message is automatically saved as you type. If you refresh the page or navigate away, your draft will be restored when you return.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: bot,
        text: 'Try typing something, then refresh the page or navigate away and come back. Your message will still be there!',
        timestamp: new Date('2025-01-01T10:03:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [messageBoxValue, setMessageBoxValue] = React.useState<string>(() => {
        // Load saved draft on initialization
        const savedDraft = localStorage.getItem(DRAFT_KEY);
        return savedDraft || '';
    });
    const [draftStatus, setDraftStatus] = React.useState<string>('');
    const [lastSaved, setLastSaved] = React.useState<Date | null>(null);

    const autoSaveDraft = React.useCallback((value: string) => {
        localStorage.setItem(DRAFT_KEY, value);
        setLastSaved(new Date());

        if (value.length > 0) {
            setDraftStatus(`Draft saved: ${value.length} characters`);
        } else {
            setDraftStatus('Draft cleared');
        }
    }, []);

    const onInputValueChange = (value: string) => {
        setMessageBoxValue(value);
        // Auto-save draft whenever input changes
        autoSaveDraft(value);
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);

        // Clear the draft after sending
        setMessageBoxValue('');
        localStorage.removeItem(DRAFT_KEY);
        setDraftStatus('Message sent - draft cleared');
        setLastSaved(null);

        // Bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                author: bot,
                text: `Message received: "${event.message.text}". Your draft was automatically cleared after sending.`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 500);
    };

    const clearDraft = () => {
        setMessageBoxValue('');
        localStorage.removeItem(DRAFT_KEY);
        setDraftStatus('Draft manually cleared');
        setLastSaved(null);

        const clearMessage: Message = {
            id: Date.now(),
            author: bot,
            text: 'Draft cleared! Your message box is now empty and the saved draft has been removed.',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, clearMessage]);
    };

    const simulatePageRefresh = () => {
        // Simulate what happens on page refresh by showing current localStorage value
        const currentDraft = localStorage.getItem(DRAFT_KEY) || '';
        const refreshMessage: Message = {
            id: Date.now(),
            author: bot,
            text: `Simulated page refresh! Your draft "${currentDraft}" would be restored from localStorage. In a real app, this happens automatically when the page loads.`,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, refreshMessage]);
    };

    const addSampleDraft = () => {
        const sampleText = 'This is a sample draft message that demonstrates persistence...';
        setMessageBoxValue(sampleText);
        autoSaveDraft(sampleText);
    };

    return (
        <div style={{ height: '650px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button
                    onClick={clearDraft}
                    style={{
                        backgroundColor: '#dc3545',
                        color: 'white'
                    }}
                >
                    Clear Draft
                </Button>

                <Button
                    onClick={simulatePageRefresh}
                    style={{
                        backgroundColor: '#17a2b8',
                        color: 'white'
                    }}
                >
                    Simulate Refresh
                </Button>

                <Button
                    onClick={addSampleDraft}
                    style={{
                        backgroundColor: '#28a745',
                        color: 'white'
                    }}
                >
                    Add Sample Draft
                </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div style={{ padding: '8px', backgroundColor: '#f0f8ff', borderRadius: '4px', fontSize: '0.9em' }}>
                    <strong>📝 Draft Status:</strong>
                    <div>{draftStatus || 'No draft activity yet'}</div>
                    <div>Characters: {messageBoxValue.length}</div>
                    {lastSaved && (
                        <div style={{ color: '#666', fontSize: '0.8em' }}>
                            Last saved: {lastSaved.toLocaleTimeString()}
                        </div>
                    )}
                </div>

                <div style={{ padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '0.9em' }}>
                    <strong>💾 localStorage:</strong>
                    <div
                        style={{
                            fontSize: '0.8em',
                            color: '#333',
                            wordBreak: 'break-word',
                            maxHeight: '60px',
                            overflowY: 'auto'
                        }}
                    >
                        {localStorage.getItem(DRAFT_KEY) ? `"${localStorage.getItem(DRAFT_KEY)}"` : 'No draft saved'}
                    </div>
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
                💡 <strong>Try this:</strong> Type something, then refresh the page (F5) or navigate away and return.
                Your message will be restored automatically!
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                inputValue={messageBoxValue}
                onInputValueChange={onInputValueChange}
                onSendMessage={handleSendMessage}
                placeholder="Start typing - your draft will be automatically saved..."
                height={600}
            />
        </div>
    );
};

export default App;
