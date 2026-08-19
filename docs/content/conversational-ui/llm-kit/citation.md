---
title: Citation
description: 'Learn how to use the KendoReact Citation component to embed inline source references inside AI-generated text.'
slug: citation_llmkit
position: 5
components: ["llmkit"]
---

# LLM Kit Citation

In Retrieval-Augmented Generation (RAG)-powered applications for legal research, medical information, or financial analysis, users must be able to trace every AI claim back to a real source. Use the Citation component to connect each claim with the source that supports it.

The [Citation component](slug:api_conversational-ui_citation) embeds an inline reference chip directly inside AI-generated text. By default, hovering over the chip opens a popover with full source details for each cited resource, so readers get evidence without leaving the page.

The following example demonstrates the Citation component embedded in a text paragraph with multiple sources.

<demo metaUrl="conversational-ui/llm-kit/citation/" height="450"></demo>

## Adding Source References

Place the Citation component next to the claim that it supports so the connection between statement and evidence is clear at a glance. To populate the Citation popover, provide an array of [`CitationSource`](slug:api_conversational-ui_citationsource) objects through [`sources`](slug:api_conversational-ui_citationprops#sources). Define the [`title`](slug:api_conversational-ui_citationsource#title), [`url`](slug:api_conversational-ui_citationsource#url), and [`description`](slug:api_conversational-ui_citationsource#description) for each source.

```tsx
<p>
    The model outperformed all prior baselines on the evaluation benchmark
    <Citation sources={sources} />
    across five independent runs.
</p>
```

```tsx
const sources: CitationSource[] = [
    {
        title: 'Advances in Natural Language Processing',
        url: 'https://example.com/nlp-advances',
        description: 'A comprehensive study on recent NLP developments.'
    },
    {
        title: 'Retrieval-Augmented Generation: A Survey',
        url: 'https://arxiv.org/abs/2312.10997',
        description: 'Survey of RAG architectures and citation grounding mechanisms.'
    }
];
```

## Controlling the Popover Display

Use [`showOn`](slug:api_conversational-ui_citationprops#showon) to control how users should interact with the Citation chip to open the source popover.

By default, the popover is opened when users hover over the Citation chip. Set `showOn` to `'click'` when users require an explicit action to open source details, such as on touch devices.

```tsx
<Citation sources={sources} showOn="click" />
```

## Customizing the Citation

Use the [`bodyTemplate`](slug:api_conversational-ui_citationprops#bodytemplate) prop to replace the default source details in the popover. The custom component receives the current [`CitationSource`](slug:api_conversational-ui_citationsource), so you can control which properties appear and how they are arranged.

```tsx
const CitationBody = ({ source }: CitationBodyTemplateProps) => (
    <>
        <h6>{source.title}</h6>
        <p>{source.description}</p>
    </>
);

<Citation sources={sources} bodyTemplate={CitationBody} />;
```

Use [`svgIcon`](slug:api_conversational-ui_citationprops#svgicon) to customize the icon rendered inside the Citation chip.

```tsx
<Citation sources={sources} svgIcon={bookIcon} />
```

## Suggested Links

-   [LLM Kit Overview](slug:overview_llmkit)
-   [Checkpoint](slug:checkpoint_llmkit)
-   [API Reference of the Citation component](slug:api_conversational-ui_citation)
