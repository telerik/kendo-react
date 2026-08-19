import * as React from 'react';
import {
    PromptBox,
    Reasoning,
    ChainOfThought,
    ToolCall,
    Citation,
    Checkpoint
} from '@progress/kendo-react-conversational-ui';
import type {
    PromptBoxPromptActionEvent,
    ReasoningExpandedChangeEvent,
    ChainOfThoughtExpandedChangeEvent,
    ToolCallExpandedChangeEvent,
    ToolCallActionEvent,
    ToolCallResultTemplateProps,
    ToolCallState,
    Thought,
    CheckpointState,
    CheckpointActionEvent,
    CheckpointTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { searchIcon, binocularsIcon, usersIcon, brainIcon, plusIcon } from '@progress/kendo-svg-icons';
import { TURN, RELATED_TABLES } from './data';
import { runConversation, ConversationEvent, ConversationHandle } from './mock-conversation-server';
import './styles.css';
// Overrides the default "Error" status badge text so a rejected approval reads as "Denied".
loadMessages({ toolCall: { state: { error: 'Denied' } } }, 'en');

const ICONS = { search: searchIcon, binoculars: binocularsIcon, users: usersIcon };

// Renders the schema tables the agent consulted as a row of Citation chips.
const RelatedTableCitations = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
        {RELATED_TABLES.map((table) => (
            <Citation key={table.label} label={table.label} sources={table.sources} showOn="click" />
        ))}
    </div>
);

// Whether every value in a column looks numeric (optionally `$`-prefixed/comma-grouped), in which
// case it reads better right-aligned, the way most markdown-table renderers treat numeric columns.
const isNumeric = (value: string) => /^-?\$?[\d,.]+%?$/.test(value.trim());

const pad = (text: string, width: number, alignRight: boolean) =>
    alignRight ? text.padStart(width) : text.padEnd(width);

// Renders the query_database result (an array of flat row objects) as a piped, markdown-style
// text table instead of the default formatted-JSON output.
const ToolResultTable = ({ result }: ToolCallResultTemplateProps) => {
    const rows = result as Record<string, string>[];
    const columns = Object.keys(rows[0]);
    const headers = columns.map((column) => column[0].toUpperCase() + column.slice(1));
    const rightAlign = columns.map((column) => rows.every((row) => isNumeric(row[column])));
    const widths = columns.map((column, index) =>
        Math.max(headers[index].length, ...rows.map((row) => row[column].length))
    );

    const formatRow = (cells: string[]) =>
        `| ${cells.map((cell, index) => pad(cell, widths[index], rightAlign[index])).join(' | ')} |`;

    const lines = [
        formatRow(headers),
        `|${widths.map((width) => '-'.repeat(width + 2)).join('|')}|`,
        ...rows.map((row) => formatRow(columns.map((column) => row[column])))
    ];

    return (
        <>
            <div className="k-tool-call-label">Result</div>
            <pre className="k-pre">
                <code className="k-code">{lines.join('\n')}</code>
            </pre>
        </>
    );
};

interface ReasoningRuntime {
    visible: boolean;
    text: string;
    completed: boolean;
    durationSeconds: number;
    expanded: boolean;
}

interface ChainOfThoughtRuntime {
    visible: boolean;
    thoughts: Thought[];
    completed: boolean;
    durationSeconds: number;
    expanded: boolean;
}

interface ToolCallRuntime {
    visible: boolean;
    state: ToolCallState;
    expanded: boolean;
    // Whether the tool call's result should be shown. Set as soon as the (simulated) execution
    // finishes, independent of — and ahead of — the final `completed`/`error` state, which is only
    // applied together with the auto-collapse.
    resultVisible: boolean;
    // Whether the user rejected the call. Set the moment the decision is made so the error text
    // reads immediately, independent of — and ahead of — the final `error` badge state, which (like
    // the result) is only applied together with the auto-collapse.
    rejected: boolean;
}

interface TurnRuntime {
    // Whether the user's chat bubble is shown. Starts hidden and is only set once the prompt is
    // actually sent, so it disappears (along with everything else) on "Start Over" too.
    messageVisible: boolean;
    reasoning?: ReasoningRuntime;
    chainOfThought?: ChainOfThoughtRuntime;
    toolCall?: ToolCallRuntime;
    responseVisible: boolean;
    // Whether the tool call (if any) was rejected — determines which of the scripted
    // response texts/citations gets shown once the answer lands.
    rejected: boolean;
}

