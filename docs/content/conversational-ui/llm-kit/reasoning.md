---
title: Reasoning
description: 'Learn how to use the KendoReact Reasoning component to display a model thinking trace inside your agentic application.'
slug: reasoning_llmkit
position: 1
components: ["llmkit"]
---

# LLM Kit Reasoning

AI agents can take time to work through complex requests before the final answer appears. Use the Reasoning component to show that progress and give users visibility into the model's work.

The [Reasoning component](slug:api_conversational-ui_reasoning) surfaces the model's internal thinking trace in real time as a collapsible disclosure block, giving users confirmation that work is in progress and providing the transparency they need to trust the output.

The following example demonstrates the Reasoning component animating through a streaming sequence.

<demo metaUrl="conversational-ui/llm-kit/reasoning/" height="320"></demo>

## Streaming the Content

Pass the model's thinking trace as `children` and update it as the response stream arrives to give users the sense of watching the model reason in real time and provide visibility into the work behind the final answer.

When the model finishes, set [`completed`](slug:api_conversational-ui_reasoningprops#completed) to `true`. The Reasoning will then replace its shimmering effect, which indicates an in-progress state, with the completed presentation of the component.

```tsx
<Reasoning completed={!isStreaming}>
    <div>{reasoningContent}</div>
</Reasoning>
```

Use [`contentTemplate`](slug:api_conversational-ui_reasoningprops#contenttemplate) to replace the default rendering of the Reasoning body with a custom React component. The template lets you present the reasoning trace with custom markup, formatting, or supporting content.

```tsx
const ReasoningContent = ({ children }: ReasoningContentTemplateProps) => <p>{children}</p>;

<Reasoning contentTemplate={ReasoningContent}>
    Analyzing the available data sources.
</Reasoning>;
```

## Customizing the Header

Use [`label`](slug:api_conversational-ui_reasoningprops#label) to display a short description of the current activity. Additional context such as elapsed time or a model status can be included by using the [`secondaryLabel`](slug:api_conversational-ui_reasoningprops#secondarylabel) prop. Set [`svgIcon`](slug:api_conversational-ui_reasoningprops#svgicon) when you want the header to reflect your application's visual language.

```tsx
<Reasoning
    svgIcon={brainIcon}
    label={isStreaming ? 'Thinking' : 'Thought'}
    secondaryLabel={isStreaming ? undefined : elapsedTime}
/>
```

## Controlling the Expanded State

Set [`expandable`](slug:api_conversational-ui_reasoningprops#expandable) to `true` when users need to show or hide the Reasoning trace interactively. Use [`expanded`](slug:api_conversational-ui_reasoningprops#expanded) with [`onExpandedChange`](slug:api_conversational-ui_reasoningprops#onexpandedchange) to keep application state in sync with the disclosure state.

```tsx
<Reasoning expandable expanded={isStreaming} onExpandedChange={(event) => setExpanded(event.expanded)}>
    <div style={{ whiteSpace: 'pre-wrap' }}>{reasoningContent}</div>
</Reasoning>
```

## Suggested Links

* [LLM Kit Overview](slug:overview_llmkit)
* [Chain of Thought](slug:chainofthought_llmkit)
* [API Reference of the Reasoning component](slug:api_conversational-ui_reasoning)
