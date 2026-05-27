import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';

const user: User = {
    id: 1,
    name: 'Jane',
    avatarUrl: 'assets/conversational-ui/chat/avatar.png'
};

const bot: User = {
    id: 0,
    name: 'Jamie',
    avatarUrl: 'assets/conversational-ui/chat/avatar.png'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: user,
        text: 'I went through the Kendo Chat endless scrolling documentation today.',
        timestamp: new Date('2026-04-27T18:00:00Z')
    },
    {
        id: 2,
        author: bot,
        text: "That's the feature that loads messages in chunks as you scroll, right?",
        timestamp: new Date('2026-04-27T18:00:15Z')
    },
    {
        id: 3,
        author: user,
        text: 'Exactly. Instead of rendering everything, it only loads pages on demand.',
        timestamp: new Date('2026-04-27T18:00:30Z')
    },
    {
        id: 4,
        author: bot,
        text: "That's huge for performance in long conversations.",
        timestamp: new Date('2026-04-27T18:00:45Z')
    },
    {
        id: 5,
        author: user,
        text: 'Especially where rendering costs add up quickly.',
        timestamp: new Date('2026-04-27T18:01:00Z')
    },
    {
        id: 6,
        author: bot,
        text: 'I like that it defaults to showing only the most recent messages.',
        timestamp: new Date('2026-04-27T18:01:15Z')
    },
    {
        id: 7,
        author: user,
        text: 'And then pulls older ones when you scroll upward.',
        timestamp: new Date('2026-04-27T18:01:30Z')
    },
    {
        id: 8,
        author: bot,
        text: 'That matches user expectations from apps like Teams.',
        timestamp: new Date('2026-04-27T18:01:45Z')
    },
    {
        id: 9,
        author: user,
        text: 'The scroll position preservation impressed me the most.',
        timestamp: new Date('2026-04-27T18:02:00Z')
    },
    {
        id: 10,
        author: bot,
        text: 'Yeah, no jumping when new messages appear at the top.',
        timestamp: new Date('2026-04-27T18:02:15Z')
    },
    {
        id: 11,
        author: user,
        text: 'The setup seems simple: just switch the scroll mode.',
        timestamp: new Date('2026-04-27T18:02:30Z')
    },
    { id: 12, author: bot, text: 'And optionally tweak the page size.', timestamp: new Date('2026-04-27T18:02:45Z') },
    {
        id: 13,
        author: user,
        text: 'Twenty messages per batch feels reasonable.',
        timestamp: new Date('2026-04-27T18:03:00Z')
    },
    {
        id: 14,
        author: bot,
        text: 'You could increase it for faster scrolling.',
        timestamp: new Date('2026-04-27T18:03:15Z')
    },
    { id: 15, author: user, text: 'Or reduce it for lower memory usage.', timestamp: new Date('2026-04-27T18:03:30Z') },
    {
        id: 16,
        author: bot,
        text: 'I also noticed there are two different modes.',
        timestamp: new Date('2026-04-27T18:03:45Z')
    },
    { id: 17, author: user, text: 'Client-side and server-side loading.', timestamp: new Date('2026-04-27T18:04:00Z') },
    {
        id: 18,
        author: bot,
        text: 'Client-side is easiest since the Chat handles paging.',
        timestamp: new Date('2026-04-27T18:04:15Z')
    },
    {
        id: 19,
        author: user,
        text: 'But it assumes the whole dataset is already loaded.',
        timestamp: new Date('2026-04-27T18:04:30Z')
    },
    {
        id: 20,
        author: bot,
        text: "Which isn't great for enterprise-scale chat logs.",
        timestamp: new Date('2026-04-27T18:04:45Z')
    },
    {
        id: 21,
        author: user,
        text: "That's where server-side endless scrolling shines.",
        timestamp: new Date('2026-04-27T18:05:00Z')
    },
    {
        id: 22,
        author: bot,
        text: 'Right, you only fetch slices of the data.',
        timestamp: new Date('2026-04-27T18:05:15Z')
    },
    {
        id: 23,
        author: user,
        text: 'The component asks for more when needed.',
        timestamp: new Date('2026-04-27T18:05:30Z')
    },
    { id: 24, author: bot, text: 'Through that load-more event.', timestamp: new Date('2026-04-27T18:05:45Z') },
    {
        id: 25,
        author: user,
        text: 'Exactly. You respond with older messages.',
        timestamp: new Date('2026-04-27T18:06:00Z')
    },
    {
        id: 26,
        author: bot,
        text: 'I like that it keeps track of indices internally.',
        timestamp: new Date('2026-04-27T18:06:15Z')
    },
    {
        id: 27,
        author: user,
        text: 'It helps the component know if more history exists.',
        timestamp: new Date('2026-04-27T18:06:30Z')
    },
    { id: 28, author: bot, text: 'And when to stop requesting data.', timestamp: new Date('2026-04-27T18:06:45Z') },
    {
        id: 29,
        author: user,
        text: 'The demo shows it stopping cleanly at the beginning.',
        timestamp: new Date('2026-04-27T18:07:00Z')
    },
    { id: 30, author: bot, text: 'No empty gaps or confusing states.', timestamp: new Date('2026-04-27T18:07:15Z') },
    {
        id: 31,
        author: user,
        text: 'From a UX perspective, endless scrolling feels invisible.',
        timestamp: new Date('2026-04-27T18:07:30Z')
    },
    {
        id: 32,
        author: bot,
        text: "Which is ideal—users shouldn't think about data loading.",
        timestamp: new Date('2026-04-27T18:07:45Z')
    },
    { id: 33, author: user, text: 'They just scroll naturally.', timestamp: new Date('2026-04-27T18:08:00Z') },
    { id: 34, author: bot, text: 'And the chat responds smoothly.', timestamp: new Date('2026-04-27T18:08:15Z') },
    {
        id: 35,
        author: user,
        text: 'I also appreciate that sending new messages still works normally.',
        timestamp: new Date('2026-04-27T18:08:30Z')
    },
    {
        id: 36,
        author: bot,
        text: "Yeah, history loading doesn't block real-time interaction.",
        timestamp: new Date('2026-04-27T18:08:45Z')
    },
    { id: 37, author: user, text: 'That separation is important.', timestamp: new Date('2026-04-27T18:09:00Z') },
    { id: 38, author: bot, text: 'Otherwise chats feel sluggish.', timestamp: new Date('2026-04-27T18:09:15Z') },
    {
        id: 39,
        author: user,
        text: 'Performance-wise, it keeps DOM size under control.',
        timestamp: new Date('2026-04-27T18:09:30Z')
    },
    {
        id: 40,
        author: bot,
        text: 'Which prevents unnecessary re-rendering.',
        timestamp: new Date('2026-04-27T18:09:45Z')
    },
    {
        id: 41,
        author: user,
        text: "I'm thinking about accessibility implications though.",
        timestamp: new Date('2026-04-27T18:10:00Z')
    },
    {
        id: 42,
        author: bot,
        text: 'Endless scrolling always needs careful handling.',
        timestamp: new Date('2026-04-27T18:10:15Z')
    },
    { id: 43, author: user, text: 'Especially for screen readers.', timestamp: new Date('2026-04-27T18:10:30Z') },
    {
        id: 44,
        author: bot,
        text: 'Focus can get lost when content is injected.',
        timestamp: new Date('2026-04-27T18:10:45Z')
    },
    {
        id: 45,
        author: user,
        text: 'But starting with a structured component helps.',
        timestamp: new Date('2026-04-27T18:11:00Z')
    },
    {
        id: 46,
        author: bot,
        text: 'You can layer accessibility improvements on top.',
        timestamp: new Date('2026-04-27T18:11:15Z')
    },
    { id: 47, author: user, text: 'The demo serves as a solid baseline.', timestamp: new Date('2026-04-27T18:11:30Z') },
    { id: 48, author: bot, text: "Agreed, it's not overly complex.", timestamp: new Date('2026-04-27T18:11:45Z') },
    {
        id: 49,
        author: user,
        text: 'Just enough logic to cover the common cases.',
        timestamp: new Date('2026-04-27T18:12:00Z')
    },
    { id: 50, author: bot, text: 'Which is good for maintainability.', timestamp: new Date('2026-04-27T18:12:15Z') },
    {
        id: 51,
        author: user,
        text: 'I also like that developers control the data source.',
        timestamp: new Date('2026-04-27T18:12:30Z')
    },
    { id: 52, author: bot, text: 'That keeps concerns nicely separated.', timestamp: new Date('2026-04-27T18:12:45Z') },
    {
        id: 53,
        author: user,
        text: 'UI handles display, app handles data.',
        timestamp: new Date('2026-04-27T18:13:00Z')
    },
    { id: 54, author: bot, text: 'Makes testing easier too.', timestamp: new Date('2026-04-27T18:13:15Z') },
    { id: 55, author: user, text: 'Especially when simulating latency.', timestamp: new Date('2026-04-27T18:13:30Z') },
    { id: 56, author: bot, text: 'You can catch edge cases early.', timestamp: new Date('2026-04-27T18:13:45Z') },
    {
        id: 57,
        author: user,
        text: 'For example, loading delays or partial pages.',
        timestamp: new Date('2026-04-27T18:14:00Z')
    },
    { id: 58, author: bot, text: 'Or rapid scrolling.', timestamp: new Date('2026-04-27T18:14:15Z') },
    {
        id: 59,
        author: user,
        text: 'The Chat copes with that surprisingly well.',
        timestamp: new Date('2026-04-27T18:14:30Z')
    },
    { id: 60, author: bot, text: 'It queues requests cleanly.', timestamp: new Date('2026-04-27T18:14:45Z') },
    {
        id: 61,
        author: user,
        text: 'Overall, it scales much better than full rendering.',
        timestamp: new Date('2026-04-27T18:15:00Z')
    },
    {
        id: 62,
        author: bot,
        text: 'Definitely the right approach for real chats.',
        timestamp: new Date('2026-04-27T18:15:15Z')
    },
    {
        id: 63,
        author: user,
        text: "I wouldn't consider building a chat without it.",
        timestamp: new Date('2026-04-27T18:15:30Z')
    },
    { id: 64, author: bot, text: 'Same here. Users expect it now.', timestamp: new Date('2026-04-27T18:15:45Z') },
    {
        id: 65,
        author: user,
        text: "Even if they don't consciously notice it.",
        timestamp: new Date('2026-04-27T18:16:00Z')
    },
    { id: 66, author: bot, text: "That's the mark of good UX.", timestamp: new Date('2026-04-27T18:16:15Z') },
    {
        id: 67,
        author: user,
        text: 'The Telerik demo makes it easy to understand.',
        timestamp: new Date('2026-04-27T18:16:30Z')
    },
    { id: 68, author: bot, text: 'And easier to adopt.', timestamp: new Date('2026-04-27T18:16:45Z') },
    {
        id: 69,
        author: user,
        text: 'We should mirror this pattern in our project.',
        timestamp: new Date('2026-04-27T18:17:00Z')
    },
    { id: 70, author: bot, text: "I'm on board with that.", timestamp: new Date('2026-04-27T18:17:15Z') },
    {
        id: 71,
        author: user,
        text: "We'll need server-side paging for sure.",
        timestamp: new Date('2026-04-27T18:17:30Z')
    },
    { id: 72, author: bot, text: 'Our message history is way too large.', timestamp: new Date('2026-04-27T18:17:45Z') },
    {
        id: 73,
        author: user,
        text: 'But the API hooks are straightforward.',
        timestamp: new Date('2026-04-27T18:18:00Z')
    },
    {
        id: 74,
        author: bot,
        text: 'We just have to manage indices correctly.',
        timestamp: new Date('2026-04-27T18:18:15Z')
    },
    {
        id: 75,
        author: user,
        text: 'And update totals when new messages arrive.',
        timestamp: new Date('2026-04-27T18:18:30Z')
    },
    { id: 76, author: bot, text: 'That part is easy to overlook.', timestamp: new Date('2026-04-27T18:18:45Z') },
    {
        id: 77,
        author: user,
        text: 'Still, the documentation covers it clearly.',
        timestamp: new Date('2026-04-27T18:19:00Z')
    },
    { id: 78, author: bot, text: 'Which helps avoid mistakes.', timestamp: new Date('2026-04-27T18:19:15Z') },
    { id: 79, author: user, text: 'Overall, it feels production-ready.', timestamp: new Date('2026-04-27T18:19:30Z') },
    { id: 80, author: bot, text: 'Definitely not just a demo feature.', timestamp: new Date('2026-04-27T18:19:45Z') },
    { id: 81, author: user, text: "I'm glad we reviewed it closely.", timestamp: new Date('2026-04-27T18:20:00Z') },
    {
        id: 82,
        author: bot,
        text: 'Same, it answers a lot of scalability questions.',
        timestamp: new Date('2026-04-27T18:20:15Z')
    },
    { id: 83, author: user, text: 'And validates our approach.', timestamp: new Date('2026-04-27T18:20:30Z') },
    {
        id: 84,
        author: bot,
        text: 'We should share this with the rest of the team.',
        timestamp: new Date('2026-04-27T18:20:45Z')
    },
    {
        id: 85,
        author: user,
        text: 'Agreed, especially the performance benefits.',
        timestamp: new Date('2026-04-27T18:21:00Z')
    },
    {
        id: 86,
        author: bot,
        text: 'People underestimate how heavy chat UIs can be.',
        timestamp: new Date('2026-04-27T18:21:15Z')
    },
    {
        id: 87,
        author: user,
        text: 'Endless scrolling solves a big part of that.',
        timestamp: new Date('2026-04-27T18:21:30Z')
    },
    { id: 88, author: bot, text: 'Without compromising user experience.', timestamp: new Date('2026-04-27T18:21:45Z') },
    { id: 89, author: user, text: "That's the key takeaway for me.", timestamp: new Date('2026-04-27T18:22:00Z') },
    { id: 90, author: bot, text: 'Same here.', timestamp: new Date('2026-04-27T18:22:15Z') },
    {
        id: 91,
        author: user,
        text: "Let's plan a prototype using this model.",
        timestamp: new Date('2026-04-27T18:22:30Z')
    },
    { id: 92, author: bot, text: "I'll help with the data layer.", timestamp: new Date('2026-04-27T18:22:45Z') },
    { id: 93, author: user, text: "I'll focus on the UI integration.", timestamp: new Date('2026-04-27T18:23:00Z') },
    { id: 94, author: bot, text: 'Sounds like a good split.', timestamp: new Date('2026-04-27T18:23:15Z') },
    {
        id: 95,
        author: user,
        text: 'This should improve our app noticeably.',
        timestamp: new Date('2026-04-27T18:23:30Z')
    },
    { id: 96, author: bot, text: 'Both in speed and usability.', timestamp: new Date('2026-04-27T18:23:45Z') },
    { id: 97, author: user, text: "Alright, let's get started.", timestamp: new Date('2026-04-27T18:24:00Z') },
    { id: 98, author: bot, text: 'Looking forward to it.', timestamp: new Date('2026-04-27T18:24:15Z') },
    { id: 99, author: user, text: 'Thanks for the discussion.', timestamp: new Date('2026-04-27T18:24:30Z') },
    { id: 100, author: bot, text: 'Anytime!', timestamp: new Date('2026-04-27T18:24:45Z') }
];

let nextId = 101;

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const handleSendMessage = (e: ChatSendMessageEvent) => {
        setMessages((prev) => [...prev, { ...e.message, id: nextId++, author: user, timestamp: new Date() }]);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Chat
                messages={messages}
                authorId={user.id}
                scrollMode="endless"
                pageSize={30}
                style={{ width: 600, height: 600 }}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default App;
