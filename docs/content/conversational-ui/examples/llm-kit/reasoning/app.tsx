import * as React from 'react';
import { Reasoning } from '@progress/kendo-react-conversational-ui';
import type { ReasoningExpandedChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { brainIcon, playIcon } from '@progress/kendo-svg-icons';
import { streamReasoning, REASONING_TEXT, FINAL_DURATION_SECONDS } from './mock-reasoning-server';

const COLLAPSE_DELAY = 2000; // ms to wait after the reasoning finishes before collapsing it

const App = () => {
    // Start already settled in the "completed" state, showing the final reasoning text, so the
    // demo has something to show before the reader presses Start.
    const [text, setText] = React.useState(REASONING_TEXT);
    const [completed, setCompleted] = React.useState(true);
    const [durationSeconds, setDurationSeconds] = React.useState(FINAL_DURATION_SECONDS);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRunRef = React.useRef(() => {});

    // Cancel any in-flight run's timeouts if the demo unmounts mid-stream.
    React.useEffect(() => () => cancelRunRef.current(), []);

    // Kicks off a fresh reasoning stream and reflects its events in state. Can be called
    // repeatedly, restarting the sequence from the beginning each time.
    const handleStart = () => {
        cancelRunRef.current();

        setText('');
        setCompleted(false);
        setExpanded(true);

        let collapseTimeout: ReturnType<typeof setTimeout>;

        const cancelStream = streamReasoning((event) => {
            switch (event.type) {
                case 'text-updated':
                    setText(event.text);
                    break;
                case 'done':
                    setDurationSeconds(event.durationSeconds);
                    // Wait a bit after the reasoning finishes so the reader can skim it, then mark it
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

    const handleExpandedChange = (event: ReasoningExpandedChangeEvent) => setExpanded(event.expanded);

    const label = completed ? 'Thought' : 'Thinking';
    const secondaryLabel = completed ? `for ${durationSeconds}s` : undefined;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 700 }}>
            <Button size="xs" svgIcon={playIcon} fillMode="outline" onClick={handleStart} disabled={!completed}>
                {completed ? 'Start' : 'Streaming...'}
            </Button>
            <Reasoning
                label={label}
                secondaryLabel={secondaryLabel}
                svgIcon={brainIcon}
                completed={completed}
                expandable
                expanded={expanded}
                onExpandedChange={handleExpandedChange}
            >
                <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>
            </Reasoning>
        </div>
    );
};

export default App;
