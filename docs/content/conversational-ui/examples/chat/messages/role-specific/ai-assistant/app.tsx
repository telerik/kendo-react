import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatMessageTemplateProps,
    MessageAction
} from '@progress/kendo-react-conversational-ui';
import {
    copyIcon,
    pencilIcon,
    arrowRotateCcwIcon,
    warningCircleIcon,
    thumbUpIcon,
    thumbDownIcon
} from '@progress/kendo-svg-icons';

const user: User = {
    id: 1,
    name: 'You',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const ai: User = {
    id: 0,
    name: 'AI Assistant',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const userToolbarActions: MessageAction[] = [
    { id: 'copy', label: 'Copy', svgIcon: copyIcon },
    { id: 'report', label: 'Report', svgIcon: warningCircleIcon },
    { id: 'edit', label: 'Edit', svgIcon: pencilIcon }
];

const aiToolbarActions: MessageAction[] = [
    { id: 'copy', label: 'Copy', svgIcon: copyIcon },
    { id: 'like', label: 'Good response', svgIcon: thumbUpIcon },
    { id: 'dislike', label: 'Bad response', svgIcon: thumbDownIcon },
    { id: 'retry', label: 'Retry', svgIcon: arrowRotateCcwIcon }
];

const AIMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => (
    <div style={{ padding: '16px 0' }}>
        <div
            style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
            }}
        >
            <div style={{ flex: 1, minWidth: 0 }}>
                <div
                    style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word'
                    }}
                >
                    {item?.text}
                </div>
            </div>
        </div>
    </div>
);

const initialMessages: Message[] = [
    {
        id: 1,
        author: user,
        text: 'Hi! Can you explain how this interface works?',
        timestamp: new Date(Date.now() - 30000)
    },
    {
        id: 2,
        author: ai,
        text: "Hello! I'm an AI assistant powered by the KendoReact Chat component. I'm here to help answer your questions and assist with your tasks.\n\nThis interface demonstrates role-specific configuration:\n\n• AI messages use a custom template with full width\n• AI messages have feedback actions (like/dislike) and retry\n• User messages are standard width with basic actions\n• Both avatars and usernames are hidden\n\nHow can I help you today?",
        timestamp: new Date()
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || '',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);

        setTimeout(() => {
            const aiResponse: Message = {
                id: Date.now() + 1,
                author: ai,
                text: `Thank you for your message: "${event.message.text}"\n\nThis is a simulated AI response demonstrating the role-specific configuration. Notice how:\n\n1. This message takes the full width of the chat area\n2. It uses a custom template with the AI avatar and styling\n3. You can collapse/expand long messages by clicking on them\n4. The toolbar shows AI-specific actions like thumbs up/down for feedback\n\nIn a real implementation, this would connect to an AI service to generate intelligent responses based on your input.`,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, aiResponse]);
        }, 1000);
    };

    const handleToolbarAction = (action: MessageAction, event: React.SyntheticEvent<any>, target: Message) => {
        console.log(`Toolbar action "${action.label}" triggered on message:`, target.text?.substring(0, 50));
    };

    return (
        <Chat
            messages={messages}
            authorId={user.id}
            authorMessageSettings={{
                messageWidthMode: 'standard',
                messageToolbarActions: userToolbarActions,
                showAvatar: false,
                showUsername: false
            }}
            receiverMessageSettings={{
                messageTemplate: AIMessageTemplate,
                messageWidthMode: 'full',
                messageToolbarActions: aiToolbarActions,
                showAvatar: false,
                showUsername: false
            }}
            onSendMessage={handleSendMessage}
            onToolbarAction={handleToolbarAction}
            placeholder="Message AI Assistant..."
            height={600}
        />
    );
};

export default App;
