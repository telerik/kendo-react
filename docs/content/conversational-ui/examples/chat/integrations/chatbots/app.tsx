import * as React from 'react';
import { Chat, Message } from '@progress/kendo-react-conversational-ui';
import { stopIcon } from '@progress/kendo-svg-icons';

const basePrompt = `You are a Chat Bot assisting users with travel destinations. In your response include:
1. A human-like message relevant to the user input returned in a 'textmessage' object property.
2. Provide a set of cities or destinations as an Array of objects in the following JSON format: [{ id: 1, text: "Paris", value: 'Paris', type: 'reply' }, { id: 2, text: "Option 2", value: 'Option 2', type: 'reply' }, ...] where 'type' must be always 'reply' its not something descriptive. This should be returned in a 'suggestions' object property.
3. Must not respond with any formatting or markdown for the array. It must start and end with exactly []. No extra characters or whitespace are allowed.
Always follow this format for every response.`;

const buildMessagesPayload = (text) => {
    return [
        {
            role: 'user',
            contents: [{ $type: 'text', text }]
        }
    ];
};

// Real API function to get suggestion from Telerik's AI service
const getSuggestion = async (context) => {
    const prompt = `${basePrompt} ${context}`;
    const payload = buildMessagesPayload(prompt);

    const url = 'https://demos.telerik.com/service/v2/ai/completion';

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        try {
            const parsedData = result.messages[0].contents[0].text;
            return JSON.parse(parsedData);
        } catch (parseError) {
            return 'Something went wrong. Please try again.';
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw error; // Re-throw abort errors to handle them specifically
        }
        return 'Error making request. Please try again.';
    }
};

const user1 = {
    id: 1,
    name: 'John',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + '/assets/dropdowns/contacts/RICSU.jpg',
    avatarAltText: 'KendoReact Conversational UI RICSU'
};
const ai_tool = {
    id: 'ai_tool',
    name: 'Travel Agent',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};
const initialMessages = [
    {
        id: 1,
        author: ai_tool,
        text: "Hi! Are you looking for an exciting new place to explore? Whether you're dreaming of city adventures, relaxing beaches, or cultural experiences, I can help you find the perfect destination. Here are some options to consider:",
        suggestedActions: [
            {
                id: 1,
                value: 'Paris',
                type: 'reply'
            },
            {
                id: 2,
                value: 'Tokyo',
                type: 'reply'
            },
            {
                id: 3,
                value: 'Bali',
                type: 'reply'
            },
            {
                id: 4,
                value: 'New York',
                type: 'reply'
            },
            {
                id: 5,
                value: 'Rome',
                type: 'reply'
            }
        ]
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [sendButtonConfig, setSendButtonConfig] = React.useState({});
    const messageIdCounterRef = React.useRef(initialMessages.length);

    // Generate unique ID that never decreases
    const generateMessageId = React.useCallback(() => {
        messageIdCounterRef.current += 1;
        return `msg-${Date.now()}-${messageIdCounterRef.current}`;
    }, []);

    const addNewMessage = async (event, user) => {
        console.log('New message sent:', event.message);

        // Add user message
        const userMessage = {
            ...event.message,
            id: generateMessageId(),
            author: user
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Add typing indicator
        const typingMessage: Message = {
            id: generateMessageId(),
            author: ai_tool,
            typing: true,
            timestamp: new Date()
        };
        setMessages((prevMessages) => [...prevMessages, typingMessage]);

        // Set generating state with enabled send button for abort
        setSendButtonConfig({
            iconSize: 'small',
            svgIcon: stopIcon,
            className: 'k-generating',
            title: 'Stop generation',
            disabled: false
        });

        // Check if message has text content
        if (!event.message.text) {
            // Remove typing indicator
            setMessages((prevMessages) => prevMessages.filter((msg) => !msg.typing));
            setSendButtonConfig({});
            return;
        }

        try {
            // Get AI response
            const responseContent = await getSuggestion(event.message.text);

            // Create AI response message
            const aiResponse = {
                id: generateMessageId(),
                author: ai_tool,
                text: responseContent.textmessage,
                suggestedActions: responseContent.suggestions,
                timestamp: new Date()
            };

            // Add AI response message
            setMessages((prevMessages) => [...prevMessages, aiResponse]);
        } catch (error) {
            // Optionally add error message
            const errorMessage = {
                id: generateMessageId(),
                author: ai_tool,
                text: 'Sorry, something went wrong. Please try again.',
                timestamp: new Date()
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setSendButtonConfig({});
        }
    };

    return (
        <Chat
            authorId={1}
            messages={messages}
            className="k-m-auto"
            style={{ maxWidth: '400px' }}
            height={600}
            onSendMessage={(ev) => {
                addNewMessage(ev, user1);
            }}
            placeholder={'Type a message...'}
            sendButtonConfig={sendButtonConfig}
        />
    );
};
export default App;
