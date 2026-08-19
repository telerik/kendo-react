---
title: Chain of Thought
description: 'Learn how to use the KendoReact ChainOfThought component to display an ordered sequence of AI agent reasoning steps.'
slug: chainofthought_llmkit
position: 2
components: ["llmkit"]
---

# LLM Kit Chain of Thought

When an agent takes multiple steps to answer a question&mdash;searching the web, analyzing documents, or querying a database&mdash;a single reasoning block cannot show how the work is structured in detail. Use the ChainOfThought component to make each operation visible in sequence.

The [ChainOfThought component](slug:api_conversational-ui_chainofthought) renders each operation as a named row under one collapsible header. This format helps users follow the sequence of the agent's work and gives you control over how each step appears.

The following example demonstrates the ChainOfThought component displaying a step-by-step sequence of operations.

<demo metaUrl="conversational-ui/llm-kit/chain-of-thought/" height="350"></demo>

## Rendering Thought Rows

The [`thoughts`](slug:api_conversational-ui_chainofthoughtprops#thoughts) prop accepts an ordered array of [`Thought`](slug:api_conversational-ui_thought) objects. Add a new thought when its operation starts, then update its [`label`](slug:api_conversational-ui_thought#label) and [`completed`](slug:api_conversational-ui_thought#completed) values as the operation progresses.

Each thought can include supporting context through [`secondaryLabel`](slug:api_conversational-ui_thought#secondarylabel), detailed output through [`content`](slug:api_conversational-ui_thought#content), and an operation icon through [`svgIcon`](slug:api_conversational-ui_thought#svgicon).

```tsx ChainOfThought
<ChainOfThought
    svgIcon={brainIcon}
    label="Thought"
    secondaryLabel="for 6.0s"
    thoughts={thoughts}
    expandable
/>
```
```tsx Thoughts
const thoughts: Thought[] = [
    { label: 'Analyzing query intent', content: null, svgIcon: searchIcon, completed: true },
    {
        label: 'Selecting relevant tables',
        content: null,
        secondaryLabel: '3 found',
        svgIcon: tableIcon,
        completed: true
    },
    { label: 'Building SQL query', content: 'GROUP BY customer_name ORDER BY total DESC', svgIcon: codeIcon }
];
```

The component-level [`label`](slug:api_conversational-ui_chainofthoughtprops#label) and [`secondaryLabel`](slug:api_conversational-ui_chainofthoughtprops#secondarylabel) props describe the chain as a whole. Use them for a concise summary that remains visible when the thought rows are collapsed.

## Showing Chain Progress

After the final operation completes, set [`completed`](slug:api_conversational-ui_chainofthoughtprops#completed) to `true`. The header then replaces its in-progress shimmering effect with the completed presentation.

For coding workflows, [`linesAdded`](slug:api_conversational-ui_chainofthoughtprops#linesadded) and [`linesRemoved`](slug:api_conversational-ui_chainofthoughtprops#linesremoved) expose diff counters directly in the header so reviewers can see the scope of a change at a glance. Leave these props unset for workflows that do not report line changes.

Use [`expanded`](slug:api_conversational-ui_chainofthoughtprops#expanded) with [`onExpandedChange`](slug:api_conversational-ui_chainofthoughtprops#onexpandedchange) when application state needs to control the disclosure of the chain.

```tsx
<ChainOfThought
    thoughts={thoughts}
    completed={isComplete}
    linesAdded={12}
    linesRemoved={3}
    expanded={isExpanded}
    onExpandedChange={(event) => setIsExpanded(event.expanded)}
/>
```

## Customizing the Thoughts

If the default row layout does not suit your needs, you can provide a custom template for each [`Thought`](slug:api_conversational-ui_thought) item. The [`thoughtTemplate`](slug:api_conversational-ui_chainofthoughtprops#thoughttemplate) prop accepts a React component that receives each thought's data via [`ThoughtTemplateProps`](slug:api_conversational-ui_thoughttemplateprops), giving you full control over the presentation of the reasoning process.

The following example demonstrates a custom template that includes a color-coded kind pill, the tool name, and the execution duration for each step in the chain of thought.

<demo metaUrl="conversational-ui/llm-kit/chain-of-thought-custom-template/" height="470"></demo>

## Suggested Links

* [LLM Kit Overview](slug:overview_llmkit)
* [Reasoning](slug:reasoning_llmkit)
* [API Reference of the ChainOfThought component](slug:api_conversational-ui_chainofthought)
