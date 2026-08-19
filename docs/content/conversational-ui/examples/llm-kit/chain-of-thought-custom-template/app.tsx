import * as React from 'react';
import { ChainOfThought } from '@progress/kendo-react-conversational-ui';
import type {
    Thought,
    ThoughtTemplateProps,
    ChainOfThoughtExpandedChangeEvent
} from '@progress/kendo-react-conversational-ui';
import { Button } from '@progress/kendo-react-buttons';
import { SvgIcon } from '@progress/kendo-react-common';
import { brainIcon, playIcon, fileConfigIcon, fileCsvIcon, dataSqlIcon, searchIcon } from '@progress/kendo-svg-icons';
import type { SVGIcon } from '@progress/kendo-svg-icons';
import './styles.css';

type StepKind = 'search' | 'query' | 'compute' | 'export';

interface StepMeta {
    kind: StepKind;
    kindIcon: SVGIcon;
    toolIcon: SVGIcon;
    tool: string;
    duration: string;
}

const STEP_META: StepMeta[] = [
    { kind: 'search', kindIcon: searchIcon, toolIcon: fileConfigIcon, tool: 'schema_lookup', duration: '0.3s' },
    { kind: 'query', kindIcon: dataSqlIcon, toolIcon: dataSqlIcon, tool: 'query_database', duration: '1.1s' },
    { kind: 'compute', kindIcon: fileConfigIcon, toolIcon: fileConfigIcon, tool: 'run_aggregation', duration: '0.8s' },
    { kind: 'export', kindIcon: fileCsvIcon, toolIcon: fileCsvIcon, tool: 'format_response', duration: '0.2s' }
];

const FINAL_DURATION_SECONDS = 3.8;
const WORD_INTERVAL = 40;
const THOUGHT_GAP = 400;
const COMPLETE_PAUSE = 600;

const FINAL_THOUGHTS: Thought[] = [
    {
        label: 'Resolving table schema for orders and customers',
        content: null,
        svgIcon: STEP_META[0].kindIcon,
        secondaryLabel: STEP_META[0].duration,
        completed: true
    },
    {
        label: 'Querying revenue grouped by region for Q1',
        content: 'SELECT region, SUM(total) FROM orders JOIN customers USING (id) WHERE quarter = 1 GROUP BY region',
        svgIcon: STEP_META[1].kindIcon,
        secondaryLabel: STEP_META[1].duration,
        completed: true
    },
    {
        label: 'Computing top 5 regions by growth rate',
        content: null,
        svgIcon: STEP_META[2].kindIcon,
        secondaryLabel: STEP_META[2].duration,
        completed: true
    },
    {
        label: 'Serializing results to structured response',
        content: null,
        svgIcon: STEP_META[3].kindIcon,
        secondaryLabel: STEP_META[3].duration,
        completed: true
    }
];

const ThoughtRow = ({ thought, index }: ThoughtTemplateProps) => {
    const meta = STEP_META[index];
    return (
        <>
            <span className="step-header">
                {meta && <span className={`step-kind step-kind--${meta.kind}`}>{meta.kind}</span>}
                <span className="k-agent-step-label">{thought.label}</span>
                {thought.secondaryLabel && <span className="k-agent-step-secondary">{thought.secondaryLabel}</span>}
            </span>
            {thought.content && <span className="k-agent-step-body step-code">{thought.content}</span>}
            {thought.completed && meta && (
                <span className="step-footer">
                    <span className="step-tool">
                        <SvgIcon icon={meta.toolIcon} size="xsmall" />
                        {meta.tool}
                    </span>
                </span>
            )}
        </>
    );
};

const App = () => {
    const [thoughts, setThoughts] = React.useState<Thought[]>(FINAL_THOUGHTS);
    const [label, setLabel] = React.useState('Thought');
    const [secondaryLabel, setSecondaryLabel] = React.useState(`for ${FINAL_DURATION_SECONDS}s`);
    const [completed, setCompleted] = React.useState(true);
    const [expanded, setExpanded] = React.useState(false);
    const cancelRef = React.useRef<() => void>(() => {});

    // Cancel any in-flight timeouts if the demo unmounts mid-stream.
    React.useEffect(() => () => cancelRef.current(), []);

    const handleStart = () => {
        cancelRef.current();

        const timeouts: ReturnType<typeof setTimeout>[] = [];
        cancelRef.current = () => timeouts.forEach(clearTimeout);

        const schedule = (fn: () => void, delay: number) => {
            timeouts.push(setTimeout(fn, delay));
        };

        setThoughts([]);
        setCompleted(false);
        setExpanded(true);
        setLabel('Analyzing request');
        setSecondaryLabel('');

        let time = 800;

        FINAL_THOUGHTS.forEach((thought, index) => {
            const words = thought.label.split(' ');

            words.forEach((_, wordIndex) => {
                const partial: Thought = {
                    ...thought,
                    label: words.slice(0, wordIndex + 1).join(' '),
                    completed: false,
                    content: ''
                };
                const t = time;
                if (wordIndex === 0) {
                    schedule(() => setThoughts((prev) => [...prev, partial]), t);
                } else {
                    schedule(() => setThoughts((prev) => prev.map((item, i) => (i === index ? partial : item))), t);
                }
                time += WORD_INTERVAL;
            });

            schedule(() => {
                setThoughts((prev) => prev.map((item, i) => (i === index ? { ...thought } : item)));
            }, time + THOUGHT_GAP);
            time += THOUGHT_GAP + 200;
        });

        schedule(() => {
            setCompleted(true);
            setLabel('Thought');
            setSecondaryLabel(`for ${FINAL_DURATION_SECONDS}s`);
        }, time + COMPLETE_PAUSE);
    };

    const handleExpandedChange = (event: ChainOfThoughtExpandedChangeEvent) => setExpanded(event.expanded);

    return (
        <div>
            <Button size="xs" svgIcon={playIcon} fillMode="outline" onClick={handleStart} disabled={!completed}>
                {completed ? 'Start' : 'Running...'}
            </Button>
            <ChainOfThought
                label={label}
                secondaryLabel={secondaryLabel}
                svgIcon={brainIcon}
                thoughts={thoughts}
                completed={completed}
                expandable
                expanded={expanded}
                onExpandedChange={handleExpandedChange}
                thoughtTemplate={ThoughtRow}
            />
        </div>
    );
};

export default App;
