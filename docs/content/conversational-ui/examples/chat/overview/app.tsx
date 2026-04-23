import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { SVGIcon } from '@progress/kendo-react-common';
import {
    trashIcon,
    thumbUpOutlineIcon,
    thumbDownOutlineIcon,
    arrowsRotateOutlineIcon
} from '@progress/kendo-svg-icons';
import { setOptions } from 'marked';
import { ChatAIService } from './data-service';
import './styles.css';

const bot: User = { id: 0 };
const user: User = { id: 1 };

const sidebarIcon: SVGIcon = {
    content: `<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.6875 0.916667V10.0833H1.625C1.17559 10.0833 0.8125 9.6737 0.8125 9.16667V1.83333C0.8125 1.3263 1.17559 0.916667 1.625 0.916667H3.6875ZM5.09375 0H1.625C0.728711 0 0 0.822135 0 1.83333V9.16667C0 10.1779 0.728711 11 1.625 11H10.375C11.2713 11 12 10.1779 12 9.16667V1.83333C12 0.822135 11.2713 0 10.375 0H5.09375ZM4.5 0.916667H10.375C10.8244 0.916667 11.1875 1.3263 11.1875 1.83333V9.16667C11.1875 9.6737 10.8244 10.0833 10.375 10.0833H4.5V0.916667Z" fill="currentColor"/>
</svg>
`,
    name: 'sidebar',
    viewBox: '0 0 12 11'
};

const pencilIcon: SVGIcon = {
    content: `<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
<path d="M11.365 1.03625L11.6675 1.33875C11.98 1.65125 11.98 2.15875 11.6675 2.47125L11 3.13875L9.565 1.70375L10.235 1.03625C10.5475 0.72375 11.055 0.72375 11.3675 1.03625H11.365ZM4.725 6.54375L9 2.27125L10.435 3.70625L6.16 7.98125C6.055 8.08625 5.92 8.16125 5.775 8.19625L4.135 8.57375L4.5125 6.93375C4.545 6.78875 4.62 6.65375 4.7275 6.54875L4.725 6.54375ZM9.6675 0.46875L4.16 5.97875C3.9475 6.19125 3.8 6.45875 3.7325 6.75125L3.21 9.01625C3.18 9.15125 3.22 9.29125 3.3175 9.38875C3.415 9.48625 3.555 9.52625 3.69 9.49625L5.955 8.97375C6.2475 8.90625 6.515 8.75875 6.7275 8.54625L12.235 3.03625C12.86 2.41125 12.86 1.39875 12.235 0.77375L11.9325 0.46875C11.3075 -0.15625 10.295 -0.15625 9.67 0.46875H9.6675ZM2 1.50375C0.895 1.50375 0 2.39875 0 3.50375V10.7037C0 11.8088 0.895 12.7037 2 12.7037H9.2C10.305 12.7037 11.2 11.8088 11.2 10.7037V7.50375C11.2 7.28375 11.02 7.10375 10.8 7.10375C10.58 7.10375 10.4 7.28375 10.4 7.50375V10.7037C10.4 11.3663 9.8625 11.9038 9.2 11.9038H2C1.3375 11.9038 0.8 11.3663 0.8 10.7037V3.50375C0.8 2.84125 1.3375 2.30375 2 2.30375H5.2C5.42 2.30375 5.6 2.12375 5.6 1.90375C5.6 1.68375 5.42 1.50375 5.2 1.50375H2Z"/>
</svg>`,
    name: 'pencil',
    viewBox: '0 0 13 13'
};

const attachIcon: SVGIcon = {
    content: `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36398 0.499931C6.364 0.223846 6.58784 3.61589e-05 6.86392 -1.56291e-05C7.14005 -1.58187e-05 7.36384 0.223813 7.36387 0.499931L7.36387 6.36395H13.2279C13.504 6.36395 13.7278 6.58775 13.7278 6.86389C13.7278 7.14003 13.504 7.36384 13.2279 7.36384H7.36387L7.36387 13.2279C7.36387 13.504 7.14006 13.7278 6.86392 13.7278C6.58782 13.7277 6.36397 13.504 6.36398 13.2279L6.36398 7.36384L0.499961 7.36384C0.223819 7.36384 1.45116e-05 7.14003 1.4501e-05 6.86389C1.45116e-05 6.58775 0.223819 6.36395 0.499961 6.36395L6.36398 6.36395L6.36398 0.499931Z"/>
</svg>`,
    name: 'attach',
    viewBox: '0 0 14 14'
};

