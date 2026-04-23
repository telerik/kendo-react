import * as React from 'react';
import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';
import { AttachmentTemplate } from './templates';

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
        text: "Hello, what's your destination?",
        timestamp: new Date('2018-02-27 21:00')
    },
    {
        id: 2,
        author: user,
        text: 'Bali',
        timestamp: new Date('2018-02-27 21:01')
    },
    {
        id: 3,
        author: bot,
        text: `What is your period of stay?`,
        timestamp: new Date('2018-02-27 21:01')
    },
    {
        id: 4,
        author: user,
        text: `3 days from April 1st`,
        timestamp: new Date('2018-02-28 00:05')
    },
    {
        id: 5,
        author: bot,
        text: `Choose one of the hotels I have picked for you`,
        attachments: [
            {
                title: 'Mystique',
                contentType: 'hotel',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Mystique.png'
            },
            {
                title: 'Rimondi',
                contentType: 'hotel',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Rimondi.png'
            },
            {
                title: 'Amanzoe',
                contentType: 'hotel',
                content: 'https://demos.telerik.com/kendo-ui/content/chat/Amanzoe.png'
            }
        ],
        attachmentLayout: 'carousel' as const,
        suggestedActions: [
            {
                type: 'reply',
                value: 'Mystique'
            },
            {
                type: 'reply',
                value: 'Rimondi'
            },
            {
                type: 'reply',
                value: 'Amanzoe'
            }
        ],
        timestamp: new Date('2018-02-28 00:15')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(conversation);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        const newMessage = { ...event.message, text: event.message.text || ' ' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        const messageText = event.message.text;

        // Check if user selected a hotel
        if (messageText === 'Mystique' || messageText === 'Rimondi' || messageText === 'Amanzoe') {
            // Add bot response with trip details
            setTimeout(() => {
                const botResponse: Message = {
                    id: Date.now(),
                    author: bot,
                    text: `Are the following trip details correct?`,
                    suggestedActions: [
                        {
                            type: 'reply',
                            value: 'Yes'
                        }
                    ],
                    attachments: [
                        {
                            contentType: 'trip-details',
                            content: `Arrival date: April 1, 2018\nDeparture date: April 3, 2018\nAccommodation: ${messageText}`
                        }
                    ],
                    timestamp: new Date()
                };
                setMessages((prevMessages) => [...prevMessages, botResponse]);
            }, 500);
        }

        // Check if user confirmed the trip details
        if (messageText === 'Yes') {
            // Add bot confirmation with reservation number
            setTimeout(() => {
                const confirmationResponse: Message = {
                    id: Date.now(),
                    author: bot,
                    text: `Great. Your reservation number is #1234`,
                    suggestedActions: [
                        {
                            type: 'reply',
                            value: 'Book another trip'
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
                    timestamp: new Date()
                };
                setMessages((prevMessages) => [...prevMessages, confirmationResponse]);
            }, 500);
        }
    };

    return (
        <div>
            <Chat
                authorId={user.id}
                messages={messages}
                onSendMessage={addNewMessage}
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                attachmentTemplate={AttachmentTemplate}
                placeholder={'Type a message...'}
            />
        </div>
    );
};

export default App;
