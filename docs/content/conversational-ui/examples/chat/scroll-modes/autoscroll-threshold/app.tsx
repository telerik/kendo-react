import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatSuggestion,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { SegmentedControl } from '@progress/kendo-react-buttons';
import { InputSuffix, InputSeparator } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { SvgIcon } from '@progress/kendo-react-common';
import { BOT_RESPONSES } from './messages';
import './styles.css';

const aiSparklesIcon = {
    name: 'ai-sparkles',
    content: `
            <foreignObject x="0" y="0" width="40" height="40"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);clip-path:url(#bgblur_0_1794_1696_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter0_d_1794_1696)" data-figma-bg-blur-radius="4">
            <path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z" fill="url(#paint0_linear_1794_1696)"/>
            </g>
            <defs>
            <filter id="filter0_d_1794_1696" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1794_1696"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1794_1696" result="shape"/>
            </filter>
            <clipPath id="bgblur_0_1794_1696_clip_path" transform="translate(0 0)"><path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z"/>
            </clipPath><linearGradient id="paint0_linear_1794_1696" x1="14.1354" y1="10.337" x2="22.1053" y2="20.9343" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C158E4"/>
            <stop offset="1" stop-color="#4B5FFA"/>
            </linearGradient>
            </defs>
        `,
    viewBox: '0 0 32 32'
};

const bot: User = { id: 0 };

const user: User = {
    id: 1,
    name: 'John',
    avatarUrl: 'assets/conversational-ui/chat/avatar.png'
};

const suggestions: ChatSuggestion[] = [
    { id: 'quarterly-financial-analysis', text: 'Quarterly financial analysis' },
    { id: 'annual-budget-breakdown', text: 'Annual budget breakdown' },
    { id: 'market-trends-and-predictions', text: 'Market trends and predictions' }
];

const PERCENT_OPTIONS = [0, 25, 50, 75, 100];
const PX_OPTIONS = [0, 100, 200, 300, 400];

const getParagraphs = (text: string): string[] => {
    return text ? text.split('\n\n') : [];
};

const createTypingIndicator = (author: User): Message => ({
    id: Date.now() + 1,
    author,
    typing: true
});

const replaceTypingMessage = (messages: Message[], nextMessage: Message): Message[] => [
    ...messages.filter((message) => !message.typing),
    nextMessage
];

const ThresholdSuffix: React.FC<{
    unit: '%' | 'px';
    onUnitChange: (unit: '%' | 'px') => void;
    onValueChange: (value: number) => void;
}> = ({ unit, onUnitChange, onValueChange }) => (
    <>
        <InputSeparator orientation="vertical" />
        <InputSuffix>
            <SegmentedControl
                style={{ margin: '3px 2px' }}
                value={unit}
                size="small"
                onChange={(value) => {
                    const next = value as '%' | 'px';
                    onUnitChange(next);
                    onValueChange(next === '%' ? 25 : 100);
                }}
                items={[
                    { value: '%', text: '%' },
                    { value: 'px', text: 'px' }
                ]}
            />
        </InputSuffix>
    </>
);

const ReceiverMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    const paragraphs = getParagraphs(item.text ?? '');

    return (
        <div className="receiver-message">
            {paragraphs.map((paragraph, index) => (
                <React.Fragment key={`${paragraph}-${index}`}>
                    {index > 0 && <hr className="paragraph-separator" />}
                    <p className="paragraph">{paragraph}</p>
                </React.Fragment>
            ))}
        </div>
    );
};

const App = () => {
    const [unit, setUnit] = React.useState<'%' | 'px'>('%');
    const [numericValue, setNumericValue] = React.useState(25);
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            author: bot,
            text: '👋 Hello! I am your Financial AI Assistant. Select one of the suggested topics below to get started, or type a message.',
            timestamp: new Date()
        }
    ]);

    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
        const userMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, userMessage]);

        setTimeout(() => {
            setMessages((prev) => [...prev, createTypingIndicator(bot)]);
        }, 500);

        setTimeout(() => {
            const responseMessage: Message = {
                id: Date.now(),
                author: bot,
                text: BOT_RESPONSES[suggestion.id as string] ?? 'I do not have information on that topic yet.',
                timestamp: new Date()
            };

            setMessages((prev) => replaceTypingMessage(prev, responseMessage));
        }, 2000);
    };

    const handleSendMessage = (e: ChatSendMessageEvent) => {
        const userMessage: Message = { ...e.message, id: Date.now(), author: user };

        setMessages((prev) => [...prev, userMessage]);

        setTimeout(() => {
            setMessages((prev) => [...prev, createTypingIndicator(bot)]);
        }, 500);

        setTimeout(() => {
            const responseMessage: Message = {
                id: Date.now(),
                author: bot,
                text: 'I can only answer questions from the predefined topics. Please choose one of the suggestions above.',
                timestamp: new Date()
            };

            setMessages((prev) => replaceTypingMessage(prev, responseMessage));
        }, 1300);
    };

    return (
        <div className="demo-container">
            <div className="example-config">
                <Label editorId="threshold-input">Auto-scroll threshold</Label>
                <AutoComplete
                    id="threshold-input"
                    data={(unit === '%' ? PERCENT_OPTIONS : PX_OPTIONS).map(String)}
                    value={String(numericValue)}
                    style={{ width: 160 }}
                    onChange={(e: AutoCompleteChangeEvent) => {
                        const parsed = Number.parseInt(e.value);
                        if (!Number.isNaN(parsed)) {
                            setNumericValue(parsed);
                        }
                    }}
                    suffix={<ThresholdSuffix unit={unit} onUnitChange={setUnit} onValueChange={setNumericValue} />}
                />
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                suggestions={suggestions}
                scrollMode="scrollable"
                autoScrollThreshold={unit === 'px' ? numericValue : `${numericValue}%`}
                style={{ width: 600, height: 600 }}
                onSendMessage={handleSendMessage}
                onSuggestionClick={handleSuggestionClick}
                headerTemplate={
                    <div className="chat-header">
                        <SvgIcon icon={aiSparklesIcon} style={{ width: 32, height: 24 }} />
                        <span>Financial AI Assistant</span>
                    </div>
                }
                receiverMessageSettings={{ messageTemplate: ReceiverMessageTemplate }}
            />
        </div>
    );
};

export default App;
