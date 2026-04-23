import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSuggestion,
    SuggestionsLayoutMode,
    ChatSendMessageEvent
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const bot: User = {
    id: 0,
    name: 'Travel Assistant',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Traveler',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const travelSuggestions: ChatSuggestion[] = [
    {
        id: 'flights',
        text: 'Search for flights',
        description: 'Find available flights',
        disabled: false
    },
    {
        id: 'hotels',
        text: 'Browse hotels',
        description: 'Explore accommodation options',
        disabled: false
    },
    {
        id: 'car-rental',
        text: 'Rent a car',
        description: 'Vehicle rental options',
        disabled: false
    },
    {
        id: 'attractions',
        text: 'Local attractions',
        description: 'Things to see and do',
        disabled: false
    },
    {
        id: 'weather',
        text: 'Check weather',
        description: 'Weather forecast',
        disabled: false
    },
    {
        id: 'currency',
        text: 'Currency exchange',
        description: 'Exchange rate information',
        disabled: false
    }
];

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: "Welcome to Travel Assistant! Click on a suggestion to use it, and it will be removed from the list. This helps you keep track of what you've already explored.",
        timestamp: new Date('2025-01-01T10:00:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [availableSuggestions, setAvailableSuggestions] = React.useState<ChatSuggestion[]>(travelSuggestions);
    const [suggestionsLayout, setSuggestionsLayout] = React.useState<SuggestionsLayoutMode>('scroll');

    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
        // Remove the clicked suggestion from the available suggestions
        setAvailableSuggestions((prev) => prev.filter((s) => s.id !== suggestion.id));

        // Send the suggestion as a user message
        const suggestionMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, suggestionMessage]);

        // Bot responds to the suggestion
        setTimeout(() => {
            let botResponse = '';
            switch (suggestion.id) {
                case 'flights':
                    botResponse =
                        "Great! I'll help you search for flights. What's your departure city and destination? Also, when would you like to travel?";
                    break;
                case 'hotels':
                    botResponse =
                        'I can help you find the perfect accommodation. Which city are you traveling to, and what are your check-in and check-out dates?';
                    break;
                case 'car-rental':
                    botResponse =
                        "I'll assist you with car rental options. Where will you need the vehicle, and for how many days?";
                    break;
                case 'attractions':
                    botResponse =
                        'Exploring local attractions is exciting! Which destination are you visiting? I can recommend popular sites and hidden gems.';
                    break;
                case 'weather':
                    botResponse =
                        "I'll get you the latest weather information. Which location would you like to check the forecast for?";
                    break;
                case 'currency':
                    botResponse =
                        'I can provide current exchange rates. Which currencies are you interested in converting between?';
                    break;
                default:
                    botResponse = `Thank you for your inquiry about "${suggestion.text}". How can I assist you further?`;
            }

            const responseMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: botResponse,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, responseMessage]);
        }, 500);
    };

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);

        // Bot response for custom messages
        setTimeout(() => {
            const responseMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: "Thank you for your message! I'm here to help with your travel planning. Feel free to use the remaining suggestions or ask me anything.",
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, responseMessage]);
        }, 800);
    };

    const handleResetSuggestions = () => {
        setAvailableSuggestions(travelSuggestions);

        const resetMessage: Message = {
            id: Date.now(),
            author: bot,
            text: 'All suggestions have been restored. Feel free to explore any option!',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, resetMessage]);
    };

    const layoutOptions = [
        { value: 'scroll', name: 'Scroll', desc: 'Suggestions scroll horizontally' },
        { value: 'wrap', name: 'Wrap', desc: 'Suggestions wrap to new rows' },
        { value: 'scrollbuttons', name: 'Scroll Buttons', desc: 'Scroll with navigation buttons' }
    ] as const;

    const currentLayout = layoutOptions.find((opt) => opt.value === suggestionsLayout)!;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Suggestions Configuration</h3>

                <div
                    style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        marginBottom: '12px'
                    }}
                >
                    <div>
                        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#495057' }}>
                            Available Suggestions: {availableSuggestions.length} of {travelSuggestions.length}
                        </div>
                        <Button
                            onClick={handleResetSuggestions}
                            themeColor="primary"
                            fillMode="solid"
                            size="small"
                            rounded="medium"
                            disabled={availableSuggestions.length === travelSuggestions.length}
                        >
                            Reset All Suggestions
                        </Button>
                    </div>

                    <div>
                        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#495057' }}>
                            Suggestions Layout:
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {layoutOptions.map((layout) => (
                                <Button
                                    key={layout.value}
                                    onClick={() => setSuggestionsLayout(layout.value)}
                                    selected={suggestionsLayout === layout.value}
                                    fillMode={suggestionsLayout === layout.value ? 'solid' : 'outline'}
                                    themeColor={suggestionsLayout === layout.value ? 'primary' : 'base'}
                                    size="small"
                                    rounded="medium"
                                >
                                    {layout.name}
                                </Button>
                            ))}
                        </div>
                    </div>
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

                <div
                    style={{
                        marginTop: '12px',
                        padding: '8px',
                        backgroundColor: '#fff3cd',
                        borderRadius: '4px',
                        fontSize: '13px',
                        color: '#856404'
                    }}
                >
                    💡 Each suggestion disappears after being clicked, helping users track their exploration progress
                    and reduce visual clutter.
                </div>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                suggestions={availableSuggestions}
                onSuggestionClick={handleSuggestionClick}
                onSendMessage={handleSendMessage}
                suggestionsLayout={suggestionsLayout}
                placeholder="Type your message or click a suggestion above..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
