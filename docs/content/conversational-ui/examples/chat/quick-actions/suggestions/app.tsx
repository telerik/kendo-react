import * as React from 'react';
import {
    Chat,
    Message,
    User,
    SuggestionsLayoutMode,
    ChatSendMessageEvent
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

interface ChatSuggestion {
    id: string | number;
    text: string;
    description?: string;
    disabled?: boolean;
}

const bot: User = {
    id: 0,
    name: 'Customer Service',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Customer',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const customerServiceSuggestions: ChatSuggestion[] = [
    {
        id: 'order-status',
        text: 'Check my order status',
        description: 'Quick access to order tracking',
        disabled: false
    },
    {
        id: 'return-policy',
        text: 'Explain your return policy',
        description: 'Information about returns',
        disabled: false
    },
    {
        id: 'technical-support',
        text: 'Provide technical support',
        description: 'Connect with technical assistance',
        disabled: false
    }
];

const ecommerceSuggestions: ChatSuggestion[] = [
    {
        id: 'track-order',
        text: 'Track my order',
        description: 'Order tracking information',
        disabled: false
    },
    {
        id: 'size-guide',
        text: 'Size guide',
        description: 'Sizing information',
        disabled: false
    },
    {
        id: 'shipping-info',
        text: 'Shipping information',
        description: 'Delivery details',
        disabled: false
    },
    {
        id: 'contact-support',
        text: 'Contact support',
        description: 'Get help from our team',
        disabled: false
    }
];

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: 'Welcome to our customer service! You can use the quick suggestions above to get started, or type your own message.',
        timestamp: new Date('2025-01-01T10:00:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [currentSuggestions, setCurrentSuggestions] = React.useState<ChatSuggestion[]>(customerServiceSuggestions);
    const [suggestionSet, setSuggestionSet] = React.useState<'customer-service' | 'ecommerce'>('customer-service');
    const [isOutsideBusinessHours] = React.useState<boolean>(false); // Simulated business hours
    const [suggestionsLayout, setSuggestionsLayout] = React.useState<SuggestionsLayoutMode>('scroll');

    const handleSuggestionClick = (suggestion: ChatSuggestion) => {
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
                case 'order-status':
                    botResponse =
                        "I'd be happy to help you check your order status. Please provide your order number and I'll look it up for you.";
                    break;
                case 'return-policy':
                    botResponse =
                        'Our return policy allows returns within 30 days of purchase. Items must be in original condition with tags attached. Would you like more specific details?';
                    break;
                case 'technical-support':
                    botResponse =
                        "I'll connect you with our technical support team. In the meantime, could you describe the issue you're experiencing?";
                    break;
                case 'track-order':
                    botResponse =
                        'I can help you track your order. Please provide your order number or the email address used for the purchase.';
                    break;
                case 'size-guide':
                    botResponse =
                        "Here's our size guide. Which product are you looking for sizing information on? I can provide specific measurements.";
                    break;
                case 'shipping-info':
                    botResponse =
                        'We offer standard (5-7 days) and express (2-3 days) shipping. Free shipping is available on orders over $50. What would you like to know?';
                    break;
                case 'contact-support':
                    botResponse =
                        "You're already chatting with support! I'm here to help. What specific assistance do you need today?";
                    break;
                default:
                    botResponse = `Thank you for your inquiry about "${suggestion.text}". How can I assist you further with this?`;
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

        // Generic bot response for custom messages
        setTimeout(() => {
            const responseMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: "Thank you for your message. I'm processing your request and will respond shortly. Feel free to use the quick suggestions above for common inquiries.",
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, responseMessage]);
        }, 1000);
    };

    const switchSuggestionSet = (type: 'customer-service' | 'ecommerce') => {
        setSuggestionSet(type);
        const newSuggestions = type === 'customer-service' ? customerServiceSuggestions : ecommerceSuggestions;

        // Update suggestions with dynamic availability
        const updatedSuggestions = newSuggestions.map((suggestion) => ({
            ...suggestion,
            disabled: suggestion.id === 'technical-support' ? isOutsideBusinessHours : false
        }));

        setCurrentSuggestions(updatedSuggestions);

        const switchMessage: Message = {
            id: Date.now(),
            author: bot,
            text: `Switched to ${
                type === 'customer-service' ? 'Customer Service' : 'E-commerce'
            } suggestions. You can see the updated quick reply options above the input area.`,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, switchMessage]);
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
                            Suggestion Set:
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <Button
                                onClick={() => switchSuggestionSet('customer-service')}
                                selected={suggestionSet === 'customer-service'}
                                fillMode={suggestionSet === 'customer-service' ? 'solid' : 'outline'}
                                themeColor={suggestionSet === 'customer-service' ? 'primary' : 'base'}
                                size="small"
                                rounded="medium"
                            >
                                Customer Service
                            </Button>
                            <Button
                                onClick={() => switchSuggestionSet('ecommerce')}
                                selected={suggestionSet === 'ecommerce'}
                                fillMode={suggestionSet === 'ecommerce' ? 'solid' : 'outline'}
                                themeColor={suggestionSet === 'ecommerce' ? 'primary' : 'base'}
                                size="small"
                                rounded="medium"
                            >
                                E-commerce
                            </Button>
                        </div>
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
                        backgroundColor: '#f0f8ff',
                        borderRadius: '4px',
                        fontSize: '13px',
                        color: '#0c5460'
                    }}
                >
                    💡 Click any suggestion to send it instantly, reducing typing effort and ensuring consistent
                    responses.
                </div>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                suggestions={currentSuggestions}
                onSuggestionClick={handleSuggestionClick}
                onSendMessage={handleSendMessage}
                suggestionsLayout={suggestionsLayout}
                placeholder="Type your message or use quick suggestions above..."
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
            />
        </div>
    );
};

export default App;
