import * as React from 'react';
import { ChatMessageTemplateProps } from '@progress/kendo-react-conversational-ui';
import { checkCircleIcon, infoCircleIcon, exclamationCircleIcon, fileIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-react-common';

const FormattedContentTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    // Format text with bold for **text** and italic for *text*
    const formatText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            } else if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={index}>{part.slice(1, -1)}</em>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div>
            <div style={{ lineHeight: '1.6' }}>{item?.text && formatText(item.text)}</div>
            {item?.files && item.files.length > 0 && (
                <div style={{ marginTop: '10px', borderTop: '1px solid #e0e0e0', paddingTop: '8px' }}>
                    {item.files.map((file: any) => (
                        <div
                            key={file.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '0.9em',
                                padding: '4px 0'
                            }}
                        >
                            <SvgIcon icon={fileIcon} style={{ fontSize: '16px' }} />
                            <span style={{ fontWeight: 500 }}>{file.name}</span>
                            <span style={{ color: '#999' }}>({(file.size / 1024).toFixed(1)} KB)</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const IconPrefixTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    const isUserMessage = item?.author?.id === 1;
    const icon = isUserMessage ? checkCircleIcon : infoCircleIcon;

    return (
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <SvgIcon icon={icon} style={{ fontSize: '18px', marginTop: '2px', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
                {item?.text}
                {item?.files && item.files.length > 0 && (
                    <div style={{ marginTop: '8px', fontSize: '0.9em', color: '#666' }}>
                        {item.files.map((file: any) => (
                            <div key={file.id}>📄 {file.name}</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const StructuredContentTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    // Split text by line breaks to create structured sections
    const lines = item?.text?.split('\n').filter((line) => line.trim()) || [];

    return (
        <div>
            {lines.length > 1 ? (
                <div>
                    <div style={{ fontSize: '1.05em', fontWeight: 600, marginBottom: '8px' }}>{lines[0]}</div>
                    {lines.slice(1).map((line, index) => (
                        <div key={index} style={{ marginBottom: '4px', paddingLeft: '12px' }}>
                            • {line}
                        </div>
                    ))}
                </div>
            ) : (
                <div>{item?.text}</div>
            )}
            {item?.files && item.files.length > 0 && (
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed #ddd' }}>
                    <div style={{ fontSize: '0.85em', fontWeight: 600, marginBottom: '6px', color: '#666' }}>
                        ATTACHMENTS ({item.files.length})
                    </div>
                    {item.files.map((file: any) => (
                        <div key={file.id} style={{ fontSize: '0.9em', padding: '2px 0' }}>
                            → {file.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const StatusDetectionTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    const text = item?.text || '';

    let statusIcon = infoCircleIcon;
    let statusLabel = 'Info';

    if (text.toLowerCase().includes('error') || text.toLowerCase().includes('failed')) {
        statusIcon = exclamationCircleIcon;
        statusLabel = 'Error';
    } else if (text.toLowerCase().includes('success') || text.toLowerCase().includes('complete')) {
        statusIcon = checkCircleIcon;
        statusLabel = 'Success';
    } else if (text.toLowerCase().includes('warning') || text.toLowerCase().includes('caution')) {
        statusIcon = exclamationCircleIcon;
        statusLabel = 'Warning';
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <SvgIcon icon={statusIcon} style={{ fontSize: '16px' }} />
                <span style={{ fontSize: '0.85em', fontWeight: 600, textTransform: 'uppercase' }}>{statusLabel}</span>
            </div>
            <div>{text}</div>
            {item?.files && item.files.length > 0 && (
                <div style={{ marginTop: '8px' }}>
                    {item.files.map((file: any) => (
                        <div key={file.id} style={{ fontSize: '0.9em' }}>
                            📎 {file.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export const contentTemplates = {
    default: {
        name: 'Default',
        desc: 'Standard content with file attachments',
        component: undefined
    },
    formatted: {
        name: 'Formatted Text',
        desc: 'Supports **bold** and *italic* markdown-style formatting',
        component: FormattedContentTemplate
    },
    iconPrefix: {
        name: 'Icon Prefix',
        desc: 'Adds an icon before the message content',
        component: IconPrefixTemplate
    },
    structured: {
        name: 'Structured',
        desc: 'First line as heading, remaining lines as bullet points',
        component: StructuredContentTemplate
    },
    statusDetection: {
        name: 'Status Detection',
        desc: 'Auto-detects and displays status based on keywords',
        component: StatusDetectionTemplate
    }
};
