import * as React from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';
const currentUser = {
    id: 1,
    name: 'John Doe',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};
const supportAgent = {
    id: 2,
    name: 'Support Agent',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png'
};
const initialMessages = [
    {
        id: 1,
        author: supportAgent,
        text: "Hello and welcome to our customer support chat! My name is Jamie and I'm here to assist you today. I have access to all your account information and can help with billing questions, technical issues, account updates, password resets, and general inquiries about our services. How can I help you today?",
        timestamp: new Date('2025-01-01T10:00:00Z'),
        status: 'read'
    },
    {
        id: 2,
        author: currentUser,
        text: "Hi Jamie! Thank you for the warm welcome. I really appreciate having someone available to help. I've been trying to access my account for the past few days and I'm having some issues. I have a question about my account settings and also need help with updating my billing information.",
        timestamp: new Date('2025-01-01T10:01:00Z'),
        status: 'delivered'
    },
    {
        id: 3,
        author: supportAgent,
        text: "I'd be absolutely happy to help you with both your account access issues and billing information updates. These are very common requests and I deal with them regularly, so you're in good hands. Let me start by asking you a few questions to better understand your situation. What specific question do you have about your account settings? And regarding the billing information, what exactly are you trying to update - is it your payment method, billing address, or something else?",
        timestamp: new Date('2025-01-01T10:02:00Z'),
        status: 'read'
    },
    {
        id: 4,
        author: currentUser,
        text: "Thanks for asking those detailed questions! So regarding my account settings, I can't seem to update my billing information through the online portal. Every time I try to save changes to my credit card information, the form keeps giving me an error message that says 'Unable to process request' without any additional details. I've tried using different browsers (Chrome, Firefox, and Safari) and cleared my cache multiple times, but the issue persists. It's quite frustrating because my card expires next month and I want to make sure my service isn't interrupted.",
        timestamp: new Date('2025-01-01T10:03:00Z'),
        status: 'read',
        replyToId: 3
    },
    {
        id: 5,
        author: supportAgent,
        text: "I completely understand your frustration with the billing update form, and I really appreciate you trying multiple browsers and clearing your cache - those are exactly the troubleshooting steps I would have suggested! This is actually a known issue that we've been working to resolve, and it typically happens when there are special characters in the billing address or when the new card number format doesn't match our validation criteria. Let me guide you through the correct process step by step, and I can also update this information manually from my end if needed to ensure your service continues uninterrupted.",
        timestamp: new Date('2025-01-01T10:04:00Z'),
        status: 'read',
        replyToId: 4
    },
    {
        id: 6,
        author: currentUser,
        text: "That would be absolutely wonderful, thank you so much! I really appreciate you taking the time to explain the issue and offering to help manually. It's such a relief to know that this is a known issue and that there's a solution. I was starting to worry that there might be something wrong with my account or that I'd lose access to my services when my card expires.",
        timestamp: new Date('2025-01-01T10:05:00Z'),
        status: 'delivered',
        replyToId: 5
    },
    {
        id: 7,
        author: supportAgent,
        text: "You're very welcome, and please don't worry about losing access to your services! We always work with our customers to ensure continuity. Now, let me walk you through a few more troubleshooting steps first, and then I'll show you how to access the alternative billing update method that works more reliably. Can you tell me if you're seeing any specific error codes in the browser's developer console? Also, are you using any browser extensions that might be blocking certain scripts? Sometimes ad blockers or privacy extensions can interfere with payment forms.",
        timestamp: new Date('2025-01-01T10:06:00Z'),
        status: 'read'
    },
    {
        id: 8,
        author: currentUser,
        text: "Great questions! I haven't checked the developer console - I'm not super technical but I can try to open it if you can guide me through that process. As for browser extensions, yes, I do have an ad blocker (uBlock Origin) and a privacy extension (Privacy Badger) running. I use these on all my browsers for security reasons. Should I try disabling them temporarily to see if that resolves the issue?",
        timestamp: new Date('2025-01-01T10:07:00Z'),
        status: 'delivered',
        replyToId: 7
    },
    {
        id: 9,
        author: supportAgent,
        text: "Perfect! You've identified exactly what I suspected might be the issue. Privacy extensions and ad blockers, while excellent for security and privacy, can sometimes interfere with legitimate payment processing scripts because they're designed to block tracking and third-party scripts. Let's try disabling them temporarily - just for our payment portal. You can either disable them completely for a few minutes, or better yet, add our payment domain to your extension's whitelist so you don't have to disable them entirely in the future.",
        timestamp: new Date('2025-01-01T10:08:00Z'),
        status: 'read',
        replyToId: 8
    }
];
const App = () => {
    const [messages, setMessages] = React.useState(initialMessages);
    const handleSendMessage = (event) => {
        console.log(event);
        const newMessage = {
            id: Date.now(),
            author: currentUser,
            text: event.message.text || ' ',
            timestamp: new Date(),
            status: 'sent',
            replyToId: event.message.replyToId
        };
        setMessages((prev) => [...prev, newMessage]);

        // Update message status to delivered after a short delay
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? {
                              ...msg,
                              status: 'delivered'
                          }
                        : msg
                )
            );
        }, 500);

        // Update message status to read after another delay
        setTimeout(() => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === newMessage.id
                        ? {
                              ...msg,
                              status: 'read'
                          }
                        : msg
                )
            );
        }, 1000);

        // Simulate agent response
        setTimeout(() => {
            const responses = [
                "Thank you for providing that detailed information. I really appreciate you taking the time to explain your situation thoroughly. Let me review what you've told me and check our system to see what options are available. This might take just a moment, but I want to make sure I give you the most accurate and helpful guidance possible.",
                "I understand your concern completely, and I want to assure you that we'll get this resolved today. Based on what you've described, I can see a few different approaches we could take. Let me walk you through each option so you can choose what works best for your situation. I'll also make sure to document everything in your account for future reference.",
                "That's an excellent question, and I'm glad you brought this up! This is actually something that many of our customers ask about, and I have quite a bit of experience helping people navigate this exact situation. Let me share some insights that should help clarify things and provide you with a clear path forward.",
                "I can see exactly what you mean, and you're absolutely right to be concerned about this. Let me explain how our system works in this particular case and walk you through the step-by-step process. I want to make sure you have all the information you need to feel confident about proceeding, and I'll be here to support you through each step.",
                "Thanks so much for reaching out about this! I'm really glad you contacted us because this is definitely something we can help resolve quickly and efficiently. I have access to several tools and options that should address your specific needs, and I'll make sure we find the perfect solution for your particular circumstances."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const agentResponse = {
                id: Date.now() + 1,
                author: supportAgent,
                text: randomResponse,
                timestamp: new Date(),
                status: 'sent'
            };
            setMessages((prev) => [...prev, agentResponse]);

            // Update agent message status
            setTimeout(() => {
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === agentResponse.id
                            ? {
                                  ...msg,
                                  status: 'delivered'
                              }
                            : msg
                    )
                );
            }, 300);
        }, 1500);
    };

    return (
        <div
            style={{
                height: '650px',
                width: '100%'
            }}
        >
            <div
                style={{
                    marginBottom: '10px',
                    padding: '12px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '6px',
                    fontSize: '14px'
                }}
            >
                <strong>Standard Data Binding:</strong> This demo shows message status updates and threaded reply
                functionality. Messages display status indicators (sent, delivered, read) and use the{' '}
                <code>replyToId</code> property to create threaded conversations with visual reply indicators. Click on
                any replied message to see scrolling behavior that highlights the original message being replied to.
            </div>

            <Chat
                messages={messages}
                authorId={currentUser.id}
                onSendMessage={handleSendMessage}
                placeholder="Type your message..."
                height={600}
                style={{ maxWidth: '400px' }}
                className="k-m-auto"
            />
        </div>
    );
};
export default App;
