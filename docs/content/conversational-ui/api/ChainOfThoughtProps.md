---
title: ChainOfThoughtProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ChainOfThoughtProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_chainofthoughtprops
---

# ChainOfThoughtProps
Defines the props for the `ChainOfThought` component.

`ChainOfThought` groups an ordered sequence of `Thought` rows under one
collapsible summary.

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


Semantic lifecycle state of the group as a whole.





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


Initial expanded state in uncontrolled mode. Ignored when `expanded` is provided.





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


Whether the head exposes disclosure behavior.
An empty `thoughts` array renders as non-expandable regardless of this flag.





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


Controls whether thought rows are visible, in controlled mode.


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




</td>
<td class="table-cell-comment">


Group summary label.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linesAdded?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Number of lines added across the group.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linesRemoved?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Number of lines removed across the group.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandedChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ChainOfThoughtExpandedChangeEvent]({% slug api_conversational-ui_chainofthoughtexpandedchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user toggles the chain body.

```tsx
<ChainOfThought onExpandedChange={(e) => setExpanded(e.expanded)} />
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


Summary context, rendered next to `label`.
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


Group icon.
Pass an icon object from `@progress/kendo-svg-icons`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### thoughts?


</td>
<td type class="table-cell-type">


<code>


[Thought]({% slug api_conversational-ui_thought %})[]


</code>


</td>
<td class="table-cell-default">


<code>


[]


</code>


</td>
<td class="table-cell-comment">


The ordered list of thought rows rendered inside the body.




```tsx
const thoughts: Thought[] = [{ label: 'Read', content: 'Read package.json' }];
<ChainOfThought thoughts={thoughts} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### thoughtTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ThoughtTemplateProps]({% slug api_conversational-ui_thoughttemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default rendering of each `Thought` row.
Receives the `Thought` item and its index via `ThoughtTemplateProps`.

```tsx
const MyThought = ({ thought }: ThoughtTemplateProps) => <div>{thought.label}</div>;
<ChainOfThought thoughts={thoughts} thoughtTemplate={MyThought} />
```



</td>
</tr>
</tbody>
</table>



