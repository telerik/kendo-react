import * as React from 'react';
import {
    Chat,
    Message,
    User,
    ChatSendMessageEvent,
    ChatMessageTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { setOptions } from 'marked';
import './styles.css';

interface ChatSuggestion {
    id: string | number;
    text: string;
}

type AppMessage = Message & {
    isThinking?: boolean;
};

const bot: User = { id: 0 };
const user: User = { id: 1 };

const defaultSuggestions: ChatSuggestion[] = [
    { id: 'button-example', text: 'Example of KendoReact Button' },
    { id: 'bundles-table', text: 'Compare Kendo UI bundles in a table' },
    { id: 'flexbox-layout', text: 'Generate a basic KendoReact Grid' }
];

const aiSparklesIcon = {
    name: 'ai-sparkles',
    content: `
            <foreignObject x="0" y="0" width="40" height="40"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(2px);clip-path:url(#bgblur_0_1794_1696_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter0_d_1794_1696)" data-figma-bg-blur-radius="4">
            <path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z" fill="url(#paint0_linear_1794_1696)"/>
            </g>
            <defs>
            <filter id="filter0_d_1794_1696" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1794_1696"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1794_1696" result="shape"/>
            </filter>
            <clipPath id="bgblur_0_1794_1696_clip_path" transform="translate(0 0)"><path d="M22 9L23.6972 13.3028L28 15L23.6972 16.6972L22 21L20.3028 16.6972L16 15L20.3028 13.3028L22 9ZM14.9394 18.9394L12 20L14.9394 21.0606L16 24L17.0606 21.0606L20 20L17.0606 18.9394L16 16L14.9394 18.9394ZM14.2044 10.2044L12 11L14.2044 11.7956L15 14L15.7956 11.7956L18 11L15.7956 10.2044L15 8L14.2044 10.2044Z"/>
            </clipPath><linearGradient id="paint0_linear_1794_1696" x1="14.1354" y1="10.337" x2="22.1053" y2="20.9343" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C158E4"/>
            <stop offset="1" stop-color="#4B5FFA"/>
            </linearGradient>
            </defs>
        `,
    viewBox: '0 0 32 32'
};

const initialMessages: AppMessage[] = [
    {
        id: 1,
        author: bot,
        text: `👋 Hello! I'm your Knowledge Assistant.\n\nI can help you with Kendo UI questions and documentation. Try one of the suggestions below!`,
        timestamp: new Date()
    }
];

const AI_ENDPOINT = 'https://demos.telerik.com/service/v2/ai/completion';

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

const KnowledgeChatHeader = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 14px'
            }}
        >
            <SvgIcon icon={aiSparklesIcon} className="ai-icon" />
            <span style={{ fontSize: 18, fontWeight: 700 }}>AI Knowledge Assistant</span>
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

const MessageTemplate = (props: ChatMessageTemplateProps) => {
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

    let processedHtml = parsedMessage.replace(codeBlockRegex, (_match, language, code) => {
        const decodedCode = code
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");

        codeBlocks.push({ language, code: decodedCode });
        return `<code-block-placeholder-${codeBlocks.length - 1}></code-block-placeholder-${codeBlocks.length - 1}>`;
    });

    if (codeBlocks.length === 0) {
        return (
            <div className="k-message-group k-alt">
                <div className="custom-bot-message">
                    <div dangerouslySetInnerHTML={{ __html: parsedMessage }} />
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
                <div>{parts}</div>
            </div>
        </div>
    );
};

const fetchAIResponse = async (prompt: string): Promise<string> => {
    const response = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([
            {
                role: 'user',
                contents: [
                    {
                        $type: 'text',
                        text: prompt
                    }
                ]
            }
        ])
    });

    if (!response.ok) {
        throw new Error('Failed to fetch AI response');
    }

    const data = await response.json();
    return data.messages?.[0]?.contents?.[0]?.text || 'No response received';
};

const App = () => {
    const [messages, setMessages] = React.useState<AppMessage[]>(initialMessages);
    const [suggestions, setSuggestions] = React.useState<ChatSuggestion[]>(defaultSuggestions);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSuggestionClick = (s: ChatSuggestion): void => {
        setMessages((prev: AppMessage[]) => [
            ...prev,
            {
                id: Date.now(),
                author: user,
                text: s.text,
                timestamp: new Date()
            }
        ]);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: '',
                    isThinking: true,
                    timestamp: new Date()
                }
            ]);
        }, 100);

        setSuggestions([]);
        setIsLoading(true);

        fetchAIResponse(s.text)
            .then((response) => {
                setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
                setTimeout(() => {
                    setMessages((prev: AppMessage[]) => [
                        ...prev,
                        {
                            id: Date.now(),
                            author: bot,
                            text: response,
                            timestamp: new Date()
                        }
                    ]);
                }, 10);
            })
            .catch(() => {
                setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
                setTimeout(() => {
                    setMessages((prev: AppMessage[]) => [
                        ...prev,
                        {
                            id: Date.now(),
                            author: bot,
                            text: 'Sorry, I encountered an error. Please try again.',
                            timestamp: new Date()
                        }
                    ]);
                }, 10);
            })
            .finally(() => {
                setIsLoading(false);
                setSuggestions(defaultSuggestions);
            });
    };

    const handleSendMessage = (event: ChatSendMessageEvent): void => {
        const text: string = event.message.text || '';

        setMessages((prev: AppMessage[]) => [
            ...prev,
            {
                id: Date.now(),
                author: user,
                text,
                timestamp: new Date()
            }
        ]);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: '',
                    isThinking: true,
                    timestamp: new Date()
                }
            ]);
        }, 100);

        setSuggestions([]);
        setIsLoading(true);

        fetchAIResponse(text)
            .then((response) => {
                setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
                setTimeout(() => {
                    setMessages((prev: AppMessage[]) => [
                        ...prev,
                        {
                            id: Date.now(),
                            author: bot,
                            text: response,
                            timestamp: new Date()
                        }
                    ]);
                }, 10);
            })
            .catch(() => {
                setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
                setTimeout(() => {
                    setMessages((prev: AppMessage[]) => [
                        ...prev,
                        {
                            id: Date.now(),
                            author: bot,
                            text: 'Sorry, I encountered an error. Please try again.',
                            timestamp: new Date()
                        }
                    ]);
                }, 10);
            })
            .finally(() => {
                setIsLoading(false);
                setSuggestions(defaultSuggestions);
            });
    };

    return (
        <Chat
            messages={messages}
            authorId={user.id}
            suggestions={isLoading ? [] : suggestions}
            onSuggestionClick={handleSuggestionClick}
            onSendMessage={handleSendMessage}
            messageTemplate={MessageTemplate}
            headerTemplate={<KnowledgeChatHeader />}
            loading={isLoading}
            placeholder={isLoading ? 'Thinking...' : 'Type a message'}
            messageWidthMode="full"
            style={{ height: '100%' }}
            messageBoxSettings={{ rows: 4 }}
        />
    );
};

export default App;
