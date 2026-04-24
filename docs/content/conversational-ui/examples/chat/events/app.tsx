import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatActionExecuteEvent,
    ChatFile,
    FileAction,
    MessageAction
} from '@progress/kendo-react-conversational-ui';
import {
    pinIcon,
    trashIcon,
    copyIcon,
    heartIcon,
    downloadIcon,
    eyeIcon,
    shareIcon,
    undoIcon
} from '@progress/kendo-svg-icons';

const user: User = {
    id: 1,
    name: 'John Doe',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const botUser: User = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const messageToolbarActions = [
    { id: 'pin', label: 'Pin', svgIcon: pinIcon },
    { id: 'copy', label: 'Copy', svgIcon: copyIcon },
    { id: 'like', label: 'Like', svgIcon: heartIcon },
    { id: 'delete', label: 'Delete', svgIcon: trashIcon }
];

const messageContextMenuActions = [
    { id: 'reply', label: 'Reply', svgIcon: undoIcon },
    { id: 'forward', label: 'Forward', svgIcon: shareIcon }
];

const fileActions = [
    { id: 'download', label: 'Download', svgIcon: downloadIcon },
    { id: 'preview', label: 'Preview', svgIcon: eyeIcon },
    { id: 'share', label: 'Share', svgIcon: shareIcon },
    { id: 'remove', label: 'Remove', svgIcon: trashIcon }
];

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            text: 'Here is a message with a file attachment. Click the file dropdown to see file actions (download, preview, share, remove).',
            author: botUser,
            timestamp: new Date(),
            files: [
                {
                    name: 'sample-document.pdf',
                    size: 1024000,
                    type: 'application/pdf'
                }
            ]
        },
        {
            id: 2,
            text: 'This message is pinned! Click the pin icon to unpin it and trigger the onUnpin event.',
            author: user,
            timestamp: new Date(),
            isPinned: true
        }
    ]);

    const [suggestions] = React.useState([
        { id: '1', text: 'How can I help you?', value: 'help' },
        { id: '2', text: 'Show me features', value: 'features' },
        { id: '3', text: 'Contact support', value: 'support' }
    ]);

    const [inputValue, setInputValue] = React.useState('');

    const logEvent = (eventName: string) => {
        setEvents((prevEvents) => [eventName, ...prevEvents]);
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue('');
        logEvent(`onSendMessage(ChatSendMessageEvent): { text: "${event.message.text}" }`);

        // Bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                author: botUser,
                text: `Echo: ${event.message.text}`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const handleSuggestionClick = (suggestion: any) => {
        const suggestionMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, suggestionMessage]);
        logEvent(`onSuggestionClick(ChatSuggestion): { text: "${suggestion.text}", value: "${suggestion.value}" }`);

        // Bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                author: botUser,
                text: `You selected: ${suggestion.text}`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 500);
    };

    const handleInputValueChange = (value: string) => {
        setInputValue(value);
        logEvent(`onInputValueChange(string): { value: "${value}" }`);
    };

    const handleActionExecute = (event: ChatActionExecuteEvent) => {
        logEvent(
            `onActionExecute(ChatActionExecuteEvent): { type: "${event.action.type}", value: "${event.action.value}" }`
        );
    };

    const handleToolbarAction = (action: MessageAction, event: React.SyntheticEvent, target: Message) => {
        logEvent(
            `onToolbarAction(MessageAction, SyntheticEvent, Message): { action: "${action.id}", messageId: ${target.id} }`
        );

        if (action.id === 'delete') {
            setMessages((prev) => prev.map((msg) => (msg.id === target.id ? { ...msg, isDeleted: true } : msg)));
        } else if (action.id === 'pin') {
            setMessages((prev) => prev.map((msg) => (msg.id === target.id ? { ...msg, isPinned: true } : msg)));
        }
    };

    const handleContextMenuAction = (action: MessageAction, event: React.SyntheticEvent, target: Message) => {
        logEvent(
            `onContextMenuAction(MessageAction, SyntheticEvent, Message): { action: "${action.id}", messageId: ${target.id} }`
        );
    };

    const handleUnpin = (message: Message) => {
        logEvent(`onUnpin(Message): { messageId: ${message.id} }`);

        setMessages((prev) => prev.map((msg) => (msg.id === message.id ? { ...msg, isPinned: false } : msg)));
    };

    const handleFileAction = (action: FileAction, event: React.SyntheticEvent, file: ChatFile) => {
        logEvent(
            `onFileAction(FileAction, SyntheticEvent, ChatFile): { action: "${action.id}", fileName: "${file.name}" }`
        );
    };

    const handleDownload = (files: ChatFile[], message: Message) => {
        const fileNames = files.map((f) => f.name).join(', ');
        logEvent(`onDownload(ChatFile[], Message): { fileNames: "${fileNames}", messageId: ${message.id} }`);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', height: '600px' }}>
            <Chat
                messages={messages}
                authorId={user.id}
                inputValue={inputValue}
                suggestions={suggestions}
                messageToolbarActions={messageToolbarActions}
                messageContextMenuActions={messageContextMenuActions}
                fileActions={fileActions}
                uploadConfig={{
                    multiple: true,
                    accept: '.pdf,.doc,.docx,.jpg,.png,.gif'
                }}
                onSendMessage={handleSendMessage}
                onSuggestionClick={handleSuggestionClick}
                onInputValueChange={handleInputValueChange}
                onActionExecute={handleActionExecute}
                onToolbarAction={handleToolbarAction}
                onContextMenuAction={handleContextMenuAction}
                onUnpin={handleUnpin}
                onFileAction={handleFileAction}
                onDownload={handleDownload}
                placeholder="Type a message to trigger events..."
                height="100%"
                style={{ maxWidth: '400px' }}
            />

            <div
                style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <h5 style={{ margin: '0 0 10px 0', flexShrink: 0 }}>Event Log</h5>

                <div style={{ flex: 1, overflow: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {events.slice(0, 15).map((event, index) => (
                            <li
                                key={index}
                                style={{
                                    padding: '4px 8px',
                                    margin: '2px 0',
                                    backgroundColor: index === 0 ? '#e8f5e8' : '#fff',
                                    borderRadius: '3px',
                                    fontSize: '11px',
                                    fontFamily: 'monospace',
                                    border: '1px solid #dee2e6'
                                }}
                            >
                                {event}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
