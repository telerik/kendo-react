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
import { EventLog } from '@docs-shared/EventLog';

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
        <EventLog events={events} onClear={() => setEvents([])}>
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
        </EventLog>
    );
};

export default App;
