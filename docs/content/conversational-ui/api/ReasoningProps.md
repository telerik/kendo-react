---
title: ReasoningProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ReasoningProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_reasoningprops
---

# ReasoningProps
Defines the props for the `Reasoning` component.

`Reasoning` displays a single reasoning/explanation step with an optional
collapsible body. Body content (`children`) follows React convention;
`contentTemplate` overrides its rendering.

Extends `React.HTMLAttributes<HTMLDivElement>` to allow passing standard HTML
attributes (e.g. `className`, `style`, `id`) directly to the root element.


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### completed?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Semantic lifecycle state. `false` renders active/in-progress treatment;
`true` renders the finished, reduced-emphasis treatment.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ReasoningContentTemplateProps]({% slug api_conversational-ui_reasoningcontenttemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default body content rendering.
Receives the reasoning `children` via `ReasoningContentTemplateProps`.

```tsx
const MyContent = ({ children }: ReasoningContentTemplateProps) => <div>{children}</div>;
<Reasoning contentTemplate={MyContent}>Reasoning body text</Reasoning>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultExpanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


The initial expanded state in uncontrolled mode. Ignored when `expanded` is provided.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Whether the head exposes disclosure behavior (a toggle affordance).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the expanded state of the body in controlled mode.
Use together with `onExpandedChange`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"Reasoning"


</code>


</td>
<td class="table-cell-comment">


Summary label in the head.




```tsx
<Reasoning label="Thinking" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandedChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ReasoningExpandedChangeEvent]({% slug api_conversational-ui_reasoningexpandedchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user toggles the reasoning body.

```tsx
<Reasoning onExpandedChange={(e) => setExpanded(e.expanded)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### secondaryLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Secondary descriptive text (subtle), rendered next to `label`.
Include timing text here when needed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">


<code>


sparklesIcon


</code>


</td>
<td class="table-cell-comment">


Head icon.
Pass an icon object from `@progress/kendo-svg-icons`.





</td>
</tr>
</tbody>
</table>



