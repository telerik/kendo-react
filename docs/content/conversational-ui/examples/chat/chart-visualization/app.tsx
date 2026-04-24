import * as React from 'react';
import {
    Chat,
    Message,
    User,
    SuggestionsLayoutMode,
    ChatSendMessageEvent
} from '@progress/kendo-react-conversational-ui';

import { TileLayout } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { exportVisual } from '@progress/kendo-react-charts';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

import {
    thumbUpOutlineIcon,
    thumbDownOutlineIcon,
    arrowsRotateOutlineIcon,
    downloadIcon
} from '@progress/kendo-svg-icons';

import TrendsChart from './TrendsChart';
import PerformanceChart from './PerformanceChart';
import MarketShareChart from './MarketShareChart';
import './styles.css';

interface ChatSuggestion {
    id: string | number;
    text: string;
}

type ChartType = 'trends' | 'performance' | 'marketShare';

type AppMessage = Message & {
    chartType?: ChartType;
    isThinking?: boolean;
};

const bot: User = { id: 0 };
const user: User = { id: 1 };

const suggestions: ChatSuggestion[] = [
    { id: 'order-status', text: 'Sales trends over the last 6 months' },
    { id: 'return-policy', text: 'Compare product performance by category' },
    { id: 'technical-support', text: 'Whats our market share breakdown?' }
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
        text: `👋 Hello! I'm your Financial assistant. I can help you visualize and summarize financial data.\n\nTry one of the suggested prompts below!`,
        timestamp: new Date()
    }
];

const FinanceChatHeader = () => {
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
            <span style={{ fontSize: 18, fontWeight: 700 }}>AI Financial Assistant</span>
        </div>
    );
};

const ChartFeedback = () => {
    return (
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
            <Button fillMode="flat" size="small" svgIcon={thumbUpOutlineIcon} />
            <Button fillMode="flat" size="small" svgIcon={thumbDownOutlineIcon} />
            <Button fillMode="flat" size="small" svgIcon={arrowsRotateOutlineIcon} />
        </div>
    );
};

interface ChartTileProps {
    title: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}

