import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';

const user: User = {
    id: 1,
    name: 'John',
    avatarUrl: 'assets/conversational-ui/chat/avatar.png'
};

const bot: User = {
    id: 0,
    name: 'Jane',
    avatarUrl: 'assets/conversational-ui/chat/avatar.png'
};

const initialMessages: Message[] = [
    { id: 1, author: bot, text: 'Hello! How can I help you today?', timestamp: new Date(Date.now() - 20 * 60000) },
    {
        id: 2,
        author: user,
        text: 'Hi Jane! I need help reviewing the project status.',
        timestamp: new Date(Date.now() - 19 * 60000)
    },
    {
        id: 3,
        author: bot,
        text: 'Sure! The current sprint is on track. Three tasks are in review and two are blocked.',
        timestamp: new Date(Date.now() - 18 * 60000),
        isPinned: true
    },
    { id: 4, author: user, text: 'What are the blockers?', timestamp: new Date(Date.now() - 17 * 60000) },
    {
        id: 5,
        author: bot,
        text: 'The API integration task is waiting on credentials from the backend team, and the design review needs sign-off from the product owner.',
        timestamp: new Date(Date.now() - 16 * 60000)
    },
    {
        id: 6,
        author: user,
        text: 'Got it. I will follow up with both teams.',
        timestamp: new Date(Date.now() - 15 * 60000),
        replyToId: 5
    },
    {
        id: 7,
        author: bot,
        text: 'Great! I will update the status board once the blockers are resolved.',
        timestamp: new Date(Date.now() - 14 * 60000)
    },
    {
        id: 8,
        author: user,
        text: 'Can you also pull up the latest test coverage report?',
        timestamp: new Date(Date.now() - 13 * 60000)
    },
    {
        id: 9,
        author: bot,
        text: 'Coverage is at 78%. The grid and chart modules are the lowest at 62% and 65% respectively.',
        timestamp: new Date(Date.now() - 12 * 60000),
        isPinned: true
    },
    {
        id: 10,
        author: user,
        text: 'We should aim for at least 85% before the release.',
        timestamp: new Date(Date.now() - 11 * 60000)
    },
    {
        id: 11,
        author: bot,
        text: 'Agreed. I will add a coverage improvement task to the next sprint backlog.',
        timestamp: new Date(Date.now() - 10 * 60000)
    },
    {
        id: 12,
        author: user,
        text: 'Also, the grid module specifically needs more edge-case tests for sorting and filtering.',
        timestamp: new Date(Date.now() - 9 * 60000),
        replyToId: 9
    },
    {
        id: 13,
        author: bot,
        text: 'Noted. I will assign that to the QA team for the next sprint.',
        timestamp: new Date(Date.now() - 8 * 60000)
    },
    {
        id: 14,
        author: user,
        text: 'What is the release date we are targeting?',
        timestamp: new Date(Date.now() - 7 * 60000)
    },
    {
        id: 15,
        author: bot,
        text: 'The target release date is end of next month. We have about four weeks to close the remaining items.',
        timestamp: new Date(Date.now() - 6 * 60000),
        isPinned: true
    },
    {
        id: 16,
        author: user,
        text: 'Four weeks should be enough if we resolve the blockers this week.',
        timestamp: new Date(Date.now() - 5 * 60000),
        replyToId: 15
    },
    {
        id: 17,
        author: bot,
        text: "Exactly. Let me send a summary of today's discussion to the team.",
        timestamp: new Date(Date.now() - 4 * 60000)
    },
    {
        id: 18,
        author: user,
        text: 'Please include the coverage targets and the blocker owners in the summary.',
        timestamp: new Date(Date.now() - 3 * 60000),
        replyToId: 17
    },
    {
        id: 19,
        author: bot,
        text: 'Will do! Summary sent to the team channel.',
        timestamp: new Date(Date.now() - 2 * 60000)
    },
    { id: 20, author: user, text: 'Thanks Jane, great catch-up!', timestamp: new Date(Date.now() - 60000) },
    {
        id: 21,
        author: bot,
        text: 'Anytime! Let me know if anything else comes up before the release.',
        timestamp: new Date()
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const handleSendMessage = (e: ChatSendMessageEvent) => {
        setMessages((prev) => [...prev, { ...e.message, id: Date.now(), author: user }]);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Chat
                messages={messages}
                authorId={user.id}
                scrollMode="scrollable"
                style={{ width: 600, height: 600 }}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default App;
