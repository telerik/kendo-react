import * as React from 'react';
import { ToolCall } from '@progress/kendo-react-conversational-ui';
import type {
    ToolCallState,
    ToolCallActionEvent,
    ToolCallExpandedChangeEvent,
    ToolCallResultTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';
import { playIcon } from '@progress/kendo-svg-icons';
import { runToolCallApproval, EXECUTION_DELAY } from './mock-tool-call-approval-server';
import type { ToolCallOutcome } from './mock-tool-call-approval-server';
import './styles.css';

// Overrides the default "Error" status badge text so a rejected approval reads as "Denied".
loadMessages({ toolCall: { state: { error: 'Denied' } } }, 'en');

const parameters = {
    database: 'analytics',
    query: "SELECT customer_name,\n    SUM(revenue) AS total\n  FROM orders\n  WHERE quarter = 'Q1 2025'\n  GROUP BY customer_name\n  ORDER BY total DESC\n  LIMIT 5"
};

const RESULT_TABLE =
    '| Customer       | Revenue  |\n' +
    '|----------------|----------|\n' +
    '| Acme Corp      | $142,000 |\n' +
    '| TechStart Inc  | $98,500  |\n' +
    '| Meridian Labs  | $87,200  |\n' +
    '| Nova Systems   | $76,400  |\n' +
    '| Brightpath Co  | $61,100  |';

const ResultContent = ({ result }: ToolCallResultTemplateProps) => (
    <pre className="k-pre">
        <code className="k-code">{result as string}</code>
    </pre>
);

type Phase = 'awaitingApproval' | 'running' | 'settled';

const COLLAPSE_DELAY = 2000; // ms to wait after the outcome is known before collapsing

const App = () => {
    // Start already settled in the "completed" state, showing a previously-approved result, so
    // the demo has something to show before the reader presses Start.
    const [phase, setPhase] = React.useState<Phase>('settled');
    const [outcome, setOutcome] = React.useState<ToolCallOutcome | null>('approved');
    const [executionMs, setExecutionMs] = React.useState(1000);
    const [resultReady, setResultReady] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRunRef = React.useRef(() => {});

    // Cancel any in-flight run's timeouts if the demo unmounts mid-run.
    React.useEffect(() => () => cancelRunRef.current(), []);

    // Resets the demo back to its initial "awaiting approval" prompt. Can be called
    // repeatedly, restarting the sequence from the beginning each time.
    const handleStart = () => {
        cancelRunRef.current();

        setPhase('awaitingApproval');
        setOutcome(null);
        setExecutionMs(0);
        setResultReady(false);
        setExpanded(true);
    };

    // Once the user decides, react to that decision directly: approving runs a simulated query and
    // reports its result; rejecting has nothing left to simulate. Either way, wait a bit after the
    // outcome is known so the reader can skim it, then flip the badge and collapse the card together.
    const handleAction = (event: ToolCallActionEvent) => {
        const nextOutcome: ToolCallOutcome = event.action === 'approve' ? 'approved' : 'rejected';

        setPhase('running');
        setOutcome(nextOutcome);
        setExpanded(true);

        const settle = () => {
            setPhase('settled');
            setExpanded(false);
        };

        if (nextOutcome === 'rejected') {
            const collapseTimeout = setTimeout(settle, COLLAPSE_DELAY);
            cancelRunRef.current = () => clearTimeout(collapseTimeout);
            return;
        }

        let collapseTimeout: ReturnType<typeof setTimeout>;

        const cancelStream = runToolCallApproval(nextOutcome, (streamEvent) => {
            if (streamEvent.type === 'completed') {
                setExecutionMs(streamEvent.executionMs);
                setResultReady(true);
                collapseTimeout = setTimeout(settle, COLLAPSE_DELAY);
            }
        });

        cancelRunRef.current = () => {
            cancelStream();
            clearTimeout(collapseTimeout);
        };
    };

    const handleExpandedChange = (event: ToolCallExpandedChangeEvent) => setExpanded(event.expanded);

    // The result appears as soon as an approved query finishes, but the final badge, the
    // secondary label, and the auto-collapse happen together once the reader has had
    // time to skim the outcome.
    const settledState: ToolCallState = outcome === 'approved' ? 'completed' : 'error';
    const state: ToolCallState =
        phase === 'running' ? 'active' : phase === 'settled' ? settledState : 'awaitingApproval';

    const secondaryLabel =
        phase === 'settled' && outcome === 'approved'
            ? `analytics · db · ${(executionMs / 1000).toFixed(1)}s`
            : undefined;
    const errorText = outcome === 'rejected' ? 'Rejected' : undefined;
    const showResult = resultReady;
    const completed = phase === 'settled';

    return (
        <LocalizationProvider language="en">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 700 }}>
                <Button size="xs" svgIcon={playIcon} fillMode="outline" onClick={handleStart} disabled={!completed}>
                    {completed ? 'Start' : 'Streaming...'}
                </Button>
                <ToolCall
                    label="query_database"
                    secondaryLabel={secondaryLabel}
                    state={state}
                    expandable
                    expanded={expanded}
                    onExpandedChange={handleExpandedChange}
                    parameters={parameters}
                    result={showResult ? RESULT_TABLE : undefined}
                    resultTemplate={ResultContent}
                    errorText={errorText}
                    approvalText="This will run a SELECT query on the analytics database. No data will be modified."
                    onAction={handleAction}
                />
            </div>
        </LocalizationProvider>
    );
};

export default App;
