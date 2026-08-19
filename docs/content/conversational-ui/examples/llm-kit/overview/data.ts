import type { CitationSource } from '@progress/kendo-react-conversational-ui';

/** Icon used for a mocked agent thought step. */
export type ThoughtIconKind = 'search' | 'binoculars' | 'users';

/** A single scripted step of a chain-of-thought run. */
export interface AgentThoughtData {
    label: string;
    iconKind: ThoughtIconKind;
    /**
     * Alternate label swapped in once the step resolves (e.g. drops a trailing "..."). If
     * omitted, the step completes as soon as its label finishes streaming in.
     */
    completedLabel?: string;
    /** Extra "still working" pause (ms) between the label finishing streaming and the step resolving. */
    thinkingPauseMs?: number;
    /** Whether this step's completion should render the related-table citations. */
    showCitations?: boolean;
}

/** A schema table the agent consulted while searching for related work. */
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

/** An inline citation rendered right after `anchor` inside a response's text. */
export interface CitationData {
    sources: CitationSource[];
    anchor: string;
}

/**
 * A scripted tool call: the request sent to the tool and its approval prompt, plus both
 * outcomes the user can drive it to via the Approve/Reject actions — approved (live result)
 * or rejected (a cached fallback answer/citation).
 */
export interface ToolCallData {
    label: string;
    secondaryLabel: string;
    parameters: Record<string, string>;
    result: Record<string, string>[];
    awaitingApprovalText: string;
    /** Shown as the ToolCall's error text (with the "Error" status badge relabeled to "Denied") when rejected. */
    deniedText: string;
    rejectedResponseText: string;
    rejectedCitation: CitationData;
}

/** The single scripted prompt and everything the agent does/says in response to it. */
export interface TurnData {
    id: string;
    userText: string;
    reasoningText?: string;
    thoughts?: AgentThoughtData[];
    toolCall?: ToolCallData;
    responseText: string;
    citation?: CitationData;
}

/**
 * Scripted sales-analytics turn used to demonstrate the LLM Kit primitives: Reasoning, Chain of
 * Thought, Tool Call (gated behind an approval prompt, with an approved and a rejected outcome)
 * and Citation.
 */
export const TURN: TurnData = {
    id: 'turn-1',
    userText: 'What are our top customers by revenue this quarter?',
    reasoningText:
        "I need to identify the correct table and apply a quarterly date filter. Revenue should be summed per customer and sorted descending.\n\nI'll use query_database with a GROUP BY on customer_name. I'll limit to 5 results.",
    thoughts: [
        { label: 'Searched for analytics tools', iconKind: 'search' },
        {
            label: 'Found query_database — supports GROUP BY, date filters, and aggregation. Revenue maps to orders.total.',
            iconKind: 'binoculars'
        },
        {
            label: 'Searching for related work...',
            iconKind: 'search',
            completedLabel: 'Searching for related work',
            thinkingPauseMs: 1200,
            showCitations: true
        },
        {
            label: 'Found 3 related queries — revenue by month, top customers by order value, and invoice reconciliation report.',
            iconKind: 'users'
        }
    ],
    toolCall: {
        label: 'query_database',
        secondaryLabel: 'analytics · db',
        parameters: {
            database: 'analytics',
            query: "SELECT customer_name,\n    SUM(revenue) AS total\n  FROM orders\n  WHERE quarter = 'Q1 2025'\n  GROUP BY customer_name\n  ORDER BY total DESC\n  LIMIT 5"
        },
        result: [
            { customer: 'Acme Corp', revenue: '$142,000' },
            { customer: 'TechStart Inc', revenue: '$98,500' },
            { customer: 'Meridian Labs', revenue: '$87,200' },
            { customer: 'Nova Systems', revenue: '$76,400' },
            { customer: 'Brightpath Co', revenue: '$61,100' }
        ],
        awaitingApprovalText: 'This will run a SELECT query on the analytics database. No data will be modified.',
        deniedText: 'Rejected',
        rejectedResponseText:
            'Note this data is from Q4 2024 and may not reflect current performance.\n\nYour top 5 customers by revenue in Q4 2024:\n\n1. Acme Corp — $118,500\n2. TechStart Inc — $91,200\n3. Meridian Labs — $79,800\n4. Nova Systems — $70,100\n5. Brightpath Co — $58,400\n\nTogether they account for $418,000 — approximately 67% of total quarterly revenue.',
        rejectedCitation: {
            sources: [
                {
                    title: 'Q4 2024 Revenue Report – Top Account',
                    description:
                        'Cached quarterly revenue breakdown by customer account, highlighting the top-performing clients and their contribution to overall earnings.',
                    url: 'https://acme-corp.com/reports/q4-2024-revenue'
                },
                {
                    title: 'TechStart Inc — Account Overview',
                    description:
                        'Cached account billing summary for TechStart Inc including monthly usage, license tiers, and Q4 2024 invoiced amounts.',
                    url: 'https://techstart.io/billing/q4-2024'
                },
                {
                    title: 'Meridian Labs — Enterprise Subscription',
                    description:
                        'Cached enterprise subscription details for Meridian Labs covering active seats, feature add-ons, and revenue accrued in Q4 2024.',
                    url: 'https://meridian-labs.dev/accounts/enterprise-subscription-q4-2024'
                },
                {
                    title: 'Nova Systems — Contract & Renewal',
                    description:
                        'Cached contract status and renewal summary for Nova Systems, including payment history and projected annual value at the end of Q4 2024.',
                    url: 'https://nova-systems.co/contracts/renewal-q4-2024'
                },
                {
                    title: 'Brightpath Co — Usage & Revenue Trends',
                    description:
                        'Cached usage metrics and revenue tracking for Brightpath Co with month-over-month growth through Q4 2024.',
                    url: 'https://brightpath.co/analytics/revenue-trends-q4-2024'
                }
            ],
            anchor: '$418,000'
        }
    },
    responseText:
        'Your top 5 customers by revenue in Q1 2025:\n\n1. Acme Corp — $142,000\n2. TechStart Inc — $98,500\n3. Meridian Labs — $87,200\n4. Nova Systems — $76,400\n5. Brightpath Co — $61,100\n\nTogether they account for $465,200 — approximately 67% of total quarterly revenue.',
    citation: {
        sources: [
            {
                title: 'Q1 2025 Revenue Report – Top Account',
                description:
                    'Quarterly revenue breakdown by customer account, highlighting the top-performing clients and their contribution to overall earnings.',
                url: 'https://acme-corp.com/reports/q1-2025-revenue'
            },
            {
                title: 'TechStart Inc — Account Overview',
                description:
                    'Account billing summary for TechStart Inc including monthly usage, license tiers, and quarterly invoiced amounts.',
                url: 'https://techstart.io/billing/q1-2025'
            },
            {
                title: 'Meridian Labs — Enterprise Subscription',
                description:
                    'Enterprise subscription details for Meridian Labs covering active seats, feature add-ons, and revenue accrued in Q1.',
                url: 'https://meridian-labs.dev/accounts/enterprise-subscription'
            },
            {
                title: 'Nova Systems — Contract & Renewal',
                description:
                    'Contract status and renewal summary for Nova Systems, including payment history and projected annual value.',
                url: 'https://nova-systems.co/contracts/renewal'
            },
            {
                title: 'Brightpath Co — Usage & Revenue Trends',
                description:
                    'Usage metrics and revenue tracking for Brightpath Co with month-over-month growth and platform adoption trends.',
                url: 'https://brightpath.co/analytics/revenue-trends'
            }
        ],
        anchor: '$465,200'
    }
};
