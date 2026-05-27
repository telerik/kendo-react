import * as React from 'react';
import { Chat, ChatSendMessageEvent, ChatSuggestion, Message, User } from '@progress/kendo-react-conversational-ui';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { StartAffix, EndAffix, TopAffix, EmptyState } from './templates';

const bot: User = {
    id: 0,
    name: 'Assistant'
};

const user: User = {
    id: 1,
    name: 'You'
};

const suggestions = [
    { id: 'quarterly-analysis', text: 'Quarterly financial analysis' },
    { id: 'budget-breakdown', text: 'Annual budget breakdown' },
    { id: 'market-trends', text: 'Market trends' },
    { id: 'competitive-analysis', text: 'Competitive analysis' }
];

const suggestionReplies: Record<string, string> = {
    'quarterly-analysis':
        'Q1 revenue was up 12% YoY, driven by strong enterprise sales. Q2 shows a 7% dip attributed to seasonal slowdown. Q3 and Q4 are projected to recover to 15% growth with the new product line launch.',
    'budget-breakdown':
        'The annual budget totals $4.2M. Engineering accounts for 38%, followed by Sales & Marketing at 27%, Operations at 21%, and G&A at 14%. R&D investment increased by 8% compared to last year.',
    'market-trends':
        'The market is seeing accelerated adoption of AI-assisted workflows (+34% YoY), a shift toward subscription-based pricing, and growing demand in the mid-market segment. Competitors are investing heavily in integrations.',
    'competitive-analysis':
        'Your top three competitors hold a combined 51% market share. Competitor A leads on enterprise features, Competitor B on pricing, and Competitor C on developer experience. Your strongest differentiator remains customer support and onboarding.'
};

const modeOptions = [
    { text: 'Auto', value: 'auto' as const },
    { text: 'Single', value: 'single' as const },
    { text: 'Multi', value: 'multi' as const }
];

let msgId = 0;
const nextId = () => `msg-${++msgId}`;

const App = () => {
    const typingTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
    const replyTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const [messages, setMessages] = React.useState<Message[]>([]);
    const [inputValue, setInputValue] = React.useState('');
    const [showStartAffix, setShowStartAffix] = React.useState(true);
    const [showEndAffix, setShowEndAffix] = React.useState(true);
    const [showTopAffix, setShowTopAffix] = React.useState(true);
    const [mode, setMode] = React.useState<'auto' | 'single' | 'multi'>('auto');

    React.useEffect(() => {
        return () => {
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
            }
            if (replyTimerRef.current) {
                clearTimeout(replyTimerRef.current);
            }
        };
    }, []);

    const sendBotReply = React.useCallback((userMessage: Message, replyText: string) => {
        setMessages((prev) => [...prev, userMessage]);

        typingTimerRef.current = setTimeout(() => {
            const typingMessage: Message = { id: nextId(), author: bot, typing: true };
            setMessages((prev) => [...prev, typingMessage]);
        }, 500);

        replyTimerRef.current = setTimeout(() => {
            const botReply: Message = { id: nextId(), author: bot, text: replyText };
            setMessages((prev) => [...prev.filter((m) => !m.typing), botReply]);
        }, 2000);
    }, []);

    const handleSend = (event: ChatSendMessageEvent) => {
        const userMessage: Message = { id: nextId(), author: user, text: event.message.text };
        setInputValue('');
        sendBotReply(userMessage, 'Let me look into that for you.');
    };

    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
        const userMessage: Message = { id: nextId(), author: user, text: suggestion.text };
        sendBotReply(userMessage, suggestionReplies[suggestion.id as string] ?? 'Let me look into that for you.');
    };

    const clearInput = React.useCallback(() => {
        setInputValue('');
    }, []);

    const messageBoxSettings = {
        mode,
        ...(showStartAffix && { startAffix: <StartAffix /> }),
        ...(showEndAffix && { endAffix: <EndAffix onClear={clearInput} /> }),
        ...(showTopAffix && { topAffix: <TopAffix /> })
    };

    return (
        <div className="example-wrapper">
            <Chat
                authorId={user.id}
                messages={messages}
                suggestions={suggestions}
                inputValue={inputValue}
                onInputValueChange={setInputValue}
                onSendMessage={handleSend}
                onSuggestionClick={handleSuggestionClick}
                messageBoxSettings={messageBoxSettings}
                noDataTemplate={() => <EmptyState />}
                style={{ flex: 1, maxWidth: 600, height: 600 }}
            />

            <div className="example-config">
                <h5 className="config-title">Affix Settings</h5>

                <div className="config-field">
                    <Label editorId="mode-dropdown">Mode</Label>
                    <DropDownList
                        id="mode-dropdown"
                        data={modeOptions}
                        value={modeOptions.find((o) => o.value === mode)}
                        onChange={(e: DropDownListChangeEvent) => setMode(e.value.value)}
                        textField="text"
                        dataItemKey="value"
                    />
                </div>

                <div className="config-field config-field--full">
                    <Checkbox
                        label="Start Affix"
                        value={showStartAffix}
                        onChange={(e: CheckboxChangeEvent) => setShowStartAffix(e.value ?? false)}
                    />
                </div>

                <div className="config-field config-field--full">
                    <Checkbox
                        label="End Affix"
                        value={showEndAffix}
                        onChange={(e: CheckboxChangeEvent) => setShowEndAffix(e.value ?? false)}
                    />
                </div>

                <div className={`config-field config-field--full${mode === 'single' ? ' config-field--disabled' : ''}`}>
                    <Checkbox
                        label="Top Affix (Multi only)"
                        value={showTopAffix}
                        disabled={mode !== 'multi'}
                        onChange={(e: CheckboxChangeEvent) => setShowTopAffix(e.value ?? false)}
                    />
                </div>
            </div>

            <style>{`
                .example-wrapper {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    gap: 16px;
                    overflow: hidden;
                }

                .example-config {
                    flex-shrink: 0;
                    padding: 16px;
                    background-color: var(--kendo-color-base);
                    border-radius: 4px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px 16px;
                    align-items: start;
                }

                .config-title {
                    grid-column: 1 / -1;
                    margin: 0 0 4px;
                    font-size: var(--kendo-font-size-md);
                    font-weight: 600;
                }

                .config-field {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .config-field--full {
                    grid-column: 1 / -1;
                }

                .config-field--disabled {
                    opacity: 0.5;
                    pointer-events: none;
                }

                .config-checkbox {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    user-select: none;
                }

                .config-hint {
                    font-size: var(--kendo-font-size-md);
                    color: var(--kendo-color-subtle);
                }

                @media (max-width: 768px) {
                    .example-config {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default App;
