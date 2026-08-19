import * as React from 'react';
import { ToolCall } from '@progress/kendo-react-conversational-ui';
import type {
    ToolCallState,
    ToolCallExpandedChangeEvent,
    ToolCallResultTemplateProps
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { playIcon } from '@progress/kendo-svg-icons';
import { streamToolCall, RESULT_DELAY } from './mock-tool-call-server';
import './styles.css';

const parameters = {
    database: 'analytics',
    query: "SELECT customer_name,\n    SUM(revenue) AS total\n  FROM orders\n  WHERE quarter = 'Q1 2025'\n  GROUP BY customer_name\n  ORDER BY total DESC LIMIT 5"
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

type Phase = 'collapsed' | 'params' | 'result';

const COLLAPSE_DELAY = 2000; // ms to wait after the result arrives before collapsing

const App = () => {
    // Start already settled in the "completed" state, showing the final result, so the demo
    // has something to show before the reader presses Start.
    const [phase, setPhase] = React.useState<Phase>('result');
    const [executionMs, setExecutionMs] = React.useState(1000);
    const [completed, setCompleted] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRunRef = React.useRef(() => {});

    // Cancel any in-flight run's timeouts if the demo unmounts mid-stream.
    React.useEffect(() => () => cancelRunRef.current(), []);

    // Kicks off a fresh tool call run and reflects its events in state. Can be called
    // repeatedly, restarting the sequence from the beginning each time.
    const handleStart = () => {
        cancelRunRef.current();

        setPhase('collapsed');
        setCompleted(false);
        setExpanded(false);

        let collapseTimeout: ReturnType<typeof setTimeout>;

        const cancelStream = streamToolCall((event) => {
            switch (event.type) {
                case 'params':
                    setPhase('params');
                    setExpanded(true);
                    break;
                case 'result':
                    setExecutionMs(event.executionMs);
                    setPhase('result');
                    // Wait a bit after the result arrives so the reader can skim it, then mark it
                    // as completed and collapse it in one step.
                    collapseTimeout = setTimeout(() => {
                        setCompleted(true);
                        setExpanded(false);
                    }, COLLAPSE_DELAY);
                    break;
            }
        });

        cancelRunRef.current = () => {
            cancelStream();
            clearTimeout(collapseTimeout);
        };
    };

    const handleExpandedChange = (event: ToolCallExpandedChangeEvent) => setExpanded(event.expanded);

    // The result appears as soon as the query finishes, but the "Completed" badge, the
    // secondary label, and the auto-collapse happen together after the reader has had
    // time to skim the result.
    const state: ToolCallState = completed ? 'completed' : 'active';
    const result = phase === 'result' ? RESULT_TABLE : undefined;
    const secondaryLabel = completed ? `analytics · db · ${(executionMs / 1000).toFixed(1)}s` : undefined;

    return (
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
                result={result}
                resultTemplate={ResultContent}
            />
        </div>
    );
};

export default App;
