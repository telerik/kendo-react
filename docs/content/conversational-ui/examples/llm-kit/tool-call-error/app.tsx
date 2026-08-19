import * as React from 'react';
import { ToolCall } from '@progress/kendo-react-conversational-ui';
import type { ToolCallState, ToolCallExpandedChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { playIcon } from '@progress/kendo-svg-icons';
import { streamToolCallError, ERROR_TEXT } from './mock-tool-call-error-server';
import './styles.css';

const parameters = {
    database: 'analytics',
    query: "SELECT customer_name,\n    SUM(revenue) AS total\n  FROM orders\n  WHERE quarter = 'Q1 2025'\n  GROUP BY customer_name\n  ORDER BY total DESC\n  LIMIT 5"
};

type Phase = 'active' | 'error';

const COLLAPSE_DELAY = 2000; // ms to wait after the error arrives before collapsing

const App = () => {
    // Start already settled in the "completed" state, showing the final error, so the demo
    // has something to show before the reader presses Start.
    const [phase, setPhase] = React.useState<Phase>('error');
    const [errorText, setErrorText] = React.useState<string | undefined>(ERROR_TEXT);
    const [settled, setSettled] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRunRef = React.useRef(() => {});

    // Cancel any in-flight run's timeouts if the demo unmounts mid-stream.
    React.useEffect(() => () => cancelRunRef.current(), []);

    // Kicks off a fresh tool call run and reflects its events in state. Can be called
    // repeatedly, restarting the sequence from the beginning each time.
    const handleStart = () => {
        cancelRunRef.current();

        setPhase('active');
        setErrorText(undefined);
        setSettled(false);
        setExpanded(false);

        let collapseTimeout: ReturnType<typeof setTimeout>;

        const cancelStream = streamToolCallError((event) => {
            switch (event.type) {
                case 'error':
                    setErrorText(event.text);
                    setPhase('error');
                    setExpanded(true);
                    // Wait a bit after the error arrives so the reader can skim it, then mark it
                    // as settled and collapse it in one step.
                    collapseTimeout = setTimeout(() => {
                        setSettled(true);
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

    // The error text appears as soon as the failure happens, but the "Error" badge and the
    // auto-collapse happen together after the reader has had time to skim it.
    const state: ToolCallState = settled ? 'error' : 'active';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 700 }}>
            <Button size="xs" svgIcon={playIcon} fillMode="outline" onClick={handleStart} disabled={!settled}>
                {settled ? 'Start' : 'Streaming...'}
            </Button>
            <ToolCall
                label="query_database"
                state={state}
                expandable
                expanded={expanded}
                onExpandedChange={handleExpandedChange}
                parameters={parameters}
                errorText={phase === 'error' ? errorText : undefined}
            />
        </div>
    );
};

export default App;
