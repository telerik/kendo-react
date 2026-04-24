import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent, MessageAction } from '@progress/kendo-react-conversational-ui';
import { downloadIcon, eyeIcon, shareIcon, trashIcon } from '@progress/kendo-svg-icons';
import { ActionLogger, LogEntry } from './ActionLogger';
interface ChatFile {
    id: string;
    name: string;
    size: number;
    type: string;
    url?: string;
}

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

const fileActions: MessageAction[] = [
    {
        id: 'download',
        label: 'Download',
        svgIcon: downloadIcon
    },
    {
        id: 'preview',
        label: 'Preview',
        svgIcon: eyeIcon
    },
    {
        id: 'share',
        label: 'Share',
        svgIcon: shareIcon
    },
    {
        id: 'remove',
        label: 'Remove',
        svgIcon: trashIcon
    }
];

const sampleFiles: ChatFile[] = [
    {
        id: 'file1',
        name: 'document.pdf',
        size: 245760,
        type: 'application/pdf',
        url: 'https://example.com/document.pdf'
    },
    {
        id: 'file2',
        name: 'presentation.pptx',
        size: 1536000,
        type: 'application/vnd.ms-powerpoint',
        url: 'https://example.com/presentation.pptx'
    }
];

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome! This demo shows file actions for message attachments.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'Here is a message with file attachments. Click the file actions button to see available options.',
        timestamp: new Date('2025-01-01T10:01:00Z'),
        files: sampleFiles
    },
    {
        id: 3,
        author: bot,
        text: 'The fileActions prop defines custom actions for file attachments.',
        timestamp: new Date('2025-01-01T10:02:00Z')
    },
    {
        id: 4,
        author: user,
        text: 'You can Download, Preview, Share, or Remove files using the file action menu.',
        timestamp: new Date('2025-01-01T10:03:00Z'),
        files: [sampleFiles[0]]
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

    const handleFileAction = (action: MessageAction, event: React.SyntheticEvent<any>, target: ChatFile) => {
        const timestamp = new Date().toLocaleTimeString();
        let logDetails = '';

        switch (action.id) {
            case 'download':
                logDetails = `Downloaded "${target.name}" (${(target.size / 1024).toFixed(1)} KB)`;
                break;
            case 'preview':
                logDetails = `Previewing "${target.name}" (${target.type})`;
                break;
            case 'share':
                logDetails = `Shared "${target.name}" via link: ${target.url}`;
                break;
            case 'remove':
                logDetails = `Removed "${target.name}" from message`;
                // Remove file from messages
                setMessages((prev) =>
                    prev.map((msg) => ({
                        ...msg,
                        files: msg.files?.filter((file) => file.id !== target.id)
                    }))
                );
                break;
            default:
                logDetails = `${action.label} on file "${target.name}"`;
        }

        const logEntry = {
            action: action.label,
            details: logDetails,
            time: timestamp
        };

        setActionLog((prev) => [...prev, logEntry]);

        // Add a bot response showing the action
        if (action.id !== 'remove') {
            const responseMessage: Message = {
                id: Date.now(),
                author: bot,
                text: `✓ Action completed: ${action.label} for "${target.name}"`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, responseMessage]);
        }
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
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
                    fileActions={fileActions}
                    onFileAction={handleFileAction}
                    onSendMessage={handleSendMessage}
                    placeholder="Type a message..."
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
                <ActionLogger logs={actionLog} emptyMessage="Click a file action button to see it logged here..." />
            </div>
        </div>
    );
};

export default App;
