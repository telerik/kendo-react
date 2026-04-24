import * as React from 'react';
import { Chat, Message, User, ChatSendMessageEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';

const ai: User = {
    id: 0,
    name: 'AI Assistant',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};

const user: User = {
    id: 1,
    name: 'User',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

const initialMessages: Message[] = [
    {
        id: 1,
        author: ai,
        text: 'Hello! I can help you with code reviews, documentation, and technical questions. What would you like to work on today?',
        timestamp: new Date('2025-01-01T10:00:00Z')
    },
    {
        id: 2,
        author: user,
        text: 'I need help reviewing this React component. Here\'s the code:\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(data => {\n        setUser(data);\n        setLoading(false);\n      });\n  }, [userId]);\n  \n  if (loading) return <div>Loading...</div>;\n  if (!user) return <div>User not found</div>;\n  \n  return (\n    <div className="profile">\n      <h1>{user.name}</h1>\n      <p>{user.email}</p>\n      <img src={user.avatar} alt="avatar" />\n    </div>\n  );\n}\n\nCan you identify any issues or improvements?',
        timestamp: new Date('2025-01-01T10:01:00Z')
    },
    {
        id: 3,
        author: ai,
        text: 'Great question! I can see a few improvements:\n\n1. Add error handling for the fetch request\n2. Handle cleanup in useEffect to prevent memory leaks\n3. Add TypeScript types for better type safety\n4. Consider using a loading state library\n\nWould you like me to show you the improved version?',
        timestamp: new Date('2025-01-01T10:02:00Z')
    }
];

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>(initialMessages);
    const [allowCollapse, setAllowCollapse] = React.useState<boolean>(true);

    const handleSendMessage = (event: ChatSendMessageEvent) => {
        const newMessage: Message = {
            id: Date.now(),
            author: user,
            text: event.message.text || ' ',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const toggleCollapse = () => {
        const newCollapseState = !allowCollapse;
        setAllowCollapse(newCollapseState);

        const collapseMessage: Message = {
            id: Date.now(),
            author: ai,
            text: newCollapseState
                ? 'Message collapse enabled. Your long prompts will now be collapsible for a cleaner interface.'
                : 'Message collapse disabled. All your messages will be fully expanded.',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, collapseMessage]);
    };

    const addLongMessage = () => {
        const longMessage: Message = {
            id: Date.now(),
            author: user,
            text: 'Can you help me understand this SQL query and optimize it?\n\nSELECT u.id, u.name, u.email, o.order_date, o.total_amount, p.product_name, p.category\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nLEFT JOIN order_items oi ON o.id = oi.order_id\nLEFT JOIN products p ON oi.product_id = p.id\nWHERE u.created_at > "2024-01-01"\nAND o.status = "completed"\nORDER BY o.order_date DESC;\n\nI\'m experiencing slow performance with this query on a database with millions of records. What indexes should I add, and are there any other optimizations I can make?',
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, longMessage]);
    };

    return (
        <div style={{ height: '650px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '10px' }}>
                <Button
                    onClick={toggleCollapse}
                    fillMode="solid"
                    themeColor="error"
                    size="medium"
                    style={{ marginRight: '10px' }}
                >
                    {allowCollapse ? 'Disable' : 'Enable'} Prompt Collapse
                </Button>
                <Button onClick={addLongMessage} fillMode="solid" themeColor="success" size="medium">
                    Add Long Prompt
                </Button>
            </div>

            <div
                style={{
                    marginBottom: '10px',
                    padding: '8px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '4px',
                    fontSize: '0.9em'
                }}
            >
                {allowCollapse
                    ? '✅ Long user prompts are collapsible - click to expand/collapse'
                    : '❌ All prompts are fully expanded'}
            </div>

            <Chat
                messages={messages}
                authorId={user.id}
                authorMessageSettings={{ allowMessageCollapse: allowCollapse }}
                onSendMessage={handleSendMessage}
                placeholder="Type a long prompt to see collapse in action..."
            />
        </div>
    );
};

export default App;
