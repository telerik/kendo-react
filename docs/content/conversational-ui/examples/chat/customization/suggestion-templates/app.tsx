import * as React from 'react';
import { Chat, Message, User } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { suggestionTemplates } from './templates';

const bot: User = {
    id: 0,
    name: 'Assistant Bot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'Demo User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const suggestions = [
    { id: 'features', text: 'List features' },
    { id: 'support', text: 'Get support', category: 'question' },
    { id: 'help', text: 'Need help?', category: 'help' },
    { id: 'demo', text: 'Start a demo', category: 'action' },
    { id: 'pricing', text: 'View pricing', category: 'info' },
    { id: 'docs', text: 'View docs', category: 'info' }
];

// Enhanced suggestions for different templates
const cardSuggestions = [
    { id: 'product-info', text: 'Product Info', description: 'Learn about features' },
    { id: 'pricing', text: 'Pricing', description: 'View plans & costs' },
    { id: 'support', text: 'Support', description: 'Get help now' },
    { id: 'demo', text: 'Demo', description: 'Schedule a demo' }
];

const iconSuggestions = [
    { id: 'help', text: 'Help', icon: '❓' },
    { id: 'settings', text: 'Settings', icon: '⚙️' },
    { id: 'feedback', text: 'Feedback', icon: '📝' },
    { id: 'contact', text: 'Contact', icon: '📞' }
];

const pollSuggestions = [
    { id: 'excellent', text: 'Excellent', votes: 45 },
    { id: 'good', text: 'Good', votes: 32 },
    { id: 'average', text: 'Average', votes: 18 },
    { id: 'poor', text: 'Poor', votes: 5 },
    { id: 'bad', text: 'Bad', votes: 2 }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([
        {
            id: 1,
            author: bot,
            text: 'Welcome! This demo shows different suggestion templates. Try clicking the suggestions below to see how they work with different styling approaches.',
            timestamp: new Date()
        }
    ]);

    const [selectedTemplate, setSelectedTemplate] = React.useState<string>('default');
    const [currentSuggestions, setCurrentSuggestions] = React.useState(suggestions);

    const handleSuggestionClick = (suggestion: any) => {
        const suggestionMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, suggestionMessage]);

        // Bot response based on suggestion
        setTimeout(() => {
            let response = '';
            switch (suggestion.id) {
                case 'features':
                case 'product-info':
                    response =
                        'Here are key features: customizable templates, rich messaging, file uploads, AI integration, and accessibility support!';
                    break;
                case 'demo':
                    response =
                        "You're already in a demo! Try switching between different suggestion templates using the controls above.";
                    break;
                case 'support':
                    response =
                        'Our support team is available 24/7. You can reach us through multiple channels for assistance.';
                    break;
                case 'pricing':
                    response =
                        'We offer flexible pricing plans to suit different needs. Would you like to see our pricing tiers?';
                    break;
                case 'help':
                    response =
                        "I'm here to help! You can ask me about features, pricing, documentation, or anything else you need assistance with.";
                    break;
                case 'docs':
                    response =
                        'Check out our comprehensive documentation with guides, API references, and examples at docs.telerik.com/kendo-react-ui.';
                    break;
                case 'settings':
                    response =
                        'Settings panel would open here. You can customize notifications, themes, and chat preferences.';
                    break;
                case 'feedback':
                    response =
                        'Thank you for wanting to share feedback! Your input helps us improve the chat experience.';
                    break;
                case 'contact':
                    response = 'You can contact us via email, phone, or live chat. Our team is ready to assist you!';
                    break;
                case 'excellent':
                case 'good':
                case 'average':
                case 'poor':
                case 'bad':
                    response = `Thank you for rating us as "${suggestion.text}"! Your feedback is valuable to us.`;
                    break;
                default:
                    response = `Thanks for selecting "${suggestion.text}"! Try switching templates to see different styling options.`;
            }

            const botMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: response,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 500);
    };

    // Function to get appropriate suggestions based on template
    const getSuggestionsForTemplate = (templateKey: string) => {
        switch (templateKey) {
            case 'card':
                return cardSuggestions;
            case 'icon':
                return iconSuggestions;
            case 'poll':
                return pollSuggestions;
            default:
                return suggestions;
        }
    };

    // Update suggestions when template changes
    React.useEffect(() => {
        setCurrentSuggestions(getSuggestionsForTemplate(selectedTemplate));
    }, [selectedTemplate]);

    const handleTemplateChange = (templateKey: string) => {
        setSelectedTemplate(templateKey);
        const newSuggestions = getSuggestionsForTemplate(templateKey);
        setCurrentSuggestions(newSuggestions);

        // Add a bot message about the template change
        const templateChangeMessage: Message = {
            id: Date.now(),
            author: bot,
            text: `Switched to "${
                suggestionTemplates[templateKey as keyof typeof suggestionTemplates].name
            }" template! ${suggestionTemplates[templateKey as keyof typeof suggestionTemplates].desc}`,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, templateChangeMessage]);
    };

    const templateKeys = Object.keys(suggestionTemplates);
    const currentTemplate = suggestionTemplates[selectedTemplate as keyof typeof suggestionTemplates];

    const SuggestionTemplate = currentTemplate.component;

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
                <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>Suggestion Template Selector</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    {templateKeys.map((key) => (
                        <Button
                            key={key}
                            onClick={() => handleTemplateChange(key)}
                            selected={selectedTemplate === key}
                            fillMode={selectedTemplate === key ? 'solid' : 'outline'}
                            themeColor={selectedTemplate === key ? 'primary' : 'base'}
                            size="small"
                            rounded="medium"
                        >
                            {suggestionTemplates[key as keyof typeof suggestionTemplates].name}
                        </Button>
                    ))}
                </div>
                <p
                    style={{
                        margin: '0',
                        fontSize: '14px',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }}
                >
                    <strong>Current:</strong> {currentTemplate.name} - {currentTemplate.desc}
                </p>
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                suggestions={currentSuggestions}
                onSuggestionClick={handleSuggestionClick}
                placeholder="Type a message"
                style={{ maxWidth: '400px' }}
                height={600}
                className="k-m-auto"
                suggestionTemplate={SuggestionTemplate}
            />
        </div>
    );
};

export default App;
