import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { Badge } from '@progress/kendo-react-indicators';
import { SvgIcon } from '@progress/kendo-react-common';
import { checkIcon, xIcon } from '@progress/kendo-svg-icons';

interface UserWithStatus extends User {
    status?: string;
}

const bot: UserWithStatus = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png',
    status: 'online'
};

const user: UserWithStatus = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    status: 'online'
};

const UserStatusTemplate = ({ message }: any) => {
    const { status: authorStatus = 'online' } = message.author;

    return (
        <div style={{ width: '10px', height: '10px' }}>
            <Badge
                themeColor={authorStatus === 'online' ? 'success' : 'light'}
                style={{
                    width: '10px',
                    height: '10px',
                    border: '1px solid white',
                    borderRadius: '100%',
                    transform: 'translate(0, 0)',
                    minWidth: '10px'
                }}
            >
                <SvgIcon
                    icon={authorStatus === 'online' ? checkIcon : xIcon}
                    style={{ width: '10px', height: '10px', minWidth: '8px' }}
                />
            </Badge>
        </div>
    );
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            author: { ...bot },
            text: 'Hello! How can I help you today?',
            timestamp: new Date(Date.now() - 1000 * 60 * 5)
        },
        {
            id: 2,
            author: { ...bot },
            text: "I'm here to assist you with any questions.",
            timestamp: new Date(Date.now() - 1000 * 60 * 3)
        },
        {
            id: 3,
            author: { ...user },
            text: 'Thanks! I have a question about your services.',
            timestamp: new Date(Date.now() - 1000 * 60 * 2)
        }
    ]);

    const [botStatus, setBotStatus] = React.useState<string>('online');

    const onMessageSend = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: { ...user },
            text: event.message.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, newMessage]);

        setTimeout(() => {
            const authorWithStatus = { ...bot, status: botStatus };
            const botMessage: Message = {
                id: Date.now() + 1,
                author: authorWithStatus,
                text: "That's great! Let me know if you need anything else.",
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const handleStatusChange = (status: string) => {
        setBotStatus(status);
        bot.status = status;

        setMessages((prev) =>
            prev.map((message) => {
                if (message.author?.id === bot.id) {
                    return {
                        ...message,
                        author: {
                            ...message.author,
                            status: status
                        }
                    };
                }
                return message;
            })
        );
    };

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>User Status Selector</h3>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <Button
                        onClick={() => handleStatusChange('online')}
                        selected={botStatus === 'online'}
                        fillMode={botStatus === 'online' ? 'solid' : 'outline'}
                        themeColor={botStatus === 'online' ? 'success' : 'base'}
                        size="small"
                        rounded="medium"
                    >
                        Online
                    </Button>
                    <Button
                        onClick={() => handleStatusChange('offline')}
                        selected={botStatus === 'offline'}
                        fillMode={botStatus === 'offline' ? 'solid' : 'outline'}
                        themeColor={botStatus === 'offline' ? 'light' : 'base'}
                        size="small"
                        rounded="medium"
                    >
                        Offline
                    </Button>
                </div>
                <p
                    style={{
                        margin: '0',
                        fontSize: '14px',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }}
                >
                    <strong>Current Status:</strong> {botStatus} -
                    {botStatus === 'online' ? ' Green indicator with check icon' : ' Grey indicator with x icon'}
                </p>
            </div>

            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={onMessageSend}
                placeholder="Type a message to start chatting..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                userStatusTemplate={UserStatusTemplate}
            />
        </div>
    );
};

export default App;