interface ChatHistory {
    id: number;
    title: string;
    messages: AppMessage[];
}

type AppMessage = Message & {
    isThinking?: boolean;
};

type BreakpointMode = 'desktop' | 'tablet' | 'mobile';

const getBreakpointMode = (): BreakpointMode => {
    if (typeof window === 'undefined') {
        return 'desktop';
    }

    const width = window.innerWidth;

    if (width > 768) {
        return 'desktop';
    }

    if (width > 360) {
        return 'tablet';
    }

    return 'mobile';
};

interface CodeBlockProps {
    language: string;
    code: string;
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
    const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        await navigator.clipboard.writeText(code);
    };

    return (
        <div className="code-block-wrapper">
            <div className="code-block-header">
                <span className="code-block-language">{language}</span>
                <Button className="code-block-copy" onClick={handleCopy} fillMode="flat">
                    <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor">
                        <path d="M384 96H192c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192zm64 352H192V128h160v96h96zM64 384h64v32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h192l32 32H64z"></path>
                    </svg>
                    Copy code
                </Button>
            </div>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

const ChatFeedback = () => {
    return (
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <Button fillMode="flat" size="small" svgIcon={thumbUpOutlineIcon} />
            <Button fillMode="flat" size="small" svgIcon={thumbDownOutlineIcon} />
            <Button fillMode="flat" size="small" svgIcon={arrowsRotateOutlineIcon} />
        </div>
    );
};

const TypingIndicator = () => {
    return (
        <div className="typing-indicator">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
        </div>
    );
};

const App = () => {
    const [expanded, setExpanded] = React.useState<boolean>(true);
    const [messages, setMessages] = React.useState<AppMessage[]>([]);
    const [chatHistories, setChatHistories] = React.useState<ChatHistory[]>([]);
    const [selectedChatId, setSelectedChatId] = React.useState<number | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [breakpointMode, setBreakpointMode] = React.useState<BreakpointMode>(getBreakpointMode());

    const isMobile = breakpointMode === 'mobile';
    const isTablet = breakpointMode === 'tablet';

    React.useEffect(() => {
        if (selectedChatId === null && chatHistories.length === 0) {
            handleNewChat();
        }
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setBreakpointMode(getBreakpointMode());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        if (breakpointMode !== 'desktop') {
            setExpanded(false);
        }
    }, [breakpointMode]);

    const handleToggleDrawer = () => {
        setExpanded(!expanded);
    };

    const chatService = React.useMemo(() => new ChatAIService(), []);

    const addMessage = (event: ChatSendMessageEvent): void => {
        const messageText = event.message.text?.trim();
        const hasFiles = event.message.files && event.message.files.length > 0;

        if (!messageText && !hasFiles) return;

        const newUserMessage: AppMessage = {
            ...event.message,
            id: Date.now(),
            author: user,
            text: messageText || ''
        };

        setMessages((prev) => [...prev, newUserMessage]);

        const currentChat = chatHistories.find((chat) => chat.id === selectedChatId);
        const isNewChat = currentChat && currentChat.messages.length === 0;

        if (isNewChat) {
            const chatTitle =
                messageText && messageText.length > 30
                    ? messageText.substring(0, 30) + '...'
                    : messageText || 'New Chat';
            setChatHistories((prev) =>
                prev.map((chat) => {
                    if (chat.id === selectedChatId) {
                        return {
                            ...chat,
                            title: chatTitle,
                            messages: [newUserMessage]
                        };
                    }
                    return chat;
                })
            );
        } else {
            setChatHistories((prev) =>
                prev.map((chat) => {
                    if (chat.id === selectedChatId) {
                        return {
                            ...chat,
                            messages: [...chat.messages, newUserMessage]
                        };
                    }
                    return chat;
                })
            );
        }

        if (!messageText) {
            return;
        }

        const activeChatId = selectedChatId;
        const fileNames = hasFiles && newUserMessage.files ? newUserMessage.files.map((file) => file.name) : undefined;

        setTimeout(() => {
            const thinkingMessage: AppMessage = {
                id: Date.now() + 1,
                author: bot,
                text: '',
                isThinking: true
            };

            setMessages((prev) => [...prev, thinkingMessage]);
            setChatHistories((prevHistories) =>
                prevHistories.map((chat) => {
                    if (chat.id === activeChatId) {
                        return {
                            ...chat,
                            messages: [...chat.messages, thinkingMessage]
                        };
                    }

                    return chat;
                })
            );
            setIsLoading(true);

            chatService
                .analyzeData(messageText, fileNames)
                .then((aiResponse) => {
                    setTimeout(() => {
                        const botResponse: AppMessage = {
                            id: Date.now() + 2,
                            author: bot,
                            text: aiResponse
                        };
                        setMessages((prev) => [...prev.filter((message) => !message.isThinking), botResponse]);

                        setChatHistories((prevHistories) =>
                            prevHistories.map((chat) => {
                                if (chat.id === activeChatId) {
                                    return {
                                        ...chat,
                                        messages: [
                                            ...chat.messages.filter((message) => !message.isThinking),
                                            botResponse
                                        ]
                                    };
                                }
                                return chat;
                            })
                        );
                    }, 10);
                })
                .catch(() => {
                    setTimeout(() => {
                        const errorMessage: AppMessage = {
                            id: Date.now() + 3,
                            author: bot,
                            text: 'Sorry, there was an error processing your request. Please try again.'
                        };
                        setMessages((prev) => [...prev.filter((message) => !message.isThinking), errorMessage]);

                        setChatHistories((prevHistories) =>
                            prevHistories.map((chat) => {
                                if (chat.id === activeChatId) {
                                    return {
                                        ...chat,
                                        messages: [
                                            ...chat.messages.filter((message) => !message.isThinking),
                                            errorMessage
                                        ]
                                    };
                                }
                                return chat;
                            })
                        );
                    }, 10);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 0);
    };

    const handleNewChat = () => {
        const emptyChat = chatHistories.find((chat) => chat.messages.length === 0);

        if (emptyChat) {
            setSelectedChatId(emptyChat.id);
            setMessages([]);

            if (breakpointMode !== 'desktop' && expanded) {
                setExpanded(false);
            }

            return;
        }

        const newChatId = chatHistories.length > 0 ? Math.max(...chatHistories.map((c) => c.id)) + 1 : 1;
        const newChat: ChatHistory = {
            id: newChatId,
            title: 'New Chat',
            messages: []
        };
        setChatHistories([newChat, ...chatHistories]);
        setSelectedChatId(newChatId);
        setMessages([]);

        if (breakpointMode !== 'desktop' && expanded) {
            setExpanded(false);
        }
    };

    const handleSelectChat = (chatId: number) => {
        const selectedChat = chatHistories.find((chat) => chat.id === chatId);
        if (selectedChat) {
            setSelectedChatId(chatId);
            setMessages(selectedChat.messages);

            if (breakpointMode !== 'desktop' && expanded) {
                setExpanded(false);
            }
        }
    };

    const handleDeleteChat = (e: React.MouseEvent, chatId: number) => {
        e.stopPropagation();
        const updatedHistories = chatHistories.filter((chat) => chat.id !== chatId);
        setChatHistories(updatedHistories);

        if (selectedChatId === chatId) {
            if (updatedHistories.length > 0) {
                setSelectedChatId(updatedHistories[0].id);
                setMessages(updatedHistories[0].messages);
            } else {
                setSelectedChatId(null);
                setMessages([]);
                handleNewChat();
            }
        }
    };

    const messageTemplate = (props: ChatMessageTemplateProps) => {
        const message = props.item as AppMessage;
        const isUser = message.author?.id === user.id;

        if (message.isThinking) {
            return (
                <div className="k-message-group k-alt">
                    <div className="custom-bot-message">
                        <TypingIndicator />
                    </div>
                </div>
            );
        }

        if (isUser) {
            return (
                <div className="k-message-group">
                    <div className="k-message-box">
                        <div className="k-bubble">
                            <div>{message.text}</div>
                        </div>
                    </div>
                </div>
            );
        }

        const parser = setOptions({});
        const parsedMessage = parser.parse(message.text || '') as string;

        const codeBlocks: { language: string; code: string }[] = [];
        const codeBlockRegex = /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g;

        const processedHtml = parsedMessage.replace(codeBlockRegex, (_match, language, code) => {
            const decodedCode = code
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'");

            codeBlocks.push({ language, code: decodedCode });
            return `<code-block-placeholder-${codeBlocks.length - 1}></code-block-placeholder-${
                codeBlocks.length - 1
            }>`;
        });

        if (codeBlocks.length === 0) {
            return (
                <div className="k-message-group k-alt">
                    <div className="custom-bot-message">
                        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: parsedMessage }} />
                        <ChatFeedback />
                    </div>
                </div>
            );
        }

        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;

        codeBlocks.forEach((block, index) => {
            const placeholder = `<code-block-placeholder-${index}></code-block-placeholder-${index}>`;
            const placeholderIndex = processedHtml.indexOf(placeholder, lastIndex);

            if (placeholderIndex > lastIndex) {
                const htmlPart = processedHtml.substring(lastIndex, placeholderIndex);
                parts.push(<span key={`html-${index}`} dangerouslySetInnerHTML={{ __html: htmlPart }} />);
            }

            parts.push(<CodeBlock key={`code-${index}`} language={block.language} code={block.code} />);

            lastIndex = placeholderIndex + placeholder.length;
        });

        if (lastIndex < processedHtml.length) {
            const remainingHtml = processedHtml.substring(lastIndex);
            parts.push(<span key="html-last" dangerouslySetInnerHTML={{ __html: remainingHtml }} />);
        }

        return (
            <div className="k-message-group k-alt">
                <div className="custom-bot-message">
                    <div className="markdown-content">{parts}</div>
                    <ChatFeedback />
                </div>
            </div>
        );
    };

    return (
        <div className={`chatgpt-container ${breakpointMode}`}>
            {isMobile && (
                <div className="mobile-navbar">
                    <Button
                        svgIcon={sidebarIcon}
                        fillMode="flat"
                        onClick={handleToggleDrawer}
                        className="drawer-menu-icon mobile-toggle"
                    />
                </div>
            )}
            <div
                className={`custom-drawer ${expanded ? 'expanded' : 'collapsed'} ${
                    breakpointMode === 'desktop' ? 'push' : 'overlay'
                }`}
            >
                {breakpointMode !== 'desktop' && expanded ? (
                    <div className="drawer-popup-header">
                        <Button
                            svgIcon={sidebarIcon}
                            fillMode="flat"
                            onClick={handleToggleDrawer}
                            className="drawer-menu-icon drawer-popup-toggle"
                        />
                    </div>
                ) : (
                    <Button
                        svgIcon={sidebarIcon}
                        fillMode="flat"
                        onClick={handleToggleDrawer}
                        className="drawer-menu-icon"
                    />
                )}
                {!expanded && (breakpointMode === 'desktop' || isTablet) && (
                    <Button svgIcon={pencilIcon} fillMode="flat" onClick={handleNewChat} className="drawer-menu-icon" />
                )}
                {expanded && (
                    <>
                        <Button
                            fillMode="flat"
                            onClick={handleNewChat}
                            className="drawer-new-chat-full"
                            svgIcon={pencilIcon}
                        >
                            <span>New Chat</span>
                        </Button>
                        <div className="drawer-chats-section">
                            <div className="drawer-chats-label">Chats</div>
                            <div className="drawer-chat-list">
                                {chatHistories.map((chat) => (
                                    <div
                                        key={chat.id}
                                        className={`chat-list-item ${chat.id === selectedChatId ? 'selected' : ''}`}
                                        onClick={() => handleSelectChat(chat.id)}
                                    >
                                        <span className="chat-list-item-title">{chat.title}</span>
                                        {chat.messages.length > 0 && (
                                            <Button
                                                svgIcon={trashIcon}
                                                fillMode="flat"
                                                size="small"
                                                className="chat-delete-btn"
                                                tabIndex={-1}
                                                onClick={(e) => handleDeleteChat(e, chat.id)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {breakpointMode !== 'desktop' && expanded && (
                <div className="drawer-backdrop" onClick={() => setExpanded(false)} />
            )}
            <div className="chat-content">
                <div className={`chat-wrapper ${messages.length > 0 ? 'has-messages' : ''}`}>
                    {messages.length === 0 && (
                        <div className="empty-state">
                            <h3 className="welcome-title">What's on your mind today?</h3>
                        </div>
                    )}
                    <Chat
                        authorId={user.id}
                        messages={messages}
                        onSendMessage={addMessage}
                        loading={isLoading}
                        width="100%"
                        timestampVisibility="hidden"
                        timestampTemplate={() => null}
                        messageBoxSettings={{ mode: 'auto' }}
                        placeholder={isLoading ? 'Thinking...' : 'Ask anything'}
                        uploadConfig={{
                            svgIcon: attachIcon,
                            multiple: true
                        }}
                        messageTemplate={messageTemplate}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
