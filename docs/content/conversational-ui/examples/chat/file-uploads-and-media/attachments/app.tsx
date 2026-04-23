import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';

export const bot = {
    id: 0,
    name: 'Travel Agent',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png',
    avatarAltText: 'KendoReact Conversational UI GOURL'
};

export const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

export const conversation: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Hello, what kind of trip would you like to book?',
        suggestedActions: [
            {
                type: 'reply',
                value: 'Business trip'
            },
            {
                type: 'reply',
                value: 'Leisure trip'
            }
        ],
        timestamp: new Date('2018-02-27 21:00')
    },
    {
        id: 2,
        author: user,
        text: 'Business trip',
        timestamp: new Date('2018-02-27 21:01')
    },
    {
        id: 3,
        author: bot,
        text: `What destinations would you like to visit?`,
        timestamp: new Date('2018-02-27 21:01')
    },
    {
        id: 4,
        author: user,
        text: `Exotic`,
        timestamp: new Date('2018-02-28 00:05')
    },
    {
        id: 5,
        author: bot,
        text: `And the date you need to be there?`,
        timestamp: new Date('2018-02-28 00:05')
    },
    {
        id: 6,
        author: user,
        text: `april 1`,
        timestamp: new Date('2018-02-28 00:15')
    },
    {
        id: 7,
        author: bot,
        text: `What is the duration of your stay?`,
        suggestedActions: [
            {
                type: 'reply',
                value: '1 week'
            },
            {
                type: 'reply',
                value: '2 weeks'
            },
            {
                type: 'reply',
                value: '1 month'
            }
        ],
        timestamp: new Date('2018-02-28 00:15')
    },
    {
        id: 8,
        author: user,
        text: `3 days`,
        timestamp: new Date('2018-02-28 00:20')
    },
    {
        id: 9,
        author: bot,
        text: `I've picked these hotels for you`,
        attachments: [
            {
                title: 'Mystique',
                contentType: 'image/',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Mystique.png'
            },
            {
                title: 'Rimondi',
                contentType: 'image/',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Rimondi.png'
            },
            {
                title: 'Amanzoe',
                contentType: 'image/',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Amanzoe.png'
            }
        ],
        attachmentLayout: 'carousel' as const,
        timestamp: new Date('2018-02-28 00:15')
    },
    {
        id: 10,
        author: user,
        text: `Mystique`,
        timestamp: new Date('2018-02-28 00:20')
    },
    {
        id: 11,
        author: bot,
        text: `Is this correct?`,
        suggestedActions: [
            {
                type: 'reply',
                value: 'Book trip'
            },
            {
                type: 'reply',
                value: 'Make changes to the current trip'
            },
            {
                type: 'reply',
                value: 'Make changes to a different trip'
            }
        ],
        attachments: [
            {
                contentType: 'text/plain',
                content: 'Arrival date: April 1, 2018; Departure date: April 3, 2018; Staying at Mystique.'
            }
        ],
        timestamp: new Date('2018-02-28 00:35')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(conversation);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        setMessages([...messages, { ...event.message, text: event.message.text || ' ' }]);
    };

    return (
        <div>
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                attachmentLayout="list"
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                placeholder={'Type a message...'}
            />
        </div>
    );
};

export default App;