// Immutably replaces the thought at a given index, used to apply streamed `thought-updated` events.
const replaceThoughtAt = (thoughts: Thought[], index: number, thought: Thought): Thought[] =>
    thoughts.map((existing, existingIndex) => (existingIndex === index ? thought : existing));

const createIdleRuntime = (): TurnRuntime => ({
    messageVisible: false,
    reasoning: TURN.reasoningText
        ? { visible: false, text: '', completed: false, durationSeconds: 0, expanded: true }
        : undefined,
    chainOfThought: TURN.thoughts
        ? { visible: false, thoughts: [], completed: false, durationSeconds: 0, expanded: true }
        : undefined,
    toolCall: TURN.toolCall
        ? { visible: false, state: 'active', expanded: false, resultVisible: false, rejected: false }
        : undefined,
    responseVisible: false,
    rejected: false
});

const App = () => {
    const [promptValue, setPromptValue] = React.useState(TURN.userText);
    const [isRunning, setIsRunning] = React.useState(false);
    const [runtime, setRuntime] = React.useState<TurnRuntime>(createIdleRuntime);
    // The checkpoint only shows up once the scripted answer has fully landed; it starts hidden
    // and is undefined again while a run is in flight.
    const [checkpointState, setCheckpointState] = React.useState<CheckpointState | undefined>(undefined);
    const isRunningRef = React.useRef(false);
    // Handle for the in-flight conversation run, used to cancel it and to resolve a pending
    // tool-call approval once the user clicks Approve/Reject.
    const conversationRef = React.useRef<ConversationHandle | null>(null);
    // Snapshot of the completed turn, kept around so the "Redo" checkpoint action can bring the
    // cleared content back without replaying the whole animated flow.
    const completedRuntimeRef = React.useRef<TurnRuntime | null>(null);

    const updateRuntime = React.useCallback((updater: (turn: TurnRuntime) => TurnRuntime) => {
        setRuntime(updater);
    }, []);

    // Cancel any timers left over from an in-flight run when the demo unmounts.
    React.useEffect(() => () => conversationRef.current?.cancel(), []);

    // The PromptBox is read-only and only ever asks this one scripted question. Every click of its
    // Send button clears whatever is currently shown and replays the whole flow from the start; the
    // prompt is emptied while the flow runs and gets populated again once the final answer lands.
    const startConversation = React.useCallback(() => {
        if (isRunningRef.current) {
            return;
        }

        conversationRef.current?.cancel();
        isRunningRef.current = true;
        setIsRunning(true);
        setRuntime({ ...createIdleRuntime(), messageVisible: true });
        setPromptValue('');
        setCheckpointState(undefined);

        conversationRef.current = runConversation(TURN, (event: ConversationEvent) => {
            switch (event.type) {
                case 'reasoning-text':
                    updateRuntime((turn) => ({
                        ...turn,
                        reasoning: { ...turn.reasoning!, visible: true, text: event.text }
                    }));
                    break;
                case 'reasoning-done':
                    // Record the duration silently — the section isn't marked `completed` until it
                    // collapses, so the "Thinking" label keeps showing while the reader skims the text.
                    updateRuntime((turn) => ({
                        ...turn,
                        reasoning: { ...turn.reasoning!, durationSeconds: event.durationSeconds }
                    }));
                    break;
                case 'reasoning-collapse':
                    updateRuntime((turn) => ({
                        ...turn,
                        reasoning: { ...turn.reasoning!, completed: true, expanded: false }
                    }));
                    break;
                case 'thought-added':
                    updateRuntime((turn) => {
                        const cot = turn.chainOfThought!;
                        const thought: Thought = {
                            label: event.thought.label,
                            svgIcon: ICONS[event.thought.iconKind],
                            completed: event.thought.completed,
                            // The related-table citations are a "still working" indicator for this step,
                            // shown while it's active and hidden again once it resolves — not gated on
                            // `completed` here since the server only ever sets `showCitations` while active.
                            content: event.thought.showCitations ? <RelatedTableCitations /> : undefined
                        };
                        return {
                            ...turn,
                            chainOfThought: { ...cot, visible: true, thoughts: [...cot.thoughts, thought] }
                        };
                    });
                    break;
                case 'thought-updated':
                    updateRuntime((turn) => {
                        const cot = turn.chainOfThought!;
                        const thought: Thought = {
                            label: event.thought.label,
                            svgIcon: ICONS[event.thought.iconKind],
                            completed: event.thought.completed,
                            content: event.thought.showCitations ? <RelatedTableCitations /> : undefined
                        };
                        return {
                            ...turn,
                            chainOfThought: { ...cot, thoughts: replaceThoughtAt(cot.thoughts, event.index, thought) }
                        };
                    });
                    break;
                case 'cot-done':
                    // Record the duration silently — the chain isn't marked `completed` until it
                    // collapses, so the "Thinking through request" label keeps showing while the reader
                    // skims the last thought.
                    updateRuntime((turn) => ({
                        ...turn,
                        chainOfThought: {
                            ...turn.chainOfThought!,
                            durationSeconds: event.durationSeconds
                        }
                    }));
                    break;
                case 'cot-collapse':
                    updateRuntime((turn) => ({
                        ...turn,
                        chainOfThought: { ...turn.chainOfThought!, completed: true, expanded: false }
                    }));
                    break;
                case 'toolcall-awaiting-approval':
                    updateRuntime((turn) => ({
                        ...turn,
                        toolCall: { ...turn.toolCall!, visible: true, state: 'awaitingApproval', expanded: true }
                    }));
                    break;
                case 'toolcall-running':
                    updateRuntime((turn) => ({
                        ...turn,
                        toolCall: { ...turn.toolCall!, state: 'active', rejected: event.decision === 'reject' }
                    }));
                    break;
                case 'toolcall-result':
                    updateRuntime((turn) => ({ ...turn, toolCall: { ...turn.toolCall!, resultVisible: true } }));
                    break;
                case 'toolcall-settled':
                    // The final state (completed/error) and the auto-collapse are applied together, the
                    // moment the tool call collapses — never before.
                    updateRuntime((turn) => ({
                        ...turn,
                        toolCall: {
                            ...turn.toolCall!,
                            state: event.decision === 'approve' ? 'completed' : 'error',
                            expanded: false
                        }
                    }));
                    break;
                case 'response':
                    updateRuntime((turn) => {
                        const completed = { ...turn, responseVisible: true, rejected: event.rejected };
                        completedRuntimeRef.current = completed;
                        return completed;
                    });
                    isRunningRef.current = false;
                    setIsRunning(false);
                    setPromptValue(TURN.userText);
                    setCheckpointState('startOver');
                    conversationRef.current = null;
                    break;
            }
        });
    }, [updateRuntime]);

    const handlePromptAction = React.useCallback(
        (_event: PromptBoxPromptActionEvent) => startConversation(),
        [startConversation]
    );

    // Approving lets the tool call run and answer with the live result/citation; rejecting
    // answers with the turn's cached fallback response/citation instead.
    const handleToolCallAction = React.useCallback((event: ToolCallActionEvent) => {
        conversationRef.current?.resolveApproval(event.action === 'approve' ? 'approve' : 'reject');
    }, []);

    // "Start Over" clears the turn's content (keeping the prompt populated) and turns the checkpoint
    // into a "Redo" action; "Redo" brings the cleared content back from the completed snapshot.
    const applyCheckpointAction = React.useCallback((action: CheckpointState) => {
        if (action === 'startOver') {
            setRuntime(createIdleRuntime());
            setCheckpointState('redo');
        } else if (action === 'redo' && completedRuntimeRef.current) {
            setRuntime(completedRuntimeRef.current);
            setCheckpointState('startOver');
        }
    }, []);

    const handleCheckpointAction = React.useCallback(
        (event: CheckpointActionEvent) => applyCheckpointAction(event.action),
        [applyCheckpointAction]
    );

    const CheckpointTemplate = React.useCallback(
        ({ state }: CheckpointTemplateProps) => {
            if (state === 'startOver' || state === 'restore') {
                return (
                    <Button size="small" fillMode="flat" onClick={() => applyCheckpointAction(state)}>
                        {state === 'startOver' ? 'Start Over' : 'Restore'}
                    </Button>
                );
            }

            if (state === 'redo') {
                return (
                    <>
                        <span className="k-checkpoint-stamp">{'Started Over'}</span>
                        <span>·</span>
                        <Button size="small" fillMode="flat" onClick={() => applyCheckpointAction('redo')}>
                            {'Redo'}
                        </Button>
                    </>
                );
            }

            return null;
        },
        [applyCheckpointAction]
    );

    const responseText = runtime.rejected ? TURN.toolCall!.rejectedResponseText : TURN.responseText;
    const responseCitation = runtime.rejected ? TURN.toolCall!.rejectedCitation : TURN.citation;

    // Agent steps (Reasoning/ChainOfThought/ToolCall) size to their content by default; stretched to
    // the full message-list width so long content (e.g. the tool call's SQL parameters) wraps/scrolls
    // inside the card instead of forcing the whole chat wider than its fixed 744px bounds.
    const stretchStyle: React.CSSProperties = { alignSelf: 'stretch', width: '100%' };

    return (
        <LocalizationProvider language="en">
            <div className="k-chat" style={{ width: 744, height: 962, margin: '0 auto' }}>
                <div className="k-message-list">
                    <div className="k-message-list-content">
                        {checkpointState && (
                            <Checkpoint
                                visible
                                state={checkpointState}
                                onAction={handleCheckpointAction}
                                template={CheckpointTemplate}
                            />
                        )}
                        {runtime.messageVisible && (
                            <div className="k-message-group k-message-group-sender">
                                <div className="k-message-group-content">
                                    <div className="k-message">
                                        <div className="k-chat-bubble k-bubble">
                                            <div className="k-bubble-content">
                                                <span className="k-chat-bubble-text">{TURN.userText}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="agent-response">
                            {runtime.reasoning?.visible && (
                                <Reasoning
                                    style={stretchStyle}
                                    label={runtime.reasoning.completed ? 'Thought' : 'Thinking'}
                                    secondaryLabel={
                                        runtime.reasoning.completed
                                            ? `for ${runtime.reasoning.durationSeconds}s`
                                            : undefined
                                    }
                                    svgIcon={brainIcon}
                                    completed={runtime.reasoning.completed}
                                    expandable
                                    expanded={runtime.reasoning.expanded}
                                    onExpandedChange={(event: ReasoningExpandedChangeEvent) =>
                                        updateRuntime((t) => ({
                                            ...t,
                                            reasoning: { ...t.reasoning!, expanded: event.expanded }
                                        }))
                                    }
                                >
                                    <div style={{ whiteSpace: 'pre-wrap' }}>{runtime.reasoning.text}</div>
                                </Reasoning>
                            )}
                            {runtime.chainOfThought?.visible && (
                                <ChainOfThought
                                    style={stretchStyle}
                                    label={runtime.chainOfThought.completed ? 'Thought' : 'Thinking through request'}
                                    secondaryLabel={
                                        runtime.chainOfThought.completed
                                            ? `for ${runtime.chainOfThought.durationSeconds}s`
                                            : undefined
                                    }
                                    svgIcon={brainIcon}
                                    completed={runtime.chainOfThought.completed}
                                    expandable
                                    expanded={runtime.chainOfThought.expanded}
                                    onExpandedChange={(event: ChainOfThoughtExpandedChangeEvent) =>
                                        updateRuntime((t) => ({
                                            ...t,
                                            chainOfThought: { ...t.chainOfThought!, expanded: event.expanded }
                                        }))
                                    }
                                    thoughts={runtime.chainOfThought.thoughts}
                                />
                            )}
                            {runtime.toolCall?.visible && (
                                <ToolCall
                                    style={stretchStyle}
                                    label={TURN.toolCall!.label}
                                    secondaryLabel={TURN.toolCall!.secondaryLabel}
                                    state={runtime.toolCall.state}
                                    expandable
                                    expanded={runtime.toolCall.expanded}
                                    onExpandedChange={(event: ToolCallExpandedChangeEvent) =>
                                        updateRuntime((t) => ({
                                            ...t,
                                            toolCall: { ...t.toolCall!, expanded: event.expanded }
                                        }))
                                    }
                                    onAction={handleToolCallAction}
                                    parameters={TURN.toolCall!.parameters}
                                    approvalText={TURN.toolCall!.awaitingApprovalText}
                                    result={runtime.toolCall.resultVisible ? TURN.toolCall!.result : undefined}
                                    resultTemplate={ToolResultTable}
                                    errorText={runtime.toolCall.rejected ? TURN.toolCall!.deniedText : undefined}
                                />
                            )}
                        </div>
                        {runtime.responseVisible && (
                            <div style={{ whiteSpace: 'pre-wrap' }}>
                                {responseText}
                                <Citation sources={responseCitation?.sources} additionalCount />
                            </div>
                        )}
                    </div>
                </div>
                <div className="k-message-box-wrapper">
                    <PromptBox
                        value={promptValue}
                        readOnly
                        mode={'multi'}
                        rows={3}
                        loading={isRunning}
                        placeholder="Type a message"
                        actionButtonConfig={{ themeColor: 'primary' }}
                        onPromptAction={handlePromptAction}
                        speechToTextButtonConfig={false}
                        startAffix={<Button fillMode="flat" svgIcon={plusIcon} />}
                    />
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default App;
