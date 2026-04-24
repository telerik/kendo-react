import * as React from 'react';

interface AttachmentTemplateProps {
    item: {
        contentType: string;
        content?: string;
        site?: string;
        title?: string;
    };
}

export const AttachmentTemplate: React.FC<AttachmentTemplateProps> = (props) => {
    const attachment = props.item;

    if (attachment.contentType === 'hotel') {
        return (
            <div
                style={{
                    position: 'relative',
                    width: 150,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <a href={attachment.site} target="_blank" draggable={false} tabIndex={-1} rel="noopener noreferrer">
                    <img
                        alt={attachment.title || 'Hotel'}
                        style={{ width: '100%', display: 'block' }}
                        src={attachment.content}
                        draggable={false}
                    />
                    {attachment.title && (
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '8px',
                                color: 'white',
                                fontSize: '0.9em',
                                fontWeight: 600,
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)',
                                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                            }}
                        >
                            {attachment.title}
                        </div>
                    )}
                </a>
            </div>
        );
    } else if (attachment.contentType === 'trip-details') {
        // Parse and format trip details with bold labels
        const lines = attachment.content?.split('\n') || [];
        return (
            <div className="k-chat-bubble k-bubble mt-2">
                <div
                    className="k-chat-bubble-content"
                    style={{
                        fontSize: '0.9em',
                        lineHeight: '1.6'
                    }}
                >
                    {lines.map((line, index) => {
                        const [label, ...valueParts] = line.split(':');
                        const value = valueParts.join(':').trim();
                        return (
                            <div key={index} style={{ marginBottom: index < lines.length - 1 ? '4px' : '0' }}>
                                <strong>{label}:</strong> {value}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return null;
};
