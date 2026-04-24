import * as React from 'react';
import { Chat, Message, User, FilesLayoutMode, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const bot: User = {
    id: 0,
    name: 'Support Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const cv_template_link =
    (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/cv_template.pdf';
const cover_letter_link =
    (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/cover_letter.pdf';
const portfolio_link =
    (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/portfolio.pdf';

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Hello! I can help you share files. Here are some sample documents:',
        timestamp: new Date(Date.now() - 120000)
    },
    {
        id: 2,
        author: bot,
        text: 'Sample files',
        timestamp: new Date(Date.now() - 100000),
        files: [
            {
                id: 'cv',
                name: 'CV.pdf',
                size: 380000,
                type: 'application/pdf',
                url: cv_template_link
            },
            {
                id: 'cover-letter',
                name: 'Cover.pdf',
                size: 245000,
                type: 'application/pdf',
                url: cover_letter_link
            },
            {
                id: 'portfolio',
                name: 'Portfolio.pdf',
                size: 2450000,
                type: 'application/pdf',
                url: portfolio_link
            }
        ]
    },
    {
        id: 3,
        author: bot,
        text: 'Try different layout modes to see how files are displayed!',
        timestamp: new Date(Date.now() - 80000)
    }
];

const layoutOptions = [
    { value: 'vertical', name: 'Vertical', desc: 'Files stacked vertically in a single column' },
    { value: 'wrap', name: 'Wrap', desc: 'Files wrap to new rows when space is limited' },
    { value: 'horizontal', name: 'Horizontal', desc: 'Files displayed in a single row with overflow' }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [selectedLayout, setSelectedLayout] = React.useState<FilesLayoutMode>('vertical');

    const onMessageSend = (event: ChatSendMessageEvent) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { ...event.message, text: event.message.text || ' ', id: prevMessages.length + 1, author: user }
        ]);

        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: 'Thanks for your message! You can upload files using the attachment button below.',
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const currentLayout = layoutOptions.find((opt) => opt.value === selectedLayout)!;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>File Layout Selector</h3>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    {layoutOptions.map((layout) => (
                        <Button
                            key={layout.value}
                            onClick={() => setSelectedLayout(layout.value as any)}
                            selected={selectedLayout === layout.value}
                            fillMode={selectedLayout === layout.value ? 'solid' : 'outline'}
                            themeColor={selectedLayout === layout.value ? 'primary' : 'base'}
                            size="small"
                            rounded="medium"
                        >
                            {layout.name}
                        </Button>
                    ))}
                </div>
                <p
                    style={{
                        margin: '0',
                        fontSize: '14px',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }}
                >
                    <strong>Current Layout:</strong> {currentLayout.name} - {currentLayout.desc}
                </p>
            </div>

            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={onMessageSend}
                placeholder="Type a message or upload files..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                uploadConfig={{
                    multiple: true,
                    accept: '.pdf'
                }}
                messageWidthMode="full"
                messageFilesLayout={selectedLayout}
            />
        </div>
    );
};

export default App;
