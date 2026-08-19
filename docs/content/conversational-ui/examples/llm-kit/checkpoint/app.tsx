import * as React from 'react';
import { Checkpoint, PromptBox } from '@progress/kendo-react-conversational-ui';
import type { CheckpointActionEvent, PromptBoxPromptActionEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { plusIcon } from '@progress/kendo-svg-icons';

interface TimelineMessage {
    type: 'message';
    id: string;
    isOwn: boolean;
    text: string;
}

interface TimelineCheckpoint {
    type: 'checkpoint';
    id: string;
    defaultState: 'startOver' | 'restore';
}

type TimelineItem = TimelineMessage | TimelineCheckpoint;

const TIMELINE: TimelineItem[] = [
    { type: 'checkpoint', id: 'cp-1', defaultState: 'startOver' },
    { type: 'message', id: 'u-1', isOwn: true, text: 'How do I reset my API key?' },
    {
        type: 'message',
        id: 'b-1',
        isOwn: false,
        text: 'You can reset your API key in Settings → API → Reset Key. This will invalidate the old key immediately.'
    },
    { type: 'checkpoint', id: 'cp-2', defaultState: 'restore' },
    { type: 'message', id: 'u-2', isOwn: true, text: 'What happens to apps using the old key?' },
    {
        type: 'message',
        id: 'b-2',
        isOwn: false,
        text: 'Apps using the old key will stop working immediately. Update all integrations before resetting.'
    }
];

// Renders a static message bubble, mimicking the markup Chat produces for a single-message group.
const MessageBubble = ({ text, isOwn }: TimelineMessage) => (
    <div className={`k-message-group ${isOwn ? 'k-message-group-sender' : 'k-message-group-receiver'}`}>
        <div className="k-message-group-content">
            <div className="k-message">
                <div className="k-chat-bubble k-bubble">
                    <div className="k-bubble-content">
                        <span className="k-chat-bubble-text">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const App = () => {
    const [visibleCount, setVisibleCount] = React.useState(TIMELINE.length);
    const [promptValue, setPromptValue] = React.useState('');
    const [restoreHistory, setRestoreHistory] = React.useState<{ visibleCount: number; promptValue: string }[]>([]);
    const revealTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const clearPendingReveal = React.useCallback(() => {
        if (revealTimeoutRef.current !== undefined) {
            clearTimeout(revealTimeoutRef.current);
            revealTimeoutRef.current = undefined;
        }
    }, []);

    // Cancel any scheduled reveal left over from an in-flight "send" when the demo unmounts.
    React.useEffect(() => clearPendingReveal, [clearPendingReveal]);

    const visibleItems = TIMELINE.slice(0, visibleCount);
    const lastVisibleItem = visibleItems[visibleItems.length - 1];
    const restoredCheckpoint = lastVisibleItem && lastVisibleItem.type === 'checkpoint' ? lastVisibleItem : undefined;

    const handleCheckpointAction = React.useCallback(
        (checkpointId: string, event: CheckpointActionEvent) => {
            clearPendingReveal();

            if (event.action === 'redo') {
                if (restoreHistory.length === 0) {
                    return;
                }
                const previous = restoreHistory[restoreHistory.length - 1];
                setRestoreHistory((history) => history.slice(0, -1));
                setVisibleCount(previous.visibleCount);
                setPromptValue(previous.promptValue);
                return;
            }

            setRestoreHistory((history) => [...history, { visibleCount, promptValue }]);

            const checkpointIndex = TIMELINE.findIndex((item) => item.id === checkpointId);
            const nextUserMessage = TIMELINE.slice(checkpointIndex + 1).find(
                (item): item is TimelineMessage => item.type === 'message' && item.isOwn
            );

            setVisibleCount(checkpointIndex + 1);
            setPromptValue(nextUserMessage?.text ?? '');
        },
        [restoreHistory, visibleCount, promptValue, clearPendingReveal]
    );

    const handlePromptAction = React.useCallback(
        (_event: PromptBoxPromptActionEvent) => {
            if (!restoredCheckpoint) {
                return;
            }

            clearPendingReveal();

            const sentMessageIndex = visibleCount;
            const responseIndex = visibleCount + 1;

            setVisibleCount(sentMessageIndex + 1);
            setPromptValue('');

            if (responseIndex < TIMELINE.length) {
                revealTimeoutRef.current = setTimeout(() => {
                    setVisibleCount(responseIndex + 1);
                }, 700);
            }
        },
        [restoredCheckpoint, visibleCount, clearPendingReveal]
    );

    return (
        <div className="k-chat k-m-auto" style={{ width: 505, height: 608, position: 'relative', overflow: 'hidden' }}>
            <div className="k-message-list">
                <div className="k-message-list-content">
                    {visibleItems.map((item) => {
                        if (item.type === 'checkpoint') {
                            const isRestored = item.id === restoredCheckpoint?.id;
                            return (
                                <Checkpoint
                                    key={item.id}
                                    visible={isRestored}
                                    state={isRestored ? 'redo' : item.defaultState}
                                    onAction={(event) => handleCheckpointAction(item.id, event)}
                                />
                            );
                        }
                        return <MessageBubble key={item.id} {...item} />;
                    })}
                </div>
            </div>
            <div className="k-message-box-wrapper">
                <PromptBox
                    readOnly
                    value={promptValue}
                    mode={'multi'}
                    rows={3}
                    placeholder="Type a message..."
                    actionButtonConfig={{ themeColor: 'primary' }}
                    speechToTextButtonConfig={false}
                    startAffix={<Button fillMode="flat" svgIcon={plusIcon} />}
                    onPromptAction={handlePromptAction}
                />
            </div>
        </div>
    );
};

export default App;
