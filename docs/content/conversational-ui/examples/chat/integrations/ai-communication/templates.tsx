import * as React from 'react';
import { ChatMessageTemplateProps, ChatFile, Message } from '@progress/kendo-react-conversational-ui';
import { Button, DropDownButton } from '@progress/kendo-react-buttons';
import { downloadIcon, sparklesIcon, moreVerticalIcon, trashIcon } from '@progress/kendo-svg-icons';
import { SvgIcon, IconWrap, getFileExtensionIcon } from '@progress/kendo-react-common';
import { Avatar } from '@progress/kendo-react-layout';

const avatar_link = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/conversational-ui/chat/avatar.png';

/**
 * Custom message template for AI responses with transparent background
 */
export const AIMessageTemplate: React.FC<ChatMessageTemplateProps> = ({ item }) => {
    const formatFileSize = (bytes?: number): string => {
        if (bytes === undefined || bytes === null) {
            return '';
        }
        if (bytes === 0) {
            return '0 B';
        }

        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    };

    const getFileExtension = (fileName: string): string => {
        return '.' + (fileName.split('.').pop() || '');
    };

    const handleDownloadFile = (file: ChatFile) => {
        const a = document.createElement('a');
        a.href = file.url || '';
        a.download = file.name;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div style={{ background: 'transparent', padding: 0 }}>
            {item?.text}
            {item?.files && item.files.length > 0 && (
                <ul className="k-file-box-wrapper k-files-wrap mt-2">
                    {item.files.map((file) => (
                        <li key={file.id} className="k-file-box">
                            <IconWrap size={'xlarge'} {...getFileExtensionIcon(getFileExtension(file.name))} />
                            <div className="k-file-info">
                                <span className="k-file-name">{file.name}</span>
                                <span className="k-file-size">{formatFileSize(file.size)}</span>
                            </div>
                            <Button
                                fillMode={'flat'}
                                themeColor={'base'}
                                svgIcon={downloadIcon}
                                onClick={() => handleDownloadFile(file)}
                                aria-label={`Download ${file.name}`}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

/**
 * Empty chat template displayed when there are no messages
 */
export const AskAIEmptyTemplate = () => (
    <div
        style={{
            width: '100%',
            minHeight: '330px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '24px',
            padding: '20px'
        }}
    >
        <SvgIcon
            icon={sparklesIcon}
            style={{ fontSize: '64px', width: '64px', height: '64px', color: 'var(--kendo-color-primary-emphasis)' }}
        />
        <div>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-lg)' }}>Ask AI</p>
            <p style={{ margin: '0', fontSize: 'var(--kendo-font-size-md)', color: '#6c757d' }}>
                Start conversation by typing a message or selecting a prompt.
            </p>
        </div>
    </div>
);

/**
 * Custom header template for the chat
 */
export const CustomHeaderTemplate: React.FC<{
    messages: Message[];
    onShowClearDialog: () => void;
}> = ({ messages, onShowClearDialog }) => {
    const handleItemClick = (props: any) => {
        switch (props.item.name) {
            case 'download':
                console.log('Downloading conversation...');
                const formattedMessages = messages
                    .map((msg) => {
                        let messageText = `${msg.author.name}: ${msg.text}`;
                        if (msg.files && msg.files.length > 0) {
                            const fileNames = msg.files.map((file) => file.name).join(', ');
                            messageText += `\n[Note: This message contains file(s): ${fileNames}]`;
                        }
                        return messageText;
                    })
                    .join('\n');
                const blob = new Blob([formattedMessages], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'conversation.txt';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                break;
            case 'clear':
                onShowClearDialog();
                break;
        }
    };

    return (
        <>
            <Avatar rounded="full" type="image">
                <img src={avatar_link} alt="AI Assistant" />
            </Avatar>
            <div className={'k-spacer'} />
            <div>Chat with an AI Service</div>
            <div className={'k-spacer'} />
            <DropDownButton
                fillMode={'clear'}
                svgIcon={moreVerticalIcon}
                onItemClick={handleItemClick}
                items={[
                    {
                        name: 'download',
                        text: 'Download conversation',
                        svgIcon: downloadIcon
                    },
                    {
                        name: 'clear',
                        text: 'Clear conversation',
                        svgIcon: trashIcon
                    }
                ]}
            />
        </>
    );
};
