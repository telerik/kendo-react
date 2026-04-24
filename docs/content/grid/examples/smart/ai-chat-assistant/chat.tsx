import * as React from 'react';
import {
    Chat,
    Message,
    ChatSendMessageEvent,
    ChatMessageTemplateProps,
    User
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { aiSparklesIcon, closeIcon } from './svg-icons';

const bot: User = {
    id: 0,
    name: 'bot'
};

const user: User = {
    id: 1,
    name: 'user'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        timestamp: new Date(),
        text: "👋 Hi! I'm your AI Grid Assistant. I can help you work with your data faster and more easily. Try asking me to:\n\n• Sort, filter, or group by a field\n• Resize, reorder, or lock columns\n• Export to Excel or PDF\n\nStart with one of the suggestions below or type your own request."
    }
];

export interface ChatSuggestion {
    id: string | number;
    text: string;
}

const ChatSuggestions: ChatSuggestion[] = [
    {
        id: 'sort-amount-desc',
        text: 'Sort by Bookings descending'
    },
    {
        id: 'group-sales-person',
        text: 'Group by Sales Person'
    },
    {
        id: 'export-pdf',
        text: 'Export to PDF'
    },
    {
        id: 'filter-north-america',
        text: 'Filter by North America'
    },
    {
        id: 'hide-rating-column',
        text: 'Hide Rating Column'
    }
];

const AIMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => (
    <div style={{ padding: '16px 0' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ lineHeight: '1.6', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{item?.text}</div>
            </div>
        </div>
    </div>
);

export interface AIChatProps {
    messages: Message[];
    onSendMessage: (event: ChatSendMessageEvent) => void;
    onClose: () => void;
}

export const AIChat: React.FC<AIChatProps> = ({ messages, onSendMessage, onClose }) => {
    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
        onSendMessage({
            message: {
                author: user,
                text: suggestion.text
            }
        } as ChatSendMessageEvent);
    };

    const AIHeaderTemplate = React.useCallback(() => {
        return (
            <>
                <SvgIcon className="ai-icon" icon={aiSparklesIcon} />
                <div>AI Grid Assistant</div>
                <div className={'k-spacer'} />
                <Button fillMode={'clear'} svgIcon={closeIcon} onClick={onClose} />
            </>
        );
    }, [onClose]);

    return (
        <Chat
            messages={messages}
            authorId={user.id}
            onSendMessage={onSendMessage}
            placeholder={'Ask me to sort, filter, or analyze your data. '}
            suggestions={ChatSuggestions}
            onSuggestionClick={handleSuggestionClick}
            suggestionsLayout="scrollbuttons"
            showUsername={false}
            uploadConfig={false}
            headerTemplate={AIHeaderTemplate}
            receiverMessageSettings={{
                messageTemplate: AIMessageTemplate,
                messageWidthMode: 'full'
            }}
            style={{ height: '600px' }}
        />
    );
};

export { bot, user, initialMessages, ChatSuggestions };