const ChartTile = (props: ChartTileProps) => {
    const { title, action, children } = props;

    const positions = React.useMemo(() => [{ col: 1, colSpan: 1, rowSpan: 1 }], []);

    const items = React.useMemo(
        () => [
            {
                header: (
                    <div className="chart-card-header">
                        <strong className="chart-card-title">{title}</strong>
                        {action}
                    </div>
                ),
                body: (
                    <div
                        onContextMenu={(e: React.MouseEvent<HTMLDivElement>) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        style={{ width: '100%' }}
                    >
                        {children}
                    </div>
                )
            }
        ],
        [title, action, children]
    );

    return (
        <TileLayout
            columns={1}
            gap={{ rows: 0, columns: 0 }}
            positions={positions}
            items={items}
            ignoreDrag={() => true}
            rowHeight={460}
        />
    );
};

interface ChatMessageTemplateProps {
    item: AppMessage;
}

type ThinkingDelayStyle = React.CSSProperties & {
    '--delay': string;
};

const thinkingText = 'Thinking...'.split('');

const getThinkingCharStyle = (index: number): ThinkingDelayStyle => ({
    '--delay': `${index * 0.1}s`
});

const ChatMessageTemplate = (props: ChatMessageTemplateProps) => {
    const item = props.item;
    const isUser = item.author?.id === user.id;
    const trendsChartRef = React.useRef<any>(null);
    const performanceChartRef = React.useRef<any>(null);
    const marketShareChartRef = React.useRef<any>(null);

    const handleDownloadChart = React.useCallback((type: ChartType): void => {
        const chartInstance =
            type === 'trends'
                ? trendsChartRef.current
                : type === 'performance'
                ? performanceChartRef.current
                : marketShareChartRef.current;

        if (!chartInstance) {
            return;
        }

        const chartVisual = exportVisual(chartInstance);

        if (!chartVisual) {
            return;
        }

        const fileName =
            type === 'trends'
                ? 'sales-trends-last-6-months'
                : type === 'performance'
                ? 'product-performance-by-category'
                : 'market-share-breakdown';

        void exportPDF(chartVisual, {
            paperSize: 'A4',
            landscape: true
        }).then((dataURI) => saveAs(dataURI, `${fileName}.pdf`));
    }, []);

    if (item.isThinking) {
        return (
            <div className="k-message-group k-alt">
                <div className="custom-bot-message">
                    <span className="thinking-indicator">
                        {thinkingText.map((char: string, index: number) => (
                            <span key={`${char}-${index}`} style={getThinkingCharStyle(index)}>
                                {char}
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        );
    }

    if (item.chartType) {
        let title = item.text || '';
        let chart: React.ReactNode = null;
        let chartTypeForDownload: ChartType = item.chartType;

        if (item.chartType === 'trends') {
            title = 'Sales Trends (Last 6 Months)';
            chart = <TrendsChart ref={trendsChartRef} />;
            chartTypeForDownload = 'trends';
        }
        if (item.chartType === 'performance') {
            title = 'Product Performance by Category';
            chart = <PerformanceChart ref={performanceChartRef} />;
            chartTypeForDownload = 'performance';
        }
        if (item.chartType === 'marketShare') {
            title = 'Market Share Distribution';
            chart = <MarketShareChart ref={marketShareChartRef} />;
            chartTypeForDownload = 'marketShare';
        }

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: '6px 0'
                }}
            >
                <div style={{ width: '100%' }}>
                    <ChartTile
                        title={title}
                        action={
                            <Button
                                fillMode="clear"
                                svgIcon={downloadIcon}
                                className="chart-download-button"
                                onClick={() => handleDownloadChart(chartTypeForDownload)}
                            />
                        }
                    >
                        {chart}
                    </ChartTile>
                    <ChartFeedback />
                </div>
            </div>
        );
    }

    if (isUser) {
        return (
            <div className="k-message-group">
                <div className="k-message-box">
                    <div className="k-bubble">
                        <div>{item.text}</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="k-message-group k-alt">
            <div className="custom-bot-message">{item.text}</div>
        </div>
    );
};

const App = () => {
    const [messages, setMessages] = React.useState<AppMessage[]>(initialMessages);
    const [suggestionsLayout] = React.useState<SuggestionsLayoutMode>('scrollbuttons');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSuggestionClick = (s: ChatSuggestion): void => {
        let chartType: ChartType | undefined;

        if (s.id === 'order-status') chartType = 'trends';
        if (s.id === 'return-policy') chartType = 'performance';
        if (s.id === 'technical-support') chartType = 'marketShare';

        setMessages((prev: AppMessage[]) => [
            ...prev,
            {
                id: Date.now(),
                author: user,
                text: s.text,
                timestamp: new Date()
            }
        ]);

        setIsLoading(true);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: 'Thinking…',
                    isThinking: true,
                    timestamp: new Date()
                }
            ]);
        }, 100);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
        }, 900);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: s.text,
                    chartType,
                    timestamp: new Date()
                }
            ]);
            setIsLoading(false);
        }, 910);
    };

    const handleSendMessage = (event: ChatSendMessageEvent): void => {
        const text: string = event.message.text || ' ';

        setMessages((prev: AppMessage[]) => [
            ...prev,
            {
                id: Date.now(),
                author: user,
                text,
                timestamp: new Date()
            }
        ]);

        setIsLoading(true);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: 'Thinking…',
                    isThinking: true,
                    timestamp: new Date()
                }
            ]);
        }, 100);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => prev.filter((m: AppMessage) => !m.isThinking));
        }, 900);

        setTimeout(() => {
            setMessages((prev: AppMessage[]) => [
                ...prev,
                {
                    id: Date.now(),
                    author: bot,
                    text: "I'm in demo mode! For now, I can only create charts for the suggested prompts shown below. Pick one and I'll show you some cool visualizations! ✨",
                    timestamp: new Date()
                }
            ]);
            setIsLoading(false);
        }, 910);
    };

    return (
        <Chat
            className="chat-responsive"
            messages={messages}
            authorId={user.id}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            onSendMessage={handleSendMessage}
            suggestionsLayout={suggestionsLayout}
            messageTemplate={ChatMessageTemplate}
            headerTemplate={<FinanceChatHeader />}
            loading={isLoading}
            placeholder="Type a message"
            messageWidthMode="full"
            style={{ height: '100%' }}
        />
    );
};

export default App;
