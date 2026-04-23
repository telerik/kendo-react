import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent, MessageAction } from '@progress/kendo-react-conversational-ui';
import { copyIcon, infoCircleIcon, starIcon } from '@progress/kendo-svg-icons';
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

const contextMenuActions: MessageAction[] = [
    {
        id: 'copy',
        label: 'Copy Message',
        svgIcon: copyIcon
    },
    {
        id: 'info',
        label: 'Message Info',
        svgIcon: infoCircleIcon
    },
    {
        id: 'favorite',
        label: 'Add to Favorites',
        svgIcon: starIcon
    }
];

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows context menu actions on messages.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'Right-click on any message to see the context menu.',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: bot,
        text: 'The messageContextMenuActions prop defines what actions appear when you right-click a message.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: user,
        text: 'Try right-clicking on this message to see Copy, Info, and Favorite actions!',
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

    const handleContextMenuAction = (action: MessageAction, event: React.SyntheticEvent<any>, target: Message) => {
        const timestamp = new Date().toLocaleTimeString();
        let logDetails = '';

        // Create different log messages based on action type
        switch (action.id) {
            case 'copy':
                logDetails = `Copied: "${target.text}"`;
                // Actually copy to clipboard
                if (target.text) {
                    navigator.clipboard.writeText(target.text);
                }
                break;
            case 'info':
                logDetails = `Viewed info for message from ${target.author.name} (ID: ${target.id})`;
                break;
            case 'favorite':
                logDetails = `Added "${target.text}" to favorites`;
                break;
            default:
                logDetails = `${action.label} on message from ${target.author.name}`;
        }

        const logEntry = {
            action: action.label,
            details: logDetails,
            time: timestamp
        };

        setActionLog((prev) => [...prev, logEntry]);

        // Add a bot response showing the action
        const responseMessage: Message = {
            id: Date.now(),
            author: bot,
            text: `✓ Action completed: ${action.label}`,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, responseMessage]);
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
                    messageContextMenuActions={contextMenuActions}
                    onContextMenuAction={handleContextMenuAction}
                    onSendMessage={handleSendMessage}
                    placeholder="Type a message and then right-click it..."
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
                <ActionLogger
                    logs={actionLog}
                    emptyMessage="Right-click any message and select an action to see it logged here..."
                />
            </div>
        </div>
    );
};

export default App;
