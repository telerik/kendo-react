import * as React from 'react';
import { Chat, Message, User } from '@progress/kendo-react-conversational-ui';
import { Label } from '@progress/kendo-react-labels';

const bot: User = {
    id: 0,
    name: 'KendoBot',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/GOURL.jpg'
};

const user: User = {
    id: 1,
    name: 'You',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: bot,
        text: "Welcome to the KendoReact Chat! I'm here to demonstrate the key features of our conversational interface.",
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: bot,
        text: 'You can send messages, use suggestions, upload files, and much more. Try typing a message below!',
        timestamp: new Date('2025-01-01T10:00:30Z')
    }
];

const suggestions = [
    { id: 'hello', text: 'Hello!' },
    { id: 'features', text: 'Show me features' },
    { id: 'help', text: 'I need help' },
    { id: 'demo', text: 'Start demo' }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);

    const handleSendMessage = (event: any) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, newMessage]);

        // Simulate bot response
        setTimeout(() => {
            let botResponse = '';
            const messageText = event.message.text.toLowerCase();

            if (messageText.includes('hello') || messageText.includes('hi')) {
                botResponse = 'Hello there! Great to meet you. I can help you explore the Chat component features.';
            } else if (messageText.includes('features')) {
                botResponse =
                    'The Chat component includes: message threading, file uploads, AI integration, customizable templates, suggestions, and much more!';
            } else if (messageText.includes('help')) {
                botResponse =
                    "I'm here to help! You can ask me about any Chat component features, or use the suggestions above for quick actions.";
            } else if (messageText.includes('demo')) {
                botResponse =
                    'This is a live demo! Try sending different messages, using suggestions, or exploring the various Chat capabilities.';
            } else {
                botResponse = `You said: "${event.message.text}". This demonstrates real-time message exchange with automatic responses!`;
            }

            const responseMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: botResponse,
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, responseMessage]);
        }, 800);
    };

    const handleSuggestionClick = (suggestion: any) => {
        const suggestionMessage: Message = {
            id: Date.now(),
            author: user,
            text: suggestion.text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, suggestionMessage]);

        // Handle specific suggestion responses
        setTimeout(() => {
            let response = '';
            switch (suggestion.id) {
                case 'hello':
                    response = 'Hello! Welcome to the KendoReact Chat. What would you like to explore today?';
                    break;
                case 'features':
                    response =
                        'Here are some key features: 🎯 Smart suggestions, 📁 File uploads, 🤖 AI integration, 🎨 Custom templates, ⌨️ Keyboard navigation, and ♿ Full accessibility support!';
                    break;
                case 'help':
                    response =
                        "I'm here to assist! You can ask about any feature, try the suggestions, or just have a conversation to see the Chat in action.";
                    break;
                case 'demo':
                    response =
                        'Perfect! This is a fully functional demo. Try different interactions to see how the Chat component responds and adapts.';
                    break;
                default:
                    response = 'Thanks for using the suggestions! They make conversations faster and more interactive.';
            }

            const responseMessage: Message = {
                id: Date.now() + 1,
                author: bot,
                text: response,
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, responseMessage]);
        }, 600);
    };

    return (
        <div className="k-d-flex-col k-align-items-center">
            <Label>Chat</Label>
            <Chat
                messages={messages}
                authorId={user.id}
                suggestions={suggestions}
                onSendMessage={handleSendMessage}
                onSuggestionClick={handleSuggestionClick}
                placeholder="Type your message here..."
                height={600}
                width={400}
            />
        </div>
    );
};

export default App;
