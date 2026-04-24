import * as React from 'react';
import { ChatMessageTemplateProps, User } from '@progress/kendo-react-conversational-ui';

// User constants (these should match your main demo)
const user: User = {
    id: 1,
    name: 'Sarah Chen',
    avatarUrl: (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/dropdowns/contacts/RICSU.jpg'
};

// Simple Image Message Template
export const ImageMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    const isUser = item.author.id === user.id;

    return (
        <div
            data-message-id={item.id}
            className="k-message"
            tabIndex={-1}
            style={{
                maxWidth: '80%',
                marginLeft: isUser ? 'auto' : '0',
                marginRight: isUser ? '0' : 'auto'
            }}
        >
            {/* Timestamp */}
            <time className="k-message-time" aria-hidden="true">
                {item.timestamp && item.timestamp.toLocaleString()}
            </time>

            {/* Image with text overlay */}
            {item.imageUrl && (
                <div
                    style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        backgroundColor: 'white',
                        border: '1px solid #e1e5e9'
                    }}
                >
                    <img
                        src={item.imageUrl}
                        alt="Shared image"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '300px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    {item.imageCaption && (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                padding: '12px',
                                fontSize: '1em',
                                color: 'white',
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
                                fontWeight: 500
                            }}
                        >
                            {item.imageCaption}
                        </div>
                    )}
                </div>
            )}

            {/* Text message using Kendo classes */}
            {item.text && !item.imageUrl && (
                <div className="k-chat-bubble k-bubble">
                    <div className="k-bubble-content">
                        <span className="k-chat-bubble-text">{item.text}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
