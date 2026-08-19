import type { CitationSource } from '@progress/kendo-react-conversational-ui';

/** Icon used for a mocked agent thought step. */
export type ThoughtIconKind = 'search' | 'binoculars';

/** A single row of the simulated chain-of-thought response. */
export interface AgentThought {
    label: string;
    iconKind: ThoughtIconKind;
    completed: boolean;
    content: string;
    /** Whether the related-table citations should be shown for this step. */
    showCitations?: boolean;
}

/** A table referenced while the agent searches for related schema/work. */
export interface RelatedTable {
    label: string;
    sources: CitationSource[];
}

export const RELATED_TABLES: RelatedTable[] = [
    {
        label: 'customers',
        sources: [{ title: 'Customers Table', url: 'https://internal-docs.example.com/schema/customers' }]
    },
    { label: 'orders', sources: [{ title: 'Orders Table', url: 'https://internal-docs.example.com/schema/orders' }] },
    { label: 'revenue', sources: [{ title: 'Revenue View', url: 'https://internal-docs.example.com/schema/revenue' }] },
    {
        label: 'invoices',
        sources: [{ title: 'Invoices Table', url: 'https://internal-docs.example.com/schema/invoices' }]
    },
    {
        label: 'transactions',
        sources: [{ title: 'Transactions Table', url: 'https://internal-docs.example.com/schema/transactions' }]
    }
];

/** Events pushed by the simulated agent run, similar to what an SSE/WebSocket feed would deliver. */
export type AgentEvent =
    | { type: 'thought-added'; thought: AgentThought }
    | { type: 'thought-updated'; index: number; thought: AgentThought }
    | { type: 'done'; durationSeconds: number };

interface ScheduledEvent {
    delay: number;
    event: AgentEvent;
}

// Timing constants (ms) for the simulated run.
const WORD_INTERVAL = 90; // delay between each word revealed in a streaming label
const THOUGHT_GAP = 400; // pause after a step finishes before the next one starts
const THINKING_PAUSE = 1200; // extra "still working" pause before a step resolves
const START_DELAY = 300; // delay before the first word of the first step appears
const COMPLETE_PAUSE = 300; // pause after the last label streams in before the run completes

/**
 * Builds the scripted timeline for the simulated agent run. Each thought's label
 * streams in word by word (like tokens from a real LLM): the first word arrives
 * as `thought-added`, and each following word is a `thought-updated` for that
 * same row. The schedule is assembled sequentially so timings stay in sync.
 */
function buildTimeline(): ScheduledEvent[] {
    const events: ScheduledEvent[] = [];
    let time = START_DELAY;

    const streamLabel = (index: number, thought: AgentThought): void => {
        const words = thought.label.split(' ');

        words.forEach((_, wordIndex) => {
            const isLastWord = wordIndex === words.length - 1;
            const partial: AgentThought = {
                ...thought,
                label: words.slice(0, wordIndex + 1).join(' '),
                // Stay active (not completed, no content/citations yet) until the label finishes streaming.
                completed: isLastWord ? thought.completed : false,
                content: isLastWord ? thought.content : '',
                showCitations: isLastWord ? thought.showCitations : false
            };

            events.push({
                delay: time,
                event:
                    wordIndex === 0
                        ? { type: 'thought-added', thought: partial }
                        : { type: 'thought-updated', index, thought: partial }
            });
            time += WORD_INTERVAL;
        });
    };

    streamLabel(0, { label: 'Searched for analytics tools', iconKind: 'search', completed: true, content: '' });
    time += THOUGHT_GAP;

    streamLabel(1, {
        label: 'Found query_database — supports GROUP BY, date filters, and aggregation. Revenue maps to orders.total.',
        iconKind: 'binoculars',
        completed: true,
        content: ''
    });
    time += THOUGHT_GAP;

    streamLabel(2, {
        label: 'Searching for related work...',
        iconKind: 'search',
        completed: false,
        content: '',
        showCitations: true
    });
    time += THINKING_PAUSE;

    events.push({
        delay: time,
        event: {
            type: 'thought-updated',
            index: 2,
            thought: { label: 'Searching for related work', iconKind: 'search', completed: true, content: '' }
        }
    });
    time += THOUGHT_GAP;

    streamLabel(3, {
        label: 'Found 3 related queries — revenue by month, top customers by order value, and invoice reconciliation report.',
        iconKind: 'binoculars',
        completed: true,
        content: ''
    });
    time += COMPLETE_PAUSE;

    events.push({ delay: time, event: { type: 'done', durationSeconds: Math.round(time / 1000) } });

    return events;
}

const TIMELINE = buildTimeline();

/**
 * Simulates subscribing to a streaming agent run (e.g. an SSE or WebSocket feed).
 * Returns an unsubscribe function that cancels any events still pending.
 */
export function runAgentQuery(onEvent: (event: AgentEvent) => void): () => void {
    const timeouts = TIMELINE.map(({ delay, event }) => setTimeout(() => onEvent(event), delay));
    return () => timeouts.forEach(clearTimeout);
}

// Replays the scripted timeline synchronously to derive the fully-settled thoughts and duration,
// used to render the initial "completed" state before the user starts a run.
function getFinalState(): { thoughts: AgentThought[]; durationSeconds: number } {
    const thoughts: AgentThought[] = [];
    let durationSeconds = 0;

    TIMELINE.forEach(({ event }) => {
        switch (event.type) {
            case 'thought-added':
                thoughts.push(event.thought);
                break;
            case 'thought-updated':
                thoughts[event.index] = event.thought;
                break;
            case 'done':
                durationSeconds = event.durationSeconds;
                break;
        }
    });

    return { thoughts, durationSeconds };
}

export const { thoughts: FINAL_THOUGHTS, durationSeconds: FINAL_DURATION_SECONDS } = getFinalState();
