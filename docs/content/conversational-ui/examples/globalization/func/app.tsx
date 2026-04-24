import * as React from 'react';

import { Chat, ChatSendMessageEvent, Message } from '@progress/kendo-react-conversational-ui';
import { IntlProvider, load } from '@progress/kendo-react-intl';

import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';

import numbers from 'cldr-numbers-full/main/es/numbers.json';
import caGregorian from 'cldr-dates-full/main/es/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/es/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/es/timeZoneNames.json';

load(likelySubtags, currencyData, weekData, numbers, caGregorian, dateFields, timeZoneNames);

const user = {
    id: 1,
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};

const bot = {
    id: 0
};

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([]);

    const addNewMessage = (event: ChatSendMessageEvent) => {
        let botResponce = Object.assign({}, event.message);
        botResponce.text = countReplayLength(event.message.text);
        botResponce.author = bot;
        setMessages((oldMessages) => [...oldMessages, { ...event.message, text: event.message.text || ' ' }]);

        setTimeout(() => {
            setMessages((oldMessages) => [...oldMessages, botResponce]);
        }, 1000);
    };

    const countReplayLength = (question) => {
        let length = question.length;
        let answer = question + ' contains exactly ' + length + ' symbols.';
        return answer;
    };

    return (
        <div className="example-wrapper row">
            <div className="col-xs-12 col-sm-6 example-col">
                <IntlProvider locale="en">
                    <Chat
                        authorId={user.id}
                        messages={messages}
                        onSendMessage={addNewMessage}
                        width={370}
                        height={600}
                        placeholder="Type a message..."
                    />
                </IntlProvider>
            </div>
            <div className="col-xs-12 col-sm-6 example-col">
                <IntlProvider locale="es">
                    <Chat
                        authorId={user.id}
                        messages={messages}
                        onSendMessage={addNewMessage}
                        width={370}
                        height={600}
                        placeholder="Escribe un mensaje ..."
                    />
                </IntlProvider>
            </div>
        </div>
    );
};
export default App;
