import * as React from 'react';
import {
    Chat,
    Message,
    ChatSendMessageEvent,
    ChatLoadMoreMessagesEvent,
    ChatReferencedMessageClickEvent
} from '@progress/kendo-react-conversational-ui';
import { MockChatService, JANE } from './data-service';

const PAGE_SIZE = 30;

const service = new MockChatService();

let nextId = service.total + 1;

const App = () => {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [total, setTotal] = React.useState(0);
    const [startIndex, setStartIndex] = React.useState(0);
    const [endIndex, setEndIndex] = React.useState(0);
    const [pinnedMessages, setPinnedMessages] = React.useState<Message[]>([]);
    const [repliedToMessages, setRepliedToMessages] = React.useState<Message[]>([]);

    React.useEffect(() => {
        const init = async () => {
            const tot = service.total;
            const initialStart = Math.max(0, tot - PAGE_SIZE);
            const result = await service.fetchPage(initialStart, tot);
            setMessages(result.messages);
            setStartIndex(result.startIndex);
            setEndIndex(result.endIndex);
            setTotal(result.total);
            setPinnedMessages(result.pinnedMessages);
            setRepliedToMessages(result.repliedToMessages);
        };
        init();
    }, []);

    const handleLoadMore = React.useCallback(
        async (event: ChatLoadMoreMessagesEvent) => {
            const { startIndex: reqStart, endIndex: reqEnd } = event;

            // Determine overlap with current batch
            const hasOverlap = reqStart < endIndex && reqEnd > startIndex;

            if (!hasOverlap) {
                console.log('No overlap, fetching full range');
                // No overlap (e.g. scroll-to-bottom jump) — full replace
                const result = await service.fetchPage(reqStart, reqEnd);
                setMessages(result.messages);
                setStartIndex(result.startIndex);
                setEndIndex(result.endIndex);
                setTotal(result.total);
                setRepliedToMessages(result.repliedToMessages);
            } else if (reqStart < startIndex) {
                // Prepend — fetch only the missing older portion
                const result = await service.fetchPage(reqStart, startIndex);
                setMessages((prev) => [...result.messages, ...prev]);
                setStartIndex(result.startIndex);
                setTotal(result.total);
                setRepliedToMessages((prev) => [...result.repliedToMessages, ...prev]);
            } else if (reqEnd > endIndex) {
                // Append — fetch only the missing newer portion
                const result = await service.fetchPage(endIndex, reqEnd);
                setMessages((prev) => [...prev, ...result.messages]);
                setEndIndex(result.endIndex);
                setTotal(result.total);
                setRepliedToMessages((prev) => [...prev, ...result.repliedToMessages]);
            }
        },
        [startIndex, endIndex]
    );

    const handleSendMessage = async (e: ChatSendMessageEvent) => {
        const sent: Message = { ...e.message, id: nextId++, author: JANE };
        service.addMessage(sent);
        const newTotal = service.total;

        const wasOnLastBatch = endIndex >= total;
        if (wasOnLastBatch) {
            setMessages((prev) => [...prev, sent]);
            setEndIndex(newTotal);
        } else {
            const newStart = Math.max(0, newTotal - PAGE_SIZE);
            const result = await service.fetchPage(newStart, newTotal);
            setMessages(result.messages);
            setStartIndex(result.startIndex);
            setEndIndex(result.endIndex);
            setRepliedToMessages(result.repliedToMessages);
        }
        setTotal(newTotal);
    };

    const handleReferencedMessageClick = async (event: ChatReferencedMessageClickEvent) => {
        const inBatch = messages.find((m) => String(m.id) === String(event.id));
        if (inBatch) {
            return;
        }

        const resolved = await service.resolveMessage(event.id);
        if (!resolved) {
            return;
        }

        // Fetch a page centered around the target message
        const halfPage = Math.floor(PAGE_SIZE / 2);
        const fetchStart = Math.max(0, resolved.index - halfPage);
        const fetchEnd = Math.min(total, fetchStart + PAGE_SIZE);
        const result = await service.fetchPage(fetchStart, fetchEnd);
        setMessages(result.messages);
        setStartIndex(result.startIndex);
        setEndIndex(result.endIndex);
        setRepliedToMessages(result.repliedToMessages);
    };

    const handleUnpin = (message: Message) => {
        service.unpinMessage(message.id);
        setMessages((prev) => prev.map((m) => (m.id === message.id ? { ...m, isPinned: false } : m)));
        setPinnedMessages(service.resolvePinnedMessages());
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Chat
                messages={messages}
                authorId={JANE.id}
                scrollMode="endless"
                pageSize={PAGE_SIZE}
                total={total}
                startIndex={startIndex}
                endIndex={endIndex}
                pinnedMessages={pinnedMessages}
                repliedToMessages={repliedToMessages}
                style={{ width: 600, height: 600 }}
                onLoadMoreMessages={handleLoadMore}
                onSendMessage={handleSendMessage}
                onReferencedMessageClick={handleReferencedMessageClick}
                onUnpin={handleUnpin}
            />
        </div>
    );
};

export default App;
