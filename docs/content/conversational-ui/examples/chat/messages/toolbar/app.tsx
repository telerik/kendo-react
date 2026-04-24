import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent, MessageAction } from '@progress/kendo-react-conversational-ui';
import { pinIcon, trashIcon, copyIcon, heartIcon } from '@progress/kendo-svg-icons';
import { ActionLogger, LogEntry } from './ActionLogger';

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

// Example demonstrating messageToolbarActions prop
const toolbarActions: MessageAction[] = [
    {
        id: 'pin',
        label: 'Pin',
        svgIcon: pinIcon
    },
    {
        id: 'copy',
        label: 'Copy',
        svgIcon: copyIcon
    },
    {
        id: 'like',
        label: 'Like',
        svgIcon: heartIcon
    },
    {
        id: 'delete',
        label: 'Delete',
        svgIcon: trashIcon
    }
];

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows message toolbar actions.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'You can see the toolbar with actions on each message.',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'The messageToolbarActions prop defines buttons that appear in the message toolbar.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: user,
        text: 'You can see Pin, Copy, Like, and Delete buttons in the message toolbar!',
        timestamp: new Date('2025-01-01T10:03:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [actionLog, setActionLog] = React.useState<LogEntry[]>([]);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleToolbarAction = (action: MessageAction, event: React.SyntheticEvent<any>, target: Message) => {
        const timestamp = new Date().toLocaleTimeString();
        let logDetails = '';

        // Create different log messages based on action type
        switch (action.id) {
            case 'pin':
                const isPinning = !target.isPinned;
                logDetails = isPinning
                    ? `Pinned message from ${target.author.name}: "${target.text}"`
                    : `Unpinned message from ${target.author.name}`;
                break;
            case 'copy':
                logDetails = `Copied to clipboard: "${target.text}"`;
                navigator.clipboard.writeText(target.text || '');
                break;
            case 'like':
                logDetails = `Liked message from ${target.author.name}: "${target.text}"`;
                break;
            case 'delete':
                logDetails = `Deleted message from ${target.author.name} (message ID: ${target.id})`;
                break;
            default:
                logDetails = `${action.label} performed on message from ${target.author.name}`;
        }

        const logEntry = {
            action: action.label,
            details: logDetails,
            time: timestamp
        };

        setActionLog((prev) => [...prev, logEntry]);

        // Handle different actions
        if (action.id === 'delete') {
            setMessages((prev) => prev.map((msg) => (msg.id === target.id ? { ...msg, isDeleted: true } : msg)));
        } else if (action.id === 'pin') {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === target.id ? { ...msg, isPinned: !msg.isPinned } : { ...msg, isPinned: false }
                )
            );
        } else if (action.id === 'copy') {
            navigator.clipboard.writeText(target.text || '');
        }
    };

    const handleUnpinMessage = (message: Message) => {
        setMessages((prev) => prev.map((msg) => (msg.id === message.id ? { ...msg, isPinned: false } : msg)));
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date(),
            replyToId: event.message.replyToId
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '24px',
                height: isMobile ? 'auto' : '600px',
                width: '100%'
            }}
        >
            <div
                style={{
                    flex: isMobile ? '1' : '0 0 420px',
                    minWidth: '0'
                }}
            >
                <Chat
                    messages={messages}
                    authorId={user.id}
                    messageToolbarActions={toolbarActions}
                    onToolbarAction={handleToolbarAction}
                    onUnpin={handleUnpinMessage}
                    onSendMessage={handleSendMessage}
                    placeholder="Type a message to see it with toolbar actions..."
                    height={500}
                    style={{
                        maxWidth: '400px',
                        width: '100%'
                    }}
                />
            </div>
            <div
                style={{
                    flex: '1',
                    minWidth: '0'
                }}
            >
                <ActionLogger logs={actionLog} emptyMessage="Click toolbar actions to see them logged here..." />
            </div>
        </div>
    );
};

export default App;
