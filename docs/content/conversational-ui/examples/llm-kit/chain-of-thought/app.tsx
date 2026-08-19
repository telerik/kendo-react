import * as React from 'react';
import { ChainOfThought, Citation } from '@progress/kendo-react-conversational-ui';
import type { Thought, ChainOfThoughtExpandedChangeEvent } from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { searchIcon, binocularsIcon, brainIcon, playIcon } from '@progress/kendo-svg-icons';
import { runAgentQuery, RELATED_TABLES, FINAL_THOUGHTS, FINAL_DURATION_SECONDS } from './mock-agent-server';
import type { AgentThought } from './mock-agent-server';

// Maps the mock server's icon kind to the actual SVG icon used by ChainOfThought.
const ICONS = { search: searchIcon, binoculars: binocularsIcon };

// Renders the schema tables the agent consulted as a row of Citation chips.
const RelatedTableCitations = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
        {RELATED_TABLES.map((table) => (
            <Citation key={table.label} label={table.label} sources={table.sources} />
        ))}
    </div>
);

// Converts a mock server thought into the public Thought shape ChainOfThought expects.
const toThought = (agentThought: AgentThought): Thought => ({
    label: agentThought.label,
    svgIcon: ICONS[agentThought.iconKind],
    completed: agentThought.completed,
    content: agentThought.showCitations ? <RelatedTableCitations /> : agentThought.content
});

// Immutably replaces the thought at a given index, used to apply streamed `thought-updated` events.
const replaceThoughtAt = (thoughts: Thought[], index: number, thought: Thought): Thought[] =>
    thoughts.map((existing, existingIndex) => (existingIndex === index ? thought : existing));

const App = () => {
    // Start already settled in the "completed" state, showing the final chain of thoughts, so the
    // demo has something to show before the reader presses Start.
    const [thoughts, setThoughts] = React.useState<Thought[]>(() => FINAL_THOUGHTS.map(toThought));
    const [completed, setCompleted] = React.useState(true);
    const [durationSeconds, setDurationSeconds] = React.useState(FINAL_DURATION_SECONDS);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRunRef = React.useRef(() => {});

    // Cancel any in-flight run's timeouts if the demo unmounts mid-stream.
    React.useEffect(() => () => cancelRunRef.current(), []);

    // Kicks off a fresh agent run and reduces its events into the `thoughts` list. Can be
    // called repeatedly, restarting the sequence from the beginning each time.
    const handleStart = () => {
        cancelRunRef.current();

        setThoughts([]);
        setCompleted(false);
        setExpanded(true);

        let collapseTimeout: ReturnType<typeof setTimeout>;

        const cancelQuery = runAgentQuery((event) => {
            switch (event.type) {
                case 'thought-added':
                    setThoughts((prev) => [...prev, toThought(event.thought)]);
                    break;
                case 'thought-updated':
                    setThoughts((prev) => replaceThoughtAt(prev, event.index, toThought(event.thought)));
                    break;
                case 'done':
                    setDurationSeconds(event.durationSeconds);
                    // Wait a bit after the last thought finishes so the reader can skim it, then mark the
                    // chain as completed and collapse it in one step.
                    collapseTimeout = setTimeout(() => {
                        setCompleted(true);
                        setExpanded(false);
                    }, 2000);
                    break;
            }
        });

        cancelRunRef.current = () => {
            cancelQuery();
            clearTimeout(collapseTimeout);
        };
    };

    const handleExpandedChange = (event: ChainOfThoughtExpandedChangeEvent) => setExpanded(event.expanded);

    const label = completed ? 'Thought' : 'Thinking through request';
    const secondaryLabel = completed ? `for ${durationSeconds}s` : undefined;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 700 }}>
            <Button size="xs" svgIcon={playIcon} fillMode="outline" onClick={handleStart} disabled={!completed}>
                {completed ? 'Start' : 'Streaming...'}
            </Button>
            <ChainOfThought
                label={label}
                secondaryLabel={secondaryLabel}
                svgIcon={brainIcon}
                completed={completed}
                expandable
                expanded={expanded}
                onExpandedChange={handleExpandedChange}
                thoughts={thoughts}
            />
        </div>
    );
};

export default App;
