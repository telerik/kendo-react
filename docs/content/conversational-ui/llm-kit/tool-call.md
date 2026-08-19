---
title: Tool Call
description: 'Learn how to use the KendoReact ToolCall component to display AI agent tool and function invocations, including approval flows and error states.'
slug: toolcall_llmkit
position: 3
components: ["llmkit"]
---

# LLM Kit Tool Call

AI agents can make decisions that trigger tool invocations for querying databases, calling APIs, or browsing the web. Use the ToolCall component to show users what action the agent takes and what result it receives.

The [ToolCall component](slug:api_conversational-ui_toolcall) makes the side effects from tool invocations visible: it displays the tool name, input parameters, and output result in a collapsible block, and supports approval and error states so users can stay in control.

The following example demonstrates the ToolCall component animating through a complete execution sequence.

<demo metaUrl="conversational-ui/llm-kit/tool-call/" height="600"></demo>

## Configuring the Tool Header

Use [`label`](slug:api_conversational-ui_toolcallprops#label) to set the name of the tool or function. Additional context such as a target, resource, or execution duration can be included by using the [`secondaryLabel`](slug:api_conversational-ui_toolcallprops#secondarylabel) prop.

Set [`svgIcon`](slug:api_conversational-ui_toolcallprops#svgicon) to identify the tool being invoked. The component does not require a separate status icon; its [`state`](slug:api_conversational-ui_toolcallprops#state) determines the status presentation.

```tsx
<ToolCall
    label="query_database"
    secondaryLabel="analytics · db · 1.0s"
    state={toolState}
    svgIcon={dataSqlIcon}
/>
```

## Controlling the State

Use [`state`](slug:api_conversational-ui_toolcallprops#state) to show the current lifecycle stage of a tool invocation. The component supports four states:

- `active`&mdash;The tool invocation is in progress. The component displays the tool header and any provided parameters with its in-progress presentation, but does not display a status badge. See [Displaying Parameters and Results](#displaying-parameters-and-results).
- `completed`&mdash;The tool invocation finished successfully. The component displays a completed badge and the result, when provided. See [Displaying Parameters and Results](#displaying-parameters-and-results).
- `awaitingApproval`&mdash;The tool invocation needs user confirmation. The component displays an awaiting approval badge and the default approval content, when provided, with **Approve** and **Reject** actions. See [Showing Approval Actions](#showing-approval-actions).
- `error`&mdash;The tool invocation failed. The component displays an error badge and the error content, when provided. See [Handling Errors](#handling-errors).

```tsx
<ToolCall label="query_database" state={toolState} />
```

```tsx
const [toolState, setToolState] = React.useState<ToolCallState>('active');

const completeToolCall = () => setToolState('completed');
```

## Displaying Parameters and Results

Use [`parameters`](slug:api_conversational-ui_toolcallprops#parameters) to show data sent to the tool, such as a query or filter. Set [`result`](slug:api_conversational-ui_toolcallprops#result) to show the response returned by a completed tool call. The component formats the passed object value as JSON by default for both `parameters` and `result`.

```tsx
<ToolCall
    label="query_database"
    state="completed"
    parameters={parameters}
    result={result}
/>
```

Use [`paramsTemplate`](slug:api_conversational-ui_toolcallprops#paramstemplate) or [`resultTemplate`](slug:api_conversational-ui_toolcallprops#resulttemplate) to replace either JSON block with a custom React component.

```tsx Templates
const parameters = { query: 'SELECT * FROM customers' };
const result = { count: 10 };

const ParametersTemplate = ({ parameters }: ToolCallParamsTemplateProps) => (
    <p>Query: {(parameters as { query: string }).query}</p>
);

const ResultTemplate = ({ result }: ToolCallResultTemplateProps) => (
    <p>Records returned: {(result as { count: number }).count}</p>
);

<ToolCall
    label="query_database"
    state="completed"
    parameters={parameters}
    result={result}
    paramsTemplate={ParametersTemplate}
    resultTemplate={ResultTemplate}
/>;
```

## Showing Approval Actions

For actions that require user confirmation, set [`state`](slug:api_conversational-ui_toolcallprops#state) to `'awaitingApproval'`. The component then displays a default approval block inside the expanded panel.

Set [`approvalText`](slug:api_conversational-ui_toolcallprops#approvaltext) to display a message in the default block with **Approve** and **Reject** buttons. Handle the user's decision by using [`onAction`](slug:api_conversational-ui_toolcallprops#onaction) to start an approved operation, cancel a rejected operation, and update the ToolCall state with the outcome.

The following example demonstrates the full approval lifecycle from pending through to an approved or denied outcome.

<demo metaUrl="conversational-ui/llm-kit/tool-call-approval/" height="600"></demo>

For a custom approval layout, use [`approvalTemplate`](slug:api_conversational-ui_toolcallprops#approvaltemplate) to replace the default approval message block and actions.

```tsx
const ApprovalMessage = () => <p>Review this query before it runs.</p>;

<ToolCall
    state="awaitingApproval"
    parameters={parameters}
    approvalTemplate={ApprovalMessage}
/>;
```

## Handling Errors

When a tool invocation fails, set [`state`](slug:api_conversational-ui_toolcallprops#state) to `'error'`. The component then displays an error status badge, and when you provide [`errorText`](slug:api_conversational-ui_toolcallprops#errortext), a message inside a default error block in the expanded panel. Use [`errorTemplate`](slug:api_conversational-ui_toolcallprops#errortemplate) to replace the default error content with a custom React component.

```tsx
<ToolCall
    label="query_database"
    state="error"
    errorText="Connection timeout: Unable to reach database server"
    expandable
    parameters={parameters}
/>
```

The following example demonstrates the ToolCall component transitioning from active execution to the error state.

<demo metaUrl="conversational-ui/llm-kit/tool-call-error/" height="400"></demo>

## Suggested Links

* [LLM Kit Overview](slug:overview_llmkit)
* [Checkpoint](slug:checkpoint_llmkit)
* [API Reference of the ToolCall component](slug:api_conversational-ui_toolcall)
